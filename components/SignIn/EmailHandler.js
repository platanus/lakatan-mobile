import { Alert } from 'react-native';

const emailHandler = (text) => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)) {
    return (true);
  }
  Alert.alert(
    'Has ingresado un correo inválido!',
    'Intenta de nuevo',
    [
      { text: 'OK' },
    ],
    { cancelable: false },
  );

  return (false);
};

export default emailHandler;
