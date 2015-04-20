# superpowers-nofityjs-plugin
NotifyJS plugin for Superpowers, the extensible HTML5 2D+3D game engine.

A handy wrapper for using the [Web Notifications API](http://www.w3.org/TR/notifications/). Notify.js aims to simplify requesting user permission and associated Web Notification API events, as well as providing a few extra callbacks and convenience methods.

# Documentation

### Echo notification :

```javascript
var myFirstNotification = new Notify('Hi there!', {
    body: 'This is an awesome notification',
    notifyShow: function onNotifyShow() {
        console.log('notification was shown!');
    }
});

myFirstNotification.show();
```

### Find more here : 
https://github.com/alexgibson/notify.js

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-nofityjs-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.
