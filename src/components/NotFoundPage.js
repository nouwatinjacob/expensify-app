import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h4>404!</h4>
    <p>
      <Link to="/">Go home </Link>
    </p>
  </div>
);

export default NotFoundPage;