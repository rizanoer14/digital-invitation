module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
     colors: {
      'rose': {
        'surface-1': '#F9F2F2',
        'surface-2': '#F6EAEA',
        'border-1': '#E3BEBE',
        'border-2': '#D29797',
        'main': '#BE7575',
        'text-dark': '#633939',
        'hover': '#A85A5A',
        'press': '#8C4949',
      },
      'gray': {
        'white': "#FFF",
        'surface': "#F6F6F6",
        'surface-disabled': "#D1D1D1",
        "border": "#E7E7E7",
        "tertiary": "#5D5D5D",
        "secondary": "#454545",
        "black": "#121212",
      },
     },
     lineHeight: {
      '120': '120%'
     },
     backgroundImage: {
      'pattern': 'url(./src/assets/images/event-header.webp)'
     },
    },
  },
  plugins: [],
}
