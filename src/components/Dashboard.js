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

class Dashboard extends React.Component {

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


export default Dashboard;

