var url = 'https://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
    getJoke();
  });

var paragraph = document.getElementById('joke');
document.addEventListener('DOMContentLoaded', getJoke); //pokazuje na start dżołk o Czaku

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
        console.log(xhr.response);
    });
        xhr.send();
};

 //getJoke(); - tym też możemy na start, bez klikania w przycisk, pokazać kawał o Norrisie