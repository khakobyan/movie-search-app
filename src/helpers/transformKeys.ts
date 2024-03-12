export const transformKeys = (obj: Record<string, any>): Record<string, any>  =>{
  const transformedObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/^#/, '').toLowerCase();
      transformedObj[newKey] = obj[key];
    }
  }
  return transformedObj;
}
