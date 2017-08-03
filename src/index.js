'use strict';

const detect = () => {
    if (detect.status === null) {
        var pixelRatio = window.devicePixelRatio || 1;
        var offset = 12 * pixelRatio;
        var node = window.document.createElement('canvas');

        var ctx = node.getContext('2d');
        ctx.fillStyle = '#f00';
        ctx.textBaseline = 'top';
        ctx.font = '32px Arial';
        ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA

        detect.status = ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
    }

    return detect.status;
};

detect.status = null;

module.exports = detect;
