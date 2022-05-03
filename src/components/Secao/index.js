import React from 'react';
import { Title } from 'react-native-paper'
import {  View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './styles';


const Secao = ({hasTopBorder}) => {
    return(
        <View style={styles.container}>
            {hasTopBorder && <View style={styles.borderTop}/>}
            <Title style={styles.secaoTitle}>Secao</Title>
            <FlatList 
                style={styles.lista}
                horizontal
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground 
                            resizeMode="contain"
                            style={[styles.capa, {marginRight: 10, marginLeft: index == 0 ? 20 : 0}]}
                            source={require('../../assets/Bird-box.jpg')}
                        > 
                            <Image resizeMode="contain" style={styles.logo} source={require('../../assets/birdbox.png')}/>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Secao;