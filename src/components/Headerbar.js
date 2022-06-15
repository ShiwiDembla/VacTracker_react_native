import { Header } from 'react-native-elements'
import React,{Component} from 'react'
import { View } from 'react-native'
 
export default class Headerbar extends Component {
    render(){
    return(
        <View>
                    <Header
            backgroundColor="#48A296"
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Submit Request ', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
            </View>
    )
    }
}


