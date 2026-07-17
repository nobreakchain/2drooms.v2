w.doGoToCoord(0,16);
w.on("cursorMove", function(e) {
  var [tileX, tileY, charX, charY] = cursorCoords;
  w.chat.send(charY.toString());
});
