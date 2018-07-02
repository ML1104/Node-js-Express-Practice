exports.loopNumbers = function(req, res) {
    // res.send('Hi!');
    var list = "";
    for (var i = 0; i < 1000; i++) {
        if (i % 2 == 0) {
            list += i +'</br>';
        }
    } 
    res.send(list);
   
}



// loopNumbers((req, res) => {
//     // for (var i = 0;  )
    
// })