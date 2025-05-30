class PhilosophyGraphApp {
    constructor() {
        this.graphData = null;
        this.network = null;
        this.nodes = null;
        this.edges = null;
        this.timelineChart = null;
        this.filteredNodes = null;
        this.filteredEdges = null;
        
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.setupGraph();
            this.setupControls();
            this.setupChart();
            this.updateStatistics();
            this.updateTopPhilosophers();
        } catch (error) {
            console.error('Failed to initialize application:', error);
            this.showError('Failed to load data. Please try again.');
        }
    }

    async loadData() {
        const response = await fetch('https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/2b729daf07fa2cfd2c8251733bf267e7/98ec60b5-92cf-4372-90cf-3a6db5918791/3ec69f54.json');
        this.graphData = await response.json();
        
        // Process nodes for vis.js
        const processedNodes = this.graphData.nodes.map(node => ({
            id: node.id,
            label: node.label,
            type: node.type,
            size: node.size || 20,
            color: node.type === 'philosopher' ? '#1FB8CD' : '#FFC185',
            shape: node.type === 'philosopher' ? 'circle' : 'square',
            font: { color: '#134252', size: 12 },
            borderWidth: 2,
            borderColor: node.type === 'philosopher' ? '#0da6b8' : '#e6a96b',
            // Store all original node data
            originalData: node
        }));

        // Process edges for vis.js
        const processedEdges = this.graphData.edges.map(edge => ({
            from: edge.from,
            to: edge.to,
            color: { color: '#626c71', opacity: 0.6 },
            width: edge.weight || 1,
            smooth: { type: 'continuous' },
            ...edge
        }));

        this.nodes = new vis.DataSet(processedNodes);
        this.edges = new vis.DataSet(processedEdges);
        this.filteredNodes = new vis.DataSet(processedNodes);
        this.filteredEdges = new vis.DataSet(processedEdges);
    }

    setupGraph() {
        const container = document.getElementById('networkGraph');
        const data = {
            nodes: this.filteredNodes,
            edges: this.filteredEdges
        };

        const options = {
            physics: {
                enabled: true,
                stabilization: { iterations: 100 },
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09
                }
            },
            interaction: {
                hover: true,
                tooltipDelay: 200,
                hideEdgesOnDrag: true,
                hideEdgesOnZoom: true
            },
            nodes: {
                chosen: {
                    node: (values, id, selected, hovering) => {
                        values.borderWidth = selected || hovering ? 3 : 2;
                        values.shadow = selected || hovering;
                    }
                }
            },
            edges: {
                chosen: {
                    edge: (values, id, selected, hovering) => {
                        values.width = selected || hovering ? 3 : 1;
                    }
                }
            }
        };

        this.network = new vis.Network(container, data, options);
        this.setupNetworkEvents();
    }

    setupNetworkEvents() {
        this.network.on('click', (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                this.displayNodeDetails(nodeId);
            } else {
                // Clear details if clicking on empty space
                this.clearNodeDetails();
            }
        });

        this.network.on('hoverNode', (params) => {
            document.body.style.cursor = 'pointer';
        });

        this.network.on('blurNode', () => {
            document.body.style.cursor = 'default';
        });
    }

    setupControls() {
        // Node type filters
        document.getElementById('showPhilosophers').addEventListener('change', () => this.applyFilters());
        document.getElementById('showArticles').addEventListener('change', () => this.applyFilters());

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchNodes(e.target.value);
        });

        // Date range
        document.getElementById('dateRange').addEventListener('input', (e) => {
            this.filterByDate(e.target.value);
        });

        // Layout options
        document.getElementById('layoutSelect').addEventListener('change', (e) => {
            this.changeLayout(e.target.value);
        });

        // Physics toggle
        document.getElementById('physicsToggle').addEventListener('change', (e) => {
            this.network.setOptions({ physics: { enabled: e.target.checked } });
        });
    }

    applyFilters() {
        const showPhilosophers = document.getElementById('showPhilosophers').checked;
        const showArticles = document.getElementById('showArticles').checked;

        let filteredNodes = this.nodes.get().filter(node => {
            if (node.type === 'philosopher' && !showPhilosophers) return false;
            if (node.type === 'article' && !showArticles) return false;
            return true;
        });

        // Filter edges to only include connections between visible nodes
        const visibleNodeIds = new Set(filteredNodes.map(n => n.id));
        let filteredEdges = this.edges.get().filter(edge => 
            visibleNodeIds.has(edge.from) && visibleNodeIds.has(edge.to)
        );

        this.filteredNodes.clear();
        this.filteredEdges.clear();
        this.filteredNodes.add(filteredNodes);
        this.filteredEdges.add(filteredEdges);

        this.updateStatistics();
    }

    searchNodes(query) {
        if (!query.trim()) {
            this.applyFilters();
            return;
        }

        const lowerQuery = query.toLowerCase();
        let matchingNodes = this.nodes.get().filter(node => 
            node.label.toLowerCase().includes(lowerQuery) ||
            (node.originalData && node.originalData.fullTitle && 
             node.originalData.fullTitle.toLowerCase().includes(lowerQuery))
        );

        // Get all connected nodes
        const matchingNodeIds = new Set(matchingNodes.map(n => n.id));
        const connectedEdges = this.edges.get().filter(edge => 
            matchingNodeIds.has(edge.from) || matchingNodeIds.has(edge.to)
        );

        connectedEdges.forEach(edge => {
            matchingNodeIds.add(edge.from);
            matchingNodeIds.add(edge.to);
        });

        const allNodes = this.nodes.get();
        const finalNodes = allNodes.filter(node => matchingNodeIds.has(node.id));

        this.filteredNodes.clear();
        this.filteredEdges.clear();
        this.filteredNodes.add(finalNodes);
        this.filteredEdges.add(connectedEdges);

        // Highlight matching nodes
        this.network.selectNodes(matchingNodes.map(n => n.id));
    }

    filterByDate(value) {
        const percentage = parseInt(value) / 100;
        const stats = this.graphData.statistics;
        
        if (!stats.dateRange) {
            return;
        }

        const startDate = new Date(stats.dateRange.start);
        const endDate = new Date(stats.dateRange.end);
        const totalDays = endDate - startDate;
        const cutoffDate = new Date(startDate.getTime() + (totalDays * percentage));

        let filteredNodes = this.nodes.get().filter(node => {
            if (node.type !== 'article') return true;
            const nodeData = node.originalData || node;
            return new Date(nodeData.date) <= cutoffDate;
        });

        const visibleNodeIds = new Set(filteredNodes.map(n => n.id));
        let filteredEdges = this.edges.get().filter(edge => 
            visibleNodeIds.has(edge.from) && visibleNodeIds.has(edge.to)
        );

        this.filteredNodes.clear();
        this.filteredEdges.clear();
        this.filteredNodes.add(filteredNodes);
        this.filteredEdges.add(filteredEdges);

        // Update date display
        document.getElementById('dateEnd').textContent = cutoffDate.toISOString().slice(0, 7);
    }

    changeLayout(layoutType) {
        let layoutOptions = {};

        switch (layoutType) {
            case 'hierarchical':
                layoutOptions = {
                    layout: {
                        hierarchical: {
                            enabled: true,
                            direction: 'UD',
                            sortMethod: 'directed'
                        }
                    }
                };
                break;
            case 'circular':
                layoutOptions = {
                    layout: {
                        hierarchical: { enabled: false }
                    },
                    physics: {
                        enabled: false
                    }
                };
                // Position nodes in circle
                const nodes = this.filteredNodes.get();
                const radius = 300;
                const angleStep = (2 * Math.PI) / nodes.length;
                
                nodes.forEach((node, index) => {
                    const angle = index * angleStep;
                    node.x = radius * Math.cos(angle);
                    node.y = radius * Math.sin(angle);
                    node.fixed = { x: true, y: true };
                });
                
                this.filteredNodes.update(nodes);
                break;
            default:
                layoutOptions = {
                    layout: {
                        hierarchical: { enabled: false }
                    },
                    physics: {
                        enabled: document.getElementById('physicsToggle').checked
                    }
                };
                // Remove fixed positions
                const freeNodes = this.filteredNodes.get();
                freeNodes.forEach(node => {
                    delete node.x;
                    delete node.y;
                    delete node.fixed;
                });
                this.filteredNodes.update(freeNodes);
        }

        this.network.setOptions(layoutOptions);
    }

    displayNodeDetails(nodeId) {
        const node = this.nodes.get(nodeId);
        if (!node) return;

        const nodeData = node.originalData || node;
        const detailsContainer = document.getElementById('nodeDetails');
        
        if (node.type === 'philosopher') {
            detailsContainer.innerHTML = `
                <div class="node-type-badge node-type-badge--philosopher">Philosopher</div>
                <div class="detail-title">${node.label}</div>
                <div class="detail-item">
                    <div class="detail-label">Articles</div>
                    <div class="detail-value">${nodeData.articles || 0}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Connections</div>
                    <div class="detail-value">${nodeData.connections || 0}</div>
                </div>
                ${this.getConnectedNodes(nodeId)}
            `;
        } else if (node.type === 'article') {
            const date = nodeData.date ? new Date(nodeData.date).toLocaleDateString() : 'Unknown';
            detailsContainer.innerHTML = `
                <div class="node-type-badge node-type-badge--article">Article</div>
                <div class="detail-title">${node.label}</div>
                ${nodeData.subtitle ? `<div class="detail-subtitle">${nodeData.subtitle}</div>` : ''}
                <div class="detail-date">Published: ${date}</div>
                <div class="detail-item">
                    <div class="detail-label">Philosophers</div>
                    <div class="detail-value">${nodeData.philosopherCount || 0}</div>
                </div>
                ${this.getConnectedNodes(nodeId)}
            `;
        }
    }

    clearNodeDetails() {
        const detailsContainer = document.getElementById('nodeDetails');
        detailsContainer.innerHTML = '<p class="placeholder-text">Click on a node to see details</p>';
    }

    getConnectedNodes(nodeId) {
        const connectedEdges = this.edges.get().filter(edge => 
            edge.from === nodeId || edge.to === nodeId
        );
        
        const connectedNodeIds = connectedEdges.map(edge => 
            edge.from === nodeId ? edge.to : edge.from
        );
        
        const connectedNodes = this.nodes.get(connectedNodeIds);
        
        if (connectedNodes.length === 0) {
            return '<div class="detail-item"><div class="detail-label">Connected Nodes</div><div class="detail-value">None</div></div>';
        }

        const nodesList = connectedNodes.map(node => 
            `<div class="connected-item">${node.label}</div>`
        ).join('');

        return `
            <div class="detail-item">
                <div class="detail-label">Connected Nodes</div>
                <div class="connected-list">${nodesList}</div>
            </div>
        `;
    }

    setupChart() {
        const ctx = document.getElementById('timelineChart').getContext('2d');
        
        if (!this.graphData.timelineData) {
            return;
        }

        this.timelineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.graphData.timelineData.map(d => d.month),
                datasets: [{
                    label: 'Articles Published',
                    data: this.graphData.timelineData.map(d => d.count),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45
                        }
                    }
                }
            }
        });
    }

    updateStatistics() {
        const visibleNodes = this.filteredNodes.get();
        const visibleEdges = this.filteredEdges.get();
        
        const philosopherCount = visibleNodes.filter(n => n.type === 'philosopher').length;
        const articleCount = visibleNodes.filter(n => n.type === 'article').length;
        
        document.getElementById('statPhilosophers').textContent = philosopherCount;
        document.getElementById('statArticles').textContent = articleCount;
        document.getElementById('statConnections').textContent = visibleEdges.length;
    }

    updateTopPhilosophers() {
        if (!this.graphData.topPhilosophers) {
            return;
        }

        const listContainer = document.getElementById('topPhilosophersList');
        listContainer.innerHTML = this.graphData.topPhilosophers.slice(0, 5).map(phil => `
            <div class="top-item" onclick="app.searchNodes('${phil.name}')">
                <div class="top-item-name">${phil.name}</div>
                <div class="top-item-stats">${phil.articles} articles, ${phil.connections} connections</div>
            </div>
        `).join('');
    }

    showError(message) {
        const graphContainer = document.getElementById('networkGraph');
        graphContainer.innerHTML = `
            <div class="loading">
                <p>Error: ${message}</p>
            </div>
        `;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PhilosophyGraphApp();
});