import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
   <>
   <div style={{"height":"200vh","backgroundColor":"#FFEDD1","display":"flex","flex-direction":"column"}}>
   <Navbar/>
   <div style={{"height":"80vh","backgroundColor":"#FFEDD1"}}></div>
   <Footer/>
   </div>
   
   </>
  );
}

export default App;
