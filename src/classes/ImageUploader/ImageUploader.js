class ImageUploader {
  postId;
  imageFile;

  constructor(postId, imageFile) {
    this.postId = postId;
    this.imageFile = imageFile;
  }

  isImageFile(file) {
    const allowedTypes = ["image/png", "image/jpeg"];
    return allowedTypes.includes(file.type);
  }

  uploadImage(file) {
    console.log(`Simulando upload da imagem "${file.name}"...`);

    return new Promise((resolve) => {
      console.log(`Upload da imagem "${file.name}" concluído com sucesso.`);
      resolve();
    });
  }

  handleImageSelect() {
    if (this.isImageFile(this.imageFile)) {
      this.uploadImage(this.imageFile);
    } else {
      throw new Error(
        "Tipo de arquivo inválido. Apenas arquivos PNG ou JPEG são permitidos."
      );
    }
  }
}

module.exports = { ImageUploader };
