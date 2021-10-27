setInterval(function(){
    var today = new Date();
    var time = today.toLocaleTimeString()
    var timer = React.createElement("div",null,`The time is: ${time}`)
    ReactDOM.render(timer, document.getElementById('app'));
},1000);
