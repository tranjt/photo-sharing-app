import React from "react";
import { connect } from "react-redux";
import { Card, CardMedia } from 'material-ui/Card';
import { getPhotos } from "../actions/actions";

const styles = {
    cardContainer: { display: 'flex', justifyContent: 'space-around' },
    cardFixedWith: { maxWidth: '35%', margin: "20px" }
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
            <Card zDepth={2}  >
                <div style={styles.cardContainer}>
                    <Card style={styles.cardFixedWith} zDepth={1}>
                        <CardMedia >
                            <img src={require(`../images/${photo.file_name}`)} alt="" />
                        </CardMedia>
                        <div>   
                            
                        </div>
                    </Card>
                </div>
            </Card>
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