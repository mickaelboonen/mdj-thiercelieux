import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { useLocation, Link } from 'react-router-dom';

const Path = () => {
  const location = useLocation();
  const paths = location.pathname.split('/');

  console.log(paths);
  const pathElement = (
    <div className="path">
      <Link to={paths[0]}> Accueil </Link> <span>&gt;</span> {paths[1] !== undefined && <p><Link to={`/${paths[1]}`}>{paths[1]} </Link> {paths[2] !== undefined && <span>&gt; </span>}</p>}{paths[2] !== undefined && <p><Link to={`/${paths[1]}/${paths[2]}`}>{paths[2]}</Link> {paths[3] !== undefined && <span>&gt; </span>}</p>}{paths[3] !== undefined && <p><Link to={`/${paths[1]}/${paths[2]}/${paths[3]}`}>{paths[3]}</Link> {paths[4] !== undefined && <span>&gt; </span>}</p>}{paths[4] !== undefined && <p><Link to={`/${paths[1]}/${paths[2]}/${paths[3]}/${paths[4]}`}>{paths[4]}</Link> {paths[5] !== undefined && <span>&gt; </span>}</p>}{paths[5] !== undefined && <p><Link to={`/${paths[1]}/${paths[2]}/${paths[3]}/${paths[4]}/${paths[5]}`}>{paths[5]}</Link> {paths[6] !== undefined && <span>&gt; </span>}</p>}
    </div>
  );

  return pathElement;
};

Path.propTypes = {

};

export default Path;
