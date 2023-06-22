import React, { useState } from 'react';
import Axios from 'axios';
import '../global.css';
export default function Home() {
    const [img, setImg] = useState({});
    React.useEffect(() => {
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=Bc0jr7ltoimdJd5sNR9aPzV3DgdeSJpfOz1UmmGf").then((responce) => {
            console.log(responce.data);
            setImg(responce.data)
        })
    }, []);
  return (
    <>
        <div className='navbar'>
            <p className='home-heading'>MYM ASSIGNMENT</p>
        </div>
        <div className='img-section'>
            <p className='img-heading'>Astronomy Image of the Day is:</p>
            <img src={img.url} alt=""></img>
            <p className='img-desc'>{img.explanation}</p>
        </div>
    
    </>
  )
}
