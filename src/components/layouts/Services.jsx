
import AOS from "aos";
import {useEffect} from 'react';

const Services = () =>{
    useEffect(()=>{
        AOS.init({
            disable: 'mobile',
            once:true
        });
    },[]);
    
    return(
        <section className="w-full mt-28 xl:mt-0 2xl:mt-10">
            <h2 className="text-center text-indigo-800 text-2xl">Our Services</h2>
            <div className="flex justify-center">
                <div className="w-10/12 flex flex-wrap py-5 ">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 pb-4" data-aos="fade-right" data-aos-delay="500">
                        <div className="shadow rounded text-center py-5 h-full">
                            <div className="w-full justify-center flex">
                                <img src="images/domain.svg" width="50" height="50" alt=""/>
                            </div>
                            <h3 className="font-bold pt-2 tracking-wide">Domain and Server</h3>
                            <div className="text-md text-gray-600 py-3 px-5 tracking-wide">If you want to create a site for your institution, the first step is to register a name for the site.</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 pb-4" data-aos="fade-right" data-aos-delay="0">
                        <div className="shadow rounded text-center py-5 h-full">
                            <div className="w-full justify-center flex">
                                <img src="images/coding.svg" width="50" height="50" alt=""/>
                            </div>
                            <h3 className="font-bold pt-2 tracking-wide">Web Desiging</h3>
                            <div className="text-md text-gray-600 py-3 px-5 tracking-wide">Website design is our specialty. Your site needs a viewer. Your site visitors need to interact with your website design.</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 pb-4" data-aos="fade-left" data-aos-delay="250">
                        <div className="shadow rounded text-center py-5 h-full">
                            <div className="w-full justify-center flex">
                                <img src="images/seo.svg" width="50" height="50" alt=""/>
                            </div>
                            <h3 className="font-bold pt-2 tracking-wide">SEO Analysis</h3>
                            <div className="text-md text-gray-600 py-3 px-5 tracking-wide">Website design is the first step. Your website needs a viewer. Site optimization (SEO) helps you reach the top ranks in google.</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 pb-4" data-aos="fade-left" data-aos-delay="700">
                        <div className="shadow rounded text-center py-5 h-full">
                            <div className="w-full justify-center flex">
                                <img src="images/mobile-app.svg" width="50" height="50" alt=""/>
                            </div>
                            <h3 className="font-bold pt-2 tracking-wide">Mobile Web App</h3>
                            <div className="text-md text-gray-600 py-3 px-5 tracking-wide">Designing and building personal, educational, informational applications, turning the site into an application, etc.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services;