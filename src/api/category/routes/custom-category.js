'use-strict';

module.exports = {
  routes: [
    { // Path defined with a slug parameter
      method: 'GET',
      path: '/categories/slug/:slug',
      handler: 'category.findOneBySlug',
      config: {
        policies: [],
      },
    },
  ]
}
