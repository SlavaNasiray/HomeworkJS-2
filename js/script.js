var inputData = document.querySelector('input[type="text"]');
var olSpisok = document.getElementById('spisok');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var infoBtn = document.getElementById('info');
var textLine = document.getElementsByTagName('li');

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('ApplicationTodo')){
        olSpisok.innerHTML = localStorage.getItem('ApplicationTodo');
    };    
    deleteTodo();
    onClickTodo();
};

function onClickTodo() {
    for(let li of textLine){
        li.addEventListener('click', function(){
            li.classList.add('checked')
        });
    }
};

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        let check = inputData.value.trim();
        if (check == ""){
            alert('Пустая строка не может быть записана в список дел')
        }
        else if (check !== ""){
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            
            newSpan.innerHTML = 'Удалить';

            var newInfo = this.value;
            this.value = " ";

            olSpisok.appendChild(newLi).append(newSpan, newInfo,"Дата и время добавления:",new Date());
            }
        };
    deleteTodo();
    onClickTodo();
});



saveBtn.addEventListener('click', function(){
    localStorage.setItem('ApplicationTodo', olSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('ApplicationTodo', olSpisok.innerHTML);
});

infoBtn.addEventListener('click', function(){
    alert('разработал:Насыров Вячеслав Сергеевич');
});

deleteTodo();

onClickTodo();

loadTodo();