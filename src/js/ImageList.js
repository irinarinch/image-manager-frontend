export default class ImageList {
  static async getArray() {
    const array = await fetch('https://image-manager-467n.onrender.com/files', {
      method: 'GET',
    });

    return array.json();
  }

  static async postFile(data) {
    await fetch('https://image-manager-467n.onrender.com/files', {
      method: 'POST',
      body: data,
    });
  }

  static async removeFile(id) {
    await fetch(`https://image-manager-467n.onrender.com/files/${id}`, {
      method: 'DELETE',
    });
  }
}
