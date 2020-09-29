import React from 'react';
import PropTypes from 'prop-types';

import GithubDataProvider from 'components/providers/GithubDataProvider';
import NotificationProvider from 'components/providers/NotificationProvider';

import 'styles/index.scss';
import 'styles/material-icons.scss';
import 'styles/material-design-components.scss';
import 'styles/font-awesome/fontawesome.scss';
import 'styles/font-awesome/brands.scss';
import 'styles/font-awesome/solid.scss';

export default function App({Component, pageProps}) {
    return (
        <NotificationProvider>
            <GithubDataProvider>
                <Component {...pageProps} />
            </GithubDataProvider>
        </NotificationProvider>
    );
}

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    pageProps: PropTypes.object,
};
