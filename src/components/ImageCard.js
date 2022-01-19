import React, {useState} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function ImageCard({image}) {

    const [open, setOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('linen');

    const { copyright, date, explanation, hdurl, media_type, service_version, title, url } = image;

    const handleClick = () => {
        if (backgroundColor === "linen") {
            setBackgroundColor("pink");
            setOpen(true);
        } else {
            setBackgroundColor("linen")
        }
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Card varient="outlined" sx={{minHeight: 360}} >
            <CardMedia
            component="img"
            height="300"
            image={url}
            alt={title}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {title} 
                <br/>
                {date}
            </Typography>
            <Typography variant="body2" color="text.secondary"  style={{ overflow : 'scroll', maxHeight: 200 }}>
                {explanation}
            </Typography>
            </CardContent>
            <CardActions>
            <Button 
                variant="contained"
                size="small"
                style={{color: "deeppink", backgroundColor: backgroundColor}}
                startIcon={<FavoriteIcon />}
                onClick={handleClick}
            > 
                Like
            </Button>
            
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You Liked This Image
                </Alert>
            </Snackbar>
            </CardActions>
      </Card>
    );
}