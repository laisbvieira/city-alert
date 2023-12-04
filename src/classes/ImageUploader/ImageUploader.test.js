const { ImageUploader } = require("./ImageUploader.js");

describe("Testes da classe ImageUploader", () => {
  let uploader;

  beforeEach(() => {
    uploader = new ImageUploader(1, { name: "test.jpg", type: "image/jpeg" });
  });

  test("Deve criar uma instância de ImageUploader", () => {
    expect(uploader).toBeInstanceOf(ImageUploader);
  });

  test(" Deve checar corretamente se o arquivo recebido é uma imagem", () => {
    const imageFile = { name: "test.png", type: "image/png" };
    const nonImageFile = { name: "test.txt", type: "text/plain" };

    expect(uploader.isImageFile(imageFile)).toBe(true);
    expect(uploader.isImageFile(nonImageFile)).toBe(false);
  });

  test("Deve lidar com a seleção de imagens e acionar o upload", () => {
    const mockUploadImage = jest.spyOn(uploader, "uploadImage");
    uploader.handleImageSelect();
    expect(mockUploadImage).toHaveBeenCalledWith(uploader.imageFile);
  });

  test("Deve retornar erro quando for selecionado um arquivo de tipo inválido", () => {
    const invalidFile = { name: "test.txt", type: "text/plain" };
    uploader.imageFile = invalidFile;

    expect(() => uploader.handleImageSelect()).toThrowError(
      "Tipo de arquivo inválido. Apenas arquivos PNG ou JPEG são permitidos."
    );
  });
});
