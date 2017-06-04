'use strict';

module.exports = function(Recommendation) {
  Recommendation.count = function(msg, cb){
    cb(null, 'The total for recommednations are' + msg)
  }

  Recommendation.remoteMethod('count', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'count', type: 'number'}
      });
};
