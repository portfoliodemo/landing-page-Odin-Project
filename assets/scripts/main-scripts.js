
// MDN Reference https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers

const btn = document.querySelector('button');

function greet(event){
  // print the event object to console
  //console.log('greet:', arguments)
  alert('visit www.theodinproject.com');
}

btn.onclick = greet;