import express from "express";

const app = express()
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', function (req, res) {
    res.render('index')
})


app.listen(PORT,()=> {
    console.log('server is running on port ',PORT)
  })
