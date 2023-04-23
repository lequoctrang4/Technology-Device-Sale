/*
 * Calculate origin price of product before it discounted 
 */
export const originalPrice = (price: string, discount: string) => {
    const d = parseInt(discount);
    const p = parseInt(price);
    return formatPrice(p * (100 + d) / 100);
}

/**
 * Format the product's price in thousand, separated by comma (default) 
 * or other sign, which is passed in the sign parameter
 * Ex: formatPrice(10000) -> 10,000
 * Ex: formatPrice(10000, '.') -> 10.000 
 */
export const formatPrice = (cost: number | string, sign = ',') => {
    let str = cost.toString()
    let result = ''
    while (str.length > 0) {
        result = sign + str.substring(str.length, str.length - 3) + result;
        str = str.substring(0, str.length - 3);
    }
    return result.slice(1);
}