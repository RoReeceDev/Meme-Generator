import React from 'react'
import memesData from '../memesData'


const Meme = () => {

    function handleNewMeme() {
        const memesArr = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArr.length)
        console.log(memesArr[randomMeme].url)
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
        </main>
    )
}

export default Meme