import Slider from 'react-slick'

const Technology = () =>{
    let settings = {
      slidesToShow: 9,
      arrows:false,
      swipe:false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase:'linear',
      infinite: true,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2,
          },
        },
      ],
    };
    return(
        <section className="w-full">
            <h2 className="text-xl md:text-4xl text-indigo-900 pt-10 pb-1 text-center capitalize">technologies and platforms we work with</h2>
              <div className="py-5 background-gradiant">
                <Slider {...settings}>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/android-logo.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/css.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/html.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 px-9 py-2 m-auto">
                        <img src="images/technologies-icons/java-logo-vertical.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 px-5 py-9 m-auto">
                        <img src="images/technologies-icons/mongodb-logo.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/ms-sql.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/mysql.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/node-js-logo-small.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/php-logo-small.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/pwa-logo.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/react-js-logo.svg"/>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="shadow rounded bg-white w-28 h-28 p-8 m-auto">
                        <img src="images/technologies-icons/vuejs-logo.svg"/>
                      </div>
                    </div>
                </Slider>
              </div>
        </section>
    )
}
export default Technology;