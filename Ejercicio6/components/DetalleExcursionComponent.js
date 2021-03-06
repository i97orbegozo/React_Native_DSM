import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { EXCURSIONES } from '../comun/excursiones'

function RenderExcursion(props) {
    const excursion = props.excursion;

    if (excursion != null){
        return(
            <Card
                featuredTitle={excursion.nombre}
                image={require('../imagenes/40Años.png')}                
            >
                <Text style={{margin: 10}}>
                    {excursion.descripcion}
                </Text>
            </Card>
        );
    }else { 
        return(<View></View>);
    }
}

class DetalleExcursion extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            excursion: EXCURSIONES
        }
    }

    render(){
        const {excursionId} = this.props.route.params;
        return(<RenderExcursion excursion={this.state.excursion[+excursionId]}/>);
    }
}
export default DetalleExcursion;