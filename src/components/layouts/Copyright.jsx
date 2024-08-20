const Copyright = () =>{
    const date = new Date().getFullYear();
    return(
    <div className="w-12/12 text-center h-10 flex justify-center items-center opacity-50 bg-black bg-opacity-30 text-normal">
        Copyright <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 32.984 32.984"><g transform="translate(-60.309 -642.151)"><path d="M326.31,342.8A16.492,16.492,0,1,0,342.8,326.31,16.492,16.492,0,0,0,326.31,342.8Zm15.335,11.883c-2.715-.771-5.162-3.184-5.162-5.7V336.618c0-5.616,8.9-8.379,12.637-2.816l-1.81.905c-2.547-3.668-8.749-1.738-8.749,1.911v12.369c0,3.5,6.184,5.51,8.715,1.81l1.844.938A7.046,7.046,0,0,1,341.645,354.685Z" transform="translate(-266.001 315.841)" fillRule="evenodd"/></g></svg>
        {date}
    </div>
    )
}
export default Copyright;