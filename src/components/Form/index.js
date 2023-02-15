import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from './ResultImc';
import styles from './styles'

export default function Form() {
    const[peso, setPeso] = useState(null)
    const[altura, setAltura] = useState(null)
    const[mensagem, setMensagem] = useState('preencha o peso e a altura')
    const[imc, setImc] = useState()
    const[classificacao, setClassificacao] = useState('')
    const[textoBotao, setTextoBotao] = useState('Calcular')

    function calcularImc() {
        return (
            setImc(
                (peso/(altura*altura)).toFixed(2)
            )
        )
    }

    function classificaImc() {
        if (imc<18.5) {
            setClassificacao('Abaixo do Peso')
        } else {
            if (imc<24.9) {
                setClassificacao('Peso Ideal')
            } else {
                if (imc<29.9) {
                    setClassificacao('Levemente acima do peso')
                } else {
                    if (imc<34.9) {
                        setClassificacao('Obesidade grau 1')
                    } else {
                        if (imc<39.9) {
                            setClassificacao('Obesidade grau 2 (severa)')
                        } else {
                            setClassificacao('Obesidade grau 3 (mórbida)')
                        }
                    }
                }
            }
        }
    }

    function validar() {
        if (peso != null && altura != null) {
            calcularImc()
            classificaImc()
            setPeso(null)
            setAltura(null)
            setMensagem('Seu IMC é igual a')
            setTextoBotao('Calcular Novamente')
            return
        }

        setImc()
        setTextoBotao('Calcular')
        setClassificacao('')
        setMensagem('preencha o peso e a altura')
    }

    return (
        <View style={styles.formContext}>
            <View>
                <Text>
                    Altura
                </Text>
                <TextInput
                    placeholder='Exemplo: 1.75'
                    keyboardType='numbers-and-punctuation'
                    value={altura}
                    onChangeText={setAltura}
                />
                <Text>
                    Peso
                </Text>
                <TextInput
                    placeholder='Exemplo: 80.2'
                    keyboardType='numeric'
                    value={peso}
                    onChangeText={setPeso}
                />
                <Button title={textoBotao} onPress={() => validar()}/>
            </View>
            <ResultImc mensagemExibir={mensagem} imcExibir={imc} classificacao={classificacao}/>
        </View>
    );
}