const { v4: uuidv4 } = require("uuid");
const { ImageUploader } = require("../ImageUploader/ImageUploader.js");
const { User } = require("../User/User.js");
const { Feed } = require("../Feed/Feed.js");

class Post {
  static feed = new Feed();

  constructor({ user, textPost, uploadImage = null }) {
    this.postId = uuidv4();
    this.user = user || new User();
    this.textPost = textPost;
    this.uploadedImage = uploadImage;
  }

  createPost() {
    Post.feed.addPost(this);
  }

  deletePost() {
    Post.feed.removePost(this);
  }

  loadImage(imageFile) {
    if (imageFile) {
      this.uploadedImage = ImageUploader.upload(imageFile);
      console.log("Imagem carregada com sucesso!");
    } else {
      console.error("Erro: Nenhuma imagem fornecida para upload.");
    }
  }
}

module.exports = { Post };
