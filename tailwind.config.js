module.exports = {
  content: [
    './app/views/**/*.html.{erb,haml,html,slim}',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './config/initializers/heroicon.rb',
    './app/components/**/*.html.{erb,slim}',
    './app/components/**/*.rb',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ]
}
