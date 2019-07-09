// A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friendsData = require("../app/data/friends");

module.exports = function(app) {
   
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friendsData.push(newFriend);
        res.json(newFriend);
      });
    
  
  };

// function getSum(total, scores) {
//     const scores = parseInt(friendArray.scores);
//     return total + Math.round(scores);
// }

// getSum();

