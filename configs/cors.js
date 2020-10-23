//Replace the asterik with frontend url once frontend deployed.
var whitelist = [];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.length === 0) {
      callback(null, true);
    } else {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
};

module.exports = corsOptions;
