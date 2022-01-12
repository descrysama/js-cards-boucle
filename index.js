const section = document.createElement('div');
section.setAttribute('id', 'ladiv');
document.body.appendChild(section);

for (let i = 1; i < 11; i++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('id', 'lescards');
    section.appendChild(div);
  }