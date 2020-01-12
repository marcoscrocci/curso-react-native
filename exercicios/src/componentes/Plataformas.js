import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') { // ios
            ToastAndroid.show(msg, ToastAndroid.LONG)
            //Alert.alert('Informação', msg)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <Button title='Plataforma?'
            onPress={() => notificar('Parabéns!')} />
    )
}