import { errors } from '../translations/errors.js';
import { env } from 'node:process';

export const getBotCredentials = () => {
  const token = env['TOKEN'];
  const applicationId = env['APPLICATION_ID'];

  if (!token) {
    throw new Error(errors.noToken);
  }

  if (!applicationId) {
    throw new Error(errors.noApplicationId);
  }

  return {
    applicationId,
    token,
  };
};

export const getStrapiUrl = () => {
  const url = env['STRAPI_URL'];

  if (!url) {
    throw new Error(errors.noStrapiUrl);
  }

  return url;
};
