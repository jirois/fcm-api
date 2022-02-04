const timeStampController = (req, res) => {
    const {date} = req.params 
    if (!Number(date)){
        res.json({error: "Invalid date"})
    }
    const today = new Date(Number(date)).toUTCString()
    res.json({unix: date, utc: today})
    
}

module.exports = timeStampController