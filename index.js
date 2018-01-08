const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000;
app.use(cors())
const data = require('./content.json')

app.get('/', function(req,res) {
  res.json({data})
})

function studentInfo(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i]
        }
    }
    return null
}

app.get('/:id', function(req, res) {
  var record = studentInfo(data, req.params.id)
  if (!record) {
    res.status(404).json({
      error: {message: "No record found!"}
    })
  } else{
    res.json({data: record})
  }
})



app.listen((process.env.PORT || 4000), function(req,res) {
  console.log('app is listening on ' + port)
})
