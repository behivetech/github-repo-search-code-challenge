/**
    These type of variables are typically set in a .env file, but since this is a
    test, they were moved to this config file so additianal setup would not be required
    to run this locally.
*/
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Github Repository Search';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';
export const SEARCH_THROTTLE = process.env.NEXT_PUBLIC_SEARCH_THROTTLE || 1000;
export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || `https://api.github.com`;
