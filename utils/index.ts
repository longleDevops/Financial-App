
// export const fetchStocks = async (funcName: string, symbol: string) => {
//   const url = `https://alpha-vantage.p.rapidapi.com/query?function=${funcName}&symbol=${symbol}&datatype=json`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '8f54d4c5c3msh2a085748e236832p1f8830jsndd3103bf567c',
//       'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       throw new Error(`HTTP error check with fetchStocks api function! Status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }






