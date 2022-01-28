'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) =>  ({
  // Add custom action with slug instead of default id
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.service('api::category.category').findOne({ slug });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
