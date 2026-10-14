// with pick function I use to select *fields* for filtering and searching
// if any fields are not match with data field then pick function ignore it and send all data.
// use generic type for reusable function

const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[]
) => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  //Object.hasOwnProperty.call(obj, key) => check if field and value are in data. if found then function pick it
  // console.log(finalObj);
  return finalObj;
};
export default pick;
