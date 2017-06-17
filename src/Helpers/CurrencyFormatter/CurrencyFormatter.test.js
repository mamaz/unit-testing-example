import convertToCurrencyFormat from './CurrencyFormatter';

describe('Currency ', () => {
  const single = 1;
  const tens = 10;
  const hundred = 100;
  const thousand = 1000;
  const tenThousand = 10000;
  const hundredThousand = 100000;
  const mio = 1000000;
  const tenMillion = 10000000;
  const hundredMillion = 100000000;
  const bio = 1000000000;
  const tenBio = 10000000000;
  const hundredBio = 100000000000;

  test('it should not be able to convert single number, tens and hundred', () => {
    expect(convertToCurrencyFormat(single)).toBe('1');
    expect(convertToCurrencyFormat(tens)).toBe('10');
    expect(convertToCurrencyFormat(hundred)).toBe('100');
  });

  test('it should be able to convert thousand to dot formatted', () => {
    expect(convertToCurrencyFormat(thousand)).toBe('1.000');
  });

  test('it should be able to convert ten thousand to dot formatted', () => {
    expect(convertToCurrencyFormat(tenThousand)).toBe('10.000');
  });

  test('it should be able to convert hundred thousand to dot formatted', () => {
    expect(convertToCurrencyFormat(hundredThousand)).toBe('100.000');
  });

  test('it should be able to convert million to dot formatted', () => {
    expect(convertToCurrencyFormat(mio)).toBe('1.000.000');
  });

  test('it should be able to convert ten million to dot formatted', () => {
    expect(convertToCurrencyFormat(tenMillion)).toBe('10.000.000');
  });

  test('it should be able to convert hundred million to dot formatted', () => {
    expect(convertToCurrencyFormat(hundredMillion)).toBe('100.000.000');
  });

  test('it should be able to convert billion to dot formatted', () => {
    expect(convertToCurrencyFormat(bio)).toBe('1.000.000.000');
  });

  test('it should be able to convert ten billion to dot formatted', () => {
    expect(convertToCurrencyFormat(tenBio)).toBe('10.000.000.000');
  });

  test('it should be able to convert hundred billion to dot formatted', () => {
    expect(convertToCurrencyFormat(hundredBio)).toBe('100.000.000.000');
  });
});
