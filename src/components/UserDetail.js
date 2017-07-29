import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardText, CardActions, CardMedia } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: { margin: 12 },
  card: { flex: 1, margin: '1em' },
  cardFixedWith: { width: '350px', margin: "20px" },
  cardContainer: { display: 'flex', justifyContent: 'space-around' }
}

class UserDetail extends React.Component {

  render() {

    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>
    }

    return (

      <Card >
        <CardHeader
          title={`${user.first_name} ${user.last_name}`}
          subtitle="Detail page"
          avatar="http://www.material-ui.com/images/jsa-128.jpg"
        />

        <CardText>
          <div style={styles.cardContainer}>

            <div style={styles.card}>
              <Card >
                <CardTitle title='Activities' subtitle='Card subtitle' />
                <CardActions>
                  <Link to={`/photos/${user._id}`}>
                    <RaisedButton
                      label="View Photos "
                      labelPosition="before"
                      primary={true}
                      icon={<ImagePhotoLibrary />}
                      style={styles.button}
                    />
                  </Link>
                </CardActions>
              </Card>
            </div>


            <div style={styles.card}>
              <Card>
                <CardTitle title='Description' />
                <Divider />
                <CardText>
                  {`${user.description}`}
                </CardText>
              </Card>
            </div>


            <div style={styles.card}>
              <Card>
                <List>
                  <CardTitle title={`${user.first_name} ${user.last_name}`} />
                  <Divider />
                  <ListItem
                    primaryText="Location"
                    secondaryText={`${user.location}`}
                    disabled={true}
                  />
                  <ListItem
                    primaryText="Ocupation"
                    secondaryText={`${user.occupation}`}
                    disabled={true}
                  />
                </List>
              </Card>
            </div>
          </div>
        </CardText>


        <div style={styles.cardContainer}>


          <Card style={styles.cardFixedWith} zDepth={2} >
            <CardTitle title='Card title' subtitle='Card subtitle' />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
          </Card>


          <Card style={styles.cardFixedWith} zDepth={2} >
            <CardTitle title='Card title' subtitle='Card subtitle' />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
          </Card>


          <Card style={styles.cardFixedWith} zDepth={2}>
            <CardTitle title='Card title' subtitle='Card subtitle' />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
          </Card>
        </div>

      </Card>
    );
  }
}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      user: state.users.find(user => user._id === props.match.params._id)
    }
  }
}

export default connect(mapStateToProps)(UserDetail);

