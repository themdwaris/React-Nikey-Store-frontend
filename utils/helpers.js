export const getDiscountedPrice = (oPrice,dPrice)=>{
const discount = oPrice-dPrice
const getPercentage = (discount/oPrice)*100
return getPercentage.toFixed(0)
}