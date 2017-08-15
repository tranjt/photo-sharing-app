import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

import { getPhotos } from "../actions/actions";

const styles = {
    cardWrap: {
        flex: 1,
        marginRight: '1em'
    },
    cardImg: {
        objectFit: "cover",
        height: " 250px"
    },
    card: {
        marginBottom: "15px"
    }
}

class UserPhotos extends React.Component {

    componentWillMount() {
        this.props.getPhotos(this.props.match.params._id);
    }

    render() {

        const { _id } = this.props.match.params;
        const { photos, user } = this.props;

        if (!photos || !user) {
            return <div>No match</div>
        }
        console.log(photos);
        console.log(user);
        return (

            <Card style={styles.cardWrap}>
                <CardTitle
                    title={`Photos of ${user.first_name} ${user.last_name}`}
                    subtitle={`User _id: ${_id} `}
                />

                <div className='container'>
                    <div className='row'>
                        {photos.map(photo => {
                            return (
                                <div className='col s12 m6 l3' key={photo._id} >
                                    <Card style={styles.card} zDepth={2}  >
                                        <Link to={`/users/${user._id}/photo/${photo._id}`}  >
                                            <CardMedia>                                                
                                                <img src={`/images/${photo.file_name}`} alt="" style={styles.cardImg} />
                                            </CardMedia>
                                        </Link>
                                        <CardTitle title={`${photo.file_name}`} subtitle={`Created: ${photo.date_time}`} />
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state, props) {
    if (props.match.params._id) {
        return {
            photos: state.photos.filter(photo => photo.user_id === props.match.params._id),
            user: state.users.all.find(user => user._id === props.match.params._id),            
        }
    }
}

export default connect(mapStateToProps, { getPhotos })(UserPhotos);