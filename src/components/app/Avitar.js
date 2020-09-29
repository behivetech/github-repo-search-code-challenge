import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import './Avitar.scss';

export default function Avitar({className, url}) {
    const [rootClassName] = getClassName({className, rootClass: 'avitar'});

    return url ? <img src={url} alt="Repo Avitar" className={rootClassName} /> : null;
}

Avitar.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
};
