
//controlling using redux
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { switchMode } from '../redux_store/actions';

export default function Index() {
    // get the current theme

    const theme = useSelector(state => state.theme);
    // initialize action dispatcher
    const dispatch = useDispatch();
    const [mode, setMode] = useState(theme.mode);
   
    const handleThemeChange = () => { 
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);
    return (
        <View style={mode == 'light' ? styles.container_light : styles.container_dark}>
            <Text style={mode == 'light' ? styles.text_light : styles.text_dark}>We are on {theme.mode} mode!</Text>
            <Button title="Switch Mode" onPress={handleThemeChange} />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    text_light: {
        marginBottom: 20,
        color: '#000'
    }

    ,
    text_dark: {
        marginBottom: 20,
        color: "#fff"
    }
}

);

