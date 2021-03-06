var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var CITATIONS_COLLECTION = "citations";
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, {
  // Optional configuration options.
}));
app.listen(3000);
// Stormpath will let you know when it's ready to start authenticating users.
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready!');
});

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/citations", function(req, res) {
  db.collection(CITATIONS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get citations.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/citations", function(req, res) {
  var newCitation = req.body;
  newCitation.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(CITATIONS_COLLECTION).insertOne(newCitation, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new citation.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/citations/:id", function(req, res) {
  db.collection(CITATIONS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get citation");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/citations/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(CITATIONS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update citation");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/citations/:id", function(req, res) {
  db.collection(CITATIONS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete citation");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

