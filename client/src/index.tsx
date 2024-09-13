import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '../i18n';

const Index: React.FC = () => {
  return <App></App>;
};

ReactDOM.render(<Index />, document.getElementById('root'));