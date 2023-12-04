const { v4: uuidv4 } = require("uuid");

class User {
  constructor(name, email = null, phone = null) {
    this.userId = uuidv4();
    this.validateUserInput(name, phone, email);

    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  static user = [];

  validateUserInput(name, phone, email) {
    if (!this.isValidString(name)) {
      throw new Error("Nome inválido. Por favor, forneça um nome válido");
    }

    if (phone && !this.isValidPhone(phone)) {
      throw new Error(
        "Número de telefone inválido. Por favor, forneça um número de telefone válido"
      );
    }

    if (email && !this.isValidEmail(email)) {
      throw new Error(
        "Endereço de e-mail inválido. Por favor, forneça um e-mail válido"
      );
    }
  }

  isValidString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  isValidPhone(phone) {
    const phoneRegex = /^\+\d{2}\s?(\d{2,3}\s?)(\d{4,5}\-?\d{4})$/; // Formato brasileiro: +55 11 12345-6789 ou +55 11 123456789
    return phoneRegex.test(phone);
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

module.exports = { User };
