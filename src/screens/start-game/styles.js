import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: theme.colors.black,
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    //width: '100%',
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 2,
    minWidth: 70,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
