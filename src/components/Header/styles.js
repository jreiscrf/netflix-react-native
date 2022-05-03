import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textWhite: {
        color: '#fff',
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,
        alignItems: 'center'
    },
    imgHeader: {
        width: 25,
        height: 50,
    },
});

export default styles;