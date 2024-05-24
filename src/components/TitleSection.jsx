import { useEffect, useState } from "react"
import PortLink from "./PortLink"
import Socials from "./Socials"

const TitleSection = () => {
  const [link, setLink] = useState('')
  const linkClicked = (linkName) => {
    setLink(linkName)
    console.log(linkName)
  }
  const handleScrollId = (link,) => {
    const element = document.getElementById(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="container flex flex-col w-[25%] ml-[15%] mt-10">
      <strong className="antialiased text-5xl font-extrabold font-inter text-slate-100">Tanzir Hossain</strong>
      <strong className="antialiased font-inter mt-5 text-slate-200">Software Developer</strong>
      <p className="line-clamp-2 w-3/5 mt-8 text-slate-400">Building square wheels to better appreciate the round ones. </p>
      <div className="mt-10">
        <PortLink text='about' linkClick={linkClicked} handleScroll={handleScrollId} linkText={link} />
        <PortLink text='education' linkClick={linkClicked} handleScroll={handleScrollId} linkText={link} />
        <PortLink text='projects' linkClick={linkClicked} handleScroll={handleScrollId} linkText={link} />
      </div>
      <div className="flex grow items-end flex-row">
        <Socials />
      </div>
    </div>
  )
}

export default TitleSection
