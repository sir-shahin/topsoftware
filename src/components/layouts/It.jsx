import {useEffect} from 'react'
const It = () =>{
    useEffect(()=>{
        const affective_div = document.querySelector('.mouse-effect');
        const windowWidth = window.innerWidth / 15;
        const windowHeight = window.innerHeight / 20;
        
        const bg = document.querySelector('#floating-image');
        affective_div.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;
        bg.style.transition = 'all 0.2s';
        bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        });
    },[])
    return(
        <section className="w-full mouse-effect">
                <div className="flex justify-center  mx-auto container">
                    <div className="w-10/12 flex flex-wrap py-5">
                        <div className="w-full lg:w-3/5 my-auto">
                            <div className="text-4xl pt-10 pb-5">Every aspect of your IT ecosystem.</div>
                            <p className="text-gray-600">Comprehensive care of your cloud or on-premises infrastructure and applications with:</p>
                            <div className="flex flex-wrap py-3 mt-2">
                                <div className="w-full lg:w-1/2 pb-2">
                                    <span className="px-2 text-indigo-800">&#9830;</span>Implementation
                                </div>
                                <div className="w-full lg:w-1/2 pb-2">
                                    <span className="px-2 text-indigo-800">&#9830;</span>Security
                                </div>
                                <div className="w-full lg:w-1/2 pb-2">
                                    <span className="px-2 text-indigo-800">&#9830;</span>Help desk services
                                </div>
                                <div className="w-full lg:w-1/2 pb-2">
                                    <span className="px-2 text-indigo-800">&#9830;</span>Management and support
                                </div>
                                <div className="w-full lg:w-1/2 pb-2">
                                    <span className="px-2 text-indigo-800">&#9830;</span>Migration
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 my-auto relative">
                            <div>
                                <img src="/images/web-development-items.png" id="floating-image"/>
                                <img src="/images/web-development.png" className="w-full" alt="webdevelopmwnt"/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default It;