import { StyleSheet, Platform } from 'react-native';
//Solución al error con el de SafeArea que no trabaja
//Importaremos un GlobalStyle para nuestras futuras pantallas y que puedan estar adentro de la pantalla
//Utilizado para Android

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});