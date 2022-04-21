import React, { useContext} from 'react'
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as authContext} from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ({ navigation }) => {
    const {state, signup, clearErrorMessage} = useContext(authContext);

    return <View style={styles.container}>
        
            <NavigationEvents  onWillFocus={clearErrorMessage} />

            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                // onSubmit={({ email, password}) => signup({ email, password })}
                // Same
                onSubmit={signup}
            />

            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />

        </View>
}


SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
    buttonStyle: {
        margin: 15
    },
    textStyle:{
        color: 'blue',
        marginLeft: 15,
        marginTop: 10,
    }
});

export default SignupScreen;