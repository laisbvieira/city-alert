const { Post } = require("../Post/Post.js");

//TODO: adjust location
class IssuePost extends Post {
  DEFAULT_ISSUES = [
    "Alagamento",
    "Deslizamento",
    "Queda de Árvore",
    "Escassez de Energia",
    "Escassez de Água",
    "Danos Estruturais",
    "Iluminação pública",
    "Coleta de lixo",
    "Outros",
  ];

  constructor({
    postId,
    user,
    textPost,
    uploadImage = null,
    issue,
    location,
    status = "Pendente",
  }) {
    super({ user, textPost, uploadImage });
    this.postId = postId || this.postId;
    this.issue = issue;
    this.location = location;
    this.status = status;
  }

  createIssuePost() {
    super.createPost();
  }

  deleteIssuePost() {
    super.deletePost();
  }

  updateStatus() {
    this.status = "Resolvido";
    console.log("Status do post atualizado para Resolvido");
  }
}

module.exports = { IssuePost };
