import { Object } from "../types/types";

const base64ToObject = (base64: string): Object => {
  const data = Buffer.from(base64, "base64").toString("ascii");
  const [name, password] = data.split(":");
  try {
    return { name, password };
  } catch (error) {
    throw new Error("Invalid base64 string");
  }
};

export default base64ToObject;
