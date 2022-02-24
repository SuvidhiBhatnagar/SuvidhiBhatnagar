var express = require('express');
const mysql = require('mysql2');

var router = express.Router();


// db connection

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'batch_2022_suvidhi'
});


function adduser({ first_name, last_name, age, gender }) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO users (first_name,last_name,age,gender,created_at) VALUES ("${first_name}","${last_name}",${age},"${gender}","${new Date().toTimeString().split(" ")[0]}")`,
      function (err, results, fields) {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      }
    )
  })
}

// function updateuser({ first_name, last_name, age, gender }) {
//   return new Promise(function (resolve, reject) {
//     connection.query(`INSERT INTO users (first_name,last_name,age,gender,created_at) VALUES ("${first_name}","${last_name}",${age},"${gender}","${new Date().toTimeString().split(" ")[0]}")`,
//       function (err, results, fields) {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(results)
//         }
//       }
//     )
//   })
// }




//get all users
router.get('/', function (req, res, next) {

  connection.query(
    `SELECT * from users`,
    function (err, results, fields) {
      console.log(results);
      res.send(results)
    }
  );


});


//get users by particular id
router.get('/:id', function (req, res, next) {

  var id = req.params.id;
  connection.query(
    "select * from users where ID = " + id,
    function (err, results, fields) {
      console.log(results);
      res.send(results)
    }
  );
});


// add users
router.post('/', function (req, res, next) {
  adduser(req.body).then(function (results) {
    // results = JSON.parse(results);
    console.log(results);
    // res.send(results)
  }).catch(function (err) {
    console.log(err);




    res.send(err)
  })

});

//delete users by id
router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  console.log(id);
  connection.query(
    "DELETE  FROM users where ID = " + id,
    function (err, results, fields) {
      console.log(results);
      res.send(results)
    }
  );
});


//update id
// router.put('/:id', function (req, res, next) {
//   var first_name = req.body.first_name;
//   var last_name = req.body.last_name;
//   var age = req.body.age;
//   var gender = req.body.gender;

//   var id = req.params.id;

//   connection.query(`UPDATE users SET (first_name,last_name,age,gender,created_at) VALUES ("${first_name}","${last_name}",${age},"${gender}","${new Date().toTimeString().split(" ")[0]}")  WHERE id = ${id} `,
//     function (err, results, fields) {
//       console.log(results);
//       res.send(results)
//     }
//   );
// })

//   // updateuser(req.body).then(function (results) {
//   //   // results = JSON.parse(results);
//   //   console.log(results);
//   //   // res.send(results)
//   // }).catch(function (err) {
//   //   console.log(err);
//   //   res.send(err)
//   // })

//   // connection.query(
//   //   "UPDATE users SET (first_name,last_name,age,gender,created_at) where ID = " + id,
//   //   function (err, results, fields) {
//   //     console.log(results); 
//   //     res.send(results)
//   //   }
//   // );
// });







module.exports = router;