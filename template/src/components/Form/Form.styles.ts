import {Colors, withOpacity} from '@/utils/colors';
import {Fonts} from '@/utils/constants';
import {sizer} from '@/utils/metrics';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    gap: sizer(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTextInputStyle: {
    width: '100%',
    fontSize: sizer(14),
    fontFamily: Fonts.REGULAR,
    backgroundColor: withOpacity(Colors.GREY, 30),
  },
  errorMessageTextStyle: {
    marginTop: sizer(4),
    color: Colors.PRIMARY_RED,
  },
});
