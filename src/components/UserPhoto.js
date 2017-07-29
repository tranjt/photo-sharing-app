import React from "react";
import { connect } from "react-redux";
import { Link }  from "react-router-dom";
import {Card, CardHeader, CardTitle, CardText, CardActions, CardMedia} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const styles = {
   button: { margin: 12  },
   cardWrap: { flex: 1, marginRight: '1em',   height: "90vh", maxWidth: "90%" },
   cardImg:  { objectFit: "cover", height: " 180px" },
   card: { marginBottom: "15px" }  
}


const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Bee_on_-calyx_935.jpg',
    title: 'Breakfasta',
    author: 'jill111a',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/250px-Runny_hunny.jpg',
    title: 'Tasty burgers',
    author: 'pashminua',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Bee_on_-calyx_935.jpg',
    title: 'Cameraf',
    author: 'Danson67f',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Bee_on_-calyx_935.jpg',
    title: 'Mornings',
    author: 'fancycrave1a',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Bee_on_-calyx_935.jpg',
    title: 'Hatss',
    author: 'Hans',
  }
,
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Bee_on_-calyx_935.jpg',
    title: 'Hatskaka',
    author: 'Hansaa',
  }
]


class UserPhoto extends React.Component { 

    render() {      
        const user = {
            first_name: "ok",
            last_name: "you"
        }
        return (

            <Card style={styles.cardWrap}>
                <CardHeader
                  title={`${user.first_name} ${user.last_name}`}
                  subtitle="Detail page"
                  avatar="http://www.material-ui.com/images/jsa-128.jpg"
                />
                <div className='container'>
                    <div className='row'>
                        {tilesData.map(photo => {
                            return (
                                <div className='col s12 m3'  key={photo.title} >
                                    <Card style={ styles.card } zDepth={2}>                        
                                        <CardMedia                          
                                        >
                                            <img src={photo.img} alt="" style={styles.cardImg} />
                                        </CardMedia>
                                        <CardTitle title='Card title' subtitle='Card subtitle' />
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Card>
        );
    }
}


export default UserPhoto;


