export default function age(day, month, year) {
  const today = [new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()];
  const birthday = [day, month, year];

  if (today[1] < birthday[1] || (today[1] == birthday[1] && today[0] < birthday[0])) {
    return today[2] - birthday[2] - 1;
  } else {
    return today[2] - birthday[2];
  }
}
