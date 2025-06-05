
import { describe, it, expect } from 'bun:test';
import { healthcheck } from '../handlers/healthcheck';

describe('healthcheck', () => {
  it('should indicate backend is not needed', async () => {
    await expect(healthcheck()).rejects.toThrow('Backend not needed for static button');
  });
});
