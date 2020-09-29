import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {throttle} from 'lodash';

import getClassName from 'tools/getClassName';
import {useGithubData} from 'components/providers/GithubDataProvider';
import {SEARCH_THROTTLE} from 'config';

// core
import Loading from 'components/core/Loading';
import Select from 'components/core/Select';
import TextField from 'components/core/TextField';

// app
import RepoCardDetail from 'components/app/RepoCardDetail';

import './RepoList.scss';

const ORDER_OPTIONS = [
    {
        label: 'Asc',
        value: 'asc',
    },
    {
        label: 'Desc',
        value: 'desc',
    },
];
const SORT_OPTIONS = [
    {
        label: 'Best Match',
        value: 'best_match',
    },
    {
        label: 'Stars',
        value: 'stars',
    },
    {
        label: 'Number of Forks',
        value: 'forks',
    },
    {
        label: 'Updated',
        value: 'updated',
    },
];
export default function RepoList({className}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'repo-list',
    });
    const searchRef = useRef(null);
    const {data, loading, language, order, q, search, sort} = useGithubData();

    useEffect(() => {
        if (searchRef.current) {
            // normally would implement useLayoutEffect, but it is not compatible with SSR
            // putting a little delay on the focus so component behaves correctly
            setTimeout(() => searchRef.current.focus(), 200);
        }
    }, [searchRef]);

    const throttledSearch = throttle(
        (event) => search({[event.target.name]: event.target.value}),
        SEARCH_THROTTLE,
        {
            leading: false,
            trailing: true,
        }
    );

    function handleSearchChange(event) {
        event.persist();
        throttledSearch(event);
    }

    function handleSortChange(event) {
        search({sort: event.target.value});
    }

    function handleOrderChange(event) {
        search({order: event.target.value});
    }

    return (
        <div className={rootClassName}>
            <form className={getChildClass('form')}>
                <TextField
                    className={getChildClass('search')}
                    defaultValue={q}
                    inputRef={searchRef}
                    label="Search"
                    name="q"
                    onChange={handleSearchChange}
                    placeholder="Please enter a search value"
                />
                <TextField
                    className={getChildClass('language')}
                    defaultValue={language || ''}
                    label="Language"
                    name="language"
                    onChange={handleSearchChange}
                />
                <Select
                    value={sort || SORT_OPTIONS[0].value}
                    fullWidth
                    label="Sort"
                    name="sort"
                    onChange={handleSortChange}
                    options={SORT_OPTIONS}
                />
                <Select
                    value={order || ORDER_OPTIONS[1].value}
                    fullWidth
                    label="Order"
                    name="order"
                    onChange={handleOrderChange}
                    options={ORDER_OPTIONS}
                />
            </form>
            <Loading loading={loading} />
            {data && data.items && (
                <div className={getChildClass('grid')}>
                    {data.items.length
                        ? data.items.map((item) => {
                              return <RepoCardDetail key={item.id} {...item} />;
                          })
                        : 'No repositories found.'}
                </div>
            )}
        </div>
    );
}

RepoList.propTypes = {
    className: PropTypes.string,
};
