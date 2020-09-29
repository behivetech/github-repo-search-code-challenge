import React from 'react';
import PropTypes from 'prop-types';
import {Icon as MaterialIcon} from '@rmwc/icon';

import getClassName from 'tools/getClassName';

import './Icon.scss';

export default function Icon({
    className,
    faBrand,
    faIcon,
    faSolid,
    icon,
    onPrimary,
    onSecondary,
    ...props
}) {
    const [rootClassName] = getClassName({
        className,
        addOns: {
            'fa-icon': faIcon,
            [`fa-${faIcon}`]: faIcon,
            fab: faBrand,
            fas: faSolid || (!faBrand && faIcon),
        },
        modifiers: {
            'on-primary': onPrimary,
            'on-secondary': onSecondary,
        },
        rootClass: 'icon',
    });

    return faIcon ? (
        <i className={rootClassName} />
    ) : (
        <MaterialIcon {...props} className={rootClassName} icon={icon} />
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    /** Font Awesome setting for a brand icon */
    faBrand: PropTypes.bool,
    /** Font Awesome setting for a specific icon */
    faIcon: PropTypes.string,
    /** Font Awesome setting for a */
    faSolid: PropTypes.bool,
    /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
    icon: PropTypes.string,
    /** Adds class to use the MDC theme on-primary text color */
    onPrimary: PropTypes.bool,
    /** Adds class to use the MDC theme on-secondary text color */
    onSecondary: PropTypes.bool,
};

Icon.defaultProps = {
    icon: 'menu',
};
