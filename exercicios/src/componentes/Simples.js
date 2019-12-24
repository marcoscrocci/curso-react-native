import React from 'react'
import { View, Text } from 'react-native'

import  Padrao from '../estilo/Padrao'

export default props => 
    <Text style={Padrao.ex}>Arrow: {props.texto}</Text>

// Para atribuir mais de 1 estilo para o mesmo componente, devemos usar os colchetes.
// export default props => 
//     <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>

// Function Normal    
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

// Function Arrow com mais de 1 component, envolvendo com a tag View
// export default props => 
//     <View>
//         <Text>Arrow 1: {props.texto}</Text>
//         <Text>Arrow 2: {props.texto}</Text>
//     </View>

// Function Arrow com mais de 1 component, envolvendo com um Array
// export default props => {
//     return [
//         <Text key={1}>Arrow 1: {props.texto}</Text>,
//         <Text key={2}>Arrow 2: {props.texto}</Text>
//     ]
// }