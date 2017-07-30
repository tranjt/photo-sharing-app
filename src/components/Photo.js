import React from "react";
import { connect } from "react-redux";
import { Card, CardMedia } from 'material-ui/Card';
import { getPhotos } from "../actions/actions";
// import LightBox from "./LightBox";

const styles = {
    cardContainer: { display: 'flex', justifyContent: 'space-around' },
    cardFixedWith: { maxWidth: '80%', margin: "20px" }
}

class Photo extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         displayLightBox: false
    //     }
    //     this.openLightbox = this.openLightbox.bind(this);
    //     this.closeLightbox = this.closeLightbox.bind(this);
    // }


    componentDidMount() {
        if (!this.props.preFetch) {
            this.props.getPhotos();
        }
    }

    // openLightbox(event) {
    //     event.preventDefault();
    //     this.setState({ displayLightBox: true });
    // }

    // closeLightbox(event) {
    //     event.stopPropagation();
    //     this.setState({ displayLightBox: false });
    // }

    render() {
        const { photo } = this.props;

        if (!photo) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Card zDepth={2}  >
                    <div style={styles.cardContainer} onClick={this.openLightbox}>
                        <Card style={styles.cardFixedWith} zDepth={1}>
                            <CardMedia >
                                <img src={require(`../images/${photo.file_name}`)} alt="" />
                            </CardMedia>
                            <div>

                            </div>
                        </Card>
                    </div>
                </Card>
                 {/* {this.state.displayLightBox ? <LightBox photo={photo} closeHandler={this.closeLightbox} /> : null}  */}
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