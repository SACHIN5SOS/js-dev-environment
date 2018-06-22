import webpack from 'webpack';
import config from '../webpack.config.dev';
import express from 'express';
import path from 'path';
import open from  'open';
const app = express();
const port = process.env.PORT || 3000;

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));
});


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:'+port);
    }
});