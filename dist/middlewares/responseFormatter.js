const responseFormatter = (_req, res, next) => {
    const oldJson = res.json;
    res.json = function (data) {
        const formattedResponse = {
            status: res.statusCode,
            message: res.statusMessage,
            data: data,
        };
        return oldJson.call(this, formattedResponse);
    };
    next();
};
export default responseFormatter;
