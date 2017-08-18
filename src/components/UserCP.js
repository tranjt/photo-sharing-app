import React from "react";
// import { connect } from "react-redux";
import { Card, CardHeader, CardText, } from 'material-ui/Card';
import StatusPhoto from "./StatusPhoto";
import InfoCard from "./InfoCard";
import DescriptionCard from "./DescriptionCard";
import ActivitiesCard from "./ActivitiesCard";

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

class UserCP extends React.Component {

  render() {

    const { authUser } = this.props;

    if (!authUser) {
      return <div>No match</div>
    }

    return (

      <Card >
        <CardHeader
          title={`${authUser.first_name} ${authUser.last_name}`}
          subtitle="Detail page"
          avatar="http://www.material-ui.com/images/jsa-128.jpg"
        />

        <CardText>
          <div style={styles.cardContainer}>
            <ActivitiesCard user={authUser} />
            <DescriptionCard user={authUser} />
            <InfoCard user={authUser} />
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


export default UserCP;

