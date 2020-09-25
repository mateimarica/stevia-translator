//if stevie is typing
let isStevieTyping = false;

function initialize() {
    if(localStorage["typingSpeed"] == null || localStorage["typingSpeed"] == "realistic") {
        document.getElementById("realisticTypingBtn").disabled = true;
        document.getElementById("realisticTypingBtn").style.color = "gray";
    } else {
        document.getElementById("instantTypingBtn").disabled = true;
        document.getElementById("instantTypingBtn").style.color = "gray";
    }
}

function realisticTypeClick() {
    document.getElementById("realisticTypingBtn").disabled = true;
    document.getElementById("realisticTypingBtn").style.color = "gray";
    document.getElementById("instantTypingBtn").disabled = false;
    document.getElementById("instantTypingBtn").style.color = "white";   
    
    localStorage["typingSpeed"] = "realistic";
}

function instantTypeClick() {
    document.getElementById("realisticTypingBtn").disabled = false;
    document.getElementById("realisticTypingBtn").style.color = "white";
    document.getElementById("instantTypingBtn").disabled = true;
    document.getElementById("instantTypingBtn").style.color = "gray";
    localStorage["typingSpeed"] = "instant";
}

function translateClick () {
    
    //Get input text
    let steviaText = document.getElementById("textarea").value;
    const OGsteviaText = steviaText;
    //I like it ---> I am liking it
    for(let i = 0; i < verbs.length; i++) {
        if(steviaText.includes(verbs[i])) {
            let includedVerb = verbs[i];
           
            if(includedVerb.endsWith("e")) {
                includedVerb = includedVerb.substring(0, includedVerb.length - 1);
                
            } 
            let rand = randomInt(1, 7)
           
            if(rand == 3 || rand == 4) {
            
                steviaText = steviaText.replace(new RegExp(verbs[i] + "ed ", "gi"), " am " + includedVerb + " ");
              
            } else if (rand == 5) {
                if(randomInt(1,2) == 1) {
                    steviaText = steviaText.replace(new RegExp(verbs[i] + "ed ", "gi"), " are " + includedVerb + " ");
                } else {
                    steviaText = steviaText.replace(new RegExp(verbs[i] + "ed ", "gi"), includedVerb + " ");
                }
                
            } else {
      
                if(verbs[i] != "miss") {
                   
                    steviaText = steviaText.replace(new RegExp(" " + verbs[i] + "s ", "gi"), " is " + includedVerb + " ");
                } else {
                    steviaText = steviaText.replace(new RegExp(" " + verbs[i], "gi"), " is " + includedVerb + " ");
                }
            
            }
        }
    }   

    //get rid of redundand greetings
    for(let i = 0; i < greetings.length; i++) {
        for(let j = 0; j < friendlyNames.length; j++) {
 
            if(steviaText.toUpperCase().includes(greetings[i].toUpperCase() + " " + friendlyNames[j].toUpperCase())) {

                steviaText = steviaText.replace(new RegExp("(" + greetings[i] + ")[ ]" + friendlyNames[j], "gi"), "$1");
            }
        }
        
    }

    if(randomInt(1,3) > 1) {
        steviaText = steviaText.replace(new RegExp(" are ", "gi"), " are the ");
    }
	
    steviaText = steviaText.replace(new RegExp(" goes", "gi"), " going");
	
    if(randomInt(1, 2) == 1) {
        steviaText = steviaText.replace(new RegExp("don't am", "gi"), "not");
    } else {
        steviaText = steviaText.replace(new RegExp("don't am", "gi"), "are not");
    }
    
    steviaText = steviaText.replace(new RegExp("I not", "gi"), "I am not");
    steviaText = steviaText.replace(new RegExp("my friend", "gi"), "my man");
    steviaText = steviaText.replace(new RegExp("my guy", "gi"), "my man");
    steviaText = steviaText.replace(new RegExp("dudes", "gi"), "boys");
	
    if(randomInt(1,2) == 1) {
        steviaText = steviaText.replace(new RegExp("there", "gi"), "at there");
    } else {
        steviaText = steviaText.replace(new RegExp("there", "gi"), "at it");
    }
    
    //Remove 's
    if(randomInt(1,3) > 2) {
        steviaText = steviaText.replace(new RegExp(" will ", "gi"), " are will ");
    }
    if(steviaText.toUpperCase().includes("would you".toUpperCase())) {
        steviaText = steviaText.replace(new RegExp("would you", "gi"), "do you");
    } else {
        if(randomInt(1,2) == 1) {
            steviaText = steviaText.replace(new RegExp("would", "gi"), "");
        } else {
            steviaText = steviaText.replace(new RegExp("would", "gi"), "will");
        }
    }
    
    
    steviaText = steviaText.replace(new RegExp("'s", "gi"), "");
    steviaText = steviaText.replace(new RegExp(" is ", "gi"), " ");
    //steviaText = steviaText.replace(new RegExp(" saw ", "gi"), " is seeing ");
    steviaText = steviaText.replace(new RegExp("sauce", "gi"), "tomato");
    steviaText = steviaText.replace(new RegExp("I am saw ", "gi"), " is seeing ");
    steviaText = steviaText.replace(new RegExp(" does ", "gi"), " is ");
    steviaText = steviaText.replace(new RegExp("could", "gi"), "maybe");
    //remove to
    steviaText = steviaText.replace(new RegExp("killed", "gi"), "die");
   
    steviaText = steviaText.replace(new RegExp("!", "g"), 
    randomSymbolNumber("!", 1, 3));
    steviaText = steviaText.replace(new RegExp("\\.", "g"), randomSymbolNumber("!", 1, 3));
    steviaText = steviaText.replace(new RegExp(",", "g"), "");
    steviaText = steviaText.replace(new RegExp("\\?", "gi"), randomSymbolNumber("?", 1, 3));
    steviaText = steviaText.replace(new RegExp("were", "gi"), "was");
    
 
    //steviaText = steviaText.replace(/\ws /gi, /\w/);
  
    let steviaTextArr = steviaText.split(" ");
    steviaText = "";

    
    //BIG LOOOOOOOP
    for(let i = 0; i < steviaTextArr.length; i++) {

        if (steviaTextArr[i].toUpperCase() == "to".toUpperCase()) {
            let a  = randomInt(1, 5);
            if (a == 1 || a == 2) {
                steviaTextArr[i] = ""
           
            } else if (a == 5){
                steviaTextArr[i] = "in";
            } 


        } else 

        if (steviaTextArr[i].toUpperCase().startsWith("for".toUpperCase())) {
            let a  = randomInt(1, 4);
            if (a == 1) {
                steviaTextArr[i] = "to"
            } else if (a == 2) {
                steviaTextArr[i] = "in";
            } else {
                steviaTextArr[i] = "at in";
            }

            
        } else 

        if (steviaTextArr[i].endsWith("er") && !steviaTextArr[i].endsWith("er")) {
            let a  = randomInt(1, 3);
            if (a == 1) {
                steviaTextArr[i] = steviaTextArr[i].substring(0, steviaTextArr[i].length - 2) + "ing";
            }
        }

        for(let j = 0; j < greetings.length; j++) {
            //if match word, and add exclamation

            if(steviaTextArr[i].toUpperCase() == greetings[j].toUpperCase()) {
                
                if(randomInt(1, 5) > 2) {
                    steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(greetings[j], "gi"), "Sup my man" + randomSymbolNumber("!", 1, 3));
                } else {
                    steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(greetings[j], "gi"), "How it going my man" + randomSymbolNumber("!", 1, 3));
                }
            //if match word and exclamation already exist
            } else if(steviaTextArr[i].toUpperCase().startsWith(greetings[j].toUpperCase()) && !steviaTextArr[i].toUpperCase().startsWith("YO")) {
          
                if(randomInt(1, 5) > 2) {
                    steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(greetings[j], "gi"), "Sup my man");
                } else {
                    steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(greetings[j], "gi"), "How it going my man");
                }
            }
        }
            
            
            steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(/bro(\W)|bro$|bro /, "gi"), "my man$1");
      
            steviaTextArr[i] = steviaTextArr[i].replace(new RegExp(/dude(\W)|dude$|dude /, "gi"), "my man");
        
        
        
        //steviaTextArr[i] = steviaTextArr[i].replace(/(\w)s(\W)/, "$1$2");
        
        
        //steviaTextArr[i] = steviaTextArr[i].replace(/(\w)s$/, "$1");
        
        let tempRand = randomInt(1,4);
        if(steviaTextArr[i] == "don't") {
            if(tempRand >1 ) {
                steviaTextArr[i] = steviaTextArr[i].replace("don't", "are not");
            } else {
                steviaTextArr[i] = steviaTextArr[i].replace("don't", "do not");
            }
        }

        //pluralize or singularize
        //console.log("times");
        //goes through the current word
        if(randomInt(1,4) > 1) { 
            for (let h = 0; h < steviaTextArr[i].length; h++) {

                //if ends in -ing
 
                //If it finds a char that's not a letter
                if(!isLetter(steviaTextArr[i].charAt(h))) {
                    if(randomInt(1,2) == 1) {
                        if(steviaTextArr[i].substring(0, h).endsWith("ing")) {
                            for(let y = 0; y < verbs.length; y++) {
                                if(steviaTextArr[i].substring(0, h - 3).toUpperCase() == verbs[y].toUpperCase()) {
                                   
                                    steviaTextArr[i] = steviaTextArr[i].substring(0, h - 3) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                }

                                
                            }
                        } else {
                            for(let y = 0; y < verbs.length; y++) {
                                if(steviaTextArr[i].substring(0, h).toUpperCase() == verbs[y].toUpperCase()) {
                                    if(steviaTextArr[i].substring(0, h).endsWith("e")) {
                                        steviaTextArr[i] = steviaTextArr[i].substring(0, h - 1) + "ing" + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                    } else {
                                        if(verbs[y] == "stop") {
                                            steviaTextArr[i] = steviaTextArr[i].substring(0, h) + "ping" + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                        } else {
                                            steviaTextArr[i] = steviaTextArr[i].substring(0, h) + "ing" + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                        }
                                        
                                    }
                                    
                                    break;
                                }
                            }
                        }
                    }
                    if(pluralize.isPlural(steviaTextArr[i].substring(0, h))) {
                    
                        for(let y = 0; y < nouns.length; y++) {
                            if(steviaTextArr[i].substring(0, h).toUpperCase() == nouns[y].toUpperCase() || steviaTextArr[i].substring(0, h).toUpperCase() == pluralize(nouns[y]).toUpperCase()) {
                                steviaTextArr[i] = pluralize.singular(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                break;
                            }

                            if(y < verbs.length) {
                                if(steviaTextArr[i].substring(0, h).toUpperCase() == verbs[y].toUpperCase() || steviaTextArr[i].substring(0, h).toUpperCase() == pluralize(verbs[y]).toUpperCase()) {
                                    steviaTextArr[i] = pluralize.singular(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                    break;
                                }
                            }
                        }
                    
                    } else if(pluralize.isSingular(steviaTextArr[i].substring(0, h))) {
                        for(let y = 0; y < nouns.length; y++) {
							
                            if(randomInt(1,2) == 1) {
                                if(steviaTextArr[i].substring(0, h).toUpperCase() == nouns[y].toUpperCase()) {
                                    steviaTextArr[i] = pluralize(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
    
                                    break;
                                } else if(y < verbs.length) {
                                    if(steviaTextArr[i].substring(0, h).toUpperCase() == verbs[y].toUpperCase()) {
                                        steviaTextArr[i] = pluralize(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                        break;
                                    }
                                }
                            } else {
                                if(y < verbs.length) {
                                    if(steviaTextArr[i].substring(0, h).toUpperCase() == verbs[y].toUpperCase()) {
                                        steviaTextArr[i] = pluralize(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
                                        break;
                                    } else if(steviaTextArr[i].substring(0, h).toUpperCase() == nouns[y].toUpperCase()) {
                                        steviaTextArr[i] = pluralize(steviaTextArr[i].substring(0, h)) + steviaTextArr[i].substring(h, steviaTextArr[i].length);
        
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    
                    break;
                }
        
                if(h == steviaTextArr[i].length - 1) {
                    if(randomInt(1,2) == 1) {
                        if(steviaTextArr[i].endsWith("ing")) {
                    
                            for(let y = 0; y < verbs.length; y++) {
                                
                                if(steviaTextArr[i].substring(0, steviaTextArr[i].length - 3).toUpperCase() == verbs[y].toUpperCase()) {
                                    steviaTextArr[i] = steviaTextArr[i].substring(0, steviaTextArr[i].length - 3);
                                    break;
                                } 


                                if(y < verbs.length) {
                                    if(steviaTextArr[i].substring(0, steviaTextArr[i].length - 3).toUpperCase() == nouns[y].toUpperCase()) {
                                        steviaTextArr[i] = steviaTextArr[i].substring(0, steviaTextArr[i].length - 3);
                                        break;
                                    }
                                }
                            }
                        } else {
                            for(let y = 0; y < verbs.length; y++) {
                                if(steviaTextArr[i].toUpperCase() == verbs[y].toUpperCase()) {
                                    if(steviaTextArr[i].endsWith("e")) {
                                        steviaTextArr[i] = steviaTextArr[i].substring(0,steviaTextArr[i].length - 1) + "ing";
                                    } else {
                                        if(verbs[y] == "stop") {
                                            steviaTextArr[i] = steviaTextArr[i] + "ping";
                                        } else {
                                            steviaTextArr[i] = steviaTextArr[i] + "ing";
                                        }
                                       
                                    }
                                    
                                    break;
                                }
                            }
                        }
                    }
                    
                    if(pluralize.isPlural(steviaTextArr[i])) {
                   
                        for(let y = 0; y < nouns.length; y++) {
                            
                            if(steviaTextArr[i].toUpperCase() == nouns[y].toUpperCase() || steviaTextArr[i].toUpperCase() == pluralize(nouns[y]).toUpperCase()) {
                                steviaTextArr[i] = pluralize.singular(steviaTextArr[i]);
                                break;
                            }
                        }

                        
                    } else if(pluralize.isSingular(steviaTextArr[i])) {
                        for(let y = 0; y < nouns.length; y++) {
                            if(steviaTextArr[i].toUpperCase() == nouns[y].toUpperCase()) {
                                steviaTextArr[i] = pluralize(steviaTextArr[i]);
                                break;
                            }
                        }
                        
                    }
                    
                    break;
                }
            }
        }      
    
        if(randomInt(1,2) == 1 && steviaTextArr[i] == "a") {
            steviaTextArr[i] = "";
        }

        if(steviaTextArr[i] == "she" || steviaTextArr[i] == "he" || steviaTextArr[i] == "they") {
            if(randomInt(1,3) > 1) {
                steviaTextArr[i] += " is";
            }
            
        }
        if(randomInt(1,3) > 2 && steviaTextArr[i] == "be") {
            steviaTextArr[i] = "go to";
        } else

        if(randomInt(1,3) > 2 && steviaTextArr[i] == "I will") {
            steviaTextArr[i] = "I'm";
        } else 

        if(randomInt(1,3) > 1 && steviaTextArr[i] == "has") {
            steviaTextArr[i] = "";
        } else

        if(randomInt(1,3) > 1 && steviaTextArr[i] == "will") {
            steviaTextArr[i] = "";
        } else

        if(randomInt(1,4) > 1 && steviaTextArr[i] == "do") {
            steviaTextArr[i] = "doing";
        } else if(randomInt(1,4) > 1 && steviaTextArr[i] == "doing") {
            steviaTextArr[i] = "do";
        }
       
        
        //gradually puts the editted steviaText back together.
        steviaText += steviaTextArr[i] + " ";
    }

    if(randomInt(1,2) == 1){
        steviaText = steviaText.replace(new RegExp("I saw", "gi"), "I am seeing");
    }
    

    steviaText = steviaText.replace(new RegExp("he saw", "gi"), "he is seeing");

    if(randomInt(1,3) > 1) {
        steviaText = steviaText.replace(new RegExp("do you ", "gi"), "are you ");
    }

    if(randomInt(1,3) > 1) {
        steviaText = steviaText.replace(new RegExp("are you ", "gi"), "do you ");
    }    

    steviaText = steviaText.replace(new RegExp("how are you", "gi"), "how it going");
    steviaText = steviaText.replace(new RegExp("  ", "g"), " ");    
 
    for(let i = 0; i < confirmations.length; i++) {
        
        if(randomInt(1, 5) == 1) {
            steviaText = steviaText.replace(new RegExp(" " + confirmations[i] + " ", "gi"), "Yea man" + randomSymbolNumber("!", 1, 3));
        } else {
            steviaText = steviaText.replace(new RegExp(" " + confirmations[i] + " ", "gi"), "Yea my man" + randomSymbolNumber("!", 1, 3));
        }
    }
 
    //Add Yea my man!!
    //steviaText = "Yea my man" + randomSymbolNumber("!", 1, 3) + " " + steviaText;
    steviaText = steviaText.replace(new RegExp(" you am ", "gi"), " you are ");
    steviaText = steviaText.replace(new RegExp("going doing", "gi"), "going");
    steviaText = steviaText.replace(new RegExp("very", "gi"), "really");
    steviaText = steviaText.replace(new RegExp("military", "gi"), "army");
    if(randomInt(1,2) == 1) {
        steviaText = steviaText.replace(new RegExp(" can ", "gi"), " go ");
    }

    if(randomInt(1,2) == 1) {
        steviaText = steviaText.replace(new RegExp(" on ", "gi"), " in ");
    }

    if(randomInt(1,2) == 1) {
        steviaText = steviaText.replace(new RegExp("the ", "gi"), " ");
    }

    if(randomInt(1,3) > 1) {
        for(let i = 0; i < verbs.length; i++) {
        
            if(steviaText.includes("I " + verbs[i])) {
                
                steviaText = steviaText.replace("I " + verbs[i], "I am " + verbs[i]);
                break;
            }
        }
    }

    //Grammar fixer 
    //removes extra spaces
    steviaText = steviaText.replace(new RegExp(/[ ]{2,}/, "g"), " ");
    //remove an extra space at the end 
    steviaText = steviaText.replace(/[ ]$/, "");

    steviaText = steviaText.replace(new RegExp(/^([a-z])/, "g"), t => t.toUpperCase()); //Capitalizes first letter of output

    //"Hello!i am well" --> "Hello! i am well"
    steviaText = steviaText.replace(new RegExp(/([^\w^\s^[']])([a-z])/, "g"), "$1 $2"); //[^\w\s] = all characters excluding letters and spaces
    
    //"Hello! i am well" --> "Hello! I am well";
    steviaText = steviaText.replace(new RegExp(/\W\s([a-z])/, "g"), t => t.toUpperCase());

    steviaText = steviaText.replace(new RegExp(/$i\s/), "I");
    steviaText = steviaText.replace(new RegExp(/\si\s/), "I");
    steviaText = steviaText.replace(new RegExp(/$i'/), "I'");
    steviaText = steviaText.replace(new RegExp(/\si'/), " I'");
    
    
    //if there are no symbols at the very end, add some !!!!!
    if((/(\w)$/).test(steviaText) == true) {
        steviaText += randomSymbolNumber("!", 1, 3);
    }


    if(localStorage["typingSpeed"] == "realistic" || localStorage["typingSpeed"] == null) {
        steviaWrite(steviaText);
    } else {
        document.getElementById("translatedText").innerText = steviaText;
    }    
}


function randomSymbolNumber(symbol, floorNum, ceilingNum) {
    let randomNumber = randomInt(1, 3);
    let moreSymbols = "";
    for(let i = 0; i < randomNumber; i++) {
        moreSymbols += symbol; 
    }
    return moreSymbols;
}

function randomInt(floorNum, ceilNum) {
    return floorNum + Math.floor((Math.random() * (ceilNum - floorNum + 1)));
}


async function steviaWrite(steviaTextIn) {
    document.getElementById("translateBtn").innerText = "Stevie is typing .\u00A0.\u00A0.";
    isStevieTyping = true;
    
    //stevie typing animation
    var interval = setInterval(function(){ 
        if(isStevieTyping == false) {
            document.getElementById("translateBtn").innerText = "Translate";
            clearInterval(interval);
        }

        if(document.getElementById("translateBtn").innerText == "Stevie is typing .\u00A0.\u00A0.") {
            document.getElementById("translateBtn").innerText = "Stevie is typing .\u00A0\u00A0\u00A0\u00A0";
        } else if (document.getElementById("translateBtn").innerText == "Stevie is typing .\u00A0.\u00A0\u00A0") {
            document.getElementById("translateBtn").innerText = "Stevie is typing .\u00A0.\u00A0.";
        } else {
            document.getElementById("translateBtn").innerText = "Stevie is typing .\u00A0.\u00A0\u00A0";
        }
       

        if(isStevieTyping == false) {
            document.getElementById("translateBtn").innerText = "Translate";
            clearInterval(interval);
        }

        
    }, 1000);
   
    document.getElementById("randomBtn").style.visibility = "hidden";

    let randomMarginR = document.getElementById("randomBtn").style.marginRight;
    document.getElementById("randomBtn").style.marginRight = "-20cm";

    let randomMarginL = document.getElementById("randomBtn").style.marginLeft;
    document.getElementById("randomBtn").style.marginLeft = "-20m";

    document.getElementById("translateBtn").disabled = true;
    let translateWidth;
    let randomBtnWidth = document.getElementById("randomBtn").style.width;

    if(window.location.pathname.endsWith("index-mobile.html")) {
        translateWidth = document.getElementById("translateBtn").style.width;
        document.getElementById("translateBtn").style.width = "95%";

        //really make the random button disappear so the translae button can take up the whole school
        document.getElementById("randomBtn").style.width = "0cm";
        document.getElementById("randomBtn").innerText = "";
    } else {
        translateWidth = document.getElementById("translateBtn").style.width;
        document.getElementById("translateBtn").style.width = "10cm";
    }
    

    for(let index = 0; index <= steviaTextIn.length; index++) {
        //how fast stevie is typing
    
        await sleep(randomInt(50, 90));

        if(randomInt(1, 10) == 5) {
            let mistakes = randomInt(1,6);
            
            let alphabet = "abcdefghimnopqrstuvwyqphuuc!!!!!???\u01B0\u01A1\u031B\u0111\u0303\u01B0\u01A1\u031B\u0111\u0303".normalize().split("");
            
          
            //make mistakes
            for(let i = 0; i < mistakes; i++) {
                if(randomInt(1, 8) == 1) {
                    document.getElementById("translatedText").innerText += "\u00A0"; //non-breaking blank space
                } else {
                    document.getElementById("translatedText").innerText += alphabet[randomInt(0, alphabet.length - 1)];
                }
                await sleep(randomInt(20, 60));
            }
            await sleep(randomInt(200, 1000));

            
            //undo mistakes
            for(let i = 0; i < mistakes; i++) {
                document.getElementById("translatedText").innerText = document.getElementById("translatedText").innerText.substring(0, document.getElementById("translatedText").innerText.length - 1)
                await sleep(randomInt(100, 300  ));
            }

        }
        document.getElementById("translatedText").innerText = steviaTextIn.substring(0, index);
    
    }    
    
    document.getElementById("translateBtn").disabled = false;
    document.getElementById("translateBtn").innerText = "Translate";
    
    document.getElementById("randomBtn").style.visibility = "visible";
    document.getElementById("randomBtn").innerText = "Random";
    document.getElementById("randomBtn").style.marginRight = randomMarginR;
    document.getElementById("randomBtn").style.marginLeft = randomMarginL;
    document.getElementById("randomBtn").style.width = randomBtnWidth;

    document.getElementById("translateBtn").style.width = translateWidth;
    //stop stevie typing animation
    isStevieTyping = false;
}

function sleep(milli) {    
    
    return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, milli);
      });
}

function isLetter(ch){  
    return /^[A-Z]$/i.test(ch);
}
  
function randomClick() {
    document.getElementById("translatedText").innerText = "";
    document.getElementById("textarea").value = sampleStevie[randomInt(0, sampleStevie.length - 1)];
}