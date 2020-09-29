import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
import {getCount, getTime} from 'tools/getValues';

// core
import Headline from 'components/core/Headline';

// layout
import Section from 'components/layout/Section';

// app
import Avitar from 'components/app/Avitar';

import './RepoDetail.scss';

export default function RepoDetail({
    className,
    created_at,
    description,
    forks_count,
    id,
    language,
    license,
    name,
    open_issues,
    owner,
    pushed_at,
    stargazers_count,
    updated_at,
    watchers_count,
}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'repo-detail',
    });

    return (
        <Section className={rootClassName} padding centered>
            {id ? (
                <React.Fragment>
                    <div className={getChildClass('header')}>
                        <Avitar
                            className={getChildClass('avitar')}
                            url={owner.avatar_url}
                        />
                        <div>
                            <Headline level={2}>{name}</Headline>
                            {owner.login}
                        </div>
                    </div>
                    <dl className={getChildClass('dl')}>
                        <dt>Stargazers:</dt>
                        <dd>{getCount(stargazers_count)}</dd>
                        <dt>Open Issues:</dt>
                        <dd>{getCount(open_issues)}</dd>
                        <dt>Open Issues:</dt>
                        <dd>{getCount(forks_count)}</dd>
                        <dt>Language:</dt>
                        <dd>{getCount(language)}</dd>
                        <dt>Created:</dt>
                        <dd>{getTime(created_at)}</dd>
                        <dt>Updated:</dt>
                        <dd>{getTime(updated_at)}</dd>
                        <dt>Last Pushed:</dt>
                        <dd>{getTime(pushed_at)}</dd>
                        {license && (
                            <React.Fragment>
                                <dt>License</dt>
                                <dd>
                                    <a
                                        href={license.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {license.name}
                                    </a>
                                </dd>
                            </React.Fragment>
                        )}
                    </dl>
                    <div>{description}</div>
                </React.Fragment>
            ) : (
                <div>Item not found.</div>
            )}
        </Section>
    );
}

RepoDetail.propTypes = {
    className: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    forks_count: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    language: PropTypes.string,
    license: PropTypes.shape({name: PropTypes.string, url: PropTypes.string}),
    open_issues: PropTypes.number,
    owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
    }),
    pushed_at: PropTypes.string,
    stargazers_count: PropTypes.number,
    updated_at: PropTypes.string,
    watchers_count: PropTypes.number,
};
