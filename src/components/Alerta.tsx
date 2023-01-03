import { Alert } from 'react-native';

const Alerta = (title, mensagem) =>
  Alert.alert(title, mensagem, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

export default Alerta;