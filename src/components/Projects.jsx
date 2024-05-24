import ProjectCard from "./ProjectCard"
import Img from '../assets/sdn.png'
import Spotify from '../assets/spotify.jpeg'
import Ross from '../assets/bob-ross.png'
const Projects = () => {
  return (
    <div id='#projects' className="flex flex-col mt-48">
      <ProjectCard Link="https://github.com/tarnar114/SDN" Img={Img} Title="DDos SDN Mitigation System" Description="a Python-based system to detect and mitigate volumetric DDoS attacks in Software Defined
Networks, ensuring network stability and security"/>
      <ProjectCard Link="https://github.com/tarnar114/Happy-Little-Mistakes-OHMs-" Img={Ross} Title="Only Happy Mistakes" Description="Web-based platformthat empowers artistis to exhibit their visual arts and have other people rate on it for a chance of recognition" />
      <ProjectCard Link="https://github.com/tarnar114/spotLatent" Img={Spotify} Title="SpotLatent" Description="web-based platform enabling users to analyze their Spotify playlists, providing insights into
song characteristics such as loudness, acousticness, tempo, etc"/>
    </div>
  )
}

export default Projects
