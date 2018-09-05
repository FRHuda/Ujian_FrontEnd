import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {API_URL_1} from '../supports/api-url/apiurl';
import CinemaDetail from './CinemaDetail';

class Cinema extends Component {
    state = { movies :[], page:""}
    componentWillMount() {
        axios.get(API_URL_1+'/movies')
        .then(movie => {
            this.setState({movies : movie.data});
        })
    }

    selectSeat = (ref) => {
        axios.put(API_URL_1 +'/tampung/0',{
            ref
        });
    }

    renderCinema = () => {
        return this.state.movies.map(movie => 
            <CinemaDetail 
                key={movie.id} 
                movie={movie} 
                select={(ref) => this.selectSeat(ref)} 
            />
        );
    }

    render() {
        if (this.props.auth.username !== "") {
            return (
                <div>
                    <h1>Movie List</h1>
                    <center>
                        <table class="rwd-table">
                            <tr>
                                <th>Preview</th>
                                <th>Movie Title</th>
                                <th>Schedule</th>
                                <th>IMDB</th>
                                <th>Price</th>
                            </tr>
                            {this.renderCinema()}
                        </table>
                    </center>
                </div>
            );
        }
        return <Redirect to = '/login'/>
    }

}

const mapStateToProps = (state) => {
    return { auth : state.auth};
}

export default connect(mapStateToProps)(Cinema);