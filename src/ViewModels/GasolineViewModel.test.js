import rowGasolineData from './GasolineViewModel';

describe('Gasoline View Model', () => {
  it('should be able to convert raw json gasoline data', () => {
    const mock = {
      id: 12,
      img: 'http://image.url/img.png',
      nama: 'Pertamax 92',
      produsen: 'Pertamina',
      harga: 9000
    };
    const result = rowGasolineData(mock);
    expect(result).toEqual({
      id: 12,
      img: 'http://image.url/img.png',
      title: 'Pertamina Pertamax 92',
      price: 'Rp 9.000'
    });
  });

  it('should be able to return default value if no nama and produsen', () => {
    const mock = {
      id: 12,
      img: 'http://image.url/img.png',
      harga: 9000
    };

    const result = rowGasolineData(mock);
    expect(result).toEqual({
      id: 12,
      img: 'http://image.url/img.png',
      title: 'N/A',
      price: 'Rp 9.000'
    });
  });

  it('should be able to return nama if no produsen', () => {
    const mock = {
      id: 12,
      img: 'http://image.url/img.png',
      nama: 'Pertamax 92',
      harga: 9000
    };

    const result = rowGasolineData(mock);
    expect(result).toEqual({
      id: 12,
      img: 'http://image.url/img.png',
      title: 'Pertamax 92',
      price: 'Rp 9.000'
    });
  });

  it('should be able to return default value if no price is provided', () => {
    const mock = {
      id: 12,
      img: 'http://image.url/img.png',
      nama: 'Pertamax 92',
      produsen: 'Pertamina'
    };

    const result = rowGasolineData(mock);
    expect(result).toEqual({
      id: 12,
      img: 'http://image.url/img.png',
      title: 'Pertamina Pertamax 92',
      price: 'Rp 0'
    });
  });
});
