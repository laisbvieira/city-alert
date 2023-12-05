const { Comment } = require("./Comment.js");
const { User } = require("../User/User.js");

describe("Testes da classe Comment", () => {
  test("deve retornar os dados corretamente ao criar uma instância de Comment", () => {
    const user = new User("João");
    const comment = new Comment({
      user: user,
      textPost: "Exemplo de comentário",
    });

    expect(comment.user.name).toBe("João");
    expect(comment.textPost).toBe("Exemplo de comentário");
  });

  test("deve retornar typerror ao tentar instanciar com o autor de outro tipo sem ser string", () => {
    expect(() => new Comment(123, "Exemplo de comentário")).toThrow(
      "Informe um usuário válido"
    );
  });

  test("deve retornar TypeError ao tentar instanciar sem fornecer o autor do comentário", () => {
    expect(() => new Comment({})).toThrowError("Informe um usuário válido");
  });

  test("deve retornar TypeError ao tentar instanciar sem fornecer o texto do comentário", () => {
    expect(() => new Comment({ user: new User("João") })).toThrowError(
      "Você precisa fornecer um texto de comentário."
    );
  });

  test("deve adicionar um comentário corretamente usando addComment", () => {
    const parentPost = new Comment({
      user: new User("Carol"),
      textPost: "Post inicial",
    });
    const newCommentContent = "Novo comentário!";
    parentPost.addComment("Dave", newCommentContent);

    expect(parentPost.comments.length).toBe(1);
    const newComment = parentPost.comments[0];
    expect(newComment.user.name).toBe("Dave");
    expect(newComment.textPost).toBe(newCommentContent);
  });

  test("deve deletar um comentário existente corretamente usando deleteComment", () => {
    const parentPost = new Comment({
      user: new User("Eve"),
      textPost: "Post inicial",
    });
    const commentToDelete = new Comment({
      user: new User("Frank"),
      textPost: "Comentário para deletar",
    });
    parentPost.comments.push(commentToDelete);

    parentPost.deleteComment(0);

    expect(parentPost.comments.length).toBe(0);
  });

  test("não deve deletar um comentário se o índice estiver fora dos limites usando deleteComment", () => {
    const parentPost = new Comment({
      user: new User("Grace"),
      textPost: "Post inicial",
    });
    const commentToDelete = new Comment({
      user: new User("Harry"),
      textPost: "Comentário para deletar",
    });
    parentPost.comments.push(commentToDelete);

    parentPost.deleteComment(1);

    expect(parentPost.comments.length).toBe(1);
  });
});
