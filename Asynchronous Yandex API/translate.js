function Translate(word,language){
    this.apikey = "trnsl.1.1.20200324T232226Z.3cd4131dbb790941.48aa6023a8b6a89c0b5e8de3a1fc5ad55e872cc4";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //Ajax operations
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null, text);
        }
        else{
            callback("There is a mistake...", null);
        }
    }

    this.xhr.send();

}

Translate.prototype.changeParameters = function(newWord,newLanguege){
    this.word = newWord;
    this.language = newLanguege;
}