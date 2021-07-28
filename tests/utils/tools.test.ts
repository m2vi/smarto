import capitalize from '@utils/tools/text/capitalize';
import reverse from '@utils/tools/text/reverse';

test('Capitalize a string', () => {
  expect(capitalize('test')).toBe('Test');
  expect(capitalize('test')).not.toBe('test');
});

test('Reverse a string', () => {
  expect(reverse('test')).toBe('tset');
  expect(reverse('test')).not.toBe('test');
});
