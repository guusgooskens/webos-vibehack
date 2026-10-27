// Launcher configuration. Edit this file, then run webos-launcher/install.sh.
// App ids: run `python3 sync-apps.py --list` (or look in app/apps.js after a sync).
window.CONFIG = {
  // First row (the dock), followed by the first apps in the grid.
  dockApps: ['tv.twitch.tv.starshot.lg', 'com.webos.app.hdmi1', 'spotify-beehive', 'netflix'],
  priorityApps: ['npo', 'amazon', 'youtube.leanback.v4'],

  // Keep these out of the first two rows.
  deprioritizedApps: [
    'com.webos.app.accessibility', 'amazon.alexa.view', 'com.webos.app.camera', 'com.webos.app.discovery'
  ],

  // Apps never shown as tiles (inputs and Live TV are already in the Inputs menu).
  hiddenApps: [
    'com.gathin.tvhome',
    'com.webos.app.livetv',
    'com.webos.app.hdmi2', 'com.webos.app.hdmi3', 'com.webos.app.hdmi4',
    'com.webos.app.lgchannels',   // LG Channels
    'shortcutcopilot'             // Copilot
  ],

  // The Live TV app, offered at the end of the Inputs menu. Leave empty to omit.
  liveTvApp: 'com.webos.app.livetv',

  // Tiles per row in the grid; the dock always has this many slots.
  columns: 4
};
