import React from 'react';
import { View } from 'react-native';
import {EXCURSIONES}from './excursiones';

import Calendario from './Calendario'
import DetalleExcursion from  './DetalleExcursionComponent';

export default class Campobase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            excursiones: EXCURSIONES,
            seleccionExcursion: null,
            show: false
        }
    }

    onSeleccionExcursion(excursionId){
        let isShown = true;

        if (this.state.seleccionExcursion===excursionId && this.state.show){
             isShown=false;
        }

        this.setState({
            seleccionExcursion: excursionId,
            show: isShown
        }); 
    }

    render(){
        var detalleExcursion = <></>;
        if(this.state.show){
            detalleExcursion = <DetalleExcursion 
            excursion={this.state.excursiones.filter((excursion)=> excursion.id === this.state.seleccionExcursion)[0]}
        />;
        }
        return(
            <>
            <View style={{flex:1}}>
                <Calendario 
                    excursiones={this.state.excursiones}
                    onPress={(excursionId) => this.onSeleccionExcursion(excursionId)}
                />
                {detalleExcursion}     
            </View>    
            </>
        );
    }
}