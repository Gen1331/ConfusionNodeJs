const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();
const app = express();


leaderRouter.use(bodyParser.json());

leaderRouter.route('/promoId')

.get('/leaders/:leaderId', (req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.promoId +' to you!');
})

.post('/leaders/:leaderId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.promoId);
})

.put('/leaders/:leaderId', (req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete('/leaders/:leaderId', (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

module.exports = leaderRouter;