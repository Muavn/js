function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
//var jquery_func = function() {};
//loadScript("//code.jquery.com/jquery-1.12.0.min.js", jquery_func);
var sendpulse_func = function() {};
loadScript("//cdn.sendpulse.com/js/push/176ad5ea75165955bceb039ba0d3f84b_0.js", sendpulse_func);
