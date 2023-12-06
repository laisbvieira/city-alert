const { User } = require("./src/classes/User/User");
const { Post } = require("./src/classes/Post/Post");
const { IssuePost } = require("./src/classes/IssuePost/IssuePost");
const { Comment } = require("./src/classes/Comment/Comment");
const { ImageUploader } = require("./src/classes/ImageUploader/ImageUploader");
const express = require("express");

const app = express();

(async () => {
  try {
    const user1 = new User("John Doe", "john@example.com", "+551234567890");
    const user2 = new User("Jane Smith", "jane@example.com");

    const post1 = Post.createPost({
      user: user1,
      textPost:
        "Problema na Rua X - Estrada precária, precisa de reparos urgentes.",
    });

    const imageUploader1 = new ImageUploader(post1.postId, {
      name: "imagem.jpg",
      type: "image/jpeg",
    });
    imageUploader1.handleImageSelect();

    const issuePost1 = new IssuePost({
      user: user2,
      textPost: "Alagamento na Praça Y",
      issue: "Alagamento",
      location: "Praça Y",
    });

    const imageUploader2 = new ImageUploader(issuePost1.postId, {
      name: "imagem_alagamento.jpg",
      type: "image/jpeg",
    });
    imageUploader2.handleImageSelect();

    const comment1 = new Comment({
      user: user1,
      textPost: "Espero que resolvam logo!",
      parentPost: issuePost1,
    });

    comment1.addComment("Jane Doe", "Concordo, é uma situação séria.");

    const allPosts = Post.getAllPosts();
    console.log("Todas as postagens:", allPosts);
  } catch (error) {
    console.error("Erro ao criar postagem:", error.message);
  } finally {
    console.log("Fim.");
  }
})();

app.get("/", function (req, res) {
  const projectInfo = {
    nome: "CityAlert - Plataforma Local para Alertas Urbanos",
    descrição:
      "O CityAlert é uma aplicação local desenvolvida para facilitar a comunicação entre os membros de uma comunidade em uma cidade do interior (Paraisópolis, Minas Gerais). A plataforma permite que os usuários compartilhem alertas, problemas urbanos e soluções, promovendo a conscientização e a colaboração na resolução de questões que afetam a qualidade de vida na região.",
    recursos: [
      "Postagens de Alerta",
      "Comentários Colaborativos",
      "Upload de Imagens",
      "Opções Padronizadas e Personalizadas",
    ],
    "tecnologias utilizadas": [
      "JavaScript",
      "Node.js",
      "Jest",
      "UUID",
      "Express",
    ],
  };
  res.send(projectInfo);
});
app.listen(3000);
