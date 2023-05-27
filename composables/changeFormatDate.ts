export default (date: string, option: string): string => {
  console.log(date, option)
  let result = date

  // меняет формат DD.MM.YYYY на YYYY-MM-DD
  if (option === 'DD.MM.YYYY') {
    result = date.split("-").reverse().join(".");
  }

  // меняем формат YYYY-MM-DD на DD.MM.YYYY
  if (option === 'YYYY-MM-DD') {
    result = date.split(".").reverse().join("-");
  }
  
  return result

}