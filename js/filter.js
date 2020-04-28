const filterData = {
  "tags": [
    "Full-Stack",
    "Frontend",
    "Backend",
    "Vue JS",
    "React JS"
  ]
}

function makeTagsClickable() {
  const tags = document.querySelectorAll('.filter-list__tag');

  // Make every tag change state on click
  tags.forEach(tag => {
    tag.addEventListener('click',e => {
      if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');
      } else {
        e.target.classList.remove('active');
      }
    })
  })
}

void function getTags() {
  const filterList = document.querySelector('.my-work__filter-list');

  filterData.tags.forEach(t => {
    const div = document.createElement('div');
    div.className = 'filter-list__tag';
    div.innerText = t;

    filterList.appendChild(div);
  })

  makeTagsClickable();
}()