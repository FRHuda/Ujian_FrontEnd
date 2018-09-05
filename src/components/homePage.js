import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class homePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To CINEMA IXVII</h1>
                <br/>
                <br/>
                <h3>Please choose a movie which You want :</h3>
                <Link to='/cinema'><input type='button' value='Select Movie' className='btn btn-success'/></Link>
            </div>
        )
    }
}

export default homePage;