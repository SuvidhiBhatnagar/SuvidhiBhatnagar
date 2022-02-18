var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json({
    users: [
     { firstname: 'suvidhi',    
      lastname:'bhatnagar',
       age:22 },
       {
        firstname: 'sushmita',    
        lastname:'agarwal',
         age:26
       },
       {
        firstname: 'mayank',    
        lastname:'sharma',
         age:60
       },
       {
        firstname: 'abhi',    
        lastname:'jain',
         age:40
       },
       {
        firstname: 'rehan',    
        lastname:'shah',
         age:20
       }
    ]
    })
});




module.exports = router;