function cleanse(a, b) {
  a.split(b);
  let response = "";
  if(Array.isArray(a) && a.length > 1) {
    a.map((e) => {
      response += e;
    });
  } else {
    response = a;
  }
  return response;
}

/**
 * Remove the function above and replace with the beneath to get a working function.
 */
// function cleanse(a, b) {
//   let splitString = a.split(b);
//   let response = "";
//   if(Array.isArray(splitString) && splitString.length > 1) {
//     splitString.map((e) => {
//       response += e;
//     });
//   } else {
//     response = splitString;
//   }
//   return response;
// }

module.exports = cleanse;