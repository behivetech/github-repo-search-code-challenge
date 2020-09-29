import React, {createContext, useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import fetcher from 'tools/fetcher';
import {useNotifications} from 'components/providers/NotificationProvider';

const getAppSessionState = () => {
    const appSessionState =
        typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('appState') : null;

    return appSessionState ? JSON.parse(appSessionState) : {};
};
const INITIAL_STATE = {
    q: '',
    sort: '',
    order: 'desc',
    ...getAppSessionState(),
};
const DEFAULT_CONTEXT = {
    ...INITIAL_STATE,
    search: () => null,
};

const GithubDataContext = createContext(DEFAULT_CONTEXT);

export function useGithubData() {
    return useContext(GithubDataContext);
}

function reducer(state, {payload, type}) {
    const actions = {
        SET_SEARCH: {...state, ...payload},
    };

    const newState = {...state, ...actions[type]} || state;

    sessionStorage.setItem('appState', JSON.stringify(newState));

    return newState;
}

export default function GithubData({children}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {setNotification} = useNotifications();
    const {data, isValidating} = useSWR(
        ['/search/repositories', state],
        (path) => fetcher(path, state),
        {
            onError: (error) => {
                setNotification({
                    devMessage: error,
                    message: `There was a problem fetching the data. ${error}`,
                    messageKey: 'fetchDataError',
                    ttl: 20000,
                });
            },
            onSuccess: (response) => {
                if (response && response.message) {
                    setNotification({
                        message: response.message,
                        messageKey: 'fetchMessage',
                        ttl: 20000,
                    });
                }
            },
        }
    );

    function search(payload) {
        dispatch({type: 'SET_SEARCH', payload});
    }

    const context = {
        ...state,
        data,
        loading: isValidating,
        search,
    };

    return (
        <GithubDataContext.Provider value={context}>
            {children}
        </GithubDataContext.Provider>
    );
}

GithubData.propTypes = {
    children: PropTypes.node,
};
