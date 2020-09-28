var HorseMan = {

    findUsbDevices : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'findUsbDevices', []);
    },
    isUsbDeviceConnected : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'isUsbDeviceConnected', []);
    },
    setUsbDevice : function (arg0, success, error) {
        cordova.exec(success, error, 'HorseMan', 'setUsbDevice', [arg0]);
    },
    getUsbDevice : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'getUsbDevice', []);
    },
    openUsbConnection : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'openUsbConnection', []);
    },  
    closeUsbConnection : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'closeUsbConnection', []);
    },
    sendCommand : function (arg0, success, error) {
        cordova.exec(success, error, 'HorseMan', 'sendCommand', [arg0]);
    },
    getAscan : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'getAscan', []);
    },
    getContiniousAscan : function (success, error) {
        cordova.exec(success, error, 'HorseMan', 'getContiniousAscan', []);
    } 
  };

  HorseMan.ERROR_CODES = {
    '0':'HORSEMAN_NOT_INITIALIZED',
    '1':'HORSEMAN_NOT_LISTENING'
  };

  module.exports = HorseMan; 