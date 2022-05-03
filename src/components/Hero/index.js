import React from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Hero = () => {
    return(
        <>
            <ImageBackground
                style={styles.hero}
                source={require('../../assets/imghero.jpeg')}
            >
                <View>
                    <Image 
                        style={styles.logo}
                        source={require('../../assets/imglogo.png')}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.containerTop10}>
                    <Image 
                        style={styles.top10Img}
                        resizeMode='contain'
                        source={require('../../assets/top10.png')}
                    />
                    <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
                </View>
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
                    style={styles.gradient}
                >
                </LinearGradient>
            </ImageBackground>
        </>
    );
}

export default Hero