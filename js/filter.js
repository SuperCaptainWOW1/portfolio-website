const filterData = {
  "tags": [
    "Full-Stack",
    "Frontend",
    "Backend",
    "Vue JS",
    "React JS"
  ],
  "projects": [
    {
      "title": "Travel Log",
      "description": "App lets you mark places where you have traveled and leave a comment with a rating on it.",
      "taglist": ["Express JS", "MongoDB"],
      "demoUrl": "/travel-log.html",
      "imgSrc": "../img/project1.png",
      "codeUrl": "https://github.com/supercaptainwow1/travel-log"
    },
    {
      "title": "Travel Log",
      "description": "App lets you mark places where you have traveled and leave a comment with a rating on it.",
      "taglist": ["Frontend", "Backend"],
      "imgSrc": "../img/project1.png",
      "demoUrl": "/travel-log.html",
      "codeUrl": "https://github.com/supercaptainwow1/travel-log"
    },
    {
      "title": "Travel Log",
      "description": "App lets you mark places where you have traveled and leave a comment with a rating on it.",
      "taglist": ["React JS",],
      "imgSrc": "../img/project1.png",
      "demoUrl": "/travel-log.html",
      "codeUrl": "https://github.com/supercaptainwow1/travel-log"
    },
    {
      "title": "Travel Log",
      "description": "App lets you mark places where you have traveled and leave a comment with a rating on it.",
      "taglist": ["Full-Stack", "React JS"],
      "imgSrc": "../img/project1.png",
      "demoUrl": "/travel-log.html",
      "codeUrl": "https://github.com/supercaptainwow1/travel-log"
    }
  ]
}
let activeTags = [];

function init() {
  getTags();
  getProjects();
}

function getTags() {
  const filterList = document.querySelector('.filter-list');
  
  filterData.tags.forEach(t => {
    const div = document.createElement('div');
    div.className = 'filter-list__tag';
    div.innerText = t;
    
    filterList.appendChild(div);
  })
  
  makeTagsClickable();
}

function makeTagsClickable() {
  const tags = document.querySelectorAll('.filter-list__tag');

  // Make every tag change state on click
  tags.forEach(tag => {
    tag.addEventListener('click',e => {
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');

        // Add tags to the active list
        activeTags.push(e.target.innerText);
      } else {
        e.target.classList.remove('active');

        // Remove tag from the active list
        activeTags = activeTags.filter(tag => tag != e.target.innerText);
      }

      getProjects();
    })
  })
}

function getProjects()  {
  let projectsList = filterData.projects;

  // Clear before adding new items
  document.querySelector('.projects-list').innerHTML = '';

  // Filter only if one or more tags selected
  if (activeTags.length !== 0) {
    // Append only items that match selected tags
    projectsList = filterData.projects.filter(p => {
      return p.taglist.some(item => activeTags.includes(item));
    })
    // Reverse for left-to-right display
    .reverse();
  }

  // Create and append each element
  projectsList.forEach(p => {
    const div = document.createElement('div');
    div.className = 'project-item';

    let tags = '';
    // Create a string without commas
    p.taglist.forEach(tag => tags += `<span>${tag}</span> `);

    div.innerHTML = `
      <img src="${p.imgSrc}" alt="${p.title} project">
      <div class="project-item__content">
        <h3>${p.title}</h3>
        <p>
          ${p.description}
        </p>
        <div class="project-item__tags">
          ${tags}
        </div>
        <div class="project-item__buttons">
          <a href="${p.demoUrl}" target="_blank" class="project-item__btn demo">
            Demo
          </a>

          <a href="${p.codeUrl}" target="_blank" class="project-item__btn code">
            Code
          </a>
        </div>
      </div>
    `;

    document.querySelector('.projects-list').appendChild(div);
  })
}

init();
