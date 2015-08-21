/**
 * http://openid.net/specs/openid-connect-core-1_0.html states exp/iat times are in secs, not millis
 *
 * Taken from: https://github.com/christiansmith/anvil-connect/blob/master/lib/time-utils.js
 *
 * @param {long} deltaSecs optional delta to be added to "now", in seconds.
 * @return {long} "now" in seconds, with deltaSecs added if it was supplied.
 * @api private
 */
exports.nowSeconds = function (deltaSecs) {
  var secs = Date.now()
  secs = Math.round(secs / 1000)

  if (deltaSecs) {
    secs += deltaSecs
  }
  return secs
}
