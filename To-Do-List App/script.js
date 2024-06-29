const addButton = document.querySelector('#button');
const todo_List = document.querySelector('#todo-list');


addButton.addEventListener('click', function () {
    const list_Item = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    if (inputValue == '') {
        alert('please enter valid value')
    } else {
        list_Item.textContent = inputValue;
        todo_List.appendChild(list_Item);
    }
    document.getElementById('myInput').value = '';

    const trashBtn = document.createElement('span');
    trashBtn.innerHTML = ` <i class="fas fa-trash"></i>`;
    list_Item.appendChild(trashBtn);
    trashBtn.addEventListener('click', function () {
        list_Item.remove();
    })
});





