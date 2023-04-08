// Importing the DataBase
const AllTranslatedObject = require('./DB.js')

// The Classs Blueprint of the Objects to be added to the list of Objects in DB

class TranslatedObjects {
    constructor(name, textToBeTranslated, outcome, numberlist){
        this.name = name
        this.textToBeTranslated = textToBeTranslated
        this.outcome = outcome
        this.numberlist = numberlist
    }
}

// Functions for the app

class Functions {
    // The Encrypting Function which does the Encryption and saves it in the DB
      async Encrypter(text, name) {
        const lowerCharachterList =
          "abcdefghijklmnopqrstuvwxyz~`@#$%^&*()_-+=|\\}{][\":;/?.>,<";
        const upperCharachterList =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ~`@#$%^&*()_-+=|\\}{][\":;/?.>,<";
        let returnedText = "";
        const numberlist = [];
        for (let i = 0; i < text.length; i++) {
          if (text[i] === text[i].toUpperCase()) {
            const number = parseInt(Math.random() * upperCharachterList.length);
            numberlist.push(number);
            returnedText += upperCharachterList[number];
          } else {
            const number = parseInt(Math.random() * lowerCharachterList.length);
            numberlist.push(number);
            returnedText += lowerCharachterList[number];
          }
        }
        const Answer = new TranslatedObjects(name, text, returnedText, numberlist)
        AllTranslatedObject.push(
          Answer
        );
        return Answer;
      }
    // The Decrypting Function which does the Decryption and returns it to the client
    async Decrypt (text, name) {
      let returnedText = 'No text of Such Sort was created'
      const lowerCharachterList = `abcdefghijklmnopqrstuvwxyz~\`@#$%^&*()_-+=|\\}{]["\':;/?.>,<`
      // const upperCharachterList = `ABCDEFGHIJKLMNOPQRSTUVWXYZ~\`@#$%^&*()_-+=|\\}{]["\':;/?.>,<`
      const matchedNames = []
      const outcomes = []
      for(let i = 0; i < AllTranslatedObject.length; i++){
          
          if (name === AllTranslatedObject[i].name){
              matchedNames.push(AllTranslatedObject[i])
          }
      }
      for(let  i = 0;  i < matchedNames.length; i++){
          // Check Text
          if(text === matchedNames[i].outcome){
              returnedText =  matchedNames[i].textToBeTranslated
          }
      }
      return returnedText  
    }
}

// Exporting the Functions created herein

module.exports = new Functions()