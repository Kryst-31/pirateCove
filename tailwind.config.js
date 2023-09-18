/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/menu/menu.component.{html,ts}",
    "./src/app/menu/components/menu-item/menu-item.component.{html,ts}",
    "./src/app/home/home.component.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

