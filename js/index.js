var n = Number(prompt('please input number n in Fibonacci sequence'));

document.write('n-ne fibRec = ' + fibRec(n));

function fibRec(n) {
    if (n < 3) {
        return 1;
    }
    return fibRec(n - 1) + fibRec(n - 2);
}

function fibLoop(n) {
    var a = 1;
    var b = 1;

    for (var i = 3; i <= n; i++) {
        a = a + b;
        b = a - b;
    }

    return a;
}
document.write('<br>' + 'n-ne fibLoop = ' + fibLoop(n));
