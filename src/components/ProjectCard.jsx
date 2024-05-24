const ProjectCard = ({ Title, Description, Img, Link }) => {
  return (
    <a href={Link} target="_blank" rel="noreferrer">
      <div className='group flex transition ease-in-out  p-3 rounded-lg mb-3 hover:bg-gray-700/20 hover:duration-200'>
        <img src={Img} className='h-[90px] w-[120px] rounded-lg border-2 border-gray-700/50' />
        <div className='ml-4'>
          <strong className='font-inter font-bold text-slate-200 group-hover:text-sky-600 text-lg'>{Title}</strong>
          <p className='mt-2 font-inter text-slate-400 '>{Description}</p>
        </div>
      </div>
    </a>

  )
}

export default ProjectCard
