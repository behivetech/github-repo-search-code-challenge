jest.mock('components/providers/GithubDataProvider');
import React from 'react';
import {render} from '@testing-library/react';
import * as nextRouter from 'next/router';
import RepoListPage from '../pages/index';
import {useGithubData} from 'components/providers/GithubDataProvider';

describe('RepoListPage', () => {
    const mockData = {
        items: [
            {
                created_at: '2000-01-01T12:00:00Z',
                description: 'mock_description',
                forks_count: 'mock_forks_count',
                full_name: 'mock_login/mock_name',
                name: 'mock_name',
                id: 1234,
                language: 'mock_language',
                license: {name: 'mock_name', url: 'mock_url'},
                open_issues: 'mock_open_issues',
                owner: {
                    avatar_url: 'mock_avatar_url',
                    login: 'mock_login',
                    url: 'mock_url',
                },
                pushed_at: '2000-01-01T12:00:00Z',
                stargazers_count: 123456,
                updated_at: '2000-01-01T12:00:00Z',
                watchers_count: 'mock_watchers_count',
            },
            {
                created_at: '2000-02-02T12:00:00Z',
                description: 'mock_description2',
                forks_count: 'mock_forks_count2',
                full_name: 'mock_login2/mock_name2',
                name: 'mock_name2',
                id: 1235,
                language: 'mock_language2',
                license: {name: 'mock_name2', url: 'mock_url2'},
                open_issues: 'mock_open_issues2',
                owner: {
                    avatar_url: 'mock_avatar_url2',
                    login: 'mock_login2',
                    url: 'mock_url2',
                },
                pushed_at: '2000-02-02T12:00:00Z',
                stargazers_count: 123456,
                updated_at: '2000-02-02T12:00:00Z',
                watchers_count: 'mock_watchers_count2',
            },
        ],
    };
    beforeEach(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({
            route: '/',
            pathName: '/',
            query: {},
        }));
    });

    it('should render without crashing', () => {
        useGithubData.mockReturnValue({});
        const container = render(<RepoListPage />);

        expect(container.baseElement).toMatchSnapshot();
    });

    it('should render loader', () => {
        useGithubData.mockReturnValue({loading: true});
        const container = render(<RepoListPage />);

        expect(container.baseElement).toMatchSnapshot();
    });

    it('should return a list', () => {
        useGithubData.mockReturnValue({data: mockData});
        const container = render(<RepoListPage />);

        expect(container.baseElement).toMatchSnapshot();
    });
});
