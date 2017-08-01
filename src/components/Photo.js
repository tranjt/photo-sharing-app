import React from "react";
import { connect } from "react-redux";
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { getPhotos } from "../actions/actions";
// import LightBox from "./LightBox";

const styles = {
    cardContainer: { display: 'flex', justifyContent: 'space-around' },
    cardFixedWith: { maxWidth: '80%', margin: "20px" },
    comments: { padding: "10px" }
}

class Photo extends React.Component {


    componentDidMount() {
        if (!this.props.preFetch) {
            this.props.getPhotos();
        }
    }

    render() {
        const { photo } = this.props;

        if (!photo) {
            return <div>Loading...</div>
        }
        console.log(photo);
        return (
            <div>
                <Card zDepth={2}  >
                    <div style={styles.cardContainer} >
                        <Card style={styles.cardFixedWith} zDepth={1}>
                            <CardMedia >
                                <img src={require(`../images/${photo.file_name}`)} alt="" />
                            </CardMedia>
                            <div style={styles.comments}> {photo.comments ? `(${photo.comments.length}) comments ` : "(0) comments"}</div>
                            {photo.comments ? photo.comments.map(comment => {
                                return (
                                    <div key={comment._id}>
                                        <CardTitle title={`${comment.user.first_name}`} subtitle={comment.date_time} />
                                        <CardText >
                                            {comment.comment}
                                        </CardText>
                                        <Divider />
                                    </div>
                                );
                            }) : null}
                        </Card>
                    </div>
                    <div style={styles.cardContainer} >
                        <Card style={styles.cardFixedWith} zDepth={2}>
                            <form action="">
                                <textarea name="" id="" cols="60" rows="10" ></textarea>
                                <div>
                                    <button>Post Comment</button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    if (props.match.params._id) {
        return {
            photo: state.photos.all.find(photo => photo._id === props.match.params._id),
            preFetch: state.photos.preFetch
        }
    }
}

export default connect(mapStateToProps, { getPhotos })(Photo);