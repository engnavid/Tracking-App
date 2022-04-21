import React, { useContext } from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always'}} style={styles.container}>
            <Text style={{fontSize:40}}>Sign Out</Text>
            <Button style={styles.buttonStyle} title='Sign Out' onPress={signout} />
        </SafeAreaView>
    );
}

AccountScreen.navigationOption = () => {
    return{
        tabBarIcon: <FontAwesome name="gear" size={20} style={{ color: 'black'}}/>
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        textAlign: 'center',
    },
    buttonStyle: {
        margin: 25,
    }
});

export default AccountScreen;