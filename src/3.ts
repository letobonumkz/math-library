import { max } from 'math';

export const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);

export const product = (...numbers: number[]) => numbers.reduce((a, b) => a * b, 1);

export const pow = (base: number, exponent: number) => Math.pow(base, exponent);

export const abs = (number: number) => Math.abs(number);

export const round = (number: number, decimalPlaces?: number) => {
  if (decimalPlaces === undefined) return Math.round(number);
  else return +(Math.round(number + 'e+' + decimalPlaces) + 'e-' + decimalPaces);
};

export const ceil = (number: number) => Math.ceil(number);

export const floor = (number: number) => Math.floor(number);

export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

export const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

export const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

export const normalize = (value: number, min: number, max: number) => {
  return value / Math.abs(max - min);
};
