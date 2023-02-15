import React from 'react'
import { View, Text} from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text>
                {props.mensagemExibir}
            </Text>
            <Text>
                {props.imcExibir}
            </Text>
            <Text>
                {props.classificacao}
            </Text>
        </View>
    )
}