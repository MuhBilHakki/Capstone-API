const {
    getData, getDataById
} = require('./handler');

const routes = [
    {
        method  : 'GET',
        path    : '/allDestinasi',
        handler : getData,
    },
    {
        method  : 'GET',
        path    : '/Destinasi/{id}',
        handler : getDataById,
    }
];

module.exports = routes;