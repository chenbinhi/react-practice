import React, { Component } from 'react'

// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import styles from './styles.css'

// const style = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
// }

// const Carousel = (props) => (
//     <div style={ { } } >
//     <Slider { ...style} { ...props }>
//         <div className={styles.carousel_item} ><h3>1</h3></div>
//         <div className={styles.carousel_item} ><h3>2</h3></div>
//         <div className={styles.carousel_item} ><h3>3</h3></div>
//         <div className={styles.carousel_item} ><h3>4</h3></div>
//         <div className={styles.carousel_item} ><h3>5</h3></div>
//         <div className={styles.carousel_item}  ><h3>6</h3></div>
//     </Slider>
//     </div>
// )

// class Carousel extends Component {
//     render() {
//         return (
//             <Slider>
//                 <div><h3>1</h3></div>
//                 <div><h3>2</h3></div>
//                 <div><h3>3</h3></div>
//                 <div><h3>4</h3></div>
//                 <div><h3>5</h3></div>
//                 <div><h3>6</h3></div>
//             </Slider>
//         )
//     }
// }

// general styles
import 'react-responsive-carousel/lib/styles/main.css'
// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css'

import { Carousel } from 'react-responsive-carousel'
import pic1 from 'assets/1.jpeg'
import pic2 from 'assets/2.jpeg'
import pic3 from 'assets/3.jpeg'

// onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
const mCarousel = (props) => (
    <Carousel axis="horizontal" showThumbs={false} showArrows={true} >
        <div>
            <img src={pic1} />
            { /* <p className="legend">Legend 1</p> */ }
        </div>
        <div>
            <img src={pic2} />
        </div>
        <div>
            <img src={pic3} />
        </div>
    </Carousel>
)

export default mCarousel 