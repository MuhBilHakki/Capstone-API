const {
    getData
} = require('./handler');

const routes = [
    {
        method  : 'GET',
        path    : '/allDestinasi',
        handler : getData,
    }
];

module.exports = routes;