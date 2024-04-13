import React from 'react';
import './HomePage.css';
import Image from './profile.jpg'; // Import your image file here

const HomePage = () => {
    return (
        <div className="home-page-container">
            <div className="content">
                <div className="header">
                    <h1>Welcome to my Blog</h1>
                    <div className="image-container">
                        <img src={Image} alt="Profile" className="image" />
                    </div>
                    <div className="text-container">
                        <h2>I'm Siva Keerthi</h2>
                        <h2>Full Stack Developer</h2>
                        <p>A Computer Science and Design (CSD) student possesses a diverse skill set that includes proficiency in various programming languages and web development technologies. a strong foundation in programming languages like C and Java, along with the ability to design and develop web applications using HTML, CSS, JavaScript, PHP, and manage databases using MySQL. Seeking a challenging position in a company where I can launch my career and build a valuable skill set.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
