const ALBUMS = [
  {
    id: "daniel-caesar",
    artist: "Daniel Caesar",
    title: "Best Of Daniel Caesar",
    year: "2024",
    image: "images/daniel.jpg",
    color1: "#4a3f6b",
    color2: "#7a5c8e",
    initials: "DC",
    tracks: [
      { title: "Get You", duration: "4:38", freq: 261.6, src: "audio/daniel-caesar/get-you.mp3" },
      { title: "Best Part", duration: "3:29", freq: 293.7, src: "audio/daniel-caesar/best-part.mp3" },
      { title: "Japanese Denim", duration: "3:34", freq: 329.6, src: "audio/daniel-caesar/japanese-denim.mp3" },
      { title: "Superpowers", duration: "4:24", freq: 349.2, src: "audio/daniel-caesar/superpowers.mp3" },
      { title: "Love Again", duration: "3:33", freq: 392.0, src: "audio/daniel-caesar/love-again.mp3" }
    ]
  },
  {
    id: "slipknot",
    artist: "Slipknot",
    title: "Best Of Slipknot",
    year: "2024",
    image: "images/slipknot.jpg",
    color1: "#3a1414",
    color2: "#6b1f1f",
    initials: "SK",
    tracks: [
      { title: "Duality", duration: "3:52", freq: 130.8, src: "audio/slipknot/duality.mp3" },
      { title: "Psychosocial", duration: "4:41", freq: 146.8, src: "audio/slipknot/psychosocial.mp3" },
      { title: "Before I Forget", duration: "5:53", freq: 164.8, src: "audio/slipknot/before-i-forget.mp3" },
      { title: "Wait and Bleed", duration: "3:32", freq: 174.6, src: "audio/slipknot/wait-and-bleed.mp3" },
      { title: "Unsainted", duration: "5:22", freq: 196.0, src: "audio/slipknot/unsainted.mp3" }
    ]
  },
  {
    id: "bruno-mars",
    artist: "Bruno Mars",
    title: "Best Of Bruno Mars",
    year: "2024",
    image: "images/bruno.jpg",
    color1: "#5c3a1e",
    color2: "#a3672c",
    initials: "BM",
    tracks: [
      { title: "Uptown Funk", duration: "4:30", freq: 246.9, src: "audio/bruno-mars/uptown-funk.mp3" },
      { title: "24K Magic", duration: "3:46", freq: 261.6, src: "audio/bruno-mars/24k-magic.mp3" },
      { title: "Just the Way You Are", duration: "3:40", freq: 293.7, src: "audio/bruno-mars/just-the-way-you-are.mp3" },
      { title: "Grenade", duration: "3:42", freq: 329.6, src: "audio/bruno-mars/grenade.mp3" },
      { title: "That's What I Like", duration: "3:26", freq: 349.2, src: "audio/bruno-mars/thats-what-i-like.mp3" }
    ]
  },
  {
    id: "silent-sanctuary",
    artist: "Silent Sanctuary",
    title: "Best Of Silent Sanctuary",
    year: "2024",
    image: "images/silent.jpg",
    color1: "#1f3a3a",
    color2: "#2e6b64",
    initials: "SS",
    tracks: [
      { title: "14", duration: "4:12", freq: 220.0, src: "audio/silent-sanctuary/14.mp3" },
      { title: "Hiling", duration: "4:05", freq: 246.9, src: "audio/silent-sanctuary/hiling.mp3" },
      { title: "Ikaw Lamang", duration: "4:34", freq: 261.6, src: "audio/silent-sanctuary/ikawlaman.mp3" },
      { title: "Kundiman", duration: "4:48", freq: 293.7, src: "audio/silent-sanctuary/kundiman.mp3" },
      { title: "Sa'yo", duration: "4:20", freq: 329.6, src: "audio/silent-sanctuary/sayo.mp3" }
    ]
  },
  {
    id: "december-avenue",
    artist: "December Avenue",
    title: "Best Of December Avenue",
    year: "2024",
    image: "images/decemer.jpg",
    color1: "#2a2a4a",
    color2: "#4b4b8a",
    initials: "DA",
    tracks: [
      { title: "Bulong", duration: "4:15", freq: 233.1, src: "audio/december-avenue/bulong.mp3" },
      { title: "Di lang ikaw", duration: "4:02", freq: 261.6, src: "audio/december-avenue/di-lang-ikaw.mp3" },
      { title: "Kahit di mo alam", duration: "4:30", freq: 277.2, src: "audio/december-avenue/kahit-dimo-alam.mp3" },
      { title: "Kung 'Sa Ngalan nang Pag ibig", duration: "4:18", freq: 311.1, src: "audio/december-avenue/name-pagibig.mp3" },
      { title: "Saksi Ang Langit", duration: "4:40", freq: 349.2, src: "audio/december-avenue/saksi-ang-langit.mp3" }
    ]
  }
];

function requireLogin() {
  const user = localStorage.getItem("sonata_user");
  if (!user) {
    window.location.href = "login.html";
  }
  return user;
}

function logout() {
  localStorage.removeItem("sonata_user");
  window.location.href = "login.html";
}

function durationToSeconds(d) {
  const [m, s] = d.split(":").map(Number);
  return m * 60 + s;
}

function secondsToTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}