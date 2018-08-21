const newsService = require('../modules/news/newsService');
const securityService = require('../modules/security/security');
const messagesService = require('../modules/messages/messagesService');
const loggerService = require('../modules/logger/loggerService');

function getModule(name) {
  console.log(name);
  switch (name){
    case 'news':{
      return newsService;
      break;
    }
    case 'log':{
      return loggerService;
      break;
    }
    case 'security':{
      return securityService();
      break;
    }
    case 'messages':{
      return messagesService;
      break;
    }
  }

};

module.exports.getModule = (name) => getModule(name);
