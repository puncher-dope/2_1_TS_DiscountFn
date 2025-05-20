//тут вроде легко:
//если isInstallment=true(как я понял берет чел рассрочку или нет),
//то логика выполняется, функция вычисляет,
// а если false то просто чел оплачивает сумму со скидкой, а значит return price(просто без месяцев)

// const totalPrice = ({
//   price,
//   discount,
//   isInstallment,
//   months,
// }: {
//   price: number;
//   discount: number;
//   isInstallment: boolean;
//   months: number;
// }): number => {
//   if (isInstallment) {
//     const discountPrice: number = (price - (price / 100) * discount) / months;
//     return discountPrice;
//   } else {
//     const discountPriceWithoutInstallment: number =
//       price - (price / 100) * discount;
//     return discountPriceWithoutInstallment;
//   }
// };

// const price = totalPrice({
//   price: 60000,
//   discount: 30,
//   isInstallment: false,
//   months: 6,
// });
// console.log(price); // 7000 все работает и если false то 42000

//единственное, что мне не нравится это то, что мы же ЧТО-ТО деструктурируем, значит вроде объект какой-то нужен отдельный или тип и от него данные занимать

// ниже еще один пример напишу

type paramsPrice =
  | {
      price: number;
      discount: number;
      isInstallment: boolean;
      months: number;
    }
  | {
      price: number;
      discount: number;
      isInstallment: false;
    };

const totalPrice = (params: paramsPrice): number => {
  const discountPriceWithoutInstallment: number =
    params.price - (params.price / 100) * params.discount;

  if (params.isInstallment) {
    return discountPriceWithoutInstallment / params.months;
  }

  return discountPriceWithoutInstallment;
};

const price = totalPrice({
  price: 60000,
  discount: 30,
  isInstallment: true,
  months: 6,
});
console.log(price); // 7000 все работает и если false то 42000 то же самое короче получается
