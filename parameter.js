exports.param = function(req, res) {
   if (Number(res.send(req.params.id))){
       res.send(req.params.id)
   }
}