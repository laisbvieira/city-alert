const { Post } = require("../Post/Post.js");
const { User } = require("../User/User.js");

class Comment extends Post {
  constructor({
    user,
    textPost,
    uploadImage = null,
    parentPost,
    comments = [],
  }) {
    if (!user || !(user instanceof User)) {
      throw new Error("Informe um usuário válido");
    }

    if (!textPost) {
      throw new Error("Você precisa fornecer um texto de comentário.");
    }

    super({ user, textPost, uploadImage });
    this.parentPost = parentPost;
    this.comments = comments;
  }

  addComment(author, content) {
    const newComment = new Comment({
      user: new User(author),
      textPost: content,
      parentPost: this,
    });
    this.comments.push(newComment);
  }

  deleteComment(index) {
    if (index >= 0 && index < this.comments.length) {
      this.comments.splice(index, 1);
    }
  }
}

module.exports = { Comment };
