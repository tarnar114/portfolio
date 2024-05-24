import InfoSection from "./components/InfoSection"
import TitleSection from "./components/TitleSection"

function App() {
  const handleScrollToId = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="h-screen bg-gray-900 flex" >
      <TitleSection />
      <InfoSection />
    </div>
  )
}

export default App
