function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;

    for (let i=0; i < 8; i++){
        for(let j=0; j < 8; j++){
            if (j===0) flag = !flag;
            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

           mainBlock.appendChild(block);
           flag = !flag;
        }
    }
}

drawChess();

let arr = document.querySelectorAll('.block')
for (let i=0; i < arr.length; i++){
    switch (i) {
        case 0:
            arr[i].innerHTML = '1'
            arr[i].style.color = 'green'
            break;
        case 8:
            arr[i].innerHTML = '2'
            arr[i].style.color = 'green'
            break;
        case 16:
            arr[i].innerHTML = '3'
            arr[i].style.color = 'green'
            break;
        case 24:
            arr[i].innerHTML = '4'
            arr[i].style.color = 'green'
            break;
        case 32:
            arr[i].innerHTML = '5'
            arr[i].style.color = 'green'
            break;
        case 40:
            arr[i].innerHTML = '6'
            arr[i].style.color = 'green'
            break;
        case 48:
            arr[i].innerHTML = '7'
            arr[i].style.color = 'green'
            break;
        case 56:
            arr[i].innerHTML = '8A'
            arr[i].style.color = 'green'
            break;
    }
    switch (i) {
        case 57:
            arr[i].innerHTML = 'B'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 58:
            arr[i].innerHTML = 'C'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 59:
            arr[i].innerHTML = 'D'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 60:
            arr[i].innerHTML = 'E'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 61:
            arr[i].innerHTML = 'F'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 62:
            arr[i].innerHTML = 'G'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;
        case 63:
            arr[i].innerHTML = 'H'
            arr[i].style.color = 'green'
            arr[i].style.textAlign = 'left'
            break;

    }
}