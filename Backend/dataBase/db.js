const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb+srv://amanbalyan1706:WKgjDliErjHMiwiM@income.dbsctzb.mongodb.net/?retryWrites=true&w=majority');
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connecction Error');
    }
}

module.exports = {db}
