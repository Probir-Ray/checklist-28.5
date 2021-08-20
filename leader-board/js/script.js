// Task - 1.
const sectionTitle = document.querySelectorAll('.section-title');
for(let title of sectionTitle) {
    title.style.color='navy'
}

// Task - 2.
const players = document.querySelectorAll('.player');
for(let player of players) {
    player.style.backgroundColor = 'rgba(255, 255, 0, 0.25)';
    player.style.padding = '4px 8px';
    player.style.margin = '0 4px 0';
}

// Task - 3.
document.getElementById('add-item').addEventListener('click', function() {
    const li = document.createElement('li');
    const ul = document.getElementById('item-main');
    li.innerText = 'Item';
    ul.appendChild(li);
})


// Task - 4 & 5.
const itemInput = document.getElementById('item-input');
itemInput.value = 0;
document.getElementById('increase-number').addEventListener('click', function() {
    let previousNumber = itemInput.value;
    previousNumber = parseInt(previousNumber) + 1;
    itemInput.value = previousNumber;
    if(previousNumber > 4 ) {
        document.getElementById('increase-number').disabled = true;
    }
})

