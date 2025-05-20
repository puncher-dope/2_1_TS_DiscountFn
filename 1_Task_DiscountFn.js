"use strict";
//тут вроде легко:
//если isInstallment=true(как я понял берет чел рассрочку или нет),
//то логика выполняется, функция вычисляет,
// а если false то просто чел оплачивает сумму со скидкой, а значит return price(просто без месяцев)
const totalPrice = (params) => {
    const discountPriceWithoutInstallment = params.price - (params.price / 100) * params.discount;
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
