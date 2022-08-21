const express = require('express');
// calling an router
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' +  file.originalname);
    }
});
// need to upload the file or not
const fileFilter = (req, file, cb) => {
    if (true) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

// const uploads = multer({dest:'uploads/'})
const uploads = multer({ storage: storage, fileFilter: fileFilter })


 router.post("/user-post-create", uploads.single('image'), (req, res) => {

const file = req.file;
 // router.post("/user-post-create", (req, res) => {

    connection.query("call user_post_create (?,?,?,?)", [req.body.title,req.body.description,req.body.tags,
        file.image],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", status_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});
router.get("/post-delete", (req, res) => {

    connection.query("call post_delete (?)", [req.body.ID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});

router.get("/post-get", (req, res) => {

    connection.query("call user_post_get (?)", [req.body.PostID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});
router.post("/post-search", (req, res) => {
    connection.query("call post_search (?,?)", [req.body.Title,req.body.Tag], (error, results, fields) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(results[0]);
        }
    });
});

module.exports = router;