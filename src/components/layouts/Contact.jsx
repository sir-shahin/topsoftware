import {iphone,imail,ilinkedin,itelegram,iinstagram} from '../items/icons'
import Copyright from '../layouts/Copyright'

const Contact = () =>{
    return(
        <section className="w-full purple-abstract-bg contact">
              <div className="flex justify-center">
                <div className="w-full lg:w-10/12 2xl:w-8/12 px-3 lg:px-36 2xl:px-44 flex flex-wrap my-10 form-frame pt-5 md:pb-10 max-w-7xl" style={{ minHeight: "660px"}}>
                  <div className="bg-white w-full lg:w-1/2 px-3 md:pl-5 md:pr-8 rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none">
                    <div className="text-indigo-900 text-4xl mt-12 pb-5">Let's Do</div>
                    <p className="text-gray-500 pb-5">For software essues contact us right now. Our solutions well be on the way. Fill out the form bellow and send it to us.</p>
                    <label className="d-block text-normal text-gray-400">Your Name</label>
                    <div>
                      <input type="text" className="rounded-2xl bg-indigo-100 px-5 py-2 mb-3 w-full"/>
                    </div>
                    <label className="d-block text-normal text-gray-400">Your Phone Number</label>
                    <div>
                      <input type="text" className="rounded-2xl bg-indigo-100 px-5 py-2 mb-3 w-full"/>
                    </div>
                    <label className="d-block text-normal text-gray-400">Your Message</label>
                    <div>
                      <textarea type="text" className="rounded-2xl bg-indigo-100 px-5 py-2 mb-3 max-h-24 w-full"></textarea>
                    </div>
                    <div className="my-3">
                      <input type="submit" className="bg-indigo-800 hover:bg-blue-900 cursor-pointer rounded-3xl text-white py-2 md:px-10 w-full md:w-auto" value="Send Message"/>
                    </div>
                  </div>
                  <div className="bg-white w-full lg:w-1/2 pl-5 rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none">
                    <img src="/images/contactus-poster.jpg" className="rounded-3xl hidden lg:block"/>
                    <div>
                      <small className="text-gray-400">You can contact us through the mobile number or social network links introduced:</small>
                      <div>
                        <div className="mt-4 inline-flex">
                          { iphone }
                          <a href="tel:0989307864477" className="hover:text-blue-500 pl-2 md:pl-3 my-auto">+98 9307864477</a>
                        </div>
                        
                      </div>
                      <div>
                        <div className="mt-2 inline-flex">
                          { imail }
                          <a href="mailto:info@topsoftware.ir" className="hover:text-blue-500 pl-2 md:pl-3 my-auto">info@topsoftware.ir</a>
                        </div>
                      </div>
                      <div className="py-10 inline-flex social-media-links">
                        <aside className="mx-3">
                          <a href="https://www.linkedin.com/in/sajjad-esmaeeli-812270158/" target="_blank">{ ilinkedin }</a>
                        </aside>
                        <aside className="mx-3">
                          <a href="https://t.me/SSEsmaeeli" target="_blank">{ itelegram }</a>
                        </aside>
                        <aside className="mx-3">
                          <a href="https://www.instagram.com/shahin.norouzi_frontend/" target="_blank">{ iinstagram }</a>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Copyright />
        </section>
    )
}
export default Contact;