import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import { FaClock } from "react-icons/fa";
import "./Header.css";

const Countdown = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false); // Timer is initially inactive

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const resetTimer = () => {
    setTime(initialTime);
    setIsActive(false); // Timer is paused when reset
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="time">
      <FaClock />
      <span>{formatTime(time)}</span>
      <p>&nbsp; your 10-minute goal</p>
      
      <div>
        <button 
          onClick={() => setIsActive(!isActive)}
          style={{ fontWeight: "bold",marginRight: 10,
            padding: 10 ,
            fontSize: 16,
            color: 'black',
            border: 'none',
           borderRadius: 5,
            cursor: 'pointer',
          backgroundColor: 'transparent'
             }}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        
        <button 
          onClick={resetTimer}
          style={{ fontWeight: "bold",marginRight: 10,padding: 10 ,
            fontSize: 16,
            color: 'black',
            border: 'none',
           borderRadius: 5,
            cursor: 'pointer',
          backgroundColor: 'transparent' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="holder-head">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize" style={{marginTop:60}}>
            Find Your Book of Choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Explore our vast collection of books and find your next great read.
            Whether you are into fiction, non-fiction, or anything in between,
            we've got something for everyone.
          </p>
          <br />
          
          <SearchForm />
        </div>
        
        <div className="reading-goals">
          <h2>Reading Goals</h2>
          <p className="find">
            &nbsp;&nbsp;Find a great book, set a goal, and make reading a daily habit.
          </p>
          <section className="timer-container">
            <section className="timer">
              <Countdown initialTime={600} /> {/* 600 seconds (10 minutes) countdown */}
            </section>
          </section>
          <div>
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kuniamuthur%20,%20Coimbatore,641008+(Sri%20krishna%20college%20of%20engineering%20and%20technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;