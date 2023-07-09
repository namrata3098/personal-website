import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import tpms from '../Pages/tpms.jpg';
import airbnb from '../Pages/airbnb.png';
import crime from '../Pages/crime.jpg';
import '../Style/Project.css';


export default function ImgMediaCardCopy() {

  return (

    <div className='Cards'>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image ={airbnb}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Airbnb Price Prediction
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Open source data of new york city airbnb listings was choosen and data was filtered using feature selection.
        sentimental analysis was performed  on the reviews and various models were considered such as K-means , Support Vector , linear regression to deveop a price model.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image ={crime}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Toronto Crime Prediction
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crime rate prediction and hotspot crime analysis in Toronto using ensemble methods.
        Data Visualization and extraction of hotspot around the city of toronto. 
        Exploratory analysis with detail figures to help increase security. 
        Data pre-processing including one-hot coding was performed. 
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image ={tpms}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Tyre Pressure Monitoring System
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Designed the GUI for 4 wheel automobiles to display the correct reading of type pressure.
        Analysed and predicted the states of tyre at different seasons and proximity to burst/ deflat
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    </div>
  );
}