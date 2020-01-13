console.log('started')

const morgan = require('morgan');
const express = require('express');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })

  app.get('/pizza/pepperoni', (req, res) => {
    res.send('on the way!');
  })

  //queryviewer
  app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

  app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
    `;
    res.send(responseText);
  });
  

  app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });

  app.get('/sum', (req, res) => {
   let a = parseFloat(req.query.a);
   let b = parseFloat(req.query.b);
const c = a +b;
   console.log(`${a} + ${b} = ${c}`);
   const saying = `${a.toString()} + ${b.toString()} = ${c.toString()}`;
    res.send(saying);
  });

  app.get('/cipher', (req, res) => {
      let text = req.query.text;
      let shift = parseFloat(req.query.shift);
        let x = '';
      for(let i = 0; i < text.length; i++) {
        console.log(text.charAt(i))
        let y = text.charCodeAt(i) + shift;
        x += String.fromCharCode(y);
        console.log(x)
        console.log(y)
      }
      res.send(x);
  })

  app.get('/lotto' , (req, res) => {
      let num1 = parseInt(req.query.num1);
      let num2 =  parseInt(req.query.num2);
      let num3 =  parseInt(req.query.num3);
      let num4 =  parseInt(req.query.num4);
      let num5 =  parseInt(req.query.num5);
      let num6 =  parseInt(req.query.num6);
        let matches = 0;
let numbers = [num1, num2, num3, num4, num5, num6];
    for(let i =0; i < numbers.length; i++){
      let x =  Math.floor(Math.random() * 7)
      if(numbers[i] === num1 || num2 || num3 || num4 || num5 || num6) matches += 1

    }
    if(matches < 4){
    res.send('Sorry, you lose')
    } else if(matches === 4){
        res.send('Congratulations, you win a free ticket')
        }
  })