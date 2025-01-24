const getRoute = (route) => {
    const routes = {
        user: "/user",
    };
    return routes[route];
};
export default getRoute;
