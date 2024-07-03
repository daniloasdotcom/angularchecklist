<a href="https://github.com/daniloasdotcom/angularchecklist/blob/main/Notebooks/Portugu%C3%AAs/pot_notebook.md"><button>SUMÁRIO</button></a>

## Criar e rodar um projeto

1. **Indique ao seu IDE o diretório para armazenar seu projeto:**
    - Abra seu IDE.
    - Clique em **File**.
    - Clique em **Open Folder**.
    - Abra o diretório onde você colocará a pasta para seu projeto.

2. **Crie um novo projeto:**
    - Clique na aba **Terminal**.
    - Clique em **New Terminal**.
    - No terminal, digite:
        ```sh
        ng new project_name
        ```
    - Pressione **Enter**.
    - Você verá a seguinte pergunta:
        ```plaintext
        Which stylesheet format would you like to use? (Use arrow keys)
        ```
    - Com as seguintes opções:
        ```plaintext
        > CSS [ https://developer.mozilla.org/docs/Web/CSS ]
          Sass (SCSS) [ https://sass-lang.com/documentation/syntax#scss ]
          Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
          Less [ http://lesscss.org ]
        ```
    - Mova a seta `>` usando as teclas de seta no seu teclado e escolha **Sass (SCSS)...**, clique em **Enter** para confirmar.
    - Uma segunda pergunta será feita:
        ```plaintext
        ? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?
        ```
    - A escolha entre SSR e SSG/Prerendering depende das necessidades específicas do seu projeto. Se você precisa de melhor indexação por motores de busca e tempos de carregamento inicial mais rápidos, o SSR pode ser a melhor opção. Por outro lado, se sua aplicação é principalmente estática e não precisa de dados dinâmicos do servidor, o SSG/Prerendering pode ser mais adequado.
    - Responda com **Y** e pressione **Enter**.
    - Aguarde até que os arquivos do projeto sejam gerados.

3. **Execute seu projeto:**
    - Após a criação do projeto ser concluída, digite no terminal:
        ```sh
        cd project_name
        ```
    - Agora você está dentro do diretório do seu projeto Angular.
    - Para executar seu primeiro projeto, digite no terminal:
        ```sh
        ng serve
        ```
    - O Angular CLI fornecerá um servidor de desenvolvimento local permitindo que você visualize seu projeto no navegador e atualize automaticamente quando ocorrerem mudanças nos arquivos.
    - Por padrão, o Angular CLI fornecerá o servidor [http://localhost:4200/](http://localhost:4200/).

### Vídeo

Para auxiliá-lo ainda mais, aqui está um tutorial em vídeo:

<a href="https://youtu.be/9H6B4Nz75Rc">
    <img src="https://img.youtube.com/vi/9H6B4Nz75Rc/maxresdefault.jpg" alt="Assista ao vídeo" style="width:600px;"/>
</a>
