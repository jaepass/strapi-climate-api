'use strict';

/**
 * default-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-page.default-page');
