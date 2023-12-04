# Documentação do Projeto Final

### Introdução

Paraisópolis, situada na Serra da Mantiqueira, enfrenta desafios urbanos únicos, como chuvas intensas, tempestades e períodos sem energia e água. Esses problemas têm impacto direto na vida da população local, especialmente com o agravamento das mudanças climáticas em todo mundo, aumentando o risco de inundações, quedas de árvores e danos estruturais.

O CityAlert surge como uma plataforma local de comunicação, possibilitando que os moradores compartilhem informações sobre esses problemas. A ideia é criar uma comunidade online onde a população, utilizando JavaScript, possa discutir e encontrar soluções para os desafios enfrentados em Paraisópolis, contribuindo para a adaptação da cidade às mudanças climáticas.

### Objetivo geral do projeto:

O projeto tem como objetivo a criação de uma plataforma local que funcione como uma rede social com foco na comunicação e compartilhamento de informações relacionadas a problemas urbanos e alertas na cidade de Paraisópolis, Minas Gerais. Busca promover a conscientização da população, discussão de soluções potenciais sobre eventos e problemas relevantes da cidade, bem como criação de uma comunidade online engajada e de ajuda mútua.

### Recursos principais

- Postagens de Alerta: Os usuários podem criar postagens para alertar sobre problemas urbanos, como inundações, estradas precárias, falta de iluminação pública, entre outros.

- Comentários Colaborativos: Possibilidade de interação através de comentários nas postagens, onde os usuários podem discutir soluções, oferecer suporte ou compartilhar informações adicionais.

- Upload de Imagens: Os usuários podem anexar imagens às postagens para fornecer uma visualização mais detalhada dos problemas relatados.

- Opções Padronizadas e Personalizadas: Utilização de opções padronizadas (categorias) para descrever os problemas urbanos comuns. Os usuários também têm a opção de adicionar problemas personalizados.

### Definição das classes

#### Classe User

1. Função: Criação do objeto user recebendo o nome e um ou dois meios de contato (telefone ou e-mail)
2. Atributos:
   name
   email (opcional)
   phone (opcional)
3. Métodos:

- validateUserInput: valida os atributos para garantir a aplicação das funções de validação do nome, telefone e e-mail
- isValidString: valida a existência e tipo do atributo name
- validatePhone: verifica se o atributo phone está no formato adequado através de um regex
- validateEmail: verifica se o atributo email está no formato adequado através de um regex

#### Classe Post

1. Função: Criação de um post a partir de um usuário, mensagem do post e a possibilidade de dar upload de uma imagem
2. Atributos:
   user: instância da classe User
   textPost
   uploadImage (opcional)
3. Métodos:

- createPost:
- deletePost:
- uploadImage: função para receber o imageFile

#### Classe Comment

1. Função: Criação do objeto comment
2. Atributos:
   Públicos: author, content
3. Métodos:

- validateAuthor: verifica se o atributo author é instância da classe User
- validateContent: verifica se o atributo content está presente

#### Classe Comment

1. Função: Criação do objeto comment
2. Atributos:
   Públicos: author, content
3. Métodos:

- validateAuthor: verifica se o atributo author é instância da classe User
- validateContent: verifica se o atributo content está presente

#### Classe ImageUploader

1. Função: Lida com o upload de uma imagem, fazendo uma simulação de um serviço para subir imagens
2. Atributos:
   postId
   imageFile
3. Métodos:

- isImageFile: verifica se o arquivo recebido é do tipo imagem e com as extensões permitidas: .png e .jpeg
- uploadImage: simula o upload de imagem
- handleImageSelect: lida a validação do arquivos da imagem para depois chamar a função de upload

#### Classe UserPost:

1. Função: Criação dos métodos de criação e remoção de post, atualização do status do post, adicionar e remover comentários e realizar upload de imagem no post
2. Atributos:
   Públicos: postId, user, address, issue, textPost, image, status, comments
3. Métodos:

- publishPost: publicar post com todos os parâmetros necessários
- deletePost: remover post desejado
- updatePostStatus: realizada atualização do status da issue do post com duas opções: Pendente e Resolvido
- imageUpload: realizar upload de imagens no momento de criação do post
- addComment: adicionar comentário a um post
- deleteComment: remover comentário em um post
