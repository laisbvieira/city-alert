# Documentação do Projeto Final

### Introdução

O CityAlert é uma aplicação local desenvolvida para facilitar a comunicação entre os membros de uma comunidade em uma cidade do interior. A plataforma permite que os usuários compartilhem alertas, problemas urbanos e soluções, promovendo a conscientização e a colaboração na resolução de questões que afetam a qualidade de vida na região.

### Objetivo geral do projeto:

O projeto tem como objetivo a criação de uma plataforma local que funcione como uma rede social com foco na comunicação e compartilhamento de informações relacionadas a problemas urbanos e alertas na cidade de Paraisópolis, Minas Gerais. Busca promover a conscientização da população, discussão de soluções potenciais sobre eventos e problemas relevantes da cidade, bem como criação de uma comunidade online engajada e de ajuda mútua.

### Recursos principais

- Postagens de Alerta: Os usuários podem criar postagens para alertar sobre problemas urbanos, como inundações, estradas precárias, falta de iluminação pública, entre outros.

- Comentários Colaborativos: Possibilidade de interação através de comentários nas postagens, onde os usuários podem discutir soluções, oferecer suporte ou compartilhar informações adicionais.

- Upload de Imagens: Os usuários podem anexar imagens às postagens para fornecer uma visualização mais detalhada dos problemas relatados.

- Opções Padronizadas e Personalizadas: Utilização de opções padronizadas (categorias) para descrever os problemas urbanos comuns. Os usuários também têm a opção de adicionar problemas personalizados.

### Definição das classes

#### Classe User

1. Função: Criação do objeto user
2. Atributos:
   Públicos: name
   Privados: phone
3. Métodos:

- validateName: verifica se o atributo name é do tipo string e está presente
- validatePhone: verifica se o atributo phone é do tipo number e no formato adequado através de um regex

#### Classe Comment

1. Função: Criação do objeto comment
2. Atributos:
   Públicos: author, content
3. Métodos:

- validateAuthor: verifica se o atributo author é instância da classe User
- validateContent: verifica se o atributo content está presente

#### Classe ImageUploader

1. Função: Criação
2. Atributos:
   Público: postId, imageFile
3. Métodos:

- isImageFile: verifica se o arquivo recebido é do tipo imagem e com as extensões permitidas: .png e .jpeg
- uploadImage: simula o upload de imagem
- handleImageSelect: lida a validação do arquivos da imagem para depois chamar a função de upload
- deleteImage: simula a exclusão da imagem de um post específico

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
