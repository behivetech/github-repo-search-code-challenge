import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
import {getCount, getTime} from 'tools/getValues';

// core
import Headline from 'components/core/Headline';
import Icon from 'components/core/Icon';
import Link from 'components/core/Link';
import {Card, CardActions, CardPrimaryAction} from 'components/core/card';

//
// app
import Avitar from 'components/app/Avitar';

import './RepoCardDetail.scss';

const DESCRIPTION_TEXT_LENGTH = 80;

export default function RepoCardDetail({
    className,
    id,
    description,
    full_name,
    language,
    owner: {avatar_url},
    stargazers_count,
    updated_at,
}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'repo-card-detail',
    });

    return (
        <Card className={rootClassName}>
            <CardPrimaryAction className={getChildClass('card-content')}>
                <Avitar className={getChildClass('avitar')} url={avatar_url} />
                <div className={getChildClass('card-detail')}>
                    <Link areaLink href={'/repo/[repoId]'} as={`/repo/${id}`}>
                        <Headline level={3}>{full_name}</Headline>
                    </Link>
                    <div>
                        {description && description.length > DESCRIPTION_TEXT_LENGTH
                            ? `${description.slice(0, DESCRIPTION_TEXT_LENGTH)}...`
                            : description}
                    </div>
                </div>
            </CardPrimaryAction>
            <CardActions className={getChildClass('card-bottom')}>
                <div className={getChildClass('with-icon')} title="Stargazers Count">
                    <Icon icon="stars" />
                    {getCount(stargazers_count)}
                </div>
                <div>{language}</div>
                <div className={getChildClass('updated')}>
                    updated: {getTime(updated_at, 'MM/DD/YYYY')}
                </div>
            </CardActions>
        </Card>
    );
}

RepoCardDetail.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    full_name: PropTypes.string,
    language: PropTypes.string,
    owner: PropTypes.shape({
        avatar_url: PropTypes.string,
    }),
    stargazers_count: PropTypes.number,
    updated_at: PropTypes.string,
};
