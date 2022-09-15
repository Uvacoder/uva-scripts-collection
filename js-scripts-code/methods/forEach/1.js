function printSong(artists) {
  artists.forEach(function (artist) {
    console.log(artist.song);
  });
}
const artists = [
  {
    song: "HOLIDAY",
    artist: "Lil Nas X",
    year: 2020,
  },
  {
    song: "WAP",
    artist: "Cardi B",
    year: 2020,
  },
  {
    song: "Say So",
    artist: "Doja Cat",
    year: 2020,
  },
  {
    song: "Old Town Road",
    artist: "Lil Nas X",
    year: 2019,
  },
  {
    song: "Bad Guy",
    artist: "Billie Eilish",
    year: 2019,
  },
  {
    song: "God's Plan",
    artist: "Drake",
    year: 2018,
  },
];

printSong(artists);
