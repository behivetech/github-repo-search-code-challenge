import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {useRouter} from 'next/router';

import getClassName from 'tools/getClassName';

import Headline from 'components/core/Headline';
import Icon from 'components/core/Icon';
import Link from 'components/core/Link';

import './Header.scss';

export default function Header({className}) {
    const [rootClassName, getChildClass] = getClassName({className, rootClass: 'header'});
    const router = useRouter();

    return (
        <header className={rootClassName}>
            <div className={getChildClass('left')}>
                <Headline level={1}>
                    <Link href="/" noUnderline onPrimary>
                        <Icon faBrand faIcon="github" /> Search
                    </Link>
                </Headline>
            </div>
            {get(router, 'query.repoId') && (
                <div className={getChildClass('right')}>
                    {' '}
                    <Link
                        className={getChildClass('link')}
                        href="/"
                        noUnderline
                        onPrimary
                    >
                        &lt;&lt; back to search
                    </Link>
                </div>
            )}
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string,
};
