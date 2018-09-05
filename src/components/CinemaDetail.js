import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CinemaDetail extends Component {

    render() {
        const { title, id, image, url } = this.props.movie;
        const ref1 = id+'1';
        const ref2 = id+'2'; 
        return (
            <tr>
                <td data-th="Preview"><image src={image}></image></td>
                <td data-th="Movie Title">{title}</td>
                <td data-th="Schedule"><Link to='/kursilagi'><input  type='button' className='btn btn-success' onClick={() =>this.props.select(ref1)} value="Morning"/></Link>
                <Link to='/kursilagi'><input  type='button' className='btn btn-success' onClick={() =>this.props.select(ref2)} value="Evening"/></Link></td>
                <td data-th="IMDB"><a href={url} className="btn btn-primary">Link</a></td>
                <td data-th="Gross"><p>Morning : Rp 25.000</p><p>Evening : Rp 35.000</p></td>
            </tr>
        );
    }
}

export default CinemaDetail;