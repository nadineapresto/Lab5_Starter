// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Testing isPhoneNumber
test('valid phone number with area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('invalid phone number with letters', () => {
  expect(isPhoneNumber('123-abcd')).toBe(false);
});
test('invalid phone number with missing digits', () => {
  expect(isPhoneNumber('123-45')).toBe(false);
});

// Testing isEmail
test('valid simple email', () => {
  expect(isEmail('example@test.com')).toBe(true);
});
test('valid email with numbers', () => {
  expect(isEmail('example123@test.org')).toBe(true);
});
test('invalid email with missing @', () => {
  expect(isEmail('test.com')).toBe(false);
});
test('invalid email with no domain', () => {
  expect(isEmail('example@.com')).toBe(false);
});

// Testing isStrongPassword
test('valid strong password', () => {
  expect(isStrongPassword('Strong1234')).toBe(true);
});
test('valid strong password with underscore', () => {
  expect(isStrongPassword('Strong_1234')).toBe(true);
});
test('invalid password under min length', () => {
  expect(isStrongPassword('Hi')).toBe(false);
});
test('invalid password with special character', () => {
  expect(isStrongPassword('Strong#1234')).toBe(false);
});

// Testing isDate
test('valid date (MM/DD/YYYY)', () => {
  expect(isDate('04/10/2004')).toBe(true);
});
test('valid date (M/D/YYYY)', () => {
  expect(isDate('3/8/2025')).toBe(true);
});
test('invalid date (missing year)', () => {
  expect(isDate('04/10')).toBe(false);
});
test('invalid date (incorrect format)', () => {
  expect(isDate('2024-12-01')).toBe(false);
});

// Testing isHexColor
test('valid 3 char hex code', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid 6 char hex code', () => {
  expect(isHexColor('#000000')).toBe(true);
});
test('invalid hex code (too short)', () => {
  expect(isHexColor('#F')).toBe(false);
});
test('invalid hex code (non-hex chars)', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});