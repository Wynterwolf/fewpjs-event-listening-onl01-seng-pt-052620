function addingEventListener() {
    // listening node
    const input = document.getElementById('input');
    // invocation of addEventListener
    input.addEventListener('click', function(event) {
        // callback function
        alert('I was clicked!');
});}
