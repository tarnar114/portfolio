import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareUpwork } from "react-icons/fa6";
import { IconContext } from "react-icons"
import { MdEmail } from "react-icons/md";
export default function Socials() {
  return (
    <div className="flex ml-[10%] mb-[5%]  duration-100  p-1 rounded-lg ">
      <IconContext.Provider value={{ className: "w-[24px] ml-2 mr-2 h-[24px] text-gray-500 hover:text-gray-50 ease-in-out duration-100" }}>
        <a href="https://www.linkedin.com/in/tanzir-hossain-30b221198/" target="_blank" rel='noreferrer'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/tarnar114" target="_blank" rel='noreferrer'>
          <FaGithub />
        </a>
        <a href="https://www.upwork.com/freelancers/~011ff93ea7ab84c5ff" target="_blank" rel='noreferrer'>
          <FaSquareUpwork />
        </a>
      </IconContext.Provider>
    </div>
  )
}
