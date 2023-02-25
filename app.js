const inputData = document.getElementById('getData');
const error_box = document.querySelector('.error');
const task_ul = document.querySelector('.task-ul');
const deleteAll = document.getElementById('deleteAll');
const main_content_del = document.querySelector('.mian-li');
// const task_li = document.querySelector('.task-li')
const getDatainnerValue = document.querySelector('.getDatainnerValue')
const redBtn = document.querySelector('#red')


// please fillout your tasks

const getTask = () => {

    if (inputData.value.length < 1) {
        error_box.innerHTML = 'please fillout your tasks'
    }
    else if (inputData.value.length >= 1) {
        error_box.innerHTML = ''
        // mian-parent
        let mian_li = document.createElement('div');
        mian_li.classList.add('mian-li');
        let inputLisk = document.createElement('input')
        inputLisk.setAttribute('readonly', 'readonly')
        inputLisk.setAttribute('value', inputData.value)
        inputLisk.classList.add('getDatainnerValue')
        let finallval = inputLisk;
        let task_li = document.createElement('li')
        task_li.classList.add('task-li')
        task_li.append(finallval);

        mian_li.insertAdjacentHTML('afterbegin', `
    <span class="li-btn">
        <button  class="btn green" id="green"><i class='bx bxs-message-square-edit'></i>edit</button>
        <button onclick="delvalue(this)" class="btn red" id="red"><i class='bx bxs-message-square-x' ></i>delete task</button>
    </span>`);

        task_ul.append(mian_li);
        mian_li.insertAdjacentElement('afterbegin', task_li);
        inputData.value = '';

    }

}





function toggleTexSave() {
    const greenBtn = document.querySelector('#green');
    let saveText = `<i class='bx bxs-save' ></i>save`
    greenBtn.innerHTML = saveText
    console.log('work');
}
function toggleTexEdit() {
    const greenBtn = document.querySelector('#green');
    let editText = `<i class='bx bxs-message-square-edit'></i>edit`
    greenBtn.innerHTML = editText
    console.log('work2');
}



function delvalue(e) {
    e.parentNode.parentNode.remove()
}











