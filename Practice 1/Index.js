const counter = document.getElementById("counter");

const getValue = () => {
    return parseInt(counter.value) ;
}

function increment() {
    let value = getValue();
    value = isNaN(value) ? 0 : value;
    value++;
    counter.value = value;

}

function decrement() {
    let value = getValue();
    value = isNaN(value) ? 0 : value;
    value--;
    counter.value = value;

}