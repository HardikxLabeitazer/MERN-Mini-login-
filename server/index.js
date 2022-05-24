
const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')



const userRoutes = require('./routes/user.routes')

const authRoutes = require('./routes/auth.routes')
const app = express();
const port = 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

app.use('/',userRoutes);
app.use('/',authRoutes);



//     )

//     if(context.url){
//             res.redirect(303,context.url);
//         }
//         const css = sheets.toString();
//         res.status(200).send(<App/>)
// })
// app.get('*',(req,res)=>{
//     const sheets = new ServerStyleSheets();
//     const context = {};
//     const markup = ReactDOMServer.renderToString(
//         sheets.collect(
//             <StaticRouter location={req.url} context={context}>
//                 <App/>
//             </StaticRouter>
//         )
        
app.listen(port,()=>{
    console.log(" App listening on port 4000");
})


// app.get("/api",(req,res)=>{
//     res.json({message:"Hello from server 2343"});
// })

// app.listen(PORT,()=>{
//     console.log("Server listening on 3001");
// })