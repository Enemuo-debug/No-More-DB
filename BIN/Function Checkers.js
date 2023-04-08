const AllTranslatedObject = []
class TranslatedObjects {
    constructor(name, textToBeTranslated, outcome, numberlist){
        this.name = name
        this.textToBeTranslated = textToBeTranslated
        this.outcome = outcome
        this.numberlist = numberlist
    }
}
function Encrypter(text, name) {
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
function Decrypt (text, name) {
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

console.log(Decrypt(Encrypter('Joy to the world', '11111').outcome, '11111'))