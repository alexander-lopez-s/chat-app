'use strict';

/**
 * privatechat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::privatechat.privatechat');
