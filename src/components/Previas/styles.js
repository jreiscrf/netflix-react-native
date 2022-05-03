import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flatListContainer: {
        marginBottom: 5,
    },
    oval: {
        backgroundColor: '#E50914',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90,
    },
    capa: {
        height: 85,
        width: 85,
        borderRadius: 85,
    },
    
    logo: {
        width: 90,
        height: 45,
        position: 'absolute',
    },
    titulo: {
        width: 180,
        height: 140,
        position: 'absolute',
        zIndex: 10,
        left: 15,
        alignSelf: 'center',
    },
    gradient: {
        height: 40,
        width: '100%',
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
    },
});

export default styles;