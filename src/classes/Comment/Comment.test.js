const { Comment } = require("./Comment.js");
const { User } = require("../User/User.js");

//TODO: finalizar testes
describe("Testes da classe Comment", () => {
  test("deve retornar os dados corretamente ao criar uma instância de Comment", () => {
    const user = new User("João");
    const comment = new Comment("João", "Exemplo de comentário");

    expect(comment.author).toBe("João");
    expect(comment.content).toBe("Exemplo de comentário");
    expect(comment.createdAt).toBeInstanceOf(Date);
  });

  test("deve retornar typerror ao tentar instanciar com o autor de outro tipo sem ser string", () => {
    expect(() => new Comment(123, "Exemplo de comentário")).toThrow(
      "O autor do comentário deve ser do tipo texto e deve ser fornecido."
    );
  });

  test("deve retornar TypeError ao tentar instanciar sem fornecer o autor do comentário", () => {
    expect(() => new Comment(undefined, "Exemplo de post")).toThrowError(
      "O autor do comentário deve ser do tipo texto e deve ser fornecido."
    );
  });

  test("deve retornar TypeError ao tentar instanciar sem fornecer o texto do comentário", () => {
    expect(() => new Comment("João")).toThrowError(
      "Você precisa fornecer um texto de comentário."
    );
  });
});
