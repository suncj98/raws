// ==UserScript==
// @name         IITC plugin: Portal markers of the same size
// @namespace    https://github.com/IITC-CE/ingress-intel-total-conversion
// @category     Layer
// @version      2024-11-19
// @description  Display portal markers at the same size
// @author       suncj
// @id           portalmarkerssamesize@suncj
// @downloadURL  https://raw.githubusercontent.com/suncj98/raws/main/portal-markers-same-size.user.js
// @updateURL    https://raw.githubusercontent.com/suncj98/raws/main/portal-markers-same-size.user.js
// @match        https://intel.ingress.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

window.getMarkerStyleOptions = function(details) {
  var scale = window.portalMarkerScale();
  var level = Math.floor(details.level||0);

  var lvlWeight = 2 * Math.sqrt(scale);
  var lvlRadius = 7 * scale;

  var dashArray = null;
  // thinner and dashed outline for placeholder portals
  if (details.team != TEAM_NONE && level==0) {
    lvlWeight = 1;
    dashArray = '1,2';
  }

  var options = {
    radius: lvlRadius,
    stroke: true,
    color: COLORS[details.team],
    weight: lvlWeight,
    opacity: 1,
    fill: true,
    fillColor: COLORS[details.team],
    fillOpacity: 0.5,
    dashArray: dashArray
  };

  return options;
}
})();
