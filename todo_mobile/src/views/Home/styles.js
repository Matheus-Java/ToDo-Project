import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  filter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },

  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE6B26'
  },

  filterTextInative: {
    color: '#26295F',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.5
  }

});

export default styles;