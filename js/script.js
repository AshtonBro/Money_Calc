'use strict';

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

    const listItem = document.createElement('li');
  
    listItem.classList.add('history__item');

    listItem.innerHTML = `${operation.description}
    <span class="history__money">${operation.amount} ₽</span>
    <button class="history_delete">x</button>
    `;

    historyList.append(listItem);

};

const init = () => {
    historyList.textContent = '';

    dbOperation.forEach(elem => {
        renderOperation(elem);
    });
};

init();