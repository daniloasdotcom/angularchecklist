<a href="https://github.com/daniloasdotcom/angularchecklist/blob/main/Notebooks/English/eng_notebook.md"><button>SUMMARY</button></a>

## Create a Component

1. **Create a component:**
    - With VSCode open, type in the terminal:
        ```sh
        ng generate component components/home
        ```
    - `ng generate component` is the command responsible to build four files that make part of your component:
        - **The .css file:** used to style your component.
        - **The .html file:** used to define the elements of your component.
        - **The .ts file:** a TypeScript file where you define functions, import modules, dependencies, and other components for your component.
        - **The .spec.ts file:** used to write unit tests for the component, ensuring its behavior is consistent and correct across various scenarios.
    - `components/home` creates a component named `home` in the `component` directory.

2. **Edit your component:**
    - Edit the file `home.component.html`, adding a "Hello World" message:
        ```html
        <p>Hello World!</p>
        ```

3. **Configure the routing:**
    - Follow the fourth lesson (below) to set up the `app.component` files and the `app.routes.ts` file to render the home component and view your changes in the browser.
