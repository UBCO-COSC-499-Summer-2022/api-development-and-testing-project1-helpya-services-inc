const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const app = express();
const db = require('./config/db');

app.post('/api/login',(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM consumer WHERE varchar email=? AND passWord=?", [username, password],
    (err, result) => {
      if(result.length > 0){
        res.send("match");
      }else{
        "SELECT * FROM business WHERE varchar email=? AND passWord=?", [username, password],
        (err, result) => {
          if(result.length > 0){
            res.send("match");
          }else{
            res.send("no match");
          }
        }
      }
    }
  )
});












server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

