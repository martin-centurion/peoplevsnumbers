import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.primary,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
