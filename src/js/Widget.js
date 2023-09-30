import Element from './Element';
import ImageList from './ImageList';

export default class Widget {
  constructor() {
    this.container = document.querySelector('.images-container');
    this.fileInput = document.querySelector('.file-input');

    this.onChange = this.onChange.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  init() {
    this.render();

    this.fileInput.addEventListener('change', this.onChange);
    document.addEventListener('click', this.removeElement);
  }

  render() {
    ImageList.getArray().then((resolve) => {
      const array = resolve.files;

      array.forEach((file) => {
        this.addElement(file.id, file.filename, file.path);
      });
    });
  }

  clean() {
    this.container.replaceChildren();
  }

  onChange() {
    const file = this.fileInput.files && this.fileInput.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    ImageList.postFile(formData).then(() => {
      this.clean();
      this.render();
    });
  }

  addElement(id, name, url) {
    const element = new Element();

    element.create(id, name, url);
    element.render(this.container);
  }

  removeElement(e) {
    if (!e.target.closest('.remover')) return;

    const target = e.target.closest('.box');
    const img = target.querySelector('.img');
    const { id } = img.dataset;

    ImageList.removeFile(id).then(() => {
      this.clean();
      this.render();
    });
  }
}
