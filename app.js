function calc() {
    let number01 = Number(document.getElementById("number01").value);
    let number02 = Number(document.getElementById("number02").value);
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");

    switch (op) {
        case '+': lblOutput.innerHTML = number01 + number02; break;
        case '-': lblOutput.innerHTML = number01 - number02; break;
        case '/': lblOutput.innerHTML = number01 / number02; break;
        case '*': lblOutput.innerHTML = number01 * number02; break;
    }
}