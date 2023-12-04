class Feed {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  removePost(post) {
    const index = this.posts.findIndex((p) => p === post);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }

  getPosts() {
    return this.posts;
  }
}

module.exports = { Feed };
