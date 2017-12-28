import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={reducers} />, document.getElementById('root'));
registerServiceWorker();
