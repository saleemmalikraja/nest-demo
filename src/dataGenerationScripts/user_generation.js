// https://jsonplaceholder.typicode.com/users  --> inputJSON

var wweSuperStarsNames = ['Roman Reigns' , 'Brock Lesnar', 'John Cena' , 'Steve Austin' , 'Dwayne Johnson' , 'Shawn Michaels' , 'HHH' , 'Braun Strowman' ,'Goldberg', 'Eddie Guerrero'];
var result = inputJSON.map((val) => { 
    const id = val.id - 1;
val.name = wweSuperStarsNames[id];
const userNameWithSpace = wweSuperStarsNames[id].split(' ').join(' ');
const userNameWithOutSpace = wweSuperStarsNames[id].split(' ').join('');
val.username = userNameWithSpace;
const email = val.email.split('@'); 
const lowername =userNameWithOutSpace.toLowerCase();
val.email =   lowername+ '@wwe.com';
return val;
});