import domain from '@utils/validate/domain';
import ip from '@utils/validate/ip';
import link from '@utils/validate/link';
import mail from '@utils/validate/mail';
import phone from '@utils/validate/phone';

test('Validate a domain properly', () => {
  expect(domain('www.google.com')).toBe(true);
  expect(domain('google')).toBe(false);
});

test('Validate an ip properly', () => {
  expect(ip('8.8.8.8')).toBe(true);
  expect(ip('999.999.999.999')).toBe(false);
});

test('Validate a link properly', () => {
  expect(link('https://www.google.com/')).toBe(true);
  expect(link('https:/www.google/')).toBe(false);
});

test('Validate an email address properly', () => {
  expect(mail('test@gmail.com')).toBe(true);
  expect(mail('test.gmail@com')).toBe(false);
});

test('Validate a phone number properly', () => {
  expect(phone('+431234457707')).toBe(true);
  expect(phone('1234')).toBe(false);
});
