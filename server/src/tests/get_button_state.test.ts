
import { describe, expect, it } from 'bun:test';
import { getButtonState } from '../handlers/get_button_state';

describe('getButtonState', () => {
  it('should return static button state', async () => {
    const result = await getButtonState();

    expect(result.label).toEqual('Click here');
    expect(result.color).toEqual('orange');
    expect(result.disabled).toEqual(false);
    expect(result.visible).toEqual(true);
  });

  it('should return same state regardless of input', async () => {
    const result1 = await getButtonState();
    const result2 = await getButtonState({});
    
    expect(result1).toEqual(result2);
    expect(result1.label).toEqual('Click here');
    expect(result1.color).toEqual('orange');
  });
});
