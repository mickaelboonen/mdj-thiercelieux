import React from 'react';
import PropTypes from 'prop-types';

import Introduction from 'src/components/App/Home/Introduction';
import Characters from 'src/containers/App/Home/Characters';
import Expansions from 'src/containers/App/Home/Expansions';

import './style.scss';

const Home = () => (
  <div className="home">
    <Introduction />
    <Characters />
    <Expansions />
  </div>
);

Home.propTypes = {

};

export default Home;
