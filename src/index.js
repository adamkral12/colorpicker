import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

ReactDOM.render(
    <Main
        cid={document.getElementById('root').hasAttribute('data-configuration-id') ? document.getElementById('root').getAttribute('data-configuration-id') : null}
        colorNormal={document.getElementById('root').hasAttribute('data-color-normal') ? document.getElementById('root').getAttribute('data-color-normal') : null}
        fontNormal={document.getElementById('root').hasAttribute('data-font-normal') ? document.getElementById('root').getAttribute('data-font-normal') : null}
        colorFocused={document.getElementById('root').hasAttribute('data-color-focused') ? document.getElementById('root').getAttribute('data-color-focused') : null}
        fontFocused={document.getElementById('root').hasAttribute('data-font-focused') ? document.getElementById('root').getAttribute('data-font-focused') : null}
        colorDisabled={document.getElementById('root').hasAttribute('data-color-disabled') ? document.getElementById('root').getAttribute('data-color-disabled') : null}
        fontDisabled={document.getElementById('root').hasAttribute('data-font-disabled') ? document.getElementById('root').getAttribute('data-font-disabled') : null}
    />,
    document.getElementById('root')
);

