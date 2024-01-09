# Opinionated RN template

## 1. Getting Started
Run the following command in a termial to create a new React Native app with this template:

```bash
npx react-native init MyApp --template https://github.com/Balthazar33/opinionated-rn-template.git
```

Install dependencies:
```bash
cd MyApp && npm i
```
Then, to run the app:

**Android**:
```bash
# Run dev debug
npm run android:dev

# Run prod debug
npm run android:prod

# Run qa debug
npm run android:qa

# Run stage debug
npm run android:stage
```
(*The .env files for each environment can be found in the project root*)

## 2. Global data management
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

## 3. Managing API calls
**RTK Query** has been configured to make API calls. Navigate to `src/services/testApi` and refer the sample api. A helper method to make API calls with error handling has been added in `src/services/apiCaller.ts` file.

## 4. Persistent storage
This template uses **MMKVStorage** as a persistent storage (for redux-persist and as a general local db).

## 5. Typography
Pre-styled text components (created with **styled-components/native**) can be found in the `src/components/Typography.ts` file. (*Make sure to add custom fonts in `src/utils/constants.ts` file*).

## 6. Testing
This template uses **Jest** to run tests.
Test files (named as `<component-name>.test.ts/tsx`) can be found under the `__tests__` folder.\
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
```