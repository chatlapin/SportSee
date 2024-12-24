# React + Vite

## Creating a project

```bash
npm create vite@latest sportsee -- --template react
```

## Running the project

```bash
npm run dev
```


## Installing Recharts

```bash
npm install recharts
```

## Installing TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configuring `tailwind.config.js`

```js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```


