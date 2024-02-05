# 📐 Architecture

This project uses the [Feature Sliced Architecture](https://feature-sliced.design/) approach for structuring the codebase. It is a modular approach that allows you to scale your project with ease.

It uses Emotion for styling from Material UI. It also uses Material UI components and icons, it has a custom theme setup as part of the Themes feature, with a dark and light theme.

It uses Next.js for routing and SSR and the project comes with prettier, eslint and husky setup. It automatically formats the code on save and it's configured to run lint whenever you try to commit code, blocking the commit if there are linting errors. And also have editor configurations for vscode and editorconfig extension.

It comes with Jest, Axios and Next Auth v4 pre-installed and pre-configured. The Auth feature comes with a custom "credentials" provider mocked to login with a username and password, but it can be easily replaced with any other provider. Jest is configured to run on every \*.test.ts(x)? file and it's configured to run with coverage and has a 'test' folder that is excluded from next build used for generic tests.

The QueryClient feature has a custom ApiBuilder class to take care of the axios instances and has tips for usage with authentication. It comes with a example of internal api usage and comments on how to use it with external apis. Although it's not being used for this example, it's a good practice to wrap all api calls in a react-query hooks (`useQuery`, `useMutation`, etc...) to take advantage of the QueryClient cache and other features.

This project also comes with Casl installed but is not being used. Although it is a easy feature to implement. Based on the Architecture implemented, you would create a new feature called "Casl" or "Abilities" that would hold the hooks, providers, etc... to be used in the rest of the app.

It also comes with this custom Documentation for publishing on a Wiki format that can be improved over time.

Which brings me to the last point, don't forget to update this documentation after you clone the project so you don't have "Boilerplate" documentation on your project. Make it your own!

## 📁 Folder structure

```
- docs/      | documentation
- public/    | static files
- src/       | source code
-- app/      | app routing from next.js
-- entities/ | entities modular logic separation / a entity usually have a api, ui, models, ... folders
-- features/ | features logic separation / Features can be composed of contexts, hocs, hooks, configs, providers, etc
-- shared/   | shared utils, constants, ui, etc
-- views/    | views hold the actual view for each route, preferably on a shallow level
-- widgets/  | widgets holds usually floating ui components that has a single instance on the page
```
