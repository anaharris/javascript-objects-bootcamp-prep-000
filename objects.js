var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  this.artistName = artistName;
  this.songTitle = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
