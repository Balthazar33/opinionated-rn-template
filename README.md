# Opinionated RN template

[![Balthazar33](https://circleci.com/gh/Balthazar33/opinionated-rn-template.svg?style=svg)](https://app.circleci.com/pipelines/github/Balthazar33/opinionated-rn-template)

## 🏁 Getting Started
Run the following command in a termial to create a new React Native app with this template:

```bash
npx react-native init <YOUR_APP_NAME> --template https://github.com/Balthazar33/opinionated-rn-template.git
```

Install dependencies:
```bash
cd <YOUR_APP_NAME> && npm i
```
⚠️ Continue to the next step only after configuring the splash screen *(see **Splash Screen** section below)*.\
Then, run the appropriate command from the following commands to build the app. *(Once built, the app needs to be launched manually by tapping on its icon)*.

**Android**:
```bash
# Run dev debug
npm run android:dev && npm run start

# Run prod debug
npm run android:prod && npm run start

# Run qa debug
npm run android:qa && npm run start

# Run stage debug
npm run android:stage && npm run start
```
(*The .env files for each environment can be found in the project root*)

## 🗄️ Global data management
This template uses **Redux Toolkit** to handle ephemeral data storage.
### Usage
#### To add an action
Navigate to `src/appRedux/slices` and create a new slice. Then, export the action from the slice. (*Refer sample slices in the folder*).

#### To dispatch an action:
```bash
const dispatch = useAppDispatch();
dispatch(<action>)
```
#### To access a state value:
```bash
const {value} = useAppSelector(state => state.sliceName);
```

## 📶 Managing API calls
**RTK Query** has been configured to make API calls. Navigate to `src/services/testApi` and refer the sample api. A helper method to make API calls with error handling has been added in `src/services/apiCaller.ts` file.  

## 📱 Splash Screen
`react-native-bootsplash` is used in this template to control the splash screen behavior and appearance. To display a custom icon on the splash screen, replace the `logo.png` image with your custom image in the `assets` folder at the project root and run
```bash
npm run load-splash-asset
```

## 💾 Persistent storage
This template uses **MMKVStorage** as a persistent storage (for redux-persist and as a general local db).

## 🔤 Typography
Pre-styled text components (created with **styled-components/native**) can be found in the `src/components/Typography.ts` file. (*Make sure to add custom fonts in `src/utils/constants.ts` file*).

## 🧪 Testing
This template uses **Jest** to run tests.
Test files (named as `<component-name>.test.ts/tsx`) can be found under the folders named `__tests__`.\
The setup/config for `Jest` can be found in the `jestSetup.js` and `jest.config.js` files in the project root.

Run sample tests with the following commands:
```bash
# Run all tests
npm run test

# Run tests for App.tsx
npm run test:app

# Run tests for components
npm run test:components

# Run tests for containers
npm run test:containers

# Run tests for screens
npm run test:screens
```