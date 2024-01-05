import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState<'shown' | 'hidden'>(
    'hidden',
  );

  useEffect(() => {
    // register listeners
    Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus('shown'));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus('hidden'));

    // remove listeners
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  // dismiss keyboard (if active)
  const dismiss = () => (keyboardStatus === 'shown' ? Keyboard.dismiss() : '');

  // check keyboard visibility
  const isVisible = Keyboard.isVisible();

  return {keyboardStatus, isVisible, dismiss};
};
