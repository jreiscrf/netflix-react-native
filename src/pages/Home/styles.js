import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    menuHeader: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 15,
        marginBottom: 25
    },
    flatListContainer: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 50,
    },
    previaContainer: {
        width: '100%',
        marginTop: 35,
    },
    previaText: {
        marginLeft: 20,
    },
});

export default styles;