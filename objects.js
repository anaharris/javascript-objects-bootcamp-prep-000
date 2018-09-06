var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle.string;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
