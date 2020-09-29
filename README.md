# Github Repo Search (code challenge)

## About this project

This is a repo of a code challenge for an interview which performs a search on Gihub repositories.

### Demo

[https://github-search.behivetech.com/](https://github-search.behivetech.com/)

### Highlights...

-   SSR app using the [NextJS framework](https://nextjs.org/)
-   Mobile first responsive design using [SASS](https://sass-lang.com/)
-   React providers for Notifactions and Github data
-   A11y styled links in list to cover main area of repo card
-   Searching is throttled (using lodash's throttle) when typing in text fields
-   React Testing Library tests with Jest (not fully covered, just a few examples)
-   Implements prettier, eslint and husky to insure clean code on commits
-   [Material Design](https://material.io/) standards
-   Uses [moment-timezone](https://momentjs.com/timezone/) library which guesses timezone to display a formatted date/time in browser's timezone

## Running The Application

### Running in dev mode locally

```bash
npm run dev
```

### Running in prod mode locally

```bash
npm run build
npm run start:local
```

Open browser to this URL: [http://localhost:8080](http://localhost:8080)

`npm start` is specifically set up to run on Netlify

### Running tests

There are a few simple tests in `src/__tests__` to demonstrate testing skills.

```bash
npm run test
```

## React Code Exercise

### Objective

The objective is to build a repository search application using the Github repository search API (https://docs.github.com/en/rest/reference/search#search-repositories) that displays the results of a query. The app can query the API directly.

The list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.

Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

Finally, the app should be fully responsive and follow best practices in implementing a responsive website.

### Requirements

1. Search Input

    - An input to type in the text to search github.

2. Search results

    - Show the results of the search.

3. Sort results

    - By best match (default)
    - Stars

4. Filter results

    - By language

5. Detailed Result Page

    - A page that when a result is clicked shows a detailed screen of the repository.

6. Responsive Design

    - Should render properly on device sizes. (mobile, tablet, laptop, large desktop)

### Implementation

-   The application should be built using React.
-   The application should have at least two pages:
    -   Search page
    -   Details page
-   The application should be responsive.
-   Please write your code in Javascript or Typescript

### Evaluation

The solution will be evaluated against the following criteria:

1. **Was the code able to be built and ran locally?**
2. **Code Quality** - is the code clean, simple, commented, modern, well designed?
3. **User Experience** - how simple, intuitive, responsive and clear is the UI?
4. **Error handling** - does the code handle potential errors gracefully?
5. **Clarity** - does the repository have a detailed readme on setup/run/tests?

### Submission

-   Host the source code in a public Github repository

### Bonus

-   Tests that demonstrate the code works correctly and handles anything that might be thrown at it.
