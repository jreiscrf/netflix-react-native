import React from 'react';
import { FlatList, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


const Previas = () => {
    return(
        <FlatList 
                    horizontal
                    style={styles.flatListContainer}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10, marginBottom: 5 }} key={index}>
                            <View style={styles.oval}>
                                <Image 
                                    style={styles.capa}
                                    source={require('../../assets/imghero.jpeg')}
                                />
                                <Image
                                    resizeMode="contain"
                                    style={styles.titulo}
                                    source={require('../../assets/titulo.png')}
                                />
                                <LinearGradient
                                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
                                    style={styles.gradient}
                                 >
                                </LinearGradient>
                                
                            </View>
                        </TouchableOpacity>
                    )}
                />
    );
}

export default Previas;