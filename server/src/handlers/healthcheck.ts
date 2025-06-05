
// This handler is not needed for a static React button
// Keeping minimal implementation to avoid breaking imports
export const healthcheck = async () => {
  throw new Error('Backend not needed for static button');
};
