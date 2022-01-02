export default function (time, specific = false) {
  let date = new Date(+time);
  //格式化时间，前面不足两位补0
  let month = String(date.getMonth() + 1).padStart(2, 0);
  // console.log(month);
  let day = String(date.getDate()).padStart(2, 0)
  let str = '';
  if (specific) {
    let house = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);
    let second = String(date.getSeconds()).padStart(2, 0)
    str = `${date.getFullYear()}-${month}-${day}  ${house}:${minute}:${second}`
  } else {
    str = `${date.getFullYear()}-${month}-${day}`
  }
  return str
}