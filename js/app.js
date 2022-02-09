/* console.log('Hello World!');

const timedFunc = setTimeout(() => {
    console.log('Something is happening here');
    return 'Value of async'
}, 3000);

console.log(timedFunc)

console.log('This happens in line 10') */

/* const myPromise = new Promise ((resolve, reject) => {
    const error = false;
    if (!error) {
        return resolve('Promise is fulfilled!')
    }else{
        return reject('Promise is rejected!')
    }
});

const mySecondPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        return resolve('min andre nye promise er resolved')
    }, 2000); 
});

const result = 
    myPromise
    .then(value => value + 'ok!')
    .then(newValue => console.log(newValue))
    .catch(err => console.log(err));

const newResult = mySecondPromise.then(newValue => console.log(newValue))

console.log(myPromise)
console.log(mySecondPromise) */

/* async function doit(arg1) {
    const arg2 = await ' yes'
    console.log(arg1 + arg2);
}

doit('done?') */

const boxEl = document.querySelector('#app')
function handleData(data) {
    data.forEach(item => {
        const elH3 = document.createElement('h3');
        elH3.innerText = item.name;
        boxEl.appendChild(elH3);
    })
}

function handleError(status) {
    if(status === 404) {
        error = 'file not found';
        const elH3 = document.createElement('h3');
        elH3.innerText = error;
        boxEl.appendChild(elH3);
    }
}

const myFunction = async () => {
    const fetchUrl = 'https://jsonplaceholder.typicode.com/users';
    const options = {
        method: 'GET'
    }
    let error = '';
    try {
        const res = await fetch(fetchUrl, options);
        const data = await res.json();

        if(res.status !== 200) {
            handleError(res.status)
        } else {
            handleData(data);
        }
    } catch (error) {
        return 'Failed!';
    }
}

myFunction();

const fetchAll = async () => {
    const fetchUrl1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const fetchUrl2 = 'https://jsonplaceholder.typicode.com/todos/2';
    const fetchUrl3 = 'https://jsonplaceholder.typicode.com/todos/3';

    const results = await Promise.all([fetch(fetchUrl1), fetch(fetchUrl2), fetch(fetchUrl3)])

    console.log(results)

    const data = await Promise.all (results.map(result => {
        return result.json();
    }));
    console.log(data)
}

fetchAll();
