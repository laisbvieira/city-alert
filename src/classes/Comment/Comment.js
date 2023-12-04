const { Post } = require("../Post/Post.js");

class Comment extends Post {
  constructor({
    user,
    textPost,
    uploadImage = null,
    parentPost,
    comments = [],
  }) {
    super({ user, textPost, uploadImage });
    this.parentPost = parentPost;
    this.comments = comments;
  }

  addComment(user, comment) {
    const comment = new Comment({
      user: new User(author),
      textPost: content,
      parentPost: this,
    });
    this.comments.push(comment);
  }

  deleteComment(index) {
    if (index >= 0 && index < this.comments.length) {
      this.comments.splice(index, 1);
    }
  }
}

module.exports = { Comment };
