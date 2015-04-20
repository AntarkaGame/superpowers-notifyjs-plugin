# superpowers-nofityjs-plugin
NotifyJS plugin for Superpowers, the extensible HTML5 2D+3D game engine.

# Documentation

### Echo notification :

```javascript
var myNotification = new Notify('Yo dawg!', {
    body: 'This is an awesome notification',
    notifyShow: onNotifyShow
});

function onNotifyShow() {
    console.log('notification was shown!');
}

myNotification.show();
```

### Find more here : 
https://github.com/alexgibson/notify.js

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-nofityjs-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.
