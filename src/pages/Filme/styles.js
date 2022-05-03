import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    hero: {
        height: 200,
        width: '100%',
    },
    containerPadding: {
        padding: 20,
    },
    btnPlay: {
        marginVertical: 20,
    },
    caption: {
        marginTop: 20,
    },
    captionWhite: {
        color: '#fff',
    },
    menu: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    buttonTemporada: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(225, 225, 225, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    temporadaName: {
        color: '#fff',
    },

});

export default styles;