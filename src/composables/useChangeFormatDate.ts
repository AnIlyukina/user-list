export default (date: string, option: string): string => {

  let result = date;

 // меняем формат YYYY-MM-DD на DD.MM.YYYY
  if (option === 'DD.MM.YYYY') {
    result = date.split("-").reverse().join(".");
  }

  // меняет формат DD.MM.YYYY на YYYY-MM-DD
  if (option === 'YYYY-MM-DD') {
    result = date.split(".").reverse().join("-");
  }
  
  return result;

}