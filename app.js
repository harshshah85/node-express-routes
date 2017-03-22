var express = require('express');
var app = express();

var states = {
  'Alabama': 'God Bless America',
'Alaska': 'The Last Frontier',
'Arizona':'Grand Canyon State',
'Arkansas':'The Natural State',
'California': 'The Golden State',
'Colorado':'??',
'Connecticut':'Constitution State',
'Delaware':'The First State',
'District of Columbia':'District of Columbia',
'Florida':'Sunshine State',
'Georgia':'In God We Trust',
'Hawaii':'Aloha State',
'Idaho':'Famous Potatoes',
'Illinois':'Land of Lincoln',
'Indiana':'In God We Trust',
'Iowa':'?',
'Kansas':'?',
'Kentucky':'Unbridled Spirit',
'Louisiana':'Sportsman\'s Paradise',
'Maine':'Vacationland',
'Maryland':'Maryland Proud',
'Massachusetts':'The Spirit of America',
'Michigan':'Pure Michigan',
'Minnesota':'10,000 Lakes',
'Mississippi':'Birthplace of America\'s Music',
'Missouri':'Show Me State',
'Montana':'Treasure State',
'Nebraska':'nebraska.gov',
'Nevada':'The Silver State',
'New Hampshire':'Live Free or Die',
'New Jersey':'Garden State',
'New Mexico':'Land of Enchantment',
'New York':'Empire State',
'North Carolina':'First in Flight',
'North Dakota':'Legendary',
'Ohio':'Birthplace of Aviation',
'Oklahoma':'Native America',
'Oregon':'?',
'Pennsylvania':'visitPA.com',
'Puerto Rico':'Puerto Rico Does It Better/Puerto Rico Lo Hace Mejor',
'Rhode Island':'Ocean State',
'South Carolina':'While I Breathe, I Hope',
'South Dakota':'Great Faces. Great Places',
'Tennessee':'www.tnvacation.com',
'Texas':'The Lone Star State',
'Utah':'Greatest Snow on Earth',
'Vermont':'Green Mountain State',
'U.S. Virgin Islands':'America\'s Caribbean',
'Virginia':'Virginia is for Lovers',
'Washington':'Evergreen State',
'West Virginia':'Wild, Wonderful',
'Wisconsin':'America\'s Dairyland',
'Wyoming':'?'
};

app.param('name', function(request, response, next){
  request.StateName = parseStateName(request.params.name);
  next();
});

app.get('/states/:name', function (request, response) {
  var stateSlogan = states[request.StateName];
  if(stateSlogan) {
    response.json(stateSlogan);
  } else {
    response.status(404).json("State not found");
  }
});

app.get('/states', function(request, response){
    response.json(Object.keys(states));
});

function parseStateName(name){
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

app.listen(3000, function(){
	console.log('Server is listening on port %d', 3000);
});
