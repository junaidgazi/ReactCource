
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
   
   <>
    <Navbar title="TextUtils" aboutText="About us" />
    {/* <Navbar/> */}
    
    <div className="container my-3">
      <Textform heading="Enter the text to analysis" />
    </div>


   </>
   
  );
}

export default App;
