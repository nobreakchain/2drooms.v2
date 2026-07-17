w.doGoToCoord(0,16);
w.on("cursorMove", function(e) {
  let [tileX, tileY, charX, charY] = cursorCoords;
  w.chat.send(charY.toString());
});
