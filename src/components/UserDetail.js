import React from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardText, } from 'material-ui/Card';
import StatusPhoto from "./StatusPhoto";
import InfoCard from "./InfoCard";
import DescriptionCard from "./DescriptionCard";
import ActivitiesCard from "./ActivitiesCard";
import { getUser } from "../actions/actions";

const styles = {
  cardFixedWith: {
    width: '350px',
    margin: "20px"
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class UserDetail extends React.Component {

  componentWillMount() {
    this.props.getUser(this.props.match.params._id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params._id !== this.props.match.params._id) {
      this.props.getUser(nextProps.match.params._id);
    }
  }

  render() {

    const { user } = this.props;

    if (!user) {
      return <div>No match</div>
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
            <ActivitiesCard user={user} />
            <DescriptionCard user={user} />
            <InfoCard user={user} />
          </div>
        </CardText>

        <div style={styles.cardContainer}>
          <StatusPhoto statusText="Lastest Mention in photo" />
          <StatusPhoto statusText="Latest uploaded photo" />
          <StatusPhoto statusText="Most commented photo" />
        </div>

      </Card>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { getUser })(UserDetail);

