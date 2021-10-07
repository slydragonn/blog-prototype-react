import React from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import HeaderBlog from './components/HeaderBlog';
import SectionArticles from './components/SectionArticles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBlog/>
        <Navbar/>
      </header>
      
      <section className='App-principalSection'>
      <SectionArticles titulo='Titulo del articulo.'/>
      </section>
      
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
