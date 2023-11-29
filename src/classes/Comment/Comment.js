class Comment {
  constructor(author, content) {
    this.validateAuthor(author);
    this.validateContent(content);

    this.author = author;
    this.content = content;
    this.createdAt = new Date();
  }

  validateAuthor(author) {
    if (!(author instanceof User)) {
      throw new TypeError(
        "O autor do comentário deve ser uma instância da classe User."
      );
    }
  }

  validateContent(content) {
    if (!content) {
      throw new TypeError("Você precisa fornecer um texto de comentário.");
    }
  }
}

module.exports = { Comment };
