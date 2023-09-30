export default class Element {
  constructor() {
    this.imgBox = document.createElement('div');
    this.figure = document.createElement('figure');
    this.figcaption = document.createElement('figcaption');
    this.img = document.createElement('img');
    this.remover = document.createElement('img');
  }

  create(id, name, src) {
    this.img.src = src;
    this.figcaption.textContent = name;
    this.img.classList.add('img');
    this.img.dataset.id = id;
  }

  render(parent) {
    parent.appendChild(this.imgBox);
    this.imgBox.appendChild(this.figure);
    this.figure.appendChild(this.img);
    this.figure.appendChild(this.figcaption);
    this.figure.appendChild(this.remover);

    this.imgBox.classList.add('box');
    this.remover.classList.add('remover');
    this.remover.src = 'https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-388.png';
  }
}
