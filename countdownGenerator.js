var countdownGenerator = function (x = 0) {
    /* your code here */

    return function() {
        if (x > 0) {
            console.log('T-minus ' + x-- + '...');
        }

        if (x == 0) {
            console.log('Blast off!');
            x -= 1;
        }

        if (x < 0) {
            console.log("Rockets already gone, bub!");
        }
        
    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!