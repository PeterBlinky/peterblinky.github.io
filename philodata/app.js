// Application data and state
const data = [
  {
    "post_id": "164666534",
    "post_date": "2025-05-28T19:47:38.323Z",
    "is_published": true,
    "title": "Deep Heart, Clear Mirror",
    "subtitle": "Nighttime with False Mirrors: Dreams from the Future",
    "type": "newsletter",
    "philosophers": ["Dan Zahavi", "Myisha Cherry", "Audre Lorde"]
  },
  {
    "post_id": "164398753",
    "post_date": "2025-05-25T10:53:14.738Z",
    "is_published": true,
    "title": "On Whose Logic Counts",
    "subtitle": "The Metabolic Economy of Meaning",
    "type": "newsletter",
    "philosophers": ["Herbert Simon", "Gerd Gigerenzer", "Ruth Chang"]
  },
  {
    "post_id": "164015292",
    "post_date": "2025-05-22T11:47:15.312Z",
    "is_published": true,
    "title": "Woods Burner: Think before you click",
    "subtitle": "Digital Walden Ponds",
    "type": "newsletter",
    "philosophers": ["Henry David Thoreau", "Byung-Chul Han", "Jane Bennett"]
  },
  {
    "post_id": "163857622",
    "post_date": "2025-05-18T16:52:01.098Z",
    "is_published": true,
    "title": "Does feeling pain make us human?",
    "subtitle": "Painlessness creates a unique form of absence",
    "type": "newsletter",
    "philosophers": ["Clarice Lispector", "Dostoyevsky"]
  },
  {
    "post_id": "163730554",
    "post_date": "2025-05-16T20:35:18.440Z",
    "is_published": true,
    "title": "Where do you pause, uncertain what follows?",
    "subtitle": "Trust in Problems Over Solutions",
    "type": "newsletter",
    "philosophers": ["Ursula K. Le Guin", "Thomas Nagel"]
  },
  {
    "post_id": "163319137",
    "post_date": "2025-05-11T15:37:51.492Z",
    "is_published": true,
    "title": "There are times when we must rebel",
    "subtitle": "How do we create a big change without taking on a tyrant's behavior?",
    "type": "newsletter",
    "philosophers": ["Albert Camus", "Frantz Fanon"]
  },
  {
    "post_id": "162996761",
    "post_date": "2025-05-07T16:57:51.287Z",
    "is_published": true,
    "title": "When Data Controls You",
    "subtitle": "a study in hysteresis: Transparency and opacity",
    "type": "newsletter",
    "philosophers": ["William Faulkner", "Pierre Bourdieu"]
  },
  {
    "post_id": "162624359",
    "post_date": "2025-05-01T17:50:30.111Z",
    "is_published": true,
    "title": "Algorithmic Ennui & The Politics of Boredom",
    "subtitle": "Crystal-Clear Hearts: Phenomenology of Glass, Concrete, and Pixel",
    "type": "newsletter",
    "philosophers": ["Michelangelo Antonioni"]
  },
  {
    "post_id": "162399511",
    "post_date": "2025-04-29T16:34:27.628Z",
    "is_published": true,
    "title": "You just have to stop letting them control you",
    "subtitle": "Frequent Philosophical Discussions = Better Mental Health?",
    "type": "newsletter",
    "philosophers": ["Leonard Cohen", "Albert Ellis", "Aaron Beck", "Viktor Frankl", "Dan Millman"]
  },
  {
    "post_id": "160922307",
    "post_date": "2025-04-09T09:40:25.886Z",
    "is_published": true,
    "title": "The Flight From Pain to Ennui",
    "subtitle": "The Contemplative Economy: The Missing Ingredient",
    "type": "newsletter",
    "philosophers": ["Immanuel Kant", "Arthur Schopenhauer", "Plato", "Georg Wilhelm Friedrich Hegel", "Marcel Proust", "Hans-Georg Gadamer"]
  },
  {
    "post_id": "160424973",
    "post_date": "2025-04-02T16:45:43.118Z",
    "is_published": true,
    "title": "There is a certain beauty in chaos",
    "subtitle": "Aesthetic Friction: The Beauty of Resistance",
    "type": "newsletter",
    "philosophers": ["Thucydides", "Niccolò Machiavelli", "Thomas Hobbes", "Woodrow Wilson", "Graham Allison"]
  },
  {
    "post_id": "160280411",
    "post_date": "2025-03-31T19:30:05.235Z",
    "is_published": true,
    "title": "What We Cannot Touch",
    "subtitle": "where mind and reality meet",
    "type": "newsletter",
    "philosophers": ["Epicurus", "Blaise Pascal", "Zhuangzi", "Plotinus", "Simone Weil"]
  },
  {
    "post_id": "160127332",
    "post_date": "2025-03-29T13:42:20.065Z",
    "is_published": true,
    "title": "You are made and remade all the time",
    "subtitle": "Trump's approach creates a perpetual present",
    "type": "newsletter",
    "philosophers": ["Aristotle", "Daniel Goleman", "Lisa Feldman Barrett"]
  },
  {
    "post_id": "157681517",
    "post_date": "2025-02-22T15:43:12.124Z",
    "is_published": true,
    "title": "Hyper-Rational Society descends into Absurdity",
    "subtitle": "Emotional Contraband in Surveillance Capitalism",
    "type": "podcast",
    "philosophers": ["Jean-Luc Godard"]
  },
  {
    "post_id": "157449551",
    "post_date": "2025-02-19T10:53:22.879Z",
    "is_published": true,
    "title": "Reasonable worlds are built with verbs, not nouns",
    "subtitle": "Identity as Performance",
    "type": "newsletter",
    "philosophers": ["Oscar Wilde", "Maya Angelou", "Friedrich Dürrenmatt"]
  },
  {
    "post_id": "159260002",
    "post_date": "2025-03-17T16:04:14.571Z",
    "is_published": true,
    "title": "Disciplinary power produces docile bodies; psychopolitics produces docile psyches",
    "subtitle": "The Invisible Cruelty of Kindness",
    "type": "newsletter",
    "philosophers": ["Noam Chomsky", "Michel Foucault"]
  },
  {
    "post_id": "157244852",
    "post_date": "2025-02-16T12:29:16.177Z",
    "is_published": true,
    "title": "We are bridges swaying between islands",
    "subtitle": "No Grand Problem, Only Little Ones: The Beauty of the Incomplete",
    "type": "newsletter",
    "philosophers": ["René Descartes", "John Collins", "Isaac Newton", "David Hume", "Immanuel Kant"]
  },
  {
    "post_id": "149248362",
    "post_date": "2024-09-22T15:06:31.427Z",
    "is_published": true,
    "title": "Fear of freedom",
    "subtitle": "Pedagogy of Oppressed",
    "type": "podcast",
    "philosophers": ["Paulo Freire"]
  },
  {
    "post_id": "148497036",
    "post_date": "2024-09-04T16:24:56.987Z",
    "is_published": true,
    "title": "Null Resonance",
    "subtitle": "When the Universe Stops Answering Back",
    "type": "newsletter",
    "philosophers": ["Hartmut Rosa"]
  },
  {
    "post_id": "153304660",
    "post_date": "2024-12-18T11:06:58.741Z",
    "is_published": true,
    "title": "CEO Killing & Transparency: Unseen Wounds",
    "subtitle": "The CEO corridors of moral emptiness in our entangled systems",
    "type": "newsletter",
    "philosophers": ["Byung-Chul Han", "Rousseau", "Barthes", "Kracauer", "Heidegger", "Luhmann"]
  }
];

// Global variables
let svg, g, simulation, nodes, links, nodeElements, linkElements, labelElements;
let tooltip, sidePanel;
let width, height;
let currentLayout = 'force';
let isPlaying = false;
let animationTimer;
let currentTimelineValue = 100;
let filteredData = [...data];
let graphData = { nodes: [], links: [] };

// Color scheme
const colors = {
  philosopher: '#1FB8CD',
  article: '#FFC185',
  link: '#5E5240'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing application...');
  setTimeout(() => {
    initializeGraph();
    setupEventListeners();
    processData();
    updateGraph();
    updateStats();
    console.log('Application initialized');
  }, 100);
});

function initializeGraph() {
  console.log('Initializing graph...');
  const container = document.querySelector('.graph-container');
  width = container.clientWidth;
  height = container.clientHeight;

  svg = d3.select('#graph-svg')
    .attr('width', width)
    .attr('height', height);

  // Add zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', handleZoom);

  svg.call(zoom);

  // Create main group for all graph elements
  g = svg.append('g');

  // Initialize tooltip
  tooltip = d3.select('#tooltip');

  // Initialize side panel
  sidePanel = document.getElementById('side-panel');

  // Initialize simulation
  simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => d.type === 'philosopher' ? 30 : 25))
    .on('tick', ticked);

  console.log('Graph initialized');
}

function handleZoom(event) {
  g.attr('transform', event.transform);
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Search functionality
  document.getElementById('search').addEventListener('input', handleSearch);

  // Filter controls
  document.getElementById('type-filter').addEventListener('change', handleTypeFilter);
  document.getElementById('layout-select').addEventListener('change', handleLayoutChange);

  // Timeline controls
  document.getElementById('timeline-slider').addEventListener('input', handleTimelineChange);
  document.getElementById('play-btn').addEventListener('click', playTimeline);
  document.getElementById('pause-btn').addEventListener('click', pauseTimeline);
  document.getElementById('reset-timeline').addEventListener('click', resetTimeline);

  // Side panel controls
  document.getElementById('close-panel').addEventListener('click', closeSidePanel);

  // Reset zoom button
  document.getElementById('reset-zoom').addEventListener('click', resetZoom);

  // Window resize
  window.addEventListener('resize', handleResize);
}

function processData() {
  console.log('Processing data...');
  const philosopherMap = new Map();
  const articleNodes = [];
  const links = [];

  // Sort data by date for timeline
  const sortedData = [...filteredData].sort((a, b) => new Date(a.post_date) - new Date(b.post_date));

  sortedData.forEach(article => {
    // Create article node
    const articleNode = {
      id: `article-${article.post_id}`,
      type: 'article',
      title: article.title,
      subtitle: article.subtitle,
      date: new Date(article.post_date),
      articleType: article.type,
      philosophers: article.philosophers,
      connections: article.philosophers.length
    };
    articleNodes.push(articleNode);

    // Process philosophers
    article.philosophers.forEach(philosopherName => {
      if (!philosopherMap.has(philosopherName)) {
        philosopherMap.set(philosopherName, {
          id: `philosopher-${philosopherName}`,
          type: 'philosopher',
          name: philosopherName,
          articles: [],
          connections: 0
        });
      }

      const philosopher = philosopherMap.get(philosopherName);
      philosopher.articles.push(articleNode);
      philosopher.connections++;

      // Create link
      links.push({
        source: philosopher.id,
        target: articleNode.id,
        date: articleNode.date
      });
    });
  });

  // Convert philosopher map to array
  const philosopherNodes = Array.from(philosopherMap.values());

  // Combine all nodes
  const allNodes = [...philosopherNodes, ...articleNodes];

  graphData = {
    nodes: allNodes,
    links: links
  };

  console.log(`Processed ${philosopherNodes.length} philosophers and ${articleNodes.length} articles`);
}

function updateGraph() {
  console.log('Updating graph...');
  
  // Filter nodes and links based on timeline
  const timelineDate = getTimelineDate();
  const visibleNodes = graphData.nodes.filter(node => {
    if (node.type === 'philosopher') {
      return node.articles.some(article => article.date <= timelineDate);
    }
    return node.date <= timelineDate;
  });

  const visibleLinks = graphData.links.filter(link => link.date <= timelineDate);

  // Update simulation data
  nodes = visibleNodes;
  links = visibleLinks;

  console.log(`Showing ${nodes.length} nodes and ${links.length} links`);

  // Update links
  linkElements = g.selectAll('.link')
    .data(links, d => `${d.source.id || d.source}-${d.target.id || d.target}`);

  linkElements.exit().remove();

  linkElements = linkElements.enter()
    .append('line')
    .attr('class', 'link')
    .attr('stroke', colors.link)
    .attr('stroke-width', 2)
    .attr('opacity', 0.6)
    .merge(linkElements);

  // Update nodes
  nodeElements = g.selectAll('.node')
    .data(nodes, d => d.id);

  nodeElements.exit().remove();

  const nodeEnter = nodeElements.enter()
    .append('circle')
    .attr('class', 'node')
    .attr('r', d => {
      const baseSize = d.type === 'philosopher' ? 12 : 8;
      const sizeMultiplier = Math.min(d.connections / 2, 5);
      return baseSize + sizeMultiplier;
    })
    .attr('fill', d => colors[d.type])
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .on('mouseover', function(event, d) {
      showTooltip(event, d);
      d3.select(this).attr('stroke', colors.philosopher).attr('stroke-width', 3);
    })
    .on('mouseout', function(event, d) {
      hideTooltip();
      d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
    })
    .on('click', handleNodeClick)
    .call(d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

  nodeElements = nodeEnter.merge(nodeElements);

  // Update labels
  labelElements = g.selectAll('.node-label')
    .data(nodes, d => d.id);

  labelElements.exit().remove();

  const labelEnter = labelElements.enter()
    .append('text')
    .attr('class', 'node-label')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('font-size', '10px')
    .attr('fill', '#333')
    .attr('pointer-events', 'none')
    .text(d => {
      if (d.type === 'philosopher') {
        return d.name.length > 15 ? d.name.substring(0, 15) + '...' : d.name;
      }
      return d.title.length > 20 ? d.title.substring(0, 20) + '...' : d.title;
    });

  labelElements = labelEnter.merge(labelElements);

  // Apply layout
  applyLayout();

  // Update simulation
  simulation.nodes(nodes);
  simulation.force('link').links(links);
  simulation.alpha(1).restart();

  // Update visible articles count
  const visibleArticles = nodes.filter(n => n.type === 'article').length;
  document.getElementById('visible-articles').textContent = 
    `${visibleArticles} of ${graphData.nodes.filter(n => n.type === 'article').length} articles visible`;
}

function applyLayout() {
  if (currentLayout === 'circular') {
    applyCircularLayout();
  } else if (currentLayout === 'hierarchical') {
    applyHierarchicalLayout();
  } else {
    clearFixedPositions();
  }
}

function applyCircularLayout() {
  const philosophers = nodes.filter(n => n.type === 'philosopher');
  const articles = nodes.filter(n => n.type === 'article');
  
  const centerX = width / 2;
  const centerY = height / 2;
  const philosopherRadius = Math.min(width, height) * 0.3;
  const articleRadius = Math.min(width, height) * 0.15;

  philosophers.forEach((node, i) => {
    const angle = (i / philosophers.length) * 2 * Math.PI;
    node.fx = centerX + Math.cos(angle) * philosopherRadius;
    node.fy = centerY + Math.sin(angle) * philosopherRadius;
  });

  articles.forEach((node, i) => {
    const angle = (i / articles.length) * 2 * Math.PI;
    node.fx = centerX + Math.cos(angle) * articleRadius;
    node.fy = centerY + Math.sin(angle) * articleRadius;
  });
}

function applyHierarchicalLayout() {
  const philosophers = nodes.filter(n => n.type === 'philosopher');
  const articles = nodes.filter(n => n.type === 'article');
  
  philosophers.forEach((node, i) => {
    node.fx = width / 4;
    node.fy = (i + 1) * (height / (philosophers.length + 1));
  });

  articles.forEach((node, i) => {
    node.fx = 3 * width / 4;
    node.fy = (i + 1) * (height / (articles.length + 1));
  });
}

function clearFixedPositions() {
  nodes.forEach(node => {
    node.fx = null;
    node.fy = null;
  });
}

// Event handlers
function handleSearch() {
  const searchTerm = this.value.toLowerCase();
  
  nodeElements.style('opacity', node => {
    if (!searchTerm) return 1;
    
    const searchableText = node.type === 'philosopher' 
      ? node.name.toLowerCase()
      : `${node.title} ${node.subtitle}`.toLowerCase();
    
    return searchableText.includes(searchTerm) ? 1 : 0.2;
  });

  labelElements.style('opacity', node => {
    if (!searchTerm) return 1;
    
    const searchableText = node.type === 'philosopher' 
      ? node.name.toLowerCase()
      : `${node.title} ${node.subtitle}`.toLowerCase();
    
    return searchableText.includes(searchTerm) ? 1 : 0.2;
  });
}

function handleTypeFilter() {
  const selectedType = this.value;
  
  if (selectedType === 'all') {
    filteredData = [...data];
  } else {
    filteredData = data.filter(article => article.type === selectedType);
  }
  
  processData();
  updateGraph();
  updateStats();
}

function handleLayoutChange() {
  currentLayout = this.value;
  clearFixedPositions();
  applyLayout();
  simulation.alpha(1).restart();
}

function handleTimelineChange() {
  currentTimelineValue = parseInt(this.value);
  updateCurrentDateDisplay();
  updateGraph();
}

function handleNodeClick(event, d) {
  event.stopPropagation();
  
  // Clear previous selections
  nodeElements.classed('selected', false);
  
  // Select clicked node
  d3.select(this).classed('selected', true);
  
  showNodeDetails(d);
}

function showNodeDetails(node) {
  const panel = document.getElementById('side-panel');
  const title = document.getElementById('panel-title');
  const content = document.getElementById('panel-content');
  
  if (node.type === 'philosopher') {
    title.textContent = node.name;
    content.innerHTML = `
      <div class="detail-content">
        <div class="detail-section">
          <h4>Statistics</h4>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-label">Articles:</span>
              <span class="stat-value">${node.articles.length}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Connections:</span>
              <span class="stat-value">${node.connections}</span>
            </div>
          </div>
        </div>
        <div class="detail-section">
          <h4>Featured In</h4>
          <div class="detail-list">
            ${node.articles.map(article => `
              <div class="article-item" onclick="searchForPhilosopher('${article.title}')">
                <div class="article-title">${article.title}</div>
                <div class="article-meta">${article.date.toLocaleDateString()} • ${article.articleType}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else {
    title.textContent = node.title;
    content.innerHTML = `
      <div class="detail-content">
        <div class="detail-section">
          <h4>Article Details</h4>
          <p><strong>Subtitle:</strong> ${node.subtitle}</p>
          <p><strong>Date:</strong> ${node.date.toLocaleDateString()}</p>
          <p><strong>Type:</strong> ${node.articleType}</p>
        </div>
        <div class="detail-section">
          <h4>Featured Philosophers</h4>
          <ul class="detail-list">
            ${node.philosophers.map(philosopher => `
              <li onclick="searchForPhilosopher('${philosopher}')">${philosopher}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  panel.classList.add('visible');
}

function searchForPhilosopher(name) {
  document.getElementById('search').value = name;
  handleSearch.call(document.getElementById('search'));
  closeSidePanel();
}

function closeSidePanel() {
  sidePanel.classList.remove('visible');
  nodeElements.classed('selected', false);
}

// Timeline functions
function getTimelineDate() {
  const minDate = new Date('2024-09-01');
  const maxDate = new Date('2025-05-30');
  const progress = currentTimelineValue / 100;
  
  return new Date(minDate.getTime() + progress * (maxDate.getTime() - minDate.getTime()));
}

function updateCurrentDateDisplay() {
  const currentDate = getTimelineDate();
  document.getElementById('current-date').textContent = 
    currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function playTimeline() {
  if (isPlaying) return;
  
  isPlaying = true;
  document.getElementById('play-btn').classList.add('hidden');
  document.getElementById('pause-btn').classList.remove('hidden');
  
  animationTimer = setInterval(() => {
    currentTimelineValue += 2;
    
    if (currentTimelineValue >= 100) {
      currentTimelineValue = 100;
      pauseTimeline();
    }
    
    document.getElementById('timeline-slider').value = currentTimelineValue;
    updateCurrentDateDisplay();
    updateGraph();
  }, 200);
}

function pauseTimeline() {
  isPlaying = false;
  document.getElementById('play-btn').classList.remove('hidden');
  document.getElementById('pause-btn').classList.add('hidden');
  
  if (animationTimer) {
    clearInterval(animationTimer);
  }
}

function resetTimeline() {
  pauseTimeline();
  currentTimelineValue = 100;
  document.getElementById('timeline-slider').value = currentTimelineValue;
  updateCurrentDateDisplay();
  updateGraph();
}

function resetZoom() {
  svg.transition().duration(750).call(
    d3.zoom().transform,
    d3.zoomIdentity
  );
}

function updateStats() {
  const philosophers = new Set();
  filteredData.forEach(article => {
    article.philosophers.forEach(p => philosophers.add(p));
  });
  
  document.getElementById('total-philosophers').textContent = philosophers.size;
  document.getElementById('total-articles').textContent = filteredData.length;
  document.getElementById('total-connections').textContent = 
    filteredData.reduce((sum, article) => sum + article.philosophers.length, 0);
}

// Tooltip functions
function showTooltip(event, d) {
  const tooltipContent = d.type === 'philosopher' 
    ? `<strong>${d.name}</strong><br>Articles: ${d.connections}`
    : `<strong>${d.title}</strong><br>${d.subtitle}<br>${d.date.toLocaleDateString()}`;
  
  tooltip.select('.tooltip-content').html(tooltipContent);
  tooltip.classed('hidden', false)
    .style('left', (event.pageX + 10) + 'px')
    .style('top', (event.pageY - 10) + 'px');
}

function hideTooltip() {
  tooltip.classed('hidden', true);
}

// Drag functions
function dragStarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragEnded(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  if (currentLayout === 'force') {
    d.fx = null;
    d.fy = null;
  }
}

// Simulation tick function
function ticked() {
  if (linkElements) {
    linkElements
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
  }

  if (nodeElements) {
    nodeElements
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
  }

  if (labelElements) {
    labelElements
      .attr('x', d => d.x)
      .attr('y', d => d.y + 4);
  }
}

function handleResize() {
  const container = document.querySelector('.graph-container');
  width = container.clientWidth;
  height = container.clientHeight;
  
  svg.attr('width', width).attr('height', height);
  simulation.force('center', d3.forceCenter(width / 2, height / 2));
  simulation.alpha(1).restart();
}