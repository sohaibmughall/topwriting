import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Home from './screens/home/home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
