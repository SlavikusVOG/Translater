const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log(err));

const cardSchema = new mongoose.Schema({
    word: String,
    translate: String
});

const Card = mongoose.model('Card', cardSchema);

const count = Card.countDocuments({}, (err: any, count: number) => {
    if (count < 1) {
        const defaultWord = new Card({ word: 'Привет мир', translate: 'Hello world'});
        defaultWord.save().then(() => console.log('meow'));
    }
});


export { };
