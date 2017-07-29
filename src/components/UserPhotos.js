import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardText, CardActions, CardMedia } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

import { getPhotos } from "../actions/actions";

const styles = {
    button: { margin: 12 },
    cardWrap: { flex: 1, marginRight: '1em' },
    cardImg: { objectFit: "cover", height: " 250px" },
    card: { marginBottom: "15px" }
}

class UserPhotos extends React.Component {

    componentDidMount() {
        this.props.getPhotos();
    }

    render() {

        const { _id } = this.props.match.params;
        const { photos, user } = this.props;

        if (!photos || !user) {
            return <div>Loading...</div>
        }

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
                                <div className='col s12 m3' key={photo._id} >
                                    <Card style={styles.card} zDepth={2}>
                                        <CardMedia>
                                            <img src={require(`../images/${photo.file_name}`)} alt="" style={styles.cardImg} />
                                        </CardMedia>
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
            user: state.users.find(user => user._id === props.match.params._id)
        }
    }
}

export default connect(mapStateToProps, { getPhotos })(UserPhotos);