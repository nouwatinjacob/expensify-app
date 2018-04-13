import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h3>Info</h3>
      <p>The Info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share</p>
      <WrappedComponent {...props}/>
    </div>    
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Login to view this page content</p>) }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="There are the details" />, document.getElementById('index'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('index'));