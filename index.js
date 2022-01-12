const section = document.createElement('div');
section.setAttribute('id', 'ladiv');
document.body.appendChild(section);

for (let i = 1; i < 11; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'bonjour.jpg';
    img.style.width = "10rem"
    div.className = 'card';
    div.setAttribute('id', 'lescards');
    div.appendChild(img)
    section.appendChild(div);
  }