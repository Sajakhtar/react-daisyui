# Setup

## Tailwind CSS

Follow guidance for [create-react-app](https://tailwindcss.com/docs/guides/create-react-app) for installaction and updating `tailwind.config.js` and `index.css`

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## daisyui

```bash
npm i daisyui
```

Update `tailwind.config.js`

```js
module.exports = {

    plugins: [
      require('daisyui'), // add this
    ],

  }
```

Change the daisyUI theme by adding `data-theme="light"` as an attribute in the `<html>` tag in index.html.

### Theme Change

Install and use as per [documentation](https://github.com/saadeghi/theme-change#js)

```bash
npm i theme-change --save
```


## heroicons

```bash
npm install @heroicons/react
```

Instructions for React available in the [repo](https://github.com/tailwindlabs/heroicons)

Icons:
- The list of [icon names](https://unpkg.com/browse/@heroicons/react@1.0.5/outline/)
- alternatively, the `<svg>` tag can be copied from the [website](https://heroicons.com/)
- [Bootsrap icons](https://icons.getbootstrap.com/) has more icon options such as social platform icons or bitcoin icon


## Stacks.js

```bash
npm install @stacks/connect

npm install @stacks/profile

npm install @stacks/storage

npm install @stacks/connect-react
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# To Do

- stacks.js packages and auth - done
- stacks.js logout
- fix DaisyUI - could be an issue to react-scripts from 5.0.0 to 4.0.3
