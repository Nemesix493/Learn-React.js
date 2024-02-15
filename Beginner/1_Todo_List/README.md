# Todo List
## Exercise Statement

Create a simple todo list where users can add, edit, and delete tasks.

## Install ReactJs with Tailwindcss

1. Create the project directory:
```bash
    mkdir exemple
    cd ./exemple
```
2. Install React:
```bash
    npx create-react-app .
```
3. Install tailwind using (autoprefixer and postcss):
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
4. Update the tailwind config file:
```JavaScript
    // ./tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```
5. Load tailwind css in the main css file:
```css
    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
6. Now you can start your development server with:
```bash
    npm run start
``` 
