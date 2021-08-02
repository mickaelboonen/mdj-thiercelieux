// == Import npm
import React from 'react';

import Header from 'src/components/App/Header';
import Home from 'src/components/App/Home';
import Footer from 'src/components/App/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
