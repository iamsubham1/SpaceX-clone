import './App.css';
import Firstcontent from './components/Firstcontent';
import Navbar from './components/Navbar';
import Secondcontent from './components/Secondcontent';

function App() {
  return (
    <>
      <section className='section1'>
        <Navbar />
        <Firstcontent />
      </section>
      <section className='section2'>
        <Secondcontent />
      </section>
    </>


  );
}

export default App;
