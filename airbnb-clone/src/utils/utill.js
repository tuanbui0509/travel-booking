export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// tỉ lệ giá vé cho trẻ em theo người lớn
export const RATE_PRICE_OF_CHILD_WITH_ADULT = 0.5;
// mức chênh lệch cho chép giữa trẻ em và người lớn
export const RATE_QUANTITY_OF_CHILD_WITH_ADULT = 2;
