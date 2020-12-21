//variable declare
let player;
let index = 0;
let discimage = document.getElementById('disc-image')
let songTitle, songName;

//audio file declare
let audioFile = [
    "./audio/Cheel.mp3",
    "./audio/Ofshane.mp3",
    "./audio/Patino.mp3",
]
//object for songs
let songs = [
    {
        title: "Blind Memories",
        name: "Cheel"
    },
    {
        title: "Caballero",
        name: "Ofshane"
    },
    {
        title: "Morning Joe",
        name: "Patino"
    }
];

function preloadAudio(url) {
    const audio = new Audio();
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}

let loaded = 0;
function loadedAudio() {
    loaded += 1;
    if (loaded === 2) {
        init();
    }
}

function play(index) {
    player.src = audioFile[index];
    getSRC();
    setTimeout(function () {
        player.play();
    }, 0);
}
let i = 0;

//init player 
function init() {
    play(index);
    player.onpause = function () {
        discimage.classList.remove('active');
    };
    player.onended = function () {
        nextAndPrev();
        discimage.classList.add('active');
    };

    player.onplay = function () {
        discimage.classList.add('active');
        if (!player.seeking) {
        }
    };
}

//play next music and previous music 
function nextAndPrev(n) {
    index += n;
    if (index >= audioFile.length) {
        index = audioFile.length - 1
    }

    if (index <= -1) {
        index = 0;
    }

    play(index);
}

//Song title and Artist name
function getSRC() {
    console.log(audioFile[index]);
    switch (audioFile[index]) {
        case './audio/Cheel.mp3':
            songTitle = songs[0].title;
            songName = songs[0].name;
            document.getElementById('currentTitle').innerHTML = songTitle;
            document.getElementById('currentName').innerHTML = songName;
            document.getElementById('disc').src = "./img/disc1.png";
            break;
        case './audio/Ofshane.mp3':
            songTitle = songs[1].title;
            songName = songs[1].name;
            document.getElementById('currentTitle').innerHTML = songTitle;
            document.getElementById('currentName').innerHTML = songName;
            document.getElementById('disc').src = "./img/disc2.png";
            break;
        case './audio/Patino.mp3':
            songTitle = songs[2].title;
            songName = songs[2].name;
            document.getElementById('currentTitle').innerHTML = songTitle;
            document.getElementById('currentName').innerHTML = songName;
            document.getElementById('disc').src = "./img/disc3.png";
            break;
        default:
            songTitle = 'unknown music';
            document.getElementById('currentTitle').innerHTML = songTitle;
            break;
    }
}

function loop() {
    player = document.getElementById('player');
    for (let i in audioFile) {
        preloadAudio(audioFile[i]);
    }
}
