import { SHARED_CONFIG } from './index';

test('core test', () => {
  expect(SHARED_CONFIG.DUMMY).toBe(true);
});
