exports.fizzBuzz = function(req, res) {
    var list = "";
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            list += 'fizz' + '</br>'
        }
        if (i % 5 == 0) {
            list += 'buzz' + '</br>'
        }
        if (i % 15 == 0) {
            list += 'fizbuzz' + '</br>'
        }
    } 
    res.send(list);
   
}

