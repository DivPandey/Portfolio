import React from "react";
import Typewriter from "typerwriter-effect";

function Typing (){
    return(
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Software Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;