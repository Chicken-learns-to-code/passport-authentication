const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/passport', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successful connection');
    } catch (error) {
        console.log('Connection failed!');
    }
}
module.exports =  { connect };