import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <UserProfile 
        name="Essu Christian" 
        age={27} 
        bio="A passionate front-end developer and WordPress enthusiast." 
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
