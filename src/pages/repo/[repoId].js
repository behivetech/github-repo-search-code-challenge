import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {useRouter} from 'next/router';

import getClassName from 'tools/getClassName';
import {useGithubData} from 'components/providers/GithubDataProvider';

// core
import Loading from 'components/core/Loading';

// app
import RepoDetail from 'components/app/RepoDetail';

// layout
import Layout from 'components/layout/Layout';

export default function RepoDetailPage({className}) {
    const [rootClassName] = getClassName({className, rootClass: 'repo-detail-page'});
    const {data, loading} = useGithubData();
    const router = useRouter();
    const repoId = useMemo(() => +get(router, 'query.repoId'), [router]);
    const item = useMemo(() => {
        return repoId && data
            ? get(data, 'items', []).find(({id}) => id === repoId)
            : null;
    }, [data, repoId]);

    return (
        <Layout
            className={rootClassName}
            title={item && item.full_name ? item.full_name : 'Repo'}
        >
            <Loading loading={loading} />
            {!loading && <RepoDetail {...item} />}
        </Layout>
    );
}

RepoDetailPage.propTypes = {
    className: PropTypes.string,
};
