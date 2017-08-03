'use strict';

module.exports = function() {
    var pixelRatio = window.devicePixelRatio || 1;
    var offset = 12 * pixelRatio;
    var node = window.document.createElement('canvas');

    var ctx = node.getContext('2d');
    ctx.fillStyle = '#f00';
    ctx.textBaseline = 'top';
    ctx.font = '32px Arial';
    ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA

    return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
};
