import React, { useContext, useEffect, useState } from 'react'
import '../global.css';
import { AuthContext } from '../AuthContext';

export default function Home() {
    const [img, setImg] = useState({});
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        const getImage = async () => {
            const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=Bc0jr7ltoimdJd5sNR9aPzV3DgdeSJpfOz1UmmGf');
            const img_content = await res.json();
            if (img_content) {
                setImg(img_content)
            }
        }
        getImage();
    }, []);
    return (
        <>
            <div className='navbar'>
                <p className='home-heading'>MYM ASSIGNMENT</p>
                <button className='logout-btn' onClick={() => { setAuth(false) }}>Logout</button>
            </div>
            <div className='img-section'>
                <p className='img-heading'>{img.title}</p>
                <img src={img.url} alt=""></img>
                <p className='img-desc'>{img.explanation}</p>
            </div>
        </>
    )
}
