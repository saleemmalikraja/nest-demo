// https://jsonplaceholder.typicode.com/posts  --> inputJSON
var result = inputJSON.map((val) => { 
    val.title = `You are reading userID ${val.userId} POST TITLE with post id :${val.id}`; 
    val.body=`You are reading userID ${val.userId} POST CONTENT with post id :${val.id}`;
    return val;
});