const express = require('express');
const server = express();

server.all('/', (req,res)=>{
  res.send('Utility Bot status : Online ✅')
})
function keepAlive(){
  server.listen(3000, ()=>{console.log(" Express Server Ready!")});
}
module.exports = keepAlive;