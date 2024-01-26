import React from 'react'


const Form = () => {
    return (
        <form>
            <label for="top-text">Top text</label>
            <input type="text" name="top-text" placeholder="Shut up"/>
            <label for="bot-text">Bottom text</label>
            <input type="text" name="bot-text" placeholder=" And take my money"/>
            <button value="Get a new meme image"/>
        </form>
    )
}

export default Form