'use client'

import React from 'react'
import { useState, useEffect } from 'react'


const CopyButton = ({ style }) => {

  const ip = "play.tcraft.eu"
  const defaultStyle = "hover:bg-inherit hover:text-gray-900 text-gray-900 border-gray-900"
  const [buttonName, setButtonName] = useState(ip)
  const [customStyle, setCustomStyle] = useState(defaultStyle);
  const [timeoutId, setTimeoutId] = useState(null); // State to store timeout ID

  const handleClick = () => {
    // Clear any existing timeout to prevent overlaps
    if (timeoutId) clearTimeout(timeoutId);

    setButtonName("Zkopírováno");
    setCustomStyle("btn-outline-success");

    // Set a new timeout and store its ID in state
    const newTimeoutId = setTimeout(() => {
      setButtonName(ip);
      setCustomStyle(defaultStyle);
    }, 4000);
    navigator.clipboard.writeText(ip);
    setTimeoutId(newTimeoutId); // Update the stored timeout ID
  };

  useEffect(() => {
    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (<>
    <button onClick={handleClick} className={`btn btn-outline-primary lg:hover:rounded-full mx-4 ${style} ${customStyle}`}>
      {buttonName}
    </button>
  </>
  )
}

export default CopyButton