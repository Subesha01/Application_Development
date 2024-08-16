import React, { useState, useEffect, useRef } from 'react';
import "./Voice.css";
import video1 from '../../video/videoone.mp4';
import video2 from '../../video/videotwo.mp4';
import video3 from '../../video/videothree.mp4';

const videoSources = [video3, video2, video1];

const VoiceComponent = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const textRef = useRef(null);
  const selectRef = useRef(null);
  const speech = useRef(new SpeechSynthesisUtterance());
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      speech.current.voice = availableVoices[0];
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    handleVoicesChanged(); // Call it initially in case voices are already loaded

    return () => {
      window.speechSynthesis.onvoiceschanged = null; // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoSources.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSources[currentVideoIndex];
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  const handleVoiceChange = (e) => {
    const selectedIndex = e.target.value;
    setSelectedVoiceIndex(selectedIndex);
    speech.current.voice = voices[selectedIndex];
  };

  const handleSpeak = () => {
    speech.current.text = textRef.current.value;
    window.speechSynthesis.speak(speech.current);
  };

  return (
    <div className="hero">
      <video
        ref={videoRef}
        className="book-video"
        autoPlay
        loop
        muted
      ></video>
      <h1>Liber <span>Book</span></h1>
      <textarea ref={textRef} placeholder="Write anything here..."></textarea>
      <div className="row">
        <select ref={selectRef} onChange={handleVoiceChange} value={selectedVoiceIndex}>
          {voices.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name}
            </option>
          ))}
        </select>
        <button onClick={handleSpeak}>Listen</button>
      </div>
    </div>
  );
};

export default VoiceComponent;
