// A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friendsData = require("../app/data/friends");

module.exports = function(app) {
   
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        res.json(findMatch(newFriend, friendsData));
        friendsData.push(newFriend);
      });
  };

  function calculateMatchingScore(newPersonAnswers, possibleMatchPersonAnswers) {
    let totalDifference = 0;
    for (let i = 0; i < newPersonAnswers.length; i++) {
      totalDifference += Math.abs(newPersonAnswers[i] - possibleMatchPersonAnswers[i]);
    }
    return totalDifference;
  }

  function findMatch(newFriend, friendsData) {
    let minDifference = null; 
    let minDifferenceFriend = null; 
    for (let i = 0; i < friendsData.length; i++) {
      const totalDifference = calculateMatchingScore(newFriend.scores, friendsData[i].scores);
      if (minDifference === null || totalDifference < minDifference) {
        minDifference = totalDifference;
        minDifferenceFriend = friendsData[i];
      }
    }
    return minDifferenceFriend; 
  }

  
