const {
    getData
} = require('./handler');

const routes = [
    {
        method  : 'POST',
        path    : '/allDestinasi',
        handler : getData,
    }
];

module.exports = routes;