import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import BloodySweet from "../audios/BloodySweet.mp3";
import LeoDasEntry from "../audios/LeoDasEntry.mp3";
import Badass from "../audios/Badass.mp3";
import Naaready from "../audios/NaaReady.mp3";
import Loki from "../audios/Lokiverse.mp3";
import Adiyae from "../audios/Adiyae-Kolluthey.mp3";
import Bujji from "../audios/Bujji.mp3";
import Google from "../audios/GoogleGoogle.mp3";
import Oras from "../audios/Orasaadha.mp3";
import pook from "../audios/Pookkale-Satru.mp3"
import kadhal from "../audios/Kaadhal.mp3";
import Kadai from "../audios/Kadhaippoma.mp3";
import Loosu from "../audios/Loosu.mp3";
import Munbe from "../audios/Munbe.mp3";
import Oos from "../audios/Oo-sol.mp3";
import Where from "../audios/Where.mp3";
import Mas from "../audios/Mascara.mp3";
import don from "../audios/don.mp3";
import Kutty from "../audios/Kutti-Story.mp3";
import Master from "../audios/Master.mp3";
import Private from "../audios/Private.mp3";
import Vathi from "../audios/Vaathi.mp3";
import Rowdy from "../audios/RowdyBaby.mp3";
import Bae from "../audios/Bae.mp3";
import Pathala from "../audios/Pathala.mp3";
import Arabic from "../audios/Arabic.mp3";
import katchi from "../audios/KatchiSera.mp3";
import Hayyo from "../audios/Hayyoda.mp3";
import Inni from "../audios/Innisai.mp3";

const audioSources = [BloodySweet, LeoDasEntry, Badass, Naaready, Loki, Adiyae, Bujji, Google, Oras, pook, kadhal,
    Kadai, Loosu, Munbe, Oos, Where, Mas, don, Kutty, Master, Private, Vathi, Pathala, Bae, Rowdy,
    Arabic, katchi, Hayyo, Inni
];
const musicNames = ["Bloody-Sweet", "Leo Das Entry", "Badass", "Naa Ready", "Lokiverse 2.0", "Adiyae-Kolluthey", "Bujji", "Google-Google", "Orasathe-Usurathan", "Pookkale-satru",
    "Kadhal-en-kaviye", "Kadhaippoma", "Loosu-penne", "Munbe-vaa", "oo-solriya-mama", "Where is party", "Mascara", "jalabulajang",
    "Kutty-story", "Master-Blaster", "Private-Party", "Vathi Coming", "Pathala-pathala", "Bae", "Rowdy-Baby", "Arabic-kuthu", "Katchi-sera", "Hayyoda", "Innisai-padivarum"
];

const FirstPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const [currentMusic, setCurrentMusic] = useState(musicNames[currentMusicIndex]);
    const [audioLoaded, setAudioLoaded] = useState(false);
    const audioRef = useRef(new Audio(audioSources[currentMusicIndex]));

    const playMusic = (index) => {
        setCurrentMusicIndex(index);
        setCurrentMusic(musicNames[index]);
        setIsPlaying(true);
        audioRef.current.src = audioSources[index];
        audioRef.current.play();
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        const newIndex = (currentMusicIndex - 1 + audioSources.length) % audioSources.length;
        playMusic(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentMusicIndex + 1) % audioSources.length;
        playMusic(newIndex);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        audioRef.current.volume = newVolume / 100;
        setVolume(newVolume);
    };

    const handleSeek = (event) => {
        const seekTime = event.target.value;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    React.useEffect(() => {
        const updateMetadata = () => {
            setDuration(audioRef.current.duration);
            setAudioLoaded(true);
        };

        audioRef.current.addEventListener('timeupdate', updateTime);
        audioRef.current.addEventListener('loadedmetadata', updateMetadata);

        return () => {
            audioRef.current.removeEventListener('timeupdate', updateTime);
            audioRef.current.removeEventListener('loadedmetadata', updateMetadata);
        };
    }, []);

    return (
        <div>
            <Sidebar />
            <Body playMusic={playMusic} />
            <Footer
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handleVolumeChange={handleVolumeChange}
                handleSeek={handleSeek}
                currentTime={currentTime}
                duration={duration}
                currentMusic={currentMusic}
                volume={volume}
                audioLoaded={audioLoaded}
            />
        </div>
    );
}

export default FirstPage;
