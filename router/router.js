const express = require('express')
const router = express.Router()
const timeStampController = require('../controller/controller')

router.route('/:date').get(timeStampController)

module.exports = router