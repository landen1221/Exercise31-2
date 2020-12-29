const url = 'http://numbersapi.com';

const facts = [];

let randomNumbers = function() {
    const numbers = [];
    for (let i=0; i<4; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

function createList() {
    let ul = document.getElementById('num-list')

    for (let i=0; i<4; i++) {
        let li = document.createElement("li");
        li.innerText = facts[i]
        ul.appendChild(li)
    }
}

async function getNumFacts() {
    let res1 = await axios.get(`${url}/${randomNumbers()[0]}`);  
    let res2 = await axios.get(`${url}/${randomNumbers()[1]}`);  
    let res3 = await axios.get(`${url}/${randomNumbers()[2]}`);  
    let res4 = await axios.get(`${url}/${randomNumbers()[3]}`);  
    
    facts.push(res1.data, res2.data, res3.data, res4.data);

    createList();
}

getNumFacts();
