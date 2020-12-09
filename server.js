const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'prod')))
  .get('/', (req, res) => res.render('./index.html'))
  .listen(port, () => console.log(`Listening on ${ port }`));
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/prod/index.html'));
});
app.get('/:name', function(req, res) {
    let name = req.params.name;
    res.sendFile(path.join(__dirname + '/prod/' + name));
});
app.listen(port, () => console.log(`listening on port ${port}!`));*/