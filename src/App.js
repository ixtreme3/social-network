import React from 'react';

import LogoImg from "./assets/IN.png"
import DogImg from "./assets/DOG.png"
import PhotoImg from "./assets/PHOTO.png"

function App() {
  return (
    <div>
        <header style={{background: "lightgray"}}>
            <a href="https://github.com/ixtreme3">
                <img src={LogoImg} alt="logo"/>
            </a>
        </header>

        <nav style={{background: "lightblue"}}>
            <ul style={{listStyleType: "none"}}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <br/>
                <li>Settings</li>
            </ul>
        </nav>

        <main style={{background: "lightgreen"}}>
            <img src={DogImg} alt="profile header" style={{width: "900px", height: "300px"}}/>
            <img src={PhotoImg} alt="" style={{width: "100px", height: "100px"}}/>
            <div className="profile-description">
                <p className="name">Ivan Nemtsev</p>
                <p className="birth-date">2 January</p>
                <p className="city">Munich</p>
                <p className="education">NSU 22</p>
                <p className="web-site">github.com/ixtreme3</p>
            </div>
            <div className="posts">
                <div className="post">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </main>
        
        <footer style={{background: "lightcoral"}}>Footer</footer>
    </div>
  );
}

export default App;
