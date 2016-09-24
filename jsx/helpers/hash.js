"use strict";
function hash(aString) {
    var hash = 0;
    var i, chr;
    var len = aString.length;
    for (i = 0; i < len; i++) {
        chr = aString.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}
exports.hash = hash;
//# sourceMappingURL=hash.js.map