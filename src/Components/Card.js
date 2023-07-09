import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tpms from '../Pages/tpms.jpg';
import uiux from '../Pages/UIUX.jpg';
import skills from '../Pages/skills.jpg';
import airbnb from '../Pages/airbnb.png';
import crime from '../Pages/crime.jpg';
import '../Style/Project.css';


export default function ImgMediaCard() {

  return (

    <div className='Cards'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image ={uiux}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
             'UI/UX Redesign of E-commerce Web Scrapping application'
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Re-design a e-commerce web application to ensure inclusivity , cognitiviity and enhance user interaction and features. 
        Develop a feel-good prototype including features for the disabled such as voice note , clour sensitivity and reduce ciognitive load
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
        image ={uiux}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
             Personal Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Curated my personal website using minimalistic UI approach in React to highlight my acheivements and skills.
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
        image ={skills}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Skill Organisation IOS Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Designed Android App with several pages that authenticates various users in an organisation based on designation. Plotted various HR management tools,
           Safety precautions and communiation platform between employee and managers.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
  );
}