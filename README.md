# Quiz

## About this project

Play our free [online quiz](https://quiz-1bc14.web.app/). \
The project is based on this [open trivia](opentdb.com/api.php) api. The Open Trivia Database provides a completely free JSON API for use in programming projects. \
The data provided by the API is available under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

![](public/application.webp)

## Repo

A Git repository can be found at https://github.com/fcesc-code/quiz.git

## Tech Stack

- [React](https://reactjs.org/) as a framework
- [Create React App](https://github.com/facebook/create-react-app) To bootstrap the project
- [Flux](https://fluxcd.io/) as a one-way data flow model
- [Firebase](https://firebase.google.com/) to deploy the site
- [scss](https://sass-lang.com/)
- [GitHub](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [sonarqube](https://www.sonarqube.org/)
- [ESLint](https://eslint.org/)
- [VSCode](https://code.visualstudio.com/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions

## Releases

| Version | Date                 | Status      | Content         |
| ------- | -------------------- | ----------- | --------------- |
| 0.2.0   | November 2021 (est.) | -           | Upgraded UI     |
| 0.1.1   | August 2021          | pre-release | First           |
| 0.1.0   | -                    | -           | Initial version |

### Version 0.2.0

1. ✔️ Include a component to notify UI when there is no internet connection or API throws an error
2. ❌ Limit maximum calls of API when error is thrown or connection is broken
3. ❌ Load mockdata to local run app when there is no internet connection
4. ✔️ Include GitHub Actions to launch testing for continuous delivery
5. ✔️ Lazy loading and ❌ optimized image source set for all components
6. ❌ Create database and ❌ backend app to store user and leaderboard results
7. ❌ Integrate backend data to the app
8. ✔️ Increase testing coverage
9. ❌ Include GitHub Actions for continuous deployment in firebase
10. ❌ Optimize responsive design and ❌ accessibility of the site

_Ticks indicate current development status of each task_

### Version 0.1.0

Initial release.

## Quality gate

- [HTML Validator](https://jigsaw.w3.org/css-validator/): 0 errors | 0 warnings
- [CSS Validator](https://jigsaw.w3.org/css-validator/validator): 0 errors | 0 warnings
- Accessibility Validator:
- [Jest](https://jest.io/): 57 tests passed | 15 snapshots passed | [![Testing](https://github.com/fcesc-code/quiz/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/fcesc-code/quiz/actions/workflows/node.js.yml) | coverage:
  | statements | branches | lines | functions |
  | ---------- | -------- | ----- | --------- |
  | 94.36% | 86.05% | 92.00% | 94.24% |
- [Sonarqube](https://www.sonarqube.org/): 0 bugs | 0 code smells | 0 vulnerabilities | 2 security hotspots | 0% code duplication (excluding duplicated API file requested to separate deliverables)
- [GitHub codeQL](https://github.com/github/codeql): 0 security alerts [![CodeQL](https://github.com/fcesc-code/quiz/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/fcesc-code/quiz/actions/workflows/codeql-analysis.yml)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode, [open in your browser](http://localhost:3000) @ port 3000. \
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Credits

The quiz project was born as a team activity in our _[Skylab](https://www.skylabcoders.com/es/)-bootcamp-202007_. \
Special thanks to [Gilberto Cao](https://linkedin.com/in/gilbecao). \
This project was created by [Francesc Brugarolas](https://linkedin.com/in/francescbrugarolas) and [Victor Alemany](https://es.linkedin.com/in/victor-alemany-sancho).

August 2020. \
Latest update: August 2021.
