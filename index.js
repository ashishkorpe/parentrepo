const _ = require('lodash');
const testrepo = require('testrepo');

module.exports = function(width,height,length){
    var result_volume = _.multiply(width,height,length);
    return result_volume;
};