import React, { useState } from 'react'
import memesData from '../memesData'


const Meme = () => {
    //State variables, variables that can change and update, they're mutable
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [ allMemeData, setAllMemeData ] = useState(memesData)

    function handleNewMeme() {
        const memesArr = allMemeData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }


    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input type="text" name="top-text" placeholder="Shut up" className="form-input" />
                </div>
                <div>
                    <label htmlFor="bot-text" className="form-label">Bottom text</label>
                    <input type="text" name="bot-text" placeholder=" And take my money" className="form-input" />
                </div>
                <button className="form-button" onClick={handleNewMeme}>Get a new meme image 🖼</button>
            </div>

            <img src={meme.randomImg} className="meme--img"/>

        </main>
    )
}

export default Meme