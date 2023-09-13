const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev= document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name:"Amaznig",
    title:"amazing",
    artist:"Amazing talawat",
    },
    {
    name:"Hafez_Saleh_Ahmad_Takrim",
    title:"Saleh Ahmad",
    artist:"Saleh_Ahmad talawat",
    },
    {
    name:"Beautiful",
    title:"Talawat",
    artist:"Beautiful Talawat",  
    },
    {
    name:"Cute_baby_tilawat",
    title:"Talawat",
    artist:"Talawat",
    },
   
    {
        name:"H Mudassir",
        title:"Hsfiz Mudassir",
        artist:"Hafiz Mudassir talawat",
    },
    
    {
        name:"Hafiz_Mudassir",
        title:"Hafiz Mudassir",
        artist:"Hafiz_Mudassir talawat",
    },
    {
        name:"Muhammad_Taha_Al_Junayd",
        title:"Muhammad Taha",
        artist:"Muhammad_Taha_Al_Junayd ",
    },
    {
        name:"Qari_Saif_ur_Rehman",
        title:"Saif ur rehman",
        artist:"Saif_ur_Rehman ",
    },
    {
        name:"Qari_salman",
        title:"Salman",
        artist:"Qari_salman talawat",
    },
    {
        name:"Tilawat",
        title:"Tilawat",
        artist:"Amazing Tilawat",
    }
]

let isPlaying = false;
    //  for play function
const  playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

//  for pause function
const  pauseMusic = () => {
    isPlaying = true;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    // if (isPlaying) {
    //     pauseMusic();
    // }else {
    //     playMusic();
    // }
    isPlaying ? pauseMusic() :playMusic();
});

// changing the music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};


    songIndex = 0;
// loadSong(songs);

const nextSong = () => {
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
