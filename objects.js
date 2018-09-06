var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName.string, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
