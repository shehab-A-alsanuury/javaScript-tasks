
window.onload = function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerButton = document.getElementById('register');
    const successMessage = document.getElementById('success-message');

  
    function validateInputs() {
        let isValid = true;

        document.getElementById('username-error').innerText = '';
        document.getElementById('password-error').innerText = '';
        document.getElementById('confirm-password-error').innerText = '';

        if (!usernameInput.value) {
            document.getElementById('username-error').innerText = 'يرجى إدخال اسم المستخدم.';
            isValid = false;
        }

        
        if (!passwordInput.value) {
            document.getElementById('password-error').innerText = 'يرجى إدخال كلمة المرور.';
            isValid = false;
        }

        if (!confirmPasswordInput.value) {
            document.getElementById('confirm-password-error').innerText = 'يرجى إدخال تأكيد كلمة المرور.';
            isValid = false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            document.getElementById('confirm-password-error').innerText = 'كلمة المرور وتأكيد كلمة المرور لا يتطابقان.';
            isValid = false;
        }

        registerButton.disabled = !isValid;
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
    confirmPasswordInput.addEventListener('input', validateInputs);

    registerButton.addEventListener('click', function() {
        successMessage.style.display = 'block';
        usernameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        validateInputs(); 
    });
};
window.onload = function() {
    const paragraph = document.getElementById('text');
    const output = document.getElementById('output');

    function updateText() {
        const sentences = paragraph.innerText.split('. ');
        let wordCount = 0;

        const highlightedText = sentences.map(sentence => {
            const words = sentence.split(' ');
            wordCount += words.length;

            return words.map(word => {
                if (word.length > 5) {
                    return `<span class="highlight">${word}</span>`;
                }
                return word;
            }).join(' ');
        }).join('.<br>');

        paragraph.innerHTML = highlightedText;
        output.innerHTML = `Word count: ${wordCount}`;
    }

   
    updateText();

    paragraph.addEventListener('input', updateText);
};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const input = document.getElementById('item-input');
    const shoppingList = document.getElementById('shopping-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const itemText = input.value.trim();
        if (itemText) {
            addItemToList(itemText);
            input.value = ''; 
            input.focus(); 
        }
    });

    function addItemToList(itemText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';

        listItem.innerHTML = `
            ${itemText} <button class="delete-button">Delete</button>
        `;

        shoppingList.appendChild(listItem);

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(listItem); 
        });
    }
});
let names = ['Ahmad', 'Mohammad', 'Ayham', 'Sarah'];
let scores = [85, 92, 78, 88];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('score-form');
    const displayScoresButton = document.getElementById('display-scores');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addScore();
    });

    displayScoresButton.addEventListener('click', displayScores);

    
    document.getElementById('name-input').focus();
});

function displayResults() {
    const resultsDiv = document.getElementById('results');
    const averageScore = (scores.reduce((acc, curr) => acc + curr, 0) / scores.length).toFixed(2);
    const highestScore = Math.max(...scores);

    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Score: ${averageScore}</p>
        <p>Highest Score: ${highestScore}</p>
    `;
}

function displayScores() {
    const tbody = document.getElementById('scores_table').querySelector('tbody');
    tbody.innerHTML = ''; 

    names.forEach((name, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${scores[index]}</td>`;
        tbody.appendChild(row);
    });

    displayResults(); 
}

function addScore() {
    const nameInput = document.getElementById('name-input');
    const scoreInput = document.getElementById('score-input');
    const name = nameInput.value.trim();
    const score = parseInt(scoreInput.value, 10);

    if (name === '' || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }

    names.push(name);
    scores.push(score);
    
    
    nameInput.value = '';
    scoreInput.value = '';
    nameInput.focus();
}