const PortLink = ({ text, linkClick, handleScroll, linkText }) => {
  const link = "#" + text
  return (
    <div onClick={() => { linkClick(text); handleScroll(link) }} className='w-1/2 flex flex-row mt-1 items-center group' >
      <span className={`h-1 ease-in-out rounded mr-3 duration-200 ${linkText === text ? 'w-20 bg-slate-50' : 'w-12 group-hover:w-16 bg-slate-500  group-hover:bg-slate-300 '}   `} />
      <a href={link} >
        <span className={`text-font-bold uppercase tracking-widest font-inter ${linkText === text ? 'text-slate-50' : 'text-slate-300 group-hover:text-slate-300'}   `}>{text}</span>
      </a>
    </div >
  );
}
export default PortLink;
