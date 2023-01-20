
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">      

      <header className="App-header"></header>
      <Navbar/>
      {/* banner */}
      <Banner/>
        <Row title ="Trending In India"
        fatchUrl={requests.fetchTrending}
        />
         <Row title ="Netflix Originals"
        fatchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
         <Row title ="Top Rated"
        fatchUrl={requests.fetchTopRated}
        />
         <Row title ="Action"
        fatchUrl={requests.fetchActionMovies}
        />
         <Row title ="Comedy "
        fatchUrl={requests.fetchComedyMovies}
        />
        <Row title ="Horror "
        fatchUrl={requests.fetchHorrorMovies}
        />
         <Row title ="Romance"
        fatchUrl={requests.fetchRomanceMovies}
        />
         <Row title ="Documentaries"
        fatchUrl={requests.fetchDocumentaries}
        />
        
    </div>
  );
}

export default App;
