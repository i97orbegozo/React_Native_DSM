import React from 'react';
import {EXCURSIONES}from './excursiones';
import Calendario from './Calendario'

export default class Campobase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            excursiones: EXCURSIONES
        }
    }
    render(){
        return(
            <>
                <Calendario 
                    excursiones={this.state.excursiones}
                />    
            </>
        );
    }
}