'use strict';
connect = (event) =>{
    username = $("#username").val();
    if(username.length>0)
    {
        var socket = new SockJS("/myendpoint");
    }
    console.log(username);
    event.preventDefault();
}

send = (event) =>{
    var messageToSend = $("#message").val();
    console.log(messageToSend);
    event.preventDefault();
}