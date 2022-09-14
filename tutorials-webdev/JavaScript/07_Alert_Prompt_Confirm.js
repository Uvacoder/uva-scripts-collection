// Alert in in-browser Javascript - Doesnt return anything
let a = alert('This is a Message.');
console.log(a);

// Prompt in JSN
let name = prompt("What is your name ?", "Guest");
console.log(name);

// Confirm in JS
let deletePost = confirm("Do you really want to delete ?");
console.log(deletePost);

if(deletePost)
{
// Code to delete post
console.log('Your post has been deleted succesfully.');
}
else
{
// Code to cancel delete post
console.log('Your post has not been deleted.');
}