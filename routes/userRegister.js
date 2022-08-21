const express = require('express');
// calling an router
const router = express.Router();
const bcrypt = require('bcryptjs');



router.post("/user-register", async (req, res) => {

    const myPlaintextPassword = req.body.password;
    await bcrypt.hash(myPlaintextPassword, 0, function (err, hash) {
  
      // Store hash in your password DB.
  
      connection.query("call user_register(?,?)", [req.body.email, hash], (error, results, fields) => {
        if (!error) {
          res.status(200).json(results[0])
        } else {
          res.status(400).json("Failed To Get An Data" + error)
        }
      }
      )
    });
  }
  )

  router.post("/user-login", async (req, res) => {

    connection.query("call user_login(?)", [req.body.email], async (error, results, fields) => {
      if (!error) {
  
        if (results[0][0].status_code == 200) {
          if (await bcrypt.compare(req.body.password, results[0][0].password)) {
            res.status(200).json([{ msg: 'Your Login Successfully', status_code: 200 }])
          } else {
            res.status(200).json([{ msg: 'Invalid Password', status_code: 404 }])
          }
        } else {
          res.status(200).json([{ msg: 'Invalid Username', status_code: 404 }])
        }
  
  
  
      } else {
        res.status(400).json("Failed To Get An Data" + error)
      }
    }
    )
   
  }
  )

module.exports = router;