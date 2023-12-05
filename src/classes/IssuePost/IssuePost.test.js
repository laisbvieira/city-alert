const { IssuePost } = require("./IssuePost");
const { User } = require("../User/User");

describe("Testes da classe IssuePost", () => {
  test("Deve criar um post de problema com todos os dados válidos", () => {
    const user = new User("John", "john@gmail.com");
    const post = new IssuePost({
      user,
      textPost: "Houve um alagamento na rua.",
      uploadImage: { name: "flood.jpg", type: "image/jpeg" },
      issue: "Alagamento",
      location: "Rua XYZ",
    });

    expect(post).toBeInstanceOf(IssuePost);
    expect(post.postId).toBeDefined();
    expect(post.user).toEqual(user);
    expect(post.textPost).toBe("Houve um alagamento na rua.");
    expect(post.uploadedImage).toEqual({
      name: "flood.jpg",
      type: "image/jpeg",
    });
    expect(post.issue).toBe("Alagamento");
    expect(post.location).toBe("Rua XYZ");
    expect(post.status).toBe("Pendente");
  });

  test("Deve atualizar o status do post para Resolvido", () => {
    const user = new User("John", "john@gmail.com");
    const post = new IssuePost({
      user: user,
      textPost: "Rua esburacada.",
      issue: "Outros",
      location: "Rua ABC",
    });

    post.updateStatus();

    expect(post.status).toBe("Resolvido");
  });

  test("Deve criar um post de problema com status personalizado", () => {
    const user = new User("John", "john@gmail.com");
    const post = new IssuePost({
      user,
      textPost: "Sem luz no bairro.",
      issue: "Escassez de Energia",
      location: "Bairro XYZ",
      status: "Em andamento",
    });

    expect(post.status).toBe("Em andamento");
  });

  test("Deve criar um post de problema com texto e imagem", () => {
    const user = new User("John", "john@gmail.com");
    const post = new IssuePost({
      user,
      textPost: "Queda de árvore na praça.",
      uploadImage: { name: "tree.jpg", type: "image/jpeg" },
      issue: "Queda de Árvore",
      location: "Praça ABC",
    });

    expect(post).toBeInstanceOf(IssuePost);
    expect(post.postId).toBeDefined();
    expect(post.user).toEqual(user);
    expect(post.textPost).toBe("Queda de árvore na praça.");
    expect(post.uploadedImage).toEqual({
      name: "tree.jpg",
      type: "image/jpeg",
    });
    expect(post.issue).toBe("Queda de Árvore");
    expect(post.location).toBe("Praça ABC");
    expect(post.status).toBe("Pendente");
  });
});
