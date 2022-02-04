const express = require('express')
const router = express.Router()
const os = require('os')

router.route('/').get((req, res) =>{
   const ipaddress = req.ip
   const env = process.env
   const language =  env.LANG || env.LANGUAGE || env.LC_ALL
   const software = os.type()
    res.json({
        ipaddress,
        language,
        software        
    
    })
})

module.exports = router