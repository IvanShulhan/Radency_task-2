/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cancel': 'url("../../assets/icons/cancel-svgrepo-com.svg")',
        'archive': 'url("./assets/icons/archive-box-fill-svgrepo-com.svg")',
        'archiveWhite': 'url("./assets/icons/archive-box-fill-svgrepo-com-white.svg")',
        'unarchive': 'url("./assets/icons/inbox-unarchive-fill-svgrepo-com.svg")',
        'delete': 'url("./assets/icons/delete-svgrepo-com.svg")',
        'deleteWhite': 'url("./assets/icons/delete-svgrepo-com-white.svg")',
        'edit': 'url("./assets/icons/pen.svg")',
        'task': 'url("./assets/icons/cart-svgrepo-com.svg")',
        'idea': 'url("./assets/icons/idea-svgrepo-com.svg")',
        'quote': 'url("./assets/icons/quote-right-svgrepo-com.svg")',
        'random': 'url("./assets/icons/human-head.svg")',
      }
    },
  },
  plugins: [],
}
