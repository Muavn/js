var onesignal_func = function() {};
loadScript("https://cdn.onesignal.com/sdks/OneSignalSDK.js", onesignal_func);
var OneSignal = window.OneSignal || [];
OneSignal.push(["init", {
  appId: "4c474309-f505-4a32-86dc-67eb89b68104",
  autoRegister: false, /* Set to true to automatically prompt visitors */
  subdomainName: 'muavn',   
  notifyButton: {
      enable: true /* Set to false to hide */
  }
}]);
