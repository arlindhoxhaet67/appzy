/*
File: complex_code.js
Description: This code demonstrates a complex and sophisticated implementation of a music player application using JavaScript.
*/

class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentSongIndex = 0;
    this.isPlaying = false;
  }

  addSong(song) {
    this.playlist.push(song);
  }

  removeSong(index) {
    if (index >= 0 && index < this.playlist.length) {
      this.playlist.splice(index, 1);
      if (index <= this.currentSongIndex) {
        this.currentSongIndex--;
      }
    }
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this._playSong();
    }
  }

  _playSong() {
    if (this.playlist.length > 0 && this.currentSongIndex < this.playlist.length) {
      console.log(`Now playing: ${this.playlist[this.currentSongIndex]}`);
      setTimeout(() => {
        this.currentSongIndex++;
        this._playSong();
      }, 3000);
    } else {
      console.log("Playlist finished.");
      this.stop();
    }
  }

  stop() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("Music player stopped.");
    }
  }

  shuffle() {
    if (this.isPlaying) {
      console.log("Stop the music player before shuffling the playlist.");
      return;
    }

    let currentIndex = this.playlist.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element.
      temporaryValue = this.playlist[currentIndex];
      this.playlist[currentIndex] = this.playlist[randomIndex];
      this.playlist[randomIndex] = temporaryValue;
    }

    console.log("Playlist shuffled.");
  }
}

// Creating a new MusicPlayer instance
const musicPlayer = new MusicPlayer();

// Adding songs to the playlist
musicPlayer.addSong("Song 1");
musicPlayer.addSong("Song 2");
musicPlayer.addSong("Song 3");
musicPlayer.addSong("Song 4");
musicPlayer.addSong("Song 5");

// Removing a song from the playlist
musicPlayer.removeSong(1);

// Shuffle the playlist
musicPlayer.shuffle();

// Start playing music
musicPlayer.play();