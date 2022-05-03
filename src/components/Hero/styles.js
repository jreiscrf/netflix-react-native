import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    hero: {
        height: 500,
        width: '100%'
    },
    logo: {
        marginTop: 60,
        marginLeft: 85,
        //alignSelf: 'center',
        width: 600,
        height: 600,
        zIndex: 10,
    },
    containerTop10: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        bottom: 10,
    },
    top10Img: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    top10Text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    gradient: {
        width: '100%',
        height: 150,
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
    },
});

export default styles;