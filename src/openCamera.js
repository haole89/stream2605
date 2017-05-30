const playVideo=require("./playVideo");
function openCamera(){
  navigator.mediaDevices.getUserMedia({audio:false, video:{width:200, height:200 }})
  .then(function(stream){
    playVideo(stream, "localStream");
  })
  .catch(function(err){console.log(err)});
}
module.exports=openCamera;
