import fetch from 'isomorphic-fetch';

import {BASE_API_URL} from 'config';

export default function fetcher(path, queryParams) {
    const query = [];

    for (const param in queryParams) {
        let paramVal = queryParams[param];

        // don't set sort if it's equal to the default sort
        if (param === 'sort' && paramVal === 'best_match') {
            paramVal = '';
        }

        if (paramVal && param !== 'language') {
            // Could do a better job of this, but simply replacing spaces with + in the q param
            // for this test to save some time. There's certainly edge cases that could break this,
            // but not gong to worry about it for now.
            if (param === 'q') {
                paramVal.replace(' ', '+');

                if (queryParams.language) {
                    paramVal += `+language:${queryParams.language}`;
                }
            }

            query.push(`${param}=${paramVal}`);
        }
    }

    return queryParams.q
        ? fetch(`${BASE_API_URL}${path}?${query.join('&')}`).then((response) =>
              response.json()
          )
        : null;
}
