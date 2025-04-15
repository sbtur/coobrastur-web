import ky from 'ky';

export const apiClient = ky.create({
  prefixUrl: process.env.API_URL_COOB,
  retry: {
    limit: 0,
  },
});
