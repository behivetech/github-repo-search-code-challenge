import React from 'react';

// app
import Headline from 'components/core/Headline';
import RepoList from 'components/app/RepoList';

// layout
import Layout from 'components/layout/Layout';
import Section from 'components/layout/Section';

export default function IndexPage() {
    return (
        <Layout className="home-page" title="Search">
            <Section centered padding>
                <Headline level={2}>Welcome to the Github Repository Search</Headline>
                <RepoList />
            </Section>
        </Layout>
    );
}
