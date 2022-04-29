posCount = 0;
negCount = 0;
const grid = document.getElementById('grid');
const animation = [
    {width: '0%'},
    {width: '100%'}
];

const animationTiming = {
    duration: 100,
    iterations: 1
}

function newItem(status, parent, counter) {
    const item = document.createElement("div");
    item.setAttribute('id', ('item-' + counter));
    item.classList.add('item');
    if (status == 0) {
        item.classList.add('itemNeg');
    } else {
        item.classList.add('itemPos');
    }
    parent.appendChild(item);
    item.animate(animation, animationTiming);
}

function buttonClick(id) {
    if ((posCount + negCount) < 100) {
        if (id == 'pos') {
            posCount += 1;
            newItem(1, grid, (posCount + negCount));
        } else if (id == 'neg') {
            negCount += 1;
            newItem(0, grid, (posCount + negCount));
        } else {
            console.log("item error");
        }
    } else {
        output = "the current level is too hard!"
        if (negCount <= 5) {
            output = "the current level is too easy!"
        } else if (negCount > 5 && negCount <= 10) {
            output = "the current level is just right."
        }
          
        alert("Counted 100 words!\nThere were " + negCount + " errors which means " + output);
    }
}

function itemDel() {
    const item = document.getElementById('item-' + (posCount + negCount));
    if (item.classList.contains('itemPos')) {
        posCount -= 1;
    } else if (item.classList.contains('itemNeg')) {
        negCount -= 1;
    }
    item.remove();
}

window.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        document.getElementById("pos").click();
    } else if (event.key === '2') {
        document.getElementById("neg").click();
    } else if (event.key === 'Backspace') {
        document.getElementById("del").click();
    }
});