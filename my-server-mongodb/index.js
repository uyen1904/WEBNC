const express = require('express'); 
const bcrypt = require('bcrypt');
bcrypt.hash("123", 10).then(hash => console.log(hash));
const app = express(); 
const port = 3002; 
app.use(express.json())

const morgan=require("morgan") 
app.use(morgan("combined")) 

const bodyParser=require("body-parser") 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));  

const cors=require("cors"); 
app.use(cors()) 

app.listen(port,()=>{ 
    console.log(`My Server listening on port ${port}`) 
}) 

app.get("/",(req,res)=>{ 
    res.send("This Web server is processed for MongoDB") 
}) 

const { MongoClient, ObjectId } = require('mongodb'); 
client = new MongoClient("mongodb://127.0.0.1:27017"); 
client.connect(); 
database = client.db("FashionData");       
fashionCollection = database.collection("Fashion"); //nắm lý thuyết phần này, giải thích tại sao lại dùng localhost 127.0.0.1:27017
userCollection = database.collection("user");

//------------------------------TỪ ĐÂY KHÔNG CHỈNH SỬA GÌ NỮA------------------------------
app.post("/login", cors(), async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userCollection.findOne({ username });
        if (!user) {
            return res.json({ success: false, message: 'Invalid username or password' });
        }
       
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.get("/fashions",cors(),async (req,res)=>{    
    const result = await fashionCollection.find({}).toArray(); 
    res.send(result) 
})
app.get("/fashions/:id",cors(),async (req,res)=>{ 
    var o_id = new ObjectId(req.params["id"]); 
    const result = await fashionCollection.find({_id:o_id}).toArray();     
    res.send(result[0]) 
}) 

var cookieParser = require('cookie-parser'); 
app.use(cookieParser());

app.get("/create-cookie",cors(),(req,res)=>{ 
    res.cookie("username","tranduythanh") 
    res.cookie("password","123456") 
    account={"username":"tranduythanh", 
            "password":"123456"} 
    res.cookie("account",account) 
    res.send("cookies are created") 
})

app.get("/read-cookie",cors(),(req,res)=>{ 
    //cookie is stored in client, so we use req 
    //cookie is stored in client, so we use req 
    username=req.cookies.username 
    password=req.cookies.password 
    account=req.cookies.account 
    infor="username = "+username+"<br/>" 
    infor+="password = "+password+"<br/>" 
    if(account!=null) 
    { 
        infor+="account.username = "+account.username+"<br/>" 
        infor+="account.password = "+account.password+"<br/>" 
    }     
    res.send(infor) 
    
    //Expires after 360000 ms from the time it is set. 
    res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 + 
    Date.now()});  
    res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000});
}) 

app.get("/clear-cookie",cors(),(req,res)=>{ 
    res.clearCookie("account") 
    res.send("[account] Cookie is removed")     
}) 
