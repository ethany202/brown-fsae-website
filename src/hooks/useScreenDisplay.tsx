import { useState, useEffect } from 'react';

const maxMobileWidth = 600

function useScreenDisplay() {
  // Initialize state with current window dimensions
    const [screenDisplay, setScreenDisplay] = useState("REGULAR")

    useEffect(() => {
        if (window.innerWidth <= maxMobileWidth){
            setScreenDisplay("MOBILE")
        }
        console.log("UPDATED SCREEN SIZE");
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return screenDisplay;
}

export default useScreenDisplay;