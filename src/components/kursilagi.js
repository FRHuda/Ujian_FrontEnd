import React, { Component } from 'react';
import axios from 'axios';
import KursiDetail from './kursiDetail';
import {API_URL_1} from '../supports/api-url/apiurl';
import { connect } from 'react-redux';

class KursiLagi extends Component {
    state = { kursi : [1,2,3,4,5,6,7,8,9,10], booking : [], page:"", pesan : [],
                status : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}

    componentWillMount() {
        axios.get(API_URL_1 + '/booking')
        .then(book => { 
            this.setState({booking : book.data});
        });
        axios.get(API_URL_1 + '/tampung')
        .then(tampung => {
            this.setState({page : tampung.data[0].ref});
        });
    }
    renderRow = (id) => {
        return this.state.kursi.map(kursi => 
            <KursiDetail id={id} angka={kursi} db={this.state.booking} hal={this.state.page} ceking={()=> this.cekStatus(id)}/>
        );
    }

    cekStatus = (id) => {
        this.state.status[id]=!this.state.status[id];
        console.log(this.state.status);
    }

    // renderT = (muncul) => {
    //     return (
    //         <li >
    //             <input type="checkbox" id={muncul} />
    //             <label htmlFor={muncul}>{muncul}</label>
    //         </li>
    //     );
    // }
    // renderF = (muncul) => {
    //     return (
    //         <li >
    //             <input type="checkbox" disabled id={muncul} />
    //             <label htmlFor={muncul}>{muncul}</label>
    //         </li>
    //     );
    // }
    // renderZ = (muncul) => {
    //     for ( var i=0;i<=this.state.booking.length;i++) {
    //         if ( this.state.booking[i] === muncul ) {
    //             var hasil= true;
    //         }
    //     }
    //     if ( hasil ){
    //         this.renderF(muncul);
    //     }
    //     else { this.renderT(muncul);}
    // }

    fnPesan = () => {
        for ( var i=0;i<10;i++) {
            if ( document.getElementById(+'A').checked) {
                this.state.pesan.push(this.state.kursi[i]+'A');
            }
        }
        for ( i=0;i<10;i++) {
            if ( document.getElementById(this.state.kursi[i]+'B').checked) {
                this.state.pesan.push(this.state.kursi[i]+'B');
            }
        }
        console.log(this.state.pesan);
    }


    booking = () => {
        for (var i=1;i<=10;i++) {

        }
    }

    render () {
        // this.fnPesan();
        return (
            <div>
                <div className="plane">
                    <div >
                        <h1>Please select a seat</h1>
                    </div>
                <div />
                    <ol >
                        <li >
                        <ol className="seats" type="A">
                            {this.renderRow('A')}
                        </ol>
                        </li>
                        <li >
                        <ol className="seats" type="A">
                            {this.renderRow('B')}
                        </ol>
                        </li>
                    </ol>
                </div>
                <br/>
                <div>
                    <input type='button' className='btn btn-primary' value='Confirm' onClick='booking()'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth : state.auth };
}

export default connect(mapStateToProps )(KursiLagi);