import Avatar from "./Avatar.jsx";
import Bio from "./Bio.jsx";
import Skills from "./Skills.jsx";
import Emoji from "./assets/emoji.svg";


export default function MainCard() {
  return (
    <div className="main-div" >
        <div className="main-div-upper">
        <Avatar />
        </div>

        <div className="main-div-lower">
        <Bio />
        <div className="list-skill-div">
        <Skills skill = "HTML+CSS" icon = {Emoji} background = "green"/>
        <Skills skill = "JavaScript" icon = {Emoji} background = "#61dafb"/>
        <Skills skill = "Web Design" icon = {Emoji} background = "#ff3e00"/>
        <Skills skill = "Git and Github" icon = {Emoji} background = "#f1502f"/>
        <Skills skill = "React" icon = {Emoji} background = "#8e44ad"/>
        <Skills skill = "Svelte" icon = {Emoji} background = "#f0db4f"/>
        </div>
        </div>
    </div>
  )
}
