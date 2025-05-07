// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Tests Numbers
test('tests (619)703-3883 as valid phone number', () => {
  expect(isPhoneNumber('(619)703-3883')).toBe(true);
});

test('tests (664)304-9081 as valid phone number', () => {
  expect(isPhoneNumber('(664)304-9081')).toBe(true);
});

test('tests 6725649043 as invalid phone number', () => {
  expect(isPhoneNumber('6725649043')).toBe(false);
});

test('tests 747.024.4821 as invalid phone number', () => {
  expect(isPhoneNumber('747.024.4821')).toBe(false);
});

// Tests Emails
test('tests jodei@hello.com as valid email', () => {
  expect(isEmail('jodei@hello.com')).toBe(true);
});

test('tests destroyer29@gmail.com as valid email', () => {
  expect(isEmail('destroyer29@gmail.com')).toBe(true);
});

test('tests @gmail.edu as invalid email', () => {
  expect(isEmail('@gmail.edu')).toBe(false);
});

test('tests proffesion20.com as invalid email', () => {
  expect(isEmail('proffesion20.com')).toBe(false);
});

// Tests Passwords
test('tests Hello90Good as a strong password', () => {
  expect(isStrongPassword('Hello90Good')).toBe(true);
});

test('tests T9_0Y2_0JD as a strong password', () => {
  expect(isStrongPassword('T9_0Y2_0JD')).toBe(true);
});

test('tests 90HelloBad as a weak password', () => {
  expect(isStrongPassword('90HelloBad')).toBe(false);
});

test('tests THisISaReallyLongPassword as a weak password', () => {
  expect(isStrongPassword('THisISaReallyLongPassword')).toBe(false);
});


// Tests Dates
test('tests 03/20/2004 as a correct date', () => {
  expect(isDate('03/20/2004')).toBe(true);
});

test('tests 3/8/2004 as a correct date', () => {
  expect(isDate('3/8/2004')).toBe(true);
});

test('tests 301/80/2004 as incorrect date', () => {
  expect(isDate('301/80/2004')).toBe(false);
});

test('tests 02//2012 as incorrect date', () => {
  expect(isDate('02//2012')).toBe(false);
});

// Tests Colors
test('tests #2F0 as a valid hex code', () => {
  expect(isHexColor('#2F0')).toBe(true);
});

test('tests #a7f3A9 as a valid hex code', () => {
  expect(isHexColor('#a7f3A9')).toBe(true);
});

test('tests #a7f3 as invalid hex code', () => {
  expect(isHexColor('#a7f3')).toBe(false);
});

test('tests #1 as invalid hex code', () => {
  expect(isHexColor('#1')).toBe(false);
});

