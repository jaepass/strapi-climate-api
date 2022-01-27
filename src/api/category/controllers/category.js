'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) =>  ({
  // Replace category findOne action with slug instead of default id
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;
    const { query } = ctx;

    // if (!query.filters) {
    //   query.filters = {};
    // }

    // query.fitlers.slug = {
    //   $eq: slug,
    // }

    const entity = await strapi.service('api::category.category').findOne({ slug });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
