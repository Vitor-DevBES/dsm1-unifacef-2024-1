import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SobreMim = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Mim</Text>

            <Image
                source={require('../../assets/profile.jpeg')} 
                style={styles.profileImage}
            />

            <Text style={styles.info}>Nome: Vitor Hugo Oliveira</Text>
            <Text style={styles.info}>Telefone: (16) 99304-3977</Text>
            <Text style={styles.info}>Email: vitorhugooliveira1606@gmail.com</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFF00', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000000',
        padding: 10,
        width: '20%',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SobreMim;
