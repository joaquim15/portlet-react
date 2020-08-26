
import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent';

export default function main({ portletElementId }) {

    ReactDOM.render(
        <AppComponent />,
        document.getElementById(portletElementId)
    );

}