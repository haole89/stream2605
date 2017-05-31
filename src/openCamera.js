const playVideo=require("./playVideo");

function openCamera(cb){
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
  .then(function(stream){
    cb(stream);
  })
  .catch(function(err){console.log(err)});
}
module.exports=openCamera;
