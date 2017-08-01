import React from "react";
import { CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
    comments: { 
        padding: "10px" 
    }
}

export default function Comments(props) {

    return (
        <div>
            <div style={styles.comments}> {props.photo.comments ? `(${props.photo.comments.length}) comments ` : "(0) comments"}</div>
            {props.photo.comments ? props.photo.comments.map(comment => {
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
        </div>
    );
}