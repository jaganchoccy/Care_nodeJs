var crypto = require("crypto");


const token = (req, res, next) => {
    let verb = req.method;
    let path = req.url.slice(1);
    let type = 'docs';
    var date = new Date();
    let gmt = date['toGMTString']();
    const time = gmt.slice(0, -6) + '00 GMT'


    var db_token = getAuthorizationTokenUsingMasterKey(verb, type, path, time, 'mI8H6sEjFGjrWjMVgXs1r4LMO3g0uCWsXY1txkcnqzSI7OCIBS3BD0oTbJqm3hU63ylW7Yr695HLRKi9OYtFfQ==')
    req.dbToken = db_token;
    req.dbTime = time;
    req.dbType = type;


    function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {
        var key = Buffer.from(masterKey, "base64");
        var text = (verb || "").toLowerCase() + "\n" +
            (resourceType || "").toLowerCase() + "\n" +
            (resourceId || "") + "\n" +
            date.toLowerCase() + "\n" +
            "" + "\n";

        var body = Buffer.from(text, "utf8");
        var signature = crypto.createHmac("sha256", key).update(body).digest("base64");
        var MasterToken = "master";
        var TokenVersion = "1.0";
        return encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature);
    }
    next();

}

module.exports = { token }