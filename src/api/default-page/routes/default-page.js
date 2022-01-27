'use strict';

/**
 * default-page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::default-page.default-page');
