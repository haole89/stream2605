const openCamera=require("./openCamera");
const playVideo=require("./playVideo");
const Peer = require('simple-peer')
const $=require("jquery");

openCamera(function(stream){
    playVideo(stream, "localStream");
    //Khoi tao ket noi dung simple-peer
    const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream })
    p.on("signal", function(token){
      $("#txtMySignal").val(JSON.stringify(token));
    });

    $("#btnConnect").click(function(){
     const friendSignal=JSON.parse($("#txtFriendSignal").val());
     p.signal(friendSignal);
   });
   // playVideo o friendStream
   p.on("stream", function(friendStream){
     playVideo(friendStream, "friendStream");
   });
});
