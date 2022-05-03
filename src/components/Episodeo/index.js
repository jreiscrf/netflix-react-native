import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Caption, Title } from 'react-native-paper';
import styles from'./styles';

const Episodeo = () => {
    return(
        <>
            <TouchableOpacity style={styles.container}>
                <View style={styles.row}>
                    <Image resizeMode='contain' style={styles.capa} source={require('../../assets/imghero.jpeg')}/>
                    <View>
                        <Title style={{fontSize: 15}}>1. Nome do Episódeo</Title>
                        <Caption>45 mins.</Caption>
                    </View>
                </View>
                <Caption>
                    There are many variations pf passages of Lorem Ipsum available but the 
                    majosy have suffered alteration in some form, by injected humour.
                </Caption>
            </TouchableOpacity>
        </>
    );
}

export default Episodeo;