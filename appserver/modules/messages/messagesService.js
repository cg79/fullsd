const mongoQuery = require('../../utils/mongoQuery')();
const ObjectID = require("mongodb").ObjectID;
const coreUtils = require('../../utils/core.utils')();

class MessagesService {

  async addContactMessage(data) {
  //api/pub
  // {
  //   "proxy":{
  //   "method":"addContactMessage",
  //     "module": "messages"
  // },
  //   "data":{
  //   "message" :"salut",
  //     "email":"test@tes1t.com",
  //     "title" :"ttt"
  // }
  //
  // }

  const {email, message, title } = data;
  let {_id, toEmail } = data;

  if(!toEmail) {
    toEmail = "office@bestdeveloper.ro";
  }

  if(!_id) {
    const record = await mongoQuery.collection('messages').findOne({email:email});
    console.log(record);
    if (record){
      _id = record._id;
    }
  }
  

  var findCriteria = {};
  if (_id) {
    findCriteria._id = ObjectID(_id);
  } else {
    // findCriteria._id = new ObjectID();
    findCriteria.fromEmail  = email;
    findCriteria.toEmail = toEmail;
    findCriteria.hash = coreUtils.hash(email, toEmail);
  }


  var setCriteria = {
    '$push': {
      items: {
        id: coreUtils.uuid(),
        title: title ? title : "",
        date: new Date(),
        message: message ? message : "",
        read: false
      }
    },
    '$inc':{
        msgCount:1
    }
  }

  var dbMessages = await mongoQuery.collection('messages').update(findCriteria, setCriteria, {
    upsert: true
  });

  return dbMessages;
}

  async addReplyMessage(data) {

  const {_id, id, message } = data;


  var findCriteria = {};
  if (_id) {
    findCriteria._id = ObjectID(_id);
  } else {
    // findCriteria._id = new ObjectID();
    findCriteria.fromEmail  = email;
    findCriteria.toEmail = toEmail;
    findCriteria.hash = coreUtils.hash(email, toEmail);
  }


  var setCriteria = {
    '$push': {
      items: {
        id: coreUtils.uuid(),
        title: title ? title : "",
        date: new Date(),
        message: message ? message : "",
        read: false
      }
    },
    '$inc':{
      msgCount:1
    }
  }

  var dbMessages = await mongoQuery.collection('messages').update(findCriteria, setCriteria, {
    upsert: true
  });

  return dbMessages;
}


  async addItemForNews(data, tokenObj) {
  data.userId = tokenObj.id;
  const resp = await mongoQuery.collection('news').update(
    { _id: data._id },
    { $push: { items: data } });

  // console.log(resp);
  return resp;
}

  async getNews(data, tokenObj) {

  const filterCriteria = {};
  if(data.filter)
  {
    filterCriteria.newsType = {$eq:data.filter.newsType};
    if(data.filter.date)
    {
      // const filterDate = new Date(data.filter.date);
      // const isoDate = new Date(filterDate.toISOString());

      filterCriteria["date.jsdate"]= { $lte: data.filter.date};
      // filterCriteria["date.mili"]= { $lte: data.filter.mili};
    }

  }
  // data.userId = tokenObj.id;
  const query = mongoQuery.newsSchema.News
  //const query = mongoQuery.collection('news')
    .findOne(filterCriteria).sort({ "date.jsdate":-1 });//
  // .populate('title');

  const resp = await query; //mongoQuery.executeQuery(query);

  console.log(resp);
  return resp;
}

  async getAllNews(data, tokenObj) {

  const filterCriteria = {};
  if(data.filter)
  {
    filterCriteria.newsType = {$eq:data.filter.newsType};
    if(data.filter.date)
    {
      // const filterDate = new Date(data.filter.date);
      // const isoDate = new Date(filterDate.toISOString());

      //filterCriteria["date.jsdate"]= { $lte: data.filter.date};
      // filterCriteria["date.mili"]= { $lte: data.filter.mili};
    }

  }
  // data.userId = tokenObj.id;
  const query = mongoQuery.newsSchema.News
  //const query = mongoQuery.collection('news')
    .find(filterCriteria).sort({ p:1 });//
  // .populate('title');

  const resp = await query; //mongoQuery.executeQuery(query);

  console.log(resp);
  return resp;
}


  async solveExercise(data, tokenObj) {
  data.userId = tokenObj.id;
  data.date = new Date();

  const updateCriteria = {
    'items.resp': data.resp,
    date:new Date()
  };

  const resp = await mongoQuery.collection('exercises').update(
    {
      problemId: data._id,
      'items.userId': tokenObj.id
    },
    {
      $set:  updateCriteria
    },
    {
      upsert:true
    });

  console.log(resp);
  return resp;
}

  async getSolvedUsersCount(data, tokenObj) {
  data.userId = tokenObj.id;
  data.date = new Date();

  const updateCriteria = {
    'items.resp': data.resp
  };

  const resp = await mongoQuery.collection('exercises').count(
    {
      problemId: data._id
    });

  console.log(resp);
  return resp;
}

  async getSolvedSolutionForAUser(data, tokenObj) {
  data.userId = tokenObj.id;
  data.date = new Date();

  const updateCriteria = {
    'items.resp': data.resp
  };

  const resp = await mongoQuery.collection('exercises').find(
    {
      problemId: data._id,
      'items.userId': data.userId
    });

  console.log(resp);
  return resp;
}

  async getPagedSolutionsForAExercise(obj, tokenObj) {
  const filterCriteria = {
    problemId: obj.filter.problemId,
  };


  const fields = {problemId:1,'userId.email':1};
  var filter = mongoQuery.exercisesSchema.Exercises
    .find(filterCriteria)
    .populate('items.userId', 'firstName')
    // .select(fields);


  if (obj.pager) {
    obj.pager.itemsOnPage = parseInt(obj.pager.itemsOnPage);
    obj.pager.pageNo--;
    filter = filter.limit(obj.pager.itemsOnPage)
      .skip(obj.pager.itemsOnPage * obj.pager.pageNo)
    // query = query.sort({
    //   dateAdded: -1
    // });
  }
  // filter = filter.toArray();
  const solvedQuestions = await mongoQuery.executeQuery(filter);

  console.log(JSON.stringify(solvedQuestions));
  const count = await mongoQuery.collection('exercises').count(filterCriteria);
  return {
    items: solvedQuestions,
    count: count,
    pageNo: obj.pager ? obj.pager.pageNo + 1 : 0
  };
}

}

module.exports = new MessagesService();
