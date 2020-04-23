'use strict';

const generateId = () => `gloMax${Math.round(Math.random() * 1e8).toString(16)}`;

const totalBalance = document.querySelector('.total__balance'),
    totalMoneyIncome = document.querySelector('.total__money-income'),
    totalMoneyExpenses = document.querySelector('.total__money-expenses'),
    historyList = document.querySelector('.history__list'),
    form = document.querySelector('#form'),
    operationName = document.querySelector('.operation__name'),
    operationAmount = document.querySelector('.operation__amount');


let dbOperation = [
    {
        id: '234fs2',
        description: 'Получил зарплату',
        amount: 30000,
    },
    {
        id: 'fg24',
        description: 'Купил куртку',
        amount: -6412,
    },
    {
        id: 'asd234asd',
        description: 'Сходил за продуктами',
        amount: -3500,
    },
    {
        id: 'sdfsf23423',
        description: 'Купил стройматериалы',
        amount: -6000,
    },
    {
        id: '2134as',
        description: 'Заказ на фриланс',
        amount: 10000,
    },
    {
        id: '5sdf342',
        description: 'Купил книги',
        amount: -2890,
    },
];

const renderOperation = (operation) => {
    const className = operation.amount < 0 ? 'history__item-minus' : 'history__item-plus';
    const listItem = document.createElement('li');
  
    listItem.classList.add('history__item');
    listItem.classList.add(className);

    listItem.innerHTML = `${operation.description}
    <span class="history__money">${operation.amount} ₽</span>
    <button class="history_delete" data-id="${operation.id}">x</button>
    `;

    historyList.append(listItem);

};

const updateBalance = () => {
    const resultIncome = dbOperation
    .filter((item) => item.amount > 0)
    .reduce((result, item) => result + item.amount, 0);

    const resultExpenses = dbOperation
    .filter((item) => item.amount < 0)
    .reduce((result, item) => result + item.amount, 0);

    totalMoneyIncome.textContent = resultIncome + ' ₽';
    totalMoneyExpenses.textContent = resultExpenses + ' ₽';
    totalBalance.textContent = (resultIncome + resultExpenses) + ' ₽';
};

const addOperation = (event) => {
    event.preventDefault();
   
    const operationNameValue = operationName.value,
     operationAmountValue = operationAmount.value;

     operationName.style.borderColor = '';
     operationAmount.style.borderColor = '';

     if (operationNameValue && operationAmountValue) {

        const operation = {
            id: '',
            description: operationNameValue,
            amount: +operationAmountValue
        };

        dbOperation.push(operation);
        init();
        console.log('id: ', dbOperation);
     } else {
         if (!operationNameValue) {operationName.style.borderColor = 'red'};
         if (!operationAmountValue) {operationAmount.style.borderColor = 'red'};
     }

    operationName.value = '';
    operationAmount.value = '';
};

const deleteOperation = (event) => {
    if(event.target.classList.contains('history_delete')) {

    }
    
};

const init = () => {
    historyList.textContent = '';
    dbOperation.forEach(renderOperation);
    updateBalance();
};

form.addEventListener('submit', addOperation);

historyList.addEventListener('click', deleteOperation);

init();