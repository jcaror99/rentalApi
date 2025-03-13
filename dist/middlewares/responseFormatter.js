import getErrorMessage from "../util/getErrorMessage.js";
const responseFormatter = (_req, res, next) => {
    const oldJson = res.json;
    res.json = function (data) {
        const formattedResponse = {
            status: res.statusCode,
            message: getErrorMessage(res.statusCode.toString()),
            data: data,
        };
        return oldJson.call(this, formattedResponse);
    };
    next();
};
export default responseFormatter;
