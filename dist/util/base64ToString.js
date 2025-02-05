const base64ToString = (base64) => {
    const data = Buffer.from(base64, "base64").toString("ascii");
    return data;
};
export default base64ToString;
