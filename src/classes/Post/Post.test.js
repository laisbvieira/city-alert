const { Post } = require("./Post");
const { User } = require("../User/User");
const { ImageUploader } = require("../ImageUploader/ImageUploader");
const { Feed } = require("../Feed/Feed");

//TODO: finalizar testes

describe("Testes para a classe Post", () => {
  beforeEach(() => {
    if (Feed.clear) {
      Feed.clear();
    } else if (Feed.reset) {
      Feed.reset();
    } else {
      Post.feed = new Feed();
    }
  });

  test("Deve criar um post com todos os dados válidos", () => {
    const user = new User("John");
    const post = new Post({ user, textPost: "Hello, world!" });

    post.createPost();

    expect(Post.feed.getPosts()).toContain(post);
    expect(post.postId).toBeDefined();
    expect(post.user).toBe(user);
    expect(post.textPost).toBe("Hello, world!");
  });

  test("Deve criar um post com texto e imagem", () => {
    const user = new User("Jane");
    const imageFile = { name: "image.jpg", type: "image/jpeg" };
    const post = new Post({
      user,
      textPost: "Post with image.",
      uploadedImage: imageFile,
    });

    expect(post).toBeInstanceOf(Post);
    expect(post.postId).toBeDefined();
    expect(post.user).toBe(user);
    expect(post.textPost).toBe("Post with image.");
    expect(post.uploadedImage).toBe(imageFile);
  });

  test("Deve retornar erro ao tentar criar um post sem usuário", () => {
    console.error = jest.fn();

    const invalidUserName = "";
    expect(() => {
      const post = new Post({
        user: new User(invalidUserName),
        textPost: "Post without user.",
      });
    }).toThrow("Nome inválido. Por favor, forneça um nome válido");
  });

  test("Criar um post e adicionar ao Feed", () => {
    const user = new User("Laís", null, null);
    const post = new Post(user, "Post to be added to the feed.");
    post.createPost();

    expect(Feed.mock.instances[0].addPost).toHaveBeenCalledWith(post);
  });

  test("Deletar um post e remover do Feed", () => {
    const post = new Post({ textPost: "Post to be deleted from the feed." });
    post.deletePost();

    expect(Feed.mock.instances[0].removePost).toHaveBeenCalledWith(post);
  });

  test("Carregar uma imagem", () => {
    const user = new User("Alice");
    const post = new Post({
      user,
      textPost: "Post with image to be uploaded.",
    });
    const imageFile = { name: "image.jpg", type: "image/jpeg" };

    post.loadImage(imageFile);

    expect(ImageUploader.mock.instances[0].upload).toHaveBeenCalledWith(
      imageFile
    );
    expect(post.uploadedImage).toBe(imageFile);
  });

  test("Erro ao carregar uma imagem sem arquivo", () => {
    const user = new User("Bob");
    const post = new Post({ user, textPost: "Post without image." });

    console.error = jest.fn(); // Mock console.error to avoid actual error logs
    post.uploadImage(null);

    expect(console.error).toHaveBeenCalledWith(
      "Erro: Nenhuma imagem fornecida para upload."
    );
    expect(ImageUploader.mock.instances[0].upload).not.toHaveBeenCalled();
    expect(post.uploadedImage).toBeNull();
  });
});
