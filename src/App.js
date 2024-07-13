import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Button } from "flowbite-react";


function App() {
  return (
    <main className='main-container'>
   <div className='container'>
   <Header/>
    <Footer/>
   </div>
  </main>
  );
}

export default App;
