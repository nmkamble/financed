var post =$('.wholePost');
var button = $('.post-btn');

button.on("click", postMessage);

function postMessage(event){
  event.preventDefault();
  var name = $('.name').val();
  var nameField = $('.name');
  var messageField = $('#message');
  var message = $('#message').val();
  post.append(`<p class="posts">${name}</p> <p class="forum-post">${message}</p>`);
  nameField.val("");
  messageField.val("");
  post.append(`<button class = "reply"> Reply </button>`);
}
