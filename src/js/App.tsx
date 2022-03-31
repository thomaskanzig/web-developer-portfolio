import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Header/>
            <main className="flex-shrink-0">
                <Hero/>
            </main>
          <Footer/>
        </React.Fragment>
    );
  }
}

export default App;
