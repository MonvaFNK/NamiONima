import Main from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';
import FormSection from './components/Form/Form';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className='appContainer'>
      <FormSection />
      <NavBar />
      <Main />
      <ScrollToTop />
    </div>
  );
}

export default App;
