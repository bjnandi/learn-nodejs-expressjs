const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req,res){
    res.send('hello Biswajit Nandi')
})

app.get('/json', function(req,res){
    res.json({
        name: "Biswajit Nandi",
        post : "DevOps Engineer"
    })
})
app.get('/html', function(req,res){
    res.sendFile(__dirname+ '/test.html')
})

let mytodo = {
    id : 1,
    title : "title no 1"
};


app.get('/todo', function(req,res){
    res.json(mytodo);
})

app.post('/todo', function(req,res){
    const body = req.body;
    body.id = 101;
    res.json(body);
})


app.put('/todo', function(req,res){
    const body = req.body;
    const newTitle =  body.title;

    mytodo.title = newTitle;

    res.json(mytodo);
})


app.listen(4000)