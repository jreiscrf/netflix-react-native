import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    secaoTitle: {
        marginLeft: 20,
        marginTop: 15,
    },
    lista: {
        width: '100%',
        height: 180,
        MarginBottom: 30,
    },
    capa: {
        width: 120,
        height: 180,
        borderRadius: 4,
        overflow: 'hidden',
    },
    logo: {
        width: 100,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center',
    },
    borderTop: {
        backgroundColor: '#E50914',
        height: 3,
        width: 100,
        left: 20,
        marginBottom: 10,
        top: 15
    }, 
});

export default styles;