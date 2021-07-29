// == Import npm
import React from 'react';
import Sunrise from 'src/components/Animations/Sunrise';

// == Import
import './styles.css';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <div className="sunrise-animation">
      <Sunrise />
    </div>
  </div>
);

// == Export
export default App;
