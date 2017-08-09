import React from "react";
import { connect } from "react-redux";
import { Card, CardMedia } from 'material-ui/Card';
import { getPhotos } from "../actions/actions";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardFixedWith: {
        maxWidth: '80%',
        margin: "20px"
    }
}

class Photo extends React.Component {

    // componentDidMount() {
    //     if (!this.props.preFetch) {
    //         this.props.getPhotos();
    //     }
    // }
    //     componentWillMount() {
        
    //         this.props.getPhotos();
        
    // }

    render() {
        const { photo } = this.props;

        if (!photo) {
            return <div>Loading...</div>
        }
        console.log(photo);

        return (
            <div>
                <Card zDepth={2}>
                    <div style={styles.cardContainer} >
                        <Card style={styles.cardFixedWith} zDepth={1}>
                            <CardMedia >
                                <img src={require(`../images/${photo.file_name}`)} alt="" />
                            </CardMedia>
                            <Comments photo={photo} comment={photo.comments} />
                        </Card>
                    </div>
                    <CommentForm />
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    if (props.match.params._id) {
        return {
            photo: state.photos.find(photo => photo._id === props.match.params._id),
            // preFetch: state.photos.preFetch
        }
    }
}

export default connect(mapStateToProps, { getPhotos })(Photo);