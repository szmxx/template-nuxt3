/*
 * @Author: cola
 * @Date: 2023-08-22 17:02:42
 * @LastEditors: cola
 * @Description:
 */
export function format(date: Date | number) {
  date = new Date(date);
  if (!date.getTime()) throw new Error("Invalid Date");

  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hour = formatNumber(date.getHours());
  const min = formatNumber(date.getMinutes());
  const second = formatNumber(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${min}:${second}`;
}

export function formatNumber(num: number) {
  return num < 10 ? `0${num}` : num;
}
