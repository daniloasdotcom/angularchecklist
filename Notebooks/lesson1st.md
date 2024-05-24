## fifth works!

### Show/Hide Content

- **Edit the html file**
    - Erase the html code in the `app.component.html` file, let only the line:
        ```html
        <router-outlet/>
        ```

- **Edit `app.routes.ts` file**
    - Edit your `app.routes.ts` file like below:
        ```typescript
        import { Routes } from '@angular/router';
        import { HomeComponent } from './components/home/home.component';

        export const routes: Routes = [
            {
                path: "",
                component: HomeComponent
            }
        ];
        ```

- **Remember: to run your application**
    - To run your application, type on the terminal:
        ```sh
        ng serve
        ```
    - The Angular CLI will provide a local development server allowing you to view your project in the browser and automatically refresh when changes occur in the files.
    - By default, Angular CLI will provide the server:
        ```
        http://localhost:4200/
        ```
