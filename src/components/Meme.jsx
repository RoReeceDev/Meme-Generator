import React, { useState, useEffect } from 'react'
import memesData from '../memesData'


const Meme = () => {
    //State variables, variables that can change and update, they're mutable
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeData, setAllMemeData] = useState([])


    const handleChange = (e) => {
        const { name, type, value } = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // console.log(meme)

    //useEffect fetch for meme api

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeData(data.data.memes))
    }, [])



    //New to create form data for inputs? 
    function handleNewMeme() {
        const randomMeme = Math.floor(Math.random() * allMemeData.length)
        const url = allMemeData[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }


    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="topText" className="form-label">Top text</label>
                    <input
                        type="text"
                        name="topText"
                        className="form-input"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bottomText" className="form-label">Bottom text</label>
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="And take my money"
                        className="form-input"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="form-button" onClick={handleNewMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme--img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme