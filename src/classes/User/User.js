import { v4 as uuidv4 } from "uuid";

class User {
  constructor(name) {
    this.userId = uuidv4();
    this.name = name;
    this.phone = phone;
  }

  validateName(name) {
    if (typeof name !== "string" || !name) {
      throw new Error("é preciso informar um nome válido");
    }
  }

  validatePhone(phone) {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phone)) {
      throw new Error(
        "É preciso informar um número de telefone válido no formato internacional. Exemplo: +1234567890"
      );
    }
  }
}
