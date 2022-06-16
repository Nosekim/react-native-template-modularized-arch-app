import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counterContent: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
  },
  countTitle: {
    fontSize: 24,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  incrementAmmoutContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
});

export default style;
