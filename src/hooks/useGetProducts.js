import { useEffect, useState } from 'react';
const useGetProducts = (API) => {
  const [products, SetProducts] = useState([]);
  // const callAPI = async () => {
  //   const data = await fetch(API);
  //   const res = await data.json();
  //   SetProducts(res);
  // };
  useEffect(() => {
    async function callAPI() {
      const data = await fetch(API);
      const res = await data.json();
      SetProducts(res);
    }
    callAPI();
  }, [API]);

  return products;
};
export { useGetProducts };
