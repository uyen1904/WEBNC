const express=require("express")
const app=express()
const port=3000
const morgan=require("morgan") 
app.use(morgan("combined")) 
//create default API
app.get("/",(req,res)=>{ //gởi yêu cầu từ client lên server là req, trả yêu cầu xuống, hồi đáp cho client là res
    res.send("Hoho")
}) 
app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})
const cors=require("cors")
app.use(cors())

const bodyParser=require("body-parser") 
app.use(bodyParser.json()) 

const path=require("path")
app.use("/yune",express.static(path.join(__dirname,"public"))) //yune là đường dẫn áo chứ k có folder thật

let database=[ 
{"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản", 
"Price":70,"Image":"b1.png"}, 
{"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao", 
"Price":100,"Image":"b2.png"}, 
{"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"}, 
{"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"}, 
{"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"}, 
]
app.get("/books",cors(),(req,res)=>{
    res.send(database)
})

app.get("/books/:id",cors(),(req,res)=>{ 
    id=req.params["id"] 
    let p=database.find(x=>x.BookId==id) 
    res.send(p) 
})

app.post("/books",cors(),(req,res)=>{ 
    //put json book into database 
    database.push(req.body); 
    //send message to client(send all database to client) 
    res.send(database) 
}) 

app.put("/books",cors(),(req,res)=>{ 
    book=database.find(x=>x.BookId==req.body.BookId) 
    if(book!=null) 
    { 
        book.BookName=req.body.BookName 
        book.Price=req.body.Price 
        book.Image=req.body.Image 
    } 
    res.send(database) 
}) 

// app.delete("/books", cors(), (req, res) => {
//     let book = database.find(x => x.BookId == req.body.BookId)
//     if (book != null) {
//         database.splice(database.indexOf(book), 1)
//     }
//     res.send(database)
// })

app.delete("/books", cors(), (req, res) => {
    console.log("req.body:", req.body)  
    let index = database.findIndex(x => x.BookId == req.body.BookId)
    if (index != -1) {
        database.splice(index, 1)
    }
    res.send(database)
})