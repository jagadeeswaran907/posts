const express = require('express');
// calling an router
const router = express.Router();

router.post("/post-like-share", (req, res) => {

    connection.query("call user_like_post (?)", [req.body.PostLike,req.body.PostShare,req.body.UserID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});
router.get("/post-like-share-get", (req, res) => {

    connection.query("call post_like_share_get (?)", [req.body.LikeID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});



module.exports = router;