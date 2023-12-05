const { v4: uuidv4 } = require("uuid");
const { ImageUploader } = require("../ImageUploader/ImageUploader.js");
const { User } = require("../User/User.js");

class Post {
  static allPosts = [];

  constructor({ user, textPost, uploadImage = null }) {
    if (!(user instanceof User)) {
      throw new Error("Informe um usuário válido");
    }

    this.postId = uuidv4();
    this.user = user;
    this.textPost = textPost;
    this.uploadedImage = uploadImage;
  }

  static createPost({ user, textPost, uploadImage = null }) {
    const post = new Post({ user, textPost, uploadImage });
    Post.allPosts.push(post);
    console.log("Post adicionado com sucesso!");
    return post;
  }
  deletePost() {
    const index = Post.allPosts.findIndex((p) => p.postId === this.postId);

    if (index !== -1) {
      Post.allPosts.splice(index, 1);
      console.log("Post removido com sucesso!");
    } else {
      console.error("Erro: Post não encontrado para remoção.");
    }
  }

  loadImage(imageFile) {
    if (imageFile) {
      try {
        // Certifique-se de passar this.postId e imageFile como argumentos
        this.uploadedImage = ImageUploader.uploadImage(this.postId, imageFile);
        console.log("Imagem carregada com sucesso!");
      } catch (error) {
        console.error(`Erro ao carregar imagem: ${error.message}`);
      }
    } else {
      console.error("Erro: Nenhuma imagem fornecida para upload.");
    }
  }

  static getAllPosts() {
    return Post.allPosts;
  }
}

module.exports = { Post };
