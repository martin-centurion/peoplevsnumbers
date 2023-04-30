import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
  title: {
    fontSize: 20,
    color: '#212121',
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
    color: '#000000',
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    //width: '100%',
    borderBottomColor: '#355070',
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
