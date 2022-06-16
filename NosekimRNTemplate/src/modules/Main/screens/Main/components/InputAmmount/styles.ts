import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    paddingVertical: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputFlex: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 2,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default styles;
