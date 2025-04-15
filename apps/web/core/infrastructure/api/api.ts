import ky from 'ky';

export const api_service = ky.create({
  prefixUrl: process.env.API_URL_COOB,
  retry: {
    limit: 0,
  },
});
