var admin = require('firebase-admin');
var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const PORT = 5000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var serviceAccount = require('./keys/<serviceKeyAccount>.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<project_name>.firebaseio.com"
});

const userRouter = require('./src/routes/user.routes');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API' });
});

app.use('/api', userRouter);

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});
