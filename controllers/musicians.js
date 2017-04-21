// exports.findAll = function(req, res){
//   res.send([{
//     "id": 1,
//     "name": "Max",
//     "band": "Maximum Pain",
//     "instrument": "guitar"
//   }]);
// };
// exports.findById = function() {};
// exports.add = function() {};
// exports.update = function() {};
// exports.delete = function() {};



var mongoose = require('mongoose'),
Musician = mongoose.model('Musician');

// Find all
exports.findAll = function(req, res){
  Musician.find({},function(err, results) {
    return res.send(results);
  });
};

// Find by Id
exports.findById = function(req, res){
  var id = req.params.id;
  Musician.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

// Add
exports.add = function() {};

// Update
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Musician.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d musicians', numberAffected);
      return res.send(202);
  });
}

// Delete
exports.delete = function() {};


// Create
exports.import = function(req, res){
  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};