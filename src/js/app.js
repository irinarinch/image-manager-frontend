import storage from '../files/Storage Standard.pdf';
import streams from '../files/Streams Standard.pdf';
import xml from '../files/XMLHttpRequest Standard.pdf';

document.addEventListener('click', (e) => {
  if (!e.target.closest('a')) return;

  const target = e.target.closest('.file');
  const name = target.querySelector('.name');
  const link = e.target.closest('a');

  if (name.textContent === 'Streams Standard') {
    link.href = streams;
  }

  if (name.textContent === 'Storage Standard') {
    link.href = storage;
  }

  if (name.textContent === 'XMLHttpRequest Standart') {
    link.href = xml;
  }

  link.rel = 'noopener';
  link.download = `${name.textContent}.pdf`;
});
