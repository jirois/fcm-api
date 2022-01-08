const timeStampController = async (req, res) => {
    const date = req.params.date
    console.log(date);
    const today = new Date(Number(date)).toUTCString()
    res.json({unix: date, utc: today})
}

module.exports = timeStampController