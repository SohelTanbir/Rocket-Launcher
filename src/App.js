
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import RocketWrapper from './components/RocketWrapper/RocketWrapper';


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <RocketWrapper/>
      <Footer/>
    </div>
  );
}

export default App;
