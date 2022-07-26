
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-plugin-dreamover-uid.uid",
          "file": "plugins/cordova-plugin-dreamover-uid/www/uid.js",
          "pluginId": "cordova-plugin-dreamover-uid",
        "clobbers": [
          "cordova.plugins.uid"
        ]
        },
      {
          "id": "cordova-plugin-crop.CropPlugin",
          "file": "plugins/cordova-plugin-crop/www/crop.js",
          "pluginId": "cordova-plugin-crop",
        "clobbers": [
          "plugins.crop"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-android-permissions": "1.1.3",
      "cordova-plugin-crop": "0.3.1",
      "cordova-plugin-dreamover-uid": "1.3.0"
    };
    // BOTTOM OF METADATA
    });
    