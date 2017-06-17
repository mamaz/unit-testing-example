import formatter from '../Helpers/CurrencyFormatter/CurrencyFormatter';

const rowGasolineData = (gasolineJSON) => {
  let title = gasolineJSON.nama &&
                gasolineJSON.produsen &&
                gasolineJSON.produsen.concat(` ${gasolineJSON.nama}`);
  if (!title && gasolineJSON.nama) title = gasolineJSON.nama;

  const price = gasolineJSON.harga && `Rp ${formatter(gasolineJSON.harga)}`;

  return {
    id: gasolineJSON.id,
    img: gasolineJSON.img,
    title: title || 'N/A',
    price: price || 'Rp 0'
  };
};

export default rowGasolineData;
