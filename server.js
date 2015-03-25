var movies = {
	"1": {id:1, title:'Godfather', rating: 9.5, brief:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'},
	"2": {id:2, title:'Rio', rating: 6, brief:'When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with this bird of his dreams.'},
	"3": {id:3, title:'Poseidon', rating: 8.5, brief:'On New Years Eve, the luxury ocean liner, Poseidon, capsizes after being swamped by a rogue wave. The survivors are left to fight for survival as they attempt to escape the sinking ship.'},
	"4": {id:4, title:'Hercules', rating: 5, brief:'Having endured his legendary twelve labors, Hercules, the Greek demigod, has his life as a sword-for-hire tested when the King of Thrace and his daughter seek his aid in defeating a tyrannical warlord.'},
	"5": {id:5, title:'Gladiator', rating: 9, brief:'When a Roman general is betrayed and his family murdered by an emperors corrupt son, he comes to Rome as a gladiator to seek revenge.'}
};


var express = require('express');
var app = express();


app.use(express.static(__dirname ));

app.get('/', function(req, res){
	res.end('its working!');
});

app.get('/movies', function(req, res) {
    res.send(movies);
});
app.get('/movies/:id', function(req, res) {
    res.send( movies[ req.params.id ] );
});

app.listen(8000, function() {
	console.log('Listening on port 8080...');
});