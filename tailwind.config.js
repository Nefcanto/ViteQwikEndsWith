module.exports = {
    presets: [
        require('./TailwindBase.js')
    ],
    theme: {
        extend: {
            colors: {
                'cta-hover': '#3e57d0',
                'cta-reverse': '#7b68ee',
                'icon': '#ff561d',
                'supertitle': '#FF9800',
                'dark': '#212129',
                'light': '#ececec',
                'darker': '#1c1c23',
            },
        },
        fontFamily: {
            'dosis': ['Dosis'],
            'catamaran': ['Catamaran']
        }
    }
}
