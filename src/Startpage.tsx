import eel from './assets/image1.jpeg'
function Startpage() {
   const handleClick = () => {
       window.location.href = "https://github.com/Thegreenmoray"
   }
   const handleClick2 = () => {
       window.location.href = "https://www.linkedin.com/in/justin-deporter-37b3ab332/"
   }

    return (
        <div className="Startpage">

        <h1>Moray's website</h1>
            <img src={eel} style={{ width: 300, height: 200 }}/>
           <p>{"Fun fact, This Photo was taken when I was 15-16 at Myrtle Beach. The goofiness of the " +
               "eel poking their head out made me fall in love with them. And that's why I called myself " +
               "thegreenmoray."}</p>
            <button onClick={handleClick}>GitHub</button>
            <button onClick={handleClick2}>Linkedin</button>
        </div>

    )
}
export default Startpage