var crypto = require('crypto');

module.exports = {
  email: 'hello@martinrue.com',
  title: 'Blog Title Here',
  style: 'monokai'
};

var gravatarHash = crypto.createHash('md5').update(module.exports.email).digest('hex');
module.exports.gravatar = 'http://www.gravatar.com/avatar/' + gravatarHash;
