import Card from '../items/Card'
import Layout from "./Layout"
import AOS from "aos"
import {useEffect} from 'react'

const Services = () =>{
    useEffect(()=>{
        AOS.init({
            once:true,
            disable: false,
            duration:1100
        });
    },[])
    
    return(
        <section className="w-full portfo md:mt-5">
                <div className="flex justify-center">
                    <div className="w-11/12 md:w-10/12 flex flex-wrap pb-5 pt-32 ">
                        <div className="lg:w-2/4 px-3 mb-4 text-white">
                            <h2 className="text-2xl pb-3">What We Have Done</h2>
                            <p>We have been with you for many years by creating software solutions based on modern technology to provide a more useful and faster life. Maybe our next project, be your's.</p>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-1 md:px-3 mb-4 card-holder" data-aos="fade-in">
                            <Card title="Paskoja" image="images/portfo-image/paskoja.jpg" link="http://paskoja.com/"
                                description="Find the businesses and urban information you need" developers={[0,2]}
                                longDescription="Someone who is not on the Internet or has little activity, has no place in today's world market.Where did he come to introduce you to all the people of Iran?The more you know, the more I sell, rest assured.If you want to enter the world of the future and you are tired of other traditional business, register here." date=""></Card>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-1 md:px-3 mb-4 card-holder" data-aos="fade-in">
                            <Card title="Nobahari shop" image="images/portfo-image/nobaharishop.png" developers={[0,1,2]} link="https://nobaharishop.com" description="Responsive website store"
                            longDescription="" date="2019"></Card>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-1 md:px-3 mb-4 card-holder" data-aos="fade-in">
                            <Card title="Australian Recycle LLC" image="images/portfo-image/recycle.jpg" developers={[0,1]} description="A website for Recycleing LLC"
                            longDescription="Australian recycle company website created with Nuxt js and RESTfull Api
                            <br>Used Frameworks: NUXT , BOOTSTRAP (sass preprocessor) , LEAFLETJS , Laravel" date="2020"></Card>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-1 md:px-3 mb-4 card-holder" data-aos="fade-in">
                            <Card title="Varen appication" image="images/portfo-image/varen.png" link="http://varenapp.com/" developers={[0,1,2]} description="Find the services you need"
                            longDescription="" date=""></Card>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-1 md:px-3 mb-4 card-holder" data-aos="fade-in">
                            <Card title="Millcon" image="images/portfo-image/millcon.jpg" link="http://millcon-co.com" developers={[1,0]} description="Renovation group website"
                            longDescription="Millcon is a renovation group website in Washington state, with ability to saveing orders for them" date="13 April 2021"></Card>
                        </div>
                        
                    </div>
                </div>
            </section>
    )
}
export default Services;