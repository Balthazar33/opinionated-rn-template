# Opinionated RN template (RN version 0.76.1)

[![Balthazar33](https://circleci.com/gh/Balthazar33/opinionated-rn-template.svg?style=svg)](https://app.circleci.com/pipelines/github/Balthazar33/opinionated-rn-template)




## 🏁 Getting started
Run the following command in a termial to create a new React Native app with this template:

```bash
npx react-native init <YOUR_APP_NAME> --template https://github.com/Balthazar33/opinionated-rn-template.git
```

Install dependencies:
```bash
cd <YOUR_APP_NAME> && npm i
```
> ⚠️ Continue to the next step only after configuring the splash screen *(see **Splash Screen** section below)*.\
> Then, run the appropriate command from the following commands to build the app. *(Once built, the app needs to be launched manually by tapping on its icon)*.
> Also, to disable new architecture for android, in the `android/gradle.properties` file, set `newArchEnabled` to `false`

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

## ↔ Multi-environment support
Four environments, viz. `staging`, `development`, `production`, and `qa`, have been configured with [react-native-config](https://www.npmjs.com/package/react-native-config), each with its own `.env` file.

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
**RTK Query** has been configured to make API calls. Navigate to `src/services/testApi` and refer the sample api. A helper method to make API calls with error handling has been added in `src/services/apiCaller.ts` file. Learn more about RTK Query [here.](https://redux-toolkit.js.org/rtk-query/overview)

*(To see how RTK Query works with GraphQL, switch to the **feat/graphQL** branch)*

## ➡️ Navigation
A Stack navigator has been implemented with **@react-navigation/native** and **@react-navigation/stack**, located at `navigation/AppNavigator.tsx` with the types for the same added in `navigation/types.ts`.

## 📱 Splash Screen
`react-native-bootsplash` is used in this template to control the splash screen behavior and appearance. To display a custom icon on the splash screen, replace the `logo.png` image with your custom image in the `assets` folder at the project root and run
```bash
npm run load-splash-asset
```
[Learn more](https://github.com/zoontek/react-native-bootsplash)

## 💾 Persistent storage
This template uses [**MMKVStorage**](https://github.com/ammarahm-ed/react-native-mmkv-storage) as a persistent storage (for redux-persist and as a general local db). 

## 🔤 Typography
Pre-styled text components (created with **styled-components/native**) can be found in the `src/components/Typography.ts` file. (*Make sure to add custom fonts in `src/utils/constants.ts` file*). Learn more about styled components [here.](https://styled-components.com/)

## 🧪 Testing
This template uses **Jest** to run tests.
Test files (named as `<component-name>.test.ts/tsx`) can be found under the folders named `__tests__`.\
The setup/config for `Jest` can be found in the `jestSetup.js` and `jest.config.js` files in the project root.
**Mock service worker** (MSW) has been configured to mock http request responses. [Learn more](https://mswjs.io/)

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

## 🐛Error boundary
This template has an error boundary configured to intercept JavaScript run-time errors and display a fallback UI to minimize app crashes.\
Package used: [`react-native-error-boundary`](https://www.npmjs.com/package/react-native-error-boundary)\
Learn more about error boundaries [here](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary).

## 🛡️Security
- **Third-party keyboard detection (android)**
If one or more third-party on-screen keyboards are detected, a warning will be displayed to the user on launching the app for the first time, notifying the user about the third-party keyboard(s). This implementation can be found in the `MainActivity.kt` file at `android/app/src/main/java/com/<MY_APP>/MainActivity.kt`.
- **Encrypted storage**
Store sensitive data in encrypted storage using **react-native-mmkv-storage**. An encrypted instance of storage can be created as follows:
```bash
const encryptedStorage = new MMKVLoader().withEncryption().initialize()
```

## 📝Form validation
Validate form data with [yup](https://www.npmjs.com/package/yup), highlight fields with errors, and display error messages.\
**Usage**
```bash
import {object, string} from 'yup';

const formRef = useRef<FormRef>(null);
const [username, setUsername] = useState('');

const handleValidate = () => {
    const isValid = formRef?.current?.validate?.();
    // handle valid/invalid form data
};

<Form
    ref={formRef}
    formData={[
        {
            usernameField: username,
            // add more fields as necessary
        }
    ]}
    schema={object({
        usernameField: string().required('Username may not be empty'),
    })}
    formElementProps={[
        {
            maxLength: 30,
            value: username,
            label: 'Username',
            onChangeText: setUsername,
            fieldName: 'usernameField',
            placeholder: '',
            type: FormElementTypes.TEXT_INPUT,
            style: {},
            containerStyle: {}
        }
    ]}
/>

<Button {...buttonProps} onPress={handleValidate} />
```
## 💻DX
- `eslint-plugin-unicorn` 
Integrated for extending ESLint rules. [Learn more](https://github.com/sindresorhus/eslint-plugin-unicorn)
- `rnx-gen` 
Integrated for generating common resources (screens, components, hooks, redux files) with a single command. [Learn more](https://www.npmjs.com/package/rnx-gen)
- `babel-plugin-module-resolver`
Integrated for supporting absolute paths. [Learn more](https://www.npmjs.com/package/babel-plugin-module-resolver)
- `@commitlint/config-conventional`
Integrated for enforcing commit message rules and enhancing dx.
Usage:
```bash
git add . // Stage changes
npm run commit // Run commit script
```
 [Learn more](https://commitlint.js.org/#/reference-rules)
