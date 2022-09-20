const Currency_Formatter = new Intl.NumberFormat( undefined, {currency: 'ZAR', style: 'currency'} );
 export const formatCurrency = (number) => {
    return Currency_Formatter.format(number);
}