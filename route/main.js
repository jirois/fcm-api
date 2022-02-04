const router = require('express').Router()


let count = 8900

const incr = () =>{  
   return count++
}

router.route('/')
    .post((req, res) => {
    

        const url = JSON.parse(JSON.stringify(req.body))
        res.json({originalUrl: url.url, shorturl: incr()})
    })
    
module.exports = router