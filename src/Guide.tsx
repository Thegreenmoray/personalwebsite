import type { Tabs } from "./tabs.ts";
import './Guide.css'
function Guide(){
const tabs: Tabs[]=
    [
   {
         name:"Algothrim visualizer",
         content:"https://github.com/Thegreenmoray/moraysalgovisualzier",
         size: 40,
         color: "#FFE36E",
        height: "80px",
         width: "150px"
        },
        {
            name: "Baduk",
            content: "https://go-with-ko-rules-two-players-335910440161.us-central1.run.app/",
            size: 40,
            color: "#808080",
            height: "70px",
            width: "100px"
        },
    {
            name:"Seapig",
            content:"https://github.com/Thegreenmoray/projectseapig",
            size:40,
            color: "#FDD7E4",
            height: "70px",
            width: "100px"

        }
    ]


    return (

        <nav className="Guide">
            <h1 >Projects</h1>
            {/*This is how you make it horizontal*/}
            <ul className="guide-list">
                {tabs.map((tab) => (
                    <li key={tab.name} style={{fontSize: tab.size-10, width: tab.width,
                        height: tab.height, backgroundColor: tab.color,display: 'flex'
                    , alignItems: 'center', justifyContent: 'center'}}>
                        <a href={tab.content}>{tab.name}</a>
                    </li>
                ))}
            </ul>
            </nav>
    )
}
export default Guide