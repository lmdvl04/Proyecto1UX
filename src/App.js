
import './App.css';
import Header from "./Header"
//import Sidebar from "./Sidebar";
import HomePage from './HomePage';
import VideoCard from "./components/VideoCard"
function App() {
  return (
    <div className="App">
     <Header/>
     <HomePage/>
     <div style={{marginLeft:"600px",marginTop:"200px"}}> 
     <VideoCard/>
     </div>
    </div>
  );
}

export default App;