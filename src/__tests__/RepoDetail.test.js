jest.mock('components/providers/GithubDataProvider');
import React from 'react';
import {render} from '@testing-library/react';
import * as nextRouter from 'next/router';
import RepoDetailPage from 'pages/repo/[repoId]';
import {useGithubData} from 'components/providers/GithubDataProvider';

describe('RepoDetailPage', () => {
    const mockData = {
        items: [
            {
                created_at: '2000-01-01T12:00:00Z',
                description: 'mock_description',
                forks_count: 123,
                name: 'mock_name',
                id: 1234,
                language: 'mock_language',
                license: {name: 'mock_name', url: 'mock_url'},
                open_issues: 5,
                owner: {
                    avatar_url: 'mock_avatar_url',
                    login: 'mock_login',
                    url: 'mock_url',
                },
                pushed_at: '2000-01-01T12:00:00Z',
                stargazers_count: 123456,
                updated_at: '2000-01-01T12:00:00Z',
                watchers_count: 123456,
            },
        ],
    };
    beforeEach(() => {
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({
            route: '/',
            pathName: '/repo',
            query: {repoId: '1234'},
        }));
    });

    it('should render without crashing', () => {
        useGithubData.mockReturnValue({});
        const container = render(<RepoDetailPage />);

        expect(container.baseElement).toMatchSnapshot();
    });

    it('should render loader', () => {
        useGithubData.mockReturnValue({loading: true});
        const container = render(<RepoDetailPage />);

        expect(container.baseElement).toMatchSnapshot();
    });

    it('should return a detail', () => {
        useGithubData.mockReturnValue({data: mockData});
        const container = render(<RepoDetailPage />);

        expect(container.baseElement).toMatchSnapshot();
    });
});
