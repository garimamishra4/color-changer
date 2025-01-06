const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.background = e.target.id;
        }

    });
});
