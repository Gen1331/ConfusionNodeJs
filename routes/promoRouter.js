const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();
const app = express();


promoRouter.use(bodyParser.json());

// promoRouter.route('/')
// .all((req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
// .get((req,res,next) => {
//     res.end('Will send all the promotions to you!');
// })
// .post((req, res, next) => {
//     res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
// })
// .put((req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /promo');
// })
// .delete((req, res, next) => {
//     res.end('Deleting all promotions');
// });

promoRouter.route('/promoId')

.get('/promotions/:promoId', (req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
})

.post('/promotions/:promoId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promos/'+ req.params.promoId);
})

.put('/promotions/:promoId', (req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete('/promotions/:promoId', (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

module.exports = promoRouter;