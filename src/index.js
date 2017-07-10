import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
const root = document.getElementById('root');

ReactDOM.render(
    <Main
        cid={root.hasAttribute('data-configuration-id') ? root.getAttribute('data-configuration-id') : null}
        colorNormal={root.hasAttribute('data-color-normal') ? root.getAttribute('data-color-normal') : null}
        fontNormal={root.hasAttribute('data-font-normal') ? root.getAttribute('data-font-normal') : null}
        colorFocused={root.hasAttribute('data-color-focused') ? root.getAttribute('data-color-focused') : null}
        fontFocused={root.hasAttribute('data-font-focused') ? root.getAttribute('data-font-focused') : null}
        colorDisabled={root.hasAttribute('data-color-disabled') ? root.getAttribute('data-color-disabled') : null}
        fontDisabled={root.hasAttribute('data-font-disabled') ? root.getAttribute('data-font-disabled') : null}
        configName={root.hasAttribute('data-config-name') ? root.getAttribute('data-config-name') : null}
        imageFormat={root.hasAttribute('data-image-format') ? root.getAttribute('data-image-format') : null}
        mode={root.hasAttribute('data-mode') ? root.getAttribute('data-mode') : null}
    />,
    document.getElementById('root')
);

