const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongodb = require('mongodb');

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/cinema', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get movies
router.route('/movies')
    .get((req, res) => {
        connection((db) => {
            db.collection('movies')
                .find()
                .toArray()
                .then((movies) => {
                    response.data = movies;
                    res.json(response);
                })
                .catch((err) => {
                sendError(err, res);
            });
        });
    })
    .post((req, res) => {
        connection((db) => {
            db.collection('movies')
                .insert(req.body)
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    })
    .put((req, res) => {
        connection((db) => {
            db.collection('movies')
                .update({_id: new mongodb.ObjectID(req.body._id)}, {$set: {
                    name: req.body.name,
                    genre: req.body.genre,
                    language: req.body.language,
                    image: req.body.image,
                    synopsis: req.body.synopsis
                }})
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        })
    });
router.get('/movies/delete',(req, res) => {
        connection((db) => {
            db.collection('movies')
                .deleteOne({_id: new mongodb.ObjectID(req.body._id)})
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    });

router.route('/theaters')
    .get((req, res) => {
        connection((db) => {
            db.collection('theaters')
                .find()
                .toArray()
                .then((theaters) => {
                    response.data = theaters;
                    res.json(response);
                })
                .catch((err) => {
                sendError(err, res);
            });
        });
    })
    .post((req, res) => {
        connection((db) => {
            db.collection('theaters')
                .insert(req.body)
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    })
    .put((req, res) => {
        connection((db) => {
            db.collection('theaters')
                .update({_id: new mongodb.ObjectID(req.body._id)}, {$set: {
                    name: req.body.name,
                    location: req.body.location,
                    movies: req.body.movies
                }})
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        })
    });
router.get('/theaters/delete',(req, res) => {
        connection((db) => {
            db.collection('theaters')
                .deleteOne({_id: new mongodb.ObjectID(req.body._id)})
                .then((item) => {
                    response.data = true;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    });
module.exports = router;