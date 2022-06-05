// retrieve two fractions from one fraction, whose numerator is one and denominator is natural number

const denominator = 4;
const result: string[] = [];

for (let i = 2; i <= 100; i++) {
  const _denominator = denominator * i / (i - 1);

  if (Number.isInteger(_denominator)) {
    console.log(`1 / ${denominator * i} + 1 / ${_denominator}`);
  }
}
