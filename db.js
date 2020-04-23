var crypto = require("crypto");  


var db_token = getAuthorizationTokenUsingMasterKey('POST','docs','dbs/PatientVitals/colls/CaliberBBContainer','Wed, 22 Apr 2020 10:00:47 GMT','mI8H6sEjFGjrWjMVgXs1r4LMO3g0uCWsXY1txkcnqzSI7OCIBS3BD0oTbJqm3hU63ylW7Yr695HLRKi9OYtFfQ==')

console.log(db_token);
function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {  
    var key = new Buffer(masterKey, "base64");  
  
    var text = (verb || "").toLowerCase() + "\n" +   
               (resourceType || "").toLowerCase() + "\n" +   
               (resourceId || "") + "\n" +   
               date.toLowerCase() + "\n" +   
               "" + "\n";  
  
    var body = new Buffer(text, "utf8");  
    var signature = crypto.createHmac("sha256", key).update(body).digest("base64");  
  
    var MasterToken = "master";  
  
    var TokenVersion = "1.0";  
  
    return encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature);  
}