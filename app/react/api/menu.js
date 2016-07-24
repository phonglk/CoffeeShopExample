import http from '../utils/http';

const SizeSorting = ['Tall', 'Grande', 'Venti'];
const TypeSorting = ['Coffee', 'Tea'];

function sortSize(array, key = 'Name', order = SizeSorting) {
  return array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
}

export function getMenu() {
  return new Promise((resolve, reject) => {
    http.get('/api/view/order').then(response => {
      try {
        const { products, sizes, variants } = response;
        const sizeList = sortSize(sizes, 'Name');
        const productList = products
          .map(product => {
            const id = product.Id;
            return {
              ...product,
              sizeList: sortSize(variants.filter(({ ProductId }) => ProductId === id), 'SizeName'),
            };
          })
          .sort((a, b) => {
            // sort by type
            let typeCheck = TypeSorting.indexOf(a.Type) - TypeSorting.indexOf(b.Type);
            if (typeCheck === 0) typeCheck = a.Id - b.Id; // if same type, sort by id
            return typeCheck;
          });
        resolve({ productList, sizeList });
      } catch (e) {
        console.error(e);
        console.log('Sorry! An error has occured');
        reject(e);
      }
    });
  });
}

export function makeOrder(id) {
  return http.post(`/api/order/${id}`);
}
