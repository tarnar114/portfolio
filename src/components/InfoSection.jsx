import AboutSection from "./AboutSection"
import Education from "./Education"
import Projects from "./Projects"

const InfoSection = () => {
  return (
    <div className="overflow-scroll ml-[5%]  pr-4 justify-items-center container w-[35%] mt-10 mb-10">
      <AboutSection />
      <Education />
      <Projects />
    </div>
  )
}

export default InfoSection
