const { Post } = require("./Post");
const { ImageUploader } = require("../ImageUploader/ImageUploader");
const { User } = require("../User/User");

//TODO: improve tests
describe("Testes para a classe Post", () => {
  beforeEach(() => {
    Post.allPosts = [];
  });

  test("Deve excluir um post", () => {
    const post = Post.createPost({
      user: new User("Jane"),
      textPost: "Test post",
    });
    post.deletePost();

    expect(Post.allPosts).not.toContain(post);
  });

  test("Deve lidar com erro ao tentar excluir um post inexistente", () => {
    const user = new User("Bob");
    const post = new Post({ user, textPost: "Post inexistente." });

    console.error = jest.fn(); // Mock console.error to avoid actual error logs
    post.deletePost();

    expect(console.error).toHaveBeenCalledWith(
      "Erro: Post não encontrado para remoção."
    );
  });

  test("Deve obter todos os posts", () => {
    const user1 = new User("Alice");
    const user2 = new User("Bob");
    Post.createPost({ user: user1, textPost: "Post 1" });
    Post.createPost({ user: user2, textPost: "Post 2" });

    const allPosts = Post.getAllPosts();

    expect(allPosts.length).toBe(2);
    expect(allPosts[0].user).toBe(user1);
    expect(allPosts[1].user).toBe(user2);
  });
});
