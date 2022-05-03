import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return(
        <LinearGradient
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.0)']}
            style={styles.header}
        >
            <View style={styles.headerSafeAreaView}>
                <Image style={styles.imgHeader} source={require('../../assets/N.png')}/>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>
                        Séries
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>
                        Filmes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>
                        Minha Lista
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient> 
    )
}

export default Header;