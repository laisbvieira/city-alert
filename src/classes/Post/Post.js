import { v4 as uuidv4 } from "uuid";
import ImageUploader from "../ImageUploader/ImageUploader.js";
import Comment from "../Comment/Comment.js";
import User from "../User/User.js";

class Post {
  constructor({ author, user, weatherIssue, textPost, uploadImage = null }) {
    this.postId = uuidv4();
    this.user = new User();
    this.address = address;
    this.weatherIssue = weatherIssue;
    this.textPost = textPost;
    this.uploadImageInstance = new ImageUploader(this.postId);
    this.comments = [];
    this.status = "Pendente";
  }

  publishPost() {
    console.log("Post criado:", this);
  }

  deletePost() {
    console.log("Post deletado");
  }

  updatePostStatus(newStatus) {
    this.status = newStatus;
    console.log("Status do post atualizado para:", newStatus);
  }

  performImageUpload(imageFile) {
    this.uploadImageInstance.uploadImage(imageFile);
    alert("Imagem carregada com sucesso!");
  }

  addComment(author, content) {
    const newComment = new Comment(author, content);
    this.comments.push(newComment);
  }

  deleteComment(index) {
    if (this.isValidCommentIndex(index)) {
      this.comments.splice(index, 1);
    }
  }

  isValidCommentIndex(index) {
    return index >= 0 && index < this.comments.length;
  }
}

module.exports = { Post };
