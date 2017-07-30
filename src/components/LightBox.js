import React from "react"

class Lightbox extends React.Component {

    render() {        
        
        return (
            <div className="lightbox">
                <div className= 'lightbox-background' onClick={ this.props.closeHandler }>
                    <div className='lightbox-content'>
                        <img src={require(`../images/${this.props.photo.file_name}`)} alt="" />
                    </div>

                </div>
            </div>
        );
    }
}

export default Lightbox;

