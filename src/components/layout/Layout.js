import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

// layout
import Header from './Header';
import Main from './Main';

// app
import SEO from 'components/app/SEO';
import NotificationSnackbar from 'components/app/NotificationSnackbar';

import './Layout.scss';

export default function Layout({children, className, description, title}) {
    const [rootClassName, getChildClass] = getClassName({className, rootClass: 'layout'});

    return (
        <div className={rootClassName}>
            <SEO title={title} description={description} />
            <Header className={getChildClass('header')} />
            <Main className={getChildClass('main')}>{children}</Main>
            <NotificationSnackbar />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** description for meta description of the site */
    description: PropTypes.string,
    /** title for meta title info of the site */
    title: PropTypes.string,
};
