
let panicNotification = new Audio('./audio/divenha.mp3');
var promise = panicNotification.play();
if (promise !== undefined) {
    promise.then(_ => {
      // Autoplay started!
      console.log("Autoplay started");
    }).catch(error => {
      // Autoplay was prevented.
      // Show a "Play" button so that user can start playback.
      console.log("Autoplay gave some error", error);
    });
  }


// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);