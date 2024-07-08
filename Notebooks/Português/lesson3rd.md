<a href="https://github.com/daniloasdotcom/angularchecklist/blob/main/Notebooks/Portugu%C3%AAs/pot_notebook.md"><button>SUMÁRIO</button></a>

## Criar um Componente

1. **Criar um componente:**
    - Com o VSCode aberto, digite no terminal:
        ```sh
        ng generate component components/home
        ```
    - `ng generate component` é o comando responsável por criar quatro arquivos que fazem parte do seu componente:
        - **O arquivo .css:** usado para estilizar seu componente.
        - **O arquivo .html:** usado para definir os elementos do seu componente.
        - **O arquivo .ts:** um arquivo TypeScript onde você define funções, importa módulos, dependências e outros componentes para o seu componente.
        - **O arquivo .spec.ts:** usado para escrever testes unitários para o componente, garantindo que seu comportamento seja consistente e correto em vários cenários.
    - `components/home` cria um componente chamado `home` no diretório `component`.

2. **Editar seu componente:**
    - Edite o arquivo `home.component.html`, adicionando uma mensagem "Hello World":
        ```html
        <p>Hello World!</p>
        ```

3. **Configurar o roteamento:**
    - Siga a quarta lição (abaixo) para configurar os arquivos `app.component` e o arquivo `app.routes.ts` para renderizar o componente home e visualizar suas alterações no navegador.
