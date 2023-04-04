// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getBookById } from "../../firebase/firestore/books";
// import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import style from './CardDetail.module.css';
// import CardContent from '@mui/material/CardContent';
// import { Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import { CardMedia } from '@mui/material'
// import { IconButton } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// const CardDetail = () => {

//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const [bookDetail, setBookDetail] = useState(null);
//     const [showDetail, setShowDetail] = useState(false)

//     useEffect(() => {
//         dispatch(getBookById(id))
//             .then((response) => {
//                 setBookDetail(response.payload);
//                 setShowDetail(true)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [dispatch, id]);

//     return (
//         <div className={style.container}>
//             {showDetail ? (
//                 <Box sx={{ flexDirection: 'column', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'box-shadow 0.3s ease', height: '40%', width: '40%' }} className={style.card}>
//                     <CardContent>
//                         <Typography variant='h4' color="text.primary" gutterBottom>
//                             {bookDetail.title}
//                         </Typography>
//                         <Typography variant="h5">
//                             <p>Authors: {bookDetail.authors.join(', ')}</p>
//                             <p>Editorial: {bookDetail.editorial}</p>
//                             <p>Genres: {bookDetail.genres.join(', ')}</p>
//                         </Typography>
//                         <CardMedia
//                             component="img"
//                             height='300px'
//                             sx={{width: '20%', height: '20%', marginTop: '25px', marginLeft: '40%'}}
//                             image={bookDetail.image}
//                             alt={bookDetail.name}
//                         />
//                         <Typography variant="body2">
//                             <p>Price: {bookDetail.price}</p>
//                             <p>Rating: {bookDetail.rating}</p>
//                             <p>Year: {bookDetail.year}</p>
//                         </Typography>
//                     </CardContent>
//                     <Box>
//                         <CardContent>
//                             <IconButton color='primary'>
//                                 <Link to='/home'><HomeOutlinedIcon /></Link>
//                             </IconButton>
//                             <IconButton color="primary" aria-label="add to shopping cart">
//                                 <Link to={`/home/cart`}>
//                                     <ShoppingCartIcon />
//                                 </Link>
//                             </IconButton>
//                         </CardContent>
//                     </Box>
//                 </Box>
//             ) : (
//                 <p>Loading book detail...</p>
//             )}
//         </div>

//     );
// };

// export default CardDetail;






import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../firebase/firestore/books";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, Button, List, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import HomeIcon from "@mui/icons-material/Home";
import { Reviews } from "@mui/icons-material";

const CardDetail = ({id}) => {
  // const { id } = useParams();
const dispatch = useDispatch();
const [bookDetail, setBookDetail] = useState(null);

useEffect(()=>{

})


useEffect(() => {
    dispatch(getBookById(id))
    .then((response) => {
        setBookDetail(response.payload);
    })
    .catch((error) => {
        console.log(error);
    });
}, [dispatch, id]);

const body = (
    <Card
    sx={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 3,
        bgcolor: "rgba(253,216,53,0.38)",
        width: 600,
        maxWidth: "50vw",
        maxHeight: "95vh",
        overflowY: "auto",
    }}
    >
    <Box
        sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        }}
    >
        <CardMedia
        component="img"
        image={bookDetail?.image}
        alt={bookDetail?.title}
        sx={{ height: 300, width: 200 }}
        />
        <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 2, fontWeight: "bold" }}
        >
        {bookDetail?.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
        {bookDetail?.author}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
        {bookDetail?.editorial}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {bookDetail?.description}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {`Price: $${bookDetail?.price}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {`Rating: ${bookDetail?.rating}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {`Year: ${bookDetail?.year}`}
        </Typography>
        {bookDetail.reviews ? (
            <>
            <Typography variant="h5">
                <p>Reviews</p>
            </Typography>
            <Paper style={{ maxHeight: 200, overflow: "auto" }}>
                <List
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    bgcolor: "background.paper",
                }}
                >
                {bookDetail.reviews.map((review) => (
                    <Reviews
                    key={review.id}
                    id={review.id}
                    user={review.user}
                    comment={review.comment}
                    rating={review.rating}
                    />
                ))}
                </List>
            </Paper>
            </>
        ) : null}
        <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            width: "100%",
        }}
        >
        <Button
            color="secondary"
            sx={{
            height: 30,
            width: 30,
            borderRadius: "50%",
            p: 6,
            }}
        >
            <Link to="/home">
            <HomeIcon />
            </Link>
        </Button>

        <Button
            color="secondary"
            sx={{
            height: 60,
            width: 60,
            borderRadius: "50%",
            p: 6,
            }}
        >
            <Link to={`/home/cart`}>
            <ShoppingCartIcon />
            </Link>
        </Button>
        </Box>
    </Box>
    </Card>
);

return body;
};


export default CardDetail;
