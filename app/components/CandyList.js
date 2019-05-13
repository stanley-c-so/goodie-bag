import React, {Component} from 'react';
import {connect} from 'react-redux';

import {gettingCandies} from '../reducers';

class DisconnectedCandyList extends Component {
    componentDidMount() {
        this.props.getAllCandies();
    }
    render() {
        return (
            <div className="container">
                <h2>All the Candies Yum!</h2>
                {
                    this.props.candies.map(candy => (
                        <div key={candy.id}>
                            <h4>{candy.name}</h4>
                            <img src={candy.imageUrl} />
                        </div>
                    ))
                }
            </div>
        );
    }
};

const mapStateToProps = state => ({
    candies: state.allCandies,
});

const mapDispatchToProps = dispatch => ({
    getAllCandies: () => dispatch(gettingCandies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedCandyList);