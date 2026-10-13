import eel from './assets/image1.jpeg'
import { useState } from "react";
function Startpage() {
   const handleClick = () => {
       window.location.href = "https://github.com/Thegreenmoray"
   }
   const handleClick2 = () => {
       window.location.href = "https://www.linkedin.com/in/justin-deporter-37b3ab332/"
   }
   const [count, setCount] = useState(0)
    const handleClick3 = () => {
        if (count === 0) {
            setCount(1)
        }else{
            setCount(0)
        }
    }
   const [blogs] = useState(["fff","cf","qwe"])


    return (
        <div className="Startpage">

        <h1>Moray's website</h1>


            <button onClick={handleClick}>GitHub</button>
            <button onClick={handleClick2}>Linkedin</button>
            <button onClick={handleClick3}>Fun Fact About me</button>
            {count === 1 && <><img src={eel} style={{width: 300, height: 200}}/>
                <p>{"This Photo was taken when I was 15-16 years old I was at Ripley’s Aquarium at Myrtle Beach. I was" +
                    "just looking around at the fish, when I saw this eel pop their head out of the rock!" +
                    " The goofiness of the " +
                    "eel poking their head out made me fall in love with them. They became my favorite animal. And that's why I called myself " +
                    "thegreenmoray on GitHub."}</p></>}
            {blogs.map((blog,index)=>(
                <p key={index}>{blog}</p>
            ))}

        </div>

    )
}
export default Startpage