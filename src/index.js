import { render } from 'react-dom';
import React from 'react';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';

import Root from './pages/routes';
import './general.scss';


render(
    <Root />,
  document.getElementById('root'),
);

if (module.hot) {
    // Hook in to the hot reloader
    module.hot.accept('pages/routes', () => {
        const NewRoot = System.import('pages/routes').default;

        render(
            <NewRoot />,
      document.getElementById('root'),
    );
    });
}
