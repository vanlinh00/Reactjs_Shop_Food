export const formatter = (number)=>{
return new Intl.NumberFormat("vi-VN",{
    sytle:"currency",
    currency:"VND",
}).format(number);
}