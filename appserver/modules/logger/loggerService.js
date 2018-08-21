const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require('mongodb').ObjectID;

class LoggerService {
  async add(data, query = {}) {
  
   

    const dbNews = await mongoQuery.collection('log').insert(
     {
      data: new Date()
    });

    return {
      ok:1
    };
  }

  

  


  async page(obj, tokenObj) {
    const filterCriteria = {
    };

    let filter = null;

    if (obj.pager) {
      obj.pager.itemsOnPage = parseInt(obj.pager.itemsOnPage);
    }

    const { itemsOnPage } = obj.pager;
    const { pageNo } = obj.pager;
    console.log(pageNo);
    filter = await mongoQuery.collection('log')
    .find()
    .skip(itemsOnPage*(pageNo-1))
    .limit(itemsOnPage)
    .toArray();

const count = await mongoQuery.collection('log').count(filterCriteria);

  return {
      items: filter,
        count,
        pageNo
  };

  }
}

module.exports = new LoggerService();
