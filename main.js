w.doGoToCoord(0,16);
let x = 0;
let y = 0;
w.on("cursorMove", function(e) {
  let [tileX,tileY,charX,charY] = cursorCoords;
});
w.on('writeBefore', function(e) {
  if(e.TileX >= x*128+62 && e.TileX <= x*128+65 && e.TileY >= y*128-1 && e.TileY <= y*128) {
    w.chat.send(getChar(x*128+62,y*128+1,0,1));
  }
});
