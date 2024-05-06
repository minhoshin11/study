const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')


app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
}) 

app.get('/news', (요청, 응답) => {
    db.collection('post').insertOne({title : '어쩌구'})
    // 응답.send('오늘비옴')
  }) 
  app.get('/time', (요청, 응답) => {
    let 현재시간 = new Date();
    let 시간문자열 = 현재시간.getHours().toString().padStart(2, '0')
    let 분문자열 = 현재시간.getMinutes().toString().padStart(2, '0')
    let 초문자열 = 현재시간.getSeconds().toString().padStart(2, '0')
    let 시간포멧 = `${시간문자열} : ${분문자열} : ${초문자열}`
    응답.send(`현재시간 : ${시간포멧}`)
  });


  app.get('/list', async (요청, 응답) => {
    try {
      let result = await db.collection('post').find().toArray();
      응답.render('list.ejs', { 글목록: result });
    } catch (error) {
      console.error(error);
      응답.status(500).send('서버 에러');
    }
  });



app.get('/about', (요청, 응답) => {
    응답.sendFile(__dirname + '/about.html')
  })

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://admin:1257@cluster0.wdnf9wh.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum') //여긴 db이름임.
  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})
}).catch((err)=>{
  console.log(err)
})

