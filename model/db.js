/**
 * Created by chinaskin on 16/7/28.
 */
var settings = require('../setting'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
    module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});
