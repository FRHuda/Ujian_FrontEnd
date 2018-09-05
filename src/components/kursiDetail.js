import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

class KursiDetail extends Component {
    state = { page : '', numpang: [] }
    
    render () {
        if (this.props.auth.username === "") {
            return <Redirect to='/login'/>
        }


        const id = this.props.id;
        const angka = this.props.angka;
        const muncul = angka+id;
        const data = this.props.db;


        for ( var i=0;i<=data.length;i++) {
            if ( data[i] === muncul ) {
                var coba = true;
            }
        }
        if (coba) {
            return (
                <li >
                    <input type="checkbox" disabled id={muncul} />
                    <label htmlFor={muncul}>{muncul}</label>
                </li>
            )
        }
        else {
            return (
                <li >
                    <input type="checkbox" id={muncul} onClick={() => this.props.ceking(angka+id)} />
                    <label htmlFor={muncul}>{muncul}</label>
                </li>
            )
        }
        

        
    }
}

const mapStateToProps = (state) =>{
    const auth = state.auth;

    return {auth };
}

export default connect(mapStateToProps)(KursiDetail);