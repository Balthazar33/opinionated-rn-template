import Reactotron, { networking } from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
const reactotron = Reactotron.configure()
  .use(reactotronRedux()) // controls connection & communication settings
  .use(networking({
    ignoreUrls: /\/(logs|symbolicate)$/, // Ignore trivial logs
  }))
  .useReactNative() // add all built-in react native plugins
  .connect();
export default reactotron;
