import Main from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';
import FormSection from './components/Form/Form';


function App() {
  return (
    <div className='appContainer'>
      <FormSection />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
