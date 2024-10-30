import { CustomObject } from "./types";

function addObjToRes(obj: CustomObject, res: CustomObject) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && !Array.isArray(value)) {

      if (res[key] === undefined) res[key] = {};

      addObjToRes(obj[key], res[key])
    } else {
      res[key] = value;
    }
  }
}

export function combineTwoObjects(obj1: CustomObject, obj2: CustomObject) {
  const res = structuredClone(obj1);
  
  addObjToRes(obj2, res);
  
  return res;
}
