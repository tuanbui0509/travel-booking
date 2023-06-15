export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// tỉ lệ giá vé cho trẻ em theo người lớn
export const RATE_PRICE_OF_CHILD_WITH_ADULT = 0.5;
// mức chênh lệch cho chép giữa trẻ em và người lớn
export const RATE_QUANTITY_OF_CHILD_WITH_ADULT = 2;

export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const isPhoneValid = (phone) => {
  // Kiểm tra số điện thoại có đủ 10 số và số 0 ở đầu không
  return phone.length === 10 && phone.startsWith("0");
};
export const isPassportNumberValid = (passportNumber) => {
  const passportNumberPattern = /^[A-ZĐ]{1}[0-9]{7}$/; // Bắc đầu từ chữ In hoa và tiếp theo là 7 chữ số

  return passportNumberPattern.test(passportNumber);
};