const { User } = require("./User");

describe("Testes da classe User", () => {
  test("Deve criar um usuário com todos os parâmetros", () => {
    const user = new User("John Doe", "john.doe@example.com", "+551234567890");

    expect(user).toBeInstanceOf(User);
    expect(user.userId).toBeDefined();
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john.doe@example.com");
    expect(user.phone).toBe("+551234567890");
  });

  test("Deve criar um usuário apenas com nome (parâmetros opcionais são null)", () => {
    const user = new User("Jane Smith");

    expect(user).toBeInstanceOf(User);
    expect(user.userId).toBeDefined();
    expect(user.name).toBe("Jane Smith");
    expect(user.email).toBeNull();
    expect(user.phone).toBeNull();
  });

  test("Deve retornar erro ao tentar criar um usuário com email inválido", () => {
    expect(() => new User("Invalid User", "invalid-email")).toThrowError(
      "Endereço de e-mail inválido."
    );
  });

  test("Deve retornar erro ao tentar criar um usuário com número de telefone inválido", () => {
    expect(
      () => new User("Another User", "user@example.com", "invalid-phone")
    ).toThrow("Número de telefone inválido.");
  });

  test("Deve retornar erro ao tentar criar um usuário com nome inválido", () => {
    expect(() => new User("", "user@example.com", "+551234567890")).toThrow(
      "Nome inválido."
    );
  });
});
