'use strict';

module.exports = function encodeBuffer(buffer, mediaType) {
  if (mediaType === 'image/svg+xml') {
    return 'charset=utf-8,' + encodeURIComponent(buffer.toString('utf8').trim());
  }
  return 'base64,' + buffer.toString('base64');
};
