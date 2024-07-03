<a href="https://github.com/daniloasdotcom/angularchecklist/blob/main/Notebooks/English/eng_notebook.md"><button>SUMMARY</button></a>

## Create and Run a Project

1. **Indicate to your IDE the directory to store your project:**
    - Open your IDE.
    - Click on **File**.
    - Click on **Open Folder**.
    - Open the directory where you will place the folder for your project.

2. **Create a new project:**
    - Click on the **Terminal** tab.
    - Then click on **New Terminal**.
    - In the terminal, type:
        ```sh
        ng new project_name
        ```
    - Press **Enter**.
    - You will see the following question:
        ```plaintext
        Which stylesheet format would you like to use? (Use arrow keys)
        ```
    - With the following options:
        ```plaintext
        > CSS [ https://developer.mozilla.org/docs/Web/CSS ]
          Sass (SCSS) [ https://sass-lang.com/documentation/syntax#scss ]
          Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
          Less [ http://lesscss.org ]
        ```
    - Move the arrow `>` using the arrow keys on your keyboard and choose **Sass (SCSS)...**, click **Enter** to confirm.
    - A second question will be asked:
        ```plaintext
        ? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?
        ```
    - The choice between SSR and SSG/Prerendering depends on the specific needs of your project. If you require better search engine indexing and faster initial loading times, SSR may be the best option. On the other hand, if your application is primarily static and doesn't need dynamic server data, SSG/Prerendering may be more suitable.
    - Respond with **Y** and press **Enter**.
    - Wait until the project files are generated.

3. **Run your project:**
    - After the project creation is completed, type in the terminal:
        ```sh
        cd project_name
        ```
    - Now you are inside your Angular project directory.
    - To run your first project, type in the terminal:
        ```sh
        ng serve
        ```
    - The Angular CLI will provide a local development server allowing you to view your project in the browser and automatically refresh when changes occur in the files.
    - By default, Angular CLI will provide the server [http://localhost:4200/](http://localhost:4200/).

### Video

To assist you further, here is a tutorial video:

<a href="https://youtu.be/3a3157z68yA">
    <img src="https://img.youtube.com/vi/3a3157z68yA/maxresdefault.jpg" alt="Watch the video" style="width:600px;"/>
</a>