setTimeout(() => {
    const div1 = document.querySelector('#first');
    const p1 = document.createElement('p');
    p1.innerText = 'Hi';
    div1.append(p1);
}, 1000);

setTimeout(() =>   {
    const div2 = document.querySelector('#timeout-nesting');
    const p2 = document.createElement('p');
    p2.innerText = 'One';
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement('p');
        p3.innerText = 'Two';
        div2.append(p3);
    }, 1000);
}, 2000)

let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count ++;
}, 1000);

const stopButton = document.querySelector('button');
stopButton.addEventListener('click', () => {
    clearInterval(stop);
});