const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connection URL
const url = 'mongodb://[username]:[password]@[server URL]:10018/[databaseName]';

// Database Name
const dbName = '[databaseName]';
const collectionName = 'cameras';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to server');
  
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Fetch initial items
  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.error('Error fetching documents:', err);
      return;
    }
    console.log('Fetched documents:', docs);
    items = docs;
  });
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index.hbs', { data: JSON.stringify(items) });
});

app.get('/items', function(req, res) {
  res.json(items);
});

app.post('/items', function(req, res) {
  const matches = items.filter(function(item) {
    return item.url === req.body.url;
  });

  if (matches.length > 0) {
    res.status(409).json({ status: 'item already exists' });
  } else {
    req.body.id = req.body.url;
    items.push(req.body);
    res.json(req.body);
  }
});

app.get('/items/:item_name', function(req, res) {
  const matches = items.filter(function(item) {
    return item.url === req.params.item_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.status(404).json({ status: 'invalid menu item' });
  }
});

app.delete('/items/:item_name', function(req, res) {
  let found = false;

  items.forEach(function(item, index) {
    if (item.url === req.params.item_name) {
      found = index;
    }
  });

  if (found !== false) {
    items.splice(found, 1);
    res.json({ status: 'deleted' });
  } else {
    res.status(404).json({ status: 'invalid menu item' });
  }
});

app.get('/*', function(req, res) {
  res.status(404).json({ status: 'not found' });
});

app.listen(port, function() {
  console.log(`Server ready at http://localhost:${port}`);
});
