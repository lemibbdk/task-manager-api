const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(r => console.log('Successfully connected to database!'))
    .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
