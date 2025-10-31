function madeup_or_real(){
    let button_length_chosen = document.querySelector('input[name="important_number"]:checked').value;
    let length_of_word_number;
    switch(button_length_chosen){
        case "length_short":{
            length_of_word_number = RandomNumber(5) + 3; //3 to 7
            break;
        }
        case "length_med":{
            length_of_word_number = RandomNumber(5) + 8; //8 to 12
            break;
        }
        case "length_long":{
            length_of_word_number = RandomNumber(8) + 13 //13 to 20
            break;
        }
        case "length_user":{
            length_of_word_number = document.getElementById("inputted_length").value;
            if (isNaN(length_of_word_number)){
                document.getElementById("finished_output").textContent = "Please input a real value for the word length.";
            }
            break;
        }
    }
    switch(document.getElementById("Font_Selector").value){
        case "DM_Sans_Font":{
            document.getElementById("finished_output").className = "DM_Sans_Font";
            document.getElementById("Font_Selector").className = "DM_Sans_Font";
            break;
        }
        case "Space_Mono_Font":{
            document.getElementById("finished_output").className = "Space_Mono_Font";
            document.getElementById("Font_Selector").className = "Space_Mono_Font";
            break;
        }
        case "Calibri_Font":{
            document.getElementById("finished_output").className = "Calibri_Font";
            document.getElementById("Font_Selector").className = "Calibri_Font";
            break;
        }
        case "Courier_New":{
            document.getElementById("finished_output").className = "font_style-Courier_New";
            document.getElementById("Font_Selector").className = "font_style-Courier_New";
            break;
        }
        case "Franklin_Gothic_Medium":{
            document.getElementById("finished_output").className = "font_style-Franklin_Gothic_Medium";
            document.getElementById("Font_Selector").className = "font_style-Franklin_Gothic_Medium";
            break;
        }
        case "Gill_Sans":{
            document.getElementById("finished_output").className = "font_style-Gill_Sans";
            document.getElementById("Font_Selector").className = "font_style-Gill_Sans";
            break;
        }
        case "Lucida_Sans":{
            document.getElementById("finished_output").className = "font_style-Lucida_Sans";
            document.getElementById("Font_Selector").className = "font_style-Lucida_Sans";
            break;
        }
        case "Segoe_UI":{
            document.getElementById("finished_output").className = "font_style-Segoe_UI";
            document.getElementById("Font_Selector").className = "font_style-Segoe_UI";
            break;
        }
        case "Times_New_Romans":{
            document.getElementById("finished_output").className = "font_style-Times_New_Romans";
            document.getElementById("Font_Selector").className = "font_style-Times_New_Romans";
            break;
        }
        case "Trebuchet_MS":{
            document.getElementById("finished_output").className = "font_style-Trebuchet_MS";
            document.getElementById("Font_Selector").className = "font_style-Trebuchet_MS";
            break;
        }
        case "Arial":{
            document.getElementById("finished_output").className = "font_style-Arial";
            document.getElementById("Font_Selector").className = "font_style-Arial";
            break;
        }
        case "Cambria":{
            document.getElementById("finished_output").className = "font_style-Cambria";
            document.getElementById("Font_Selector").className = "font_style-Cambria";
            break;
        }
        case "Georgia":{
            document.getElementById("finished_output").className = "font_style-Georgia";
            document.getElementById("Font_Selector").className = "font_style-Georgia";
            break;
        }
        case "Impact":{
            document.getElementById("finished_output").className = "font_style-Impact";
            document.getElementById("Font_Selector").className = "font_style-Impact";
            break;
        }
        case "Verdana":{
            document.getElementById("finished_output").className = "font_style-Verdana";
            document.getElementById("Font_Selector").className = "font_style-Verdana";
            break;
        }
    }
    if (document.getElementById("dict_nah").value == "real"){ //to do the reading dictionary
        if (length_of_word_number > 45){
            document.getElementById("finished_output").textContent = "The character length you are trying to put in is too large, try putting a smaller number!";
            return;
        }
        else {
            realWord(length_of_word_number);        
        }

    }
    else if (document.getElementById("dict_nah").value == "made_up"){
        if (length_of_word_number < 3 && button_length_chosen == "length_user") {
            document.getElementById("finished_output").textContent = "The character length you are trying to put in is too small, try putting a larger number!";
            return;
        }
        else {
            generate_random_word(length_of_word_number);
        }
    }
}

function RandomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
} //use Math.floor(), NOT Math.round() so that you don't accidentally round up the decimal value to the value of maximum, thus making the probability instead of 1/maximum, it is 1/maximum+1

function vowelConsonant(checked){
    let ranar = [];
    for (let i = 0; i < checked.length; i++){
        if (checked[i] == "a" || checked[i] == "e" || checked[i] == "i" || checked[i] == "o" || checked[i] == "u"){
            ranar.push("vowel");
        }
        else {
            ranar.push("consonant");
        }
    }
    return ranar;
}

function generate_random_word(word_length){
    document.getElementById("finished_output").textContent = "";
    let blends = [
        //start
        ["sh", "ch", "ph", "th", "ee", "ea", "gh", "gn", "wh", "rh", "sc", "wr", "kn", "ai", "oa", "qu", "aw", "ar", "or", "ir", "ci", "bl", "cl", "fl", "pl", "sl", "gl", "cr", "dr", "fr", "tr", "gr", "pr", "sm", "st", "sk", "sn", "sw", "sp"],

        //middle
        ["sh", "ch", "ph", "th", "ee", "ea", "zz", "rr", "oa", "oo", "ou", "ie", "oi", "ue", "ay", "ow", "qu", "aw", "ar", "or", "ir", "ur", "er", "ow", "oy", "ci", "bl", "cl", "pl", "sl", "gl", "cr", "tr", "gr", "pr", "st"],

        //end
        ["sh", "ch", "ph", "th", "ee", "ea", "gh", "gn", "ck", "ng", "zz", "rr", "ue", "ay", "ow", "ar", "or", "ur", "er", "ow", "st", "sk", "nt", "lt", "mp", "ld", "nd"]
    ]
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    let randomness;
    let finished = "";

    let all_usable_words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/*    console.log(document.querySelector('input[name="other_characters"]:checked').value)
    word_character_type_chosen = document.querySelector('input[name="other_characters"]:checked').value;*/
    //use document.getElementById(innum, slsdjfdasfjsdkf), then make it so that if(innum), do stuff like switch ccase below
    console.log(all_usable_words);
    if (document.querySelector('input[id="number_include"]:checked') !== null){
        all_usable_words.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        vowels.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"); //so there will be more nums
        consonants.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    if (document.querySelector('input[id="special_com_include"]:checked') !== null){
        all_usable_words.push("-", "_", "@", "#", "$", "%", "^", "&", "*");
        vowels.push("-", "_", "@", "#", "$", "%", "^", "&", "*");
        consonants.push("-", "_", "@", "#", "$", "%", "^", "&", "*");
    }
    if (document.querySelector('input[id="capital_include"]:checked') !== null){
        const temporary_auw = all_usable_words.length; //so it's value is not refreshed every time all_usable_words changes
        const temporary_vwl = vowels.length;
        const temporary_cnst = consonants.length;
        for (let i = 0; i < temporary_auw; i++){
            all_usable_words.push(all_usable_words[i].toUpperCase());
        }
        for (let i = 0; i < temporary_vwl; i++){
            vowels.push(vowels[i].toUpperCase());
        }
        for (let i = 0; i <temporary_cnst; i++){
            consonants.push(consonants[i].toUpperCase());
        }
    }
    for (let i = 0; i < word_length; i++){
        randomness = RandomNumber(all_usable_words.length);
        finished += all_usable_words[randomness];
    }

    //for the every word needs at least 1 blend
    let idk_what_to_name_this = RandomNumber(finished.length); //so it is global
    finished = finished.split("") //so i can just do array stuff and not worry about string
    let st_mid_end = RandomNumber(3);
    let phon_needed = blends[st_mid_end][RandomNumber((blends[st_mid_end]).length)];
    if (st_mid_end == 0){
        finished[0] = phon_needed[0];
        finished[1] = phon_needed[1];
    }
    else if (st_mid_end == 1){
        //to ensure that it is not in the start or end
        if (idk_what_to_name_this == 0) idk_what_to_name_this += 1;
        else if (idk_what_to_name_this == finished.length - 2) idk_what_to_name_this -= 1
        else if (idk_what_to_name_this == finished.length - 1) idk_what_to_name_this -= 2

        finished[idk_what_to_name_this] = phon_needed[0];
        finished[idk_what_to_name_this + 1] = phon_needed[1];
    }
    else if (st_mid_end == 2){
        finished[finished.length - 1] = phon_needed[1];
        finished[finished.length - 2] = phon_needed[0];
    }

    console.log("these are finished, phon_needed, and st_mid_end : ", finished.join(""), phon_needed, st_mid_end);
    console.log("this is vowelconsonant(finished) : ", vowelConsonant(finished));
    
    
    let vow_co_check = vowelConsonant(finished);
    for (let j = 0; j < vow_co_check.length - 2; j++){
        if (vow_co_check[j] && vow_co_check[j+1] && vow_co_check[j+2] == "vowel" || vow_co_check[j] && vow_co_check[j+1] && vow_co_check[j+2] == "consonant"){

            for (let i = 0; i < vow_co_check.length - 2; i++){
                if (vow_co_check[i] && vow_co_check[i+1] && vow_co_check[i+2] == "vowel"){
                    if (st_mid_end == 0){
                        if (i == 0){
                            finished[2] = consonants[RandomNumber(consonants.length)];
                        }
                        else finished[i+1] = consonants[RandomNumber(consonants.length)];
                    }
                    else if (st_mid_end == 1){
                        if (i == idk_what_to_name_this){
                            finished[i+2] = consonants[RandomNumber(consonants.length)];
                        }
                        else if (i == idk_what_to_name_this - 1){
                            finished[i-1] = consonants[RandomNumber(consonants.length)];
                        }
                        else finished[i+1] = consonants[RandomNumber(consonants.length)];
                    }
                    else if (st_mid_end == 2){
                        if (i == finished.length - 3){
                            finished[i] = consonants[RandomNumber(consonants.length)];
                        }
                        else finished[i+1] = consonants[RandomNumber(consonants.length)];
                    }
                }
                else if (vow_co_check[i] && vow_co_check[i+1] && vow_co_check[i+2] == "consonant"){
                    if (st_mid_end == 0){
                        if (i == 0){
                            finished[2] = vowels[RandomNumber(vowels.length)];
                        }
                        else finished[i+1] = vowels[RandomNumber(vowels.length)];
                    }
                    else if (st_mid_end == 1){
                        if (i == idk_what_to_name_this){
                            finished[i+2] = vowels[RandomNumber(vowels.length)]; 
                        }
                        else if (i == idk_what_to_name_this - 1){
                            finished[i-1] = vowels[RandomNumber(vowels.length)];
                        }
                        else finished[i+1] = vowels[RandomNumber(vowels.length)];
                    }
                    else if (st_mid_end == 2){
                        if (i == finished.length - 3){
                            finished[i] = vowels[RandomNumber(vowels.length)];
                        }
                        else finished[i+1] = vowels[RandomNumber(vowels.length)];
                    }
                }
                vow_co_check = vowelConsonant(finished); //renews the value of vow_co_check

            }
        }
    }

    //this is for the include thing
    let include_word_string = document.getElementById("include_user").value;
    console.log(include_word_string);
    if (include_word_string && include_word_string !== "-"){
        if (include_word_string.length == word_length){
            document.getElementById("finished_output").textContent = include_word_string;
            return;
        }
        else if (include_word_string.length > (word_length - include_word_string.length - 1)){//just guessed values
            document.getElementById("finished_output").textContent = "The length of the included string is too large!";
            return;
        }
        if (st_mid_end == 0){//first 2 unchangable
            let random_random_number = RandomNumber(finished.length - 2 - include_word_string.length) + 2;//can't get 0 and 1 ig
            console.log(random_random_number);
            for (let i = 0; i < include_word_string.length; i++){
                finished[random_random_number + i] = include_word_string[i];
            }
        }
        else if (st_mid_end == 1){ //basically, don't make the middle blend work when include is active
            let random_random_number = RandomNumber(finished.length - include_word_string.length); //-iws.l b/c so that it does not overflow
            console.log(random_random_number);
            for (let i = 0; i < include_word_string.length; i++){
                finished[random_random_number + i] = include_word_string[i];
            }
        }
        else if (st_mid_end == 2){
            let random_random_number = RandomNumber(finished.length - 2 - include_word_string.length); //can't get the last 2
            console.log(random_random_number);
            for (let i = 0; i <include_word_string.length; i++){
                finished[random_random_number + i] = include_word_string[i];
            }
        }
    }
    finished[0] = finished[0].toUpperCase(); //to capitalize
    finished = finished.join("");


    document.getElementById("finished_output").textContent = finished;
}

function realWord(length_of_word){
    const wordiguess = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
    let wordsfromurl = [];

    if (document.getElementById("include_user").value ||
    document.querySelector('input[id="number_include"]:checked') || //just to make it all look a bit cleaner
    document.querySelector('input[id="special_com_include"]:checked') ||
    document.querySelector('input[id="capital_include"]:checked')){
        document.getElementById("finished_output").textContent = 'Real words does not support "include" and "consists of", sorry!';
        return;
    }
    loadbook();

    async function loadbook(){
        try{
            const response = await fetch(wordiguess);
            const text = await response.text();
            wordsfromurl = text
                .split(/\r?\n/)
                .map(w => w.trim().toLowerCase())
                .filter(w => w.length > 0);
            do_something(wordsfromurl);
        } catch(error){
            console.error('Error loading file:', error);
            document.getElementById('finished_output').textContent = 'Failed to load word list. Please try again soon.';
        }
    }

    function do_something(wordsfromurl){
        const input = length_of_word;
        const a = parseInt(input, 10);
        if (Number.isNaN(a) || a <= 0){
            document.getElementById('finished_output').textContent = 'Enter a real number please';
            return;
        }
        if (a > 45){
            document.getElementById('finished_output').textContent = 'Your number is too long. Please try again with a smaller number.';
            return;
        }
        if (!wordsfromurl || wordsfromurl.length === 0){
            document.getElementById('finished_output').textContent = "The dictionary did not have time to load in. Please wait or don't click generate too fast.";
            return;
        }
        const validWords = wordsfromurl.filter(word => word.length === a);
        if (validWords.length > 0){
            const randomIndex = RandomNumber(validWords.length);
            let generatedWord = String(validWords[randomIndex]); //so that the capitalization thing works
            generatedWord = generatedWord.charAt(0).toUpperCase() + generatedWord.slice(1); //it didn't work so like this now
            document.getElementById('finished_output').textContent = generatedWord;
        } else{
            document.getElementById('finished_output').textContent = "Our dictionary has no words with that length, sorry!";
        }
    }

    window.addEventListener('load', loadbook);
}
