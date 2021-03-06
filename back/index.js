require("dotenv").config()
const express = require('express'),
//información que tu le mandas por un formulario
      bodyParser = require('body-parser'),
      //authoritzation giving a token
      jwt = require('jsonwebtoken'),
      app = express();
const connection = require('./configs/config');
const password = require('./configs/password');
const router = express.Router();
const session = require('express-session')

const port = 5000;
var cors = require('cors')
app.use(cors())

// 1 CATCH THE SECRET KEY TO ALLOW THE APP TO START
app.set('secret_key', password.secret_key);
// 2 WE SET THE BODYPARSER TO BE ABLE TO CATCH THE INFOS COMING FROM THE FRONT
app.use(bodyParser.urlencoded({ extended: false }));
// 3 WE CONVERT INTO JSON FORMAT

app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat'
}))



// ROUTE TO MAIN PAGE
app.get('/', function(req, res) {
    res.send('Start');
});



//ROUTE CALLED WHEN VALIDATING REGISTERING FORM

// send information from the form (front) to the backend
app.post('/users_profiles', (req, res) => {
  // let's call name, email and password the information sent by name, email and password inputs of the form
  const formData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  console.log(`USER PROFILE REGISTERING BEFORE QUERY + ${formData.name}`)

  //put these information in the DB users table to create the new user
  connection.query(`INSERT INTO user_profile SET ?`, formData, (err) => {          // WE need to say formData to kw where to go searching the information
    if(err){
      res.status(500).send('Error saving your profile')
    } else {
      console.log('BIG SUCCESS')
      res.sendStatus(200)
    }
  })
});



//ROUTE CALLED WHEN VALIDATING LOGIN FORM
app.post('/authenticate', (req, res, next) => {

  console.log("ENTER LOGIN")
    //let's call email and password what is sent through the form inputs of email and password
  var data={
    email:req.body.email,
    password: req.body.password
  };
  console.log('LOGIN BEFORE CONNEXION.QUERY')
  console.log(data.email)
  connection.query(`SELECT * FROM user_profile WHERE email = ? AND password = ?`, [data.email, data.password], (err, results) => {
  // Check if email and password have been filled
    if(results){
      console.log(results)
      console.log('ENTER QUERY CONDITION TOKEN')
      const payload = {
        check:  true
       };
        // gives a token when signed in. Says the token to be valid during 24 hours (50 minutes)
      const token = jwt.sign(payload, app.get('secret_key'), {
        // MODIFY CONFIG.JS
        expiresIn: 50
      });
      console.log('THAT WOOOORKS 1')
       //sends a json object that displays the token and a message that confirms that the login has been successfull (for the tests)
      res.json({
        results,
        message: 'Authentication successfull',
        token: token

      });
      console.log('THAT WOOOORKS 2')


      // // SESSION : is not used yet but could be usefull later
      //  req.session.regenerate( ()=>{
      // //   req.session.login = true;
      // //   req.session.email = req.body.email;

      //   console.log('ENTER SESSION SECTION')
      //   console.log(data.email)

      // //Redirect to the user_profile page of the user that is logging in
      //   res.json(result)
      //  })
      } else {
      res.render('/');
      console.log('TOKEN NOT ALLOWED')
    }
  });
})


  // app.get('/users_profiles/:email', (req, res) => {
  //     // Get the data sent
  //     const email = req.params.email;
  //   connection.query('SELECT * FROM users WHERE email = ? ', email, (err, results) => {
  //     console.log('hhhhhh')
  //     if(err) {
  //       res.status(500).send('error fetching posts')
  //     } else {
  //       res.json(results)
  //     }
  //   })
  // })





const protectedRoutes = express.Router();
protectedRoutes.use((req, res, next) => {
  console.log('in protected Routes function')
  const data = {
    password: req.body.password
  }

  // WE PASS THE ACCESS TOKEN PASSED THROUGH THE HEADERS WHEN SIGNING IN (line 90)
    const token = req.headers['access-token'];
    if (token) {
      jwt.verify(token, app.get('data.password'), (err, decoded) => {
        if (err) {
          return res.json({ message: 'Token not valid' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
          message: 'Token not proved.'
      });
    }
 });


//ACCESS TO PERSONAL USER PROFILE PAGE
app.get('/users_profiles/:email', protectedRoutes, (req, res) => {

    // GET THE EMAIL SENT THROUGH THE FORM
    const email = req.params.email;

  connection.query('SELECT * FROM user_profile WHERE email = ? ', email, (err, results) => {
    console.log('in the SELECT of user page')
    if(err) {
      res.status(500).send('error fetching posts')
    } else {
      res.json(results)
    }
  })
})

//ROUTE DISPLAYING ALL THE INFORMATION ABOUT ALL THE USERS
app.get('/users_profiles', (req, res) => {
  connection.query('SELECT * FROM user_profile', (err, results) => {
    if(err) {
      res.status(500).send('error fetching posts')
    } else {
      console.log('ROUTE ALL USERS PROFILES WORKING')
      res.json(results)
    }
  })
})

//UPDATE SCORE FOR USERS GAMES PLAYING
app.put('/game-score/:name_game', (req, res) => {
  data = {
    score: req.body.score,
    user: req.body.user_id,
  }
  const name_game = req.params.name_game;


  connection.query(`UPDATE user_profile SET ${name_game} = ? WHERE user_id = ?`, [data.score, data.user, name_game], (err) => {
    if(err){
      res.status(500).send(err)
    } else {
      res.sendStatus(200)
    }
  })
});

//CREATE RANKING GAME
app.get('/ranking/:game_score', (req, res) => {
  const game_score=req.params.game_score

  connection.query(`SELECT name, ${game_score} FROM user_profile ORDER BY ${game_score} DESC LIMIT 3`, (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      console.log('ROUTE ALL USERS PROFILES WORKING')
      res.json(results)
    }
  })
})

//CREATE RANKING USER PROFILE
app.get('/personal_ranking/:user_id', (req, res) => {
  const user_id=req.params.user_id

  connection.query(`SELECT * FROM user_profile WHERE user_id=${user_id}`, (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      console.log('ROUTE ALL USERS PROFILES WORKING')
      res.json(results)
    }
  })
})
app.listen(port,(err)=>{
    if (err) {
    throw new Error('Something bad happened...');
    }
    console.log(`Server listening to port ${port}`)
});
