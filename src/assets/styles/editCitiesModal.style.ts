import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 20,
    alignItems: 'center',
    marginRight: 30,
  },
  closeBtn: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
