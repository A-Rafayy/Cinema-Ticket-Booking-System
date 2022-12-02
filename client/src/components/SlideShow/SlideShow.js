import React, { useEffect } from 'react';
import { Carousel, Image } from 'antd';
import './SlideShow.css';
// import { imageInformation } from '../../Utils/Constants';
import { getShows } from "../../Api-Interaction/Shows/ShowsService"
import { getMovies } from '../../Api-Interaction/Movies/MoviesService';
import download from "../../assets/images/download.jpg";
import BlackAdam from "../../assets/images/BlackAdam.jpg";
import WrongTurn from "../../assets/images/WrongTurn.png";
const minion = "https://freepngimg.com/thumb/despicable_me/80876-me-rush-toy-minion-dave-despicable-stuffed-thumb.png";
const joker = "https://freepngimg.com/thumb/batman/9-2-batman-joker-smile-vector-png-thumb.png";
const avengers = "https://freepngimg.com/thumb/avengers/24591-2-avengers-thumb.png"
const topgun = "https://w7.pngwing.com/pngs/863/411/png-transparent-pc-dvd-top-gun-hard-lock-case-pc-game-video-game-software-aircraft-aviation-airplane-top-gun-hard-lock-game-video-game-airplane-thumbnail.png";

const SlideShow = () => {
    let a = [];
    useEffect(() => {
        // const shows = getShows();
        // console.log(shows);
        a = data();
        console.log(a);
        // console.log(a[0]);
        // console.log(a[1]);
    });
    const data = async () => {
        const response = await getMovies();
         const t = await Promise.all(response.data.movies[1].images);
         return t;
    }
    // const movieImages = response.data.movies[1].images;
    // console.log(movieImages);
    const imageInformation = [
        {
            id: 1,
            name: "Top Gun",
            source: "https://w7.pngwing.com/pngs/863/411/png-transparent-pc-dvd-top-gun-hard-lock-case-pc-game-video-game-software-aircraft-aviation-airplane-top-gun-hard-lock-game-video-game-airplane-thumbnail.png",
        },
        {
            id: 2,
            name: "Avengers",
            source: "https://freepngimg.com/thumb/avengers/24591-2-avengers-thumb.png",
        },
        {
            id: 3,
            name: "Joker",
            source: "https://freepngimg.com/thumb/batman/9-2-batman-joker-smile-vector-png-thumb.png",
        },
        {
            id: 4,
            name: "Minion",
            source: "https://freepngimg.com/thumb/despicable_me/80876-me-rush-toy-minion-dave-despicable-stuffed-thumb.png",
        }
    ];
    // const imageInfo = imageInformation;

    const showImages = a.map((i) => (
        <div key={i} className="imgae-div1">
            {/* <Image className='image' src={i.source} width={500} height={200} onClick={() => {}} /> */}
            <img className='image' src={i} width={100} />
            {/* <div className='image-div2'>
                <h1 className='image-div2-h1'>{i.name}</h1>
            </div> */}
        </div>
    ))
    return (

        <div className='SlideShow-div1'>
            <Carousel autoplay>
                {showImages}
            </Carousel>
        </div>
    )
}

export default SlideShow