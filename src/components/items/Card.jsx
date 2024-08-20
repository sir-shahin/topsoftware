import ProjectDetail from "../layouts/ProjectDetail";

const Card = (props) =>{
    const growCard = (e) =>{
        let seprator;
        window.matchMedia("(max-width: 992px)").matches ? seprator = 7 : seprator = 18;
        const parent = e.target.parentElement.parentElement.parentElement.parentElement;
        const div = e.target.parentElement.parentElement.parentElement;
        let left = parent.offsetLeft;
        let top = parent.offsetTop - window.pageYOffset;
        parent.style.zIndex = 3;
        div.style.transform = `translate(${left * -1 + seprator +'px'},${top * -1 + 20 +'px'})`;
        div.classList.add("expanding","md:flex");
    }
    const close = () => {
        const expanded_div = document.querySelector('.expanding');
        const parent_expanded_div = expanded_div.parentElement;
        expanded_div.style.transition = "width 0s, height 0s, transform 0s";
        expanded_div.style.transform = "translate(0)";
        expanded_div.classList.remove("expanding","md:flex");
        parent_expanded_div.style.zIndex = 2;
        setTimeout(()=>{
            expanded_div.style.transition = "width .5s, height .5s, transform .5s";
        },300)
    }
    return(
        <div className="portfo-card shadow rounded py-5 px-4 bg-white">
            <div className="md:max-width-23">
                <div className="w-full flex relative">
                    <img src={props.image} className="rounded portfo-image" width="120" alt={props.title}/>
                    <img onClick={(e) => {growCard(e)}} src="/images/expand-card.svg" className="absolute right-0 top-0 expand-btn cursor-pointer"/>
                </div>
                <h3 className="text-xs lg:text-base md:font-bold pt-2 tracking-wide truncate">{ props.title }</h3>
                <div className="text-gray-600 pt-3 tracking-wide text-normal font-extralight truncate cursor-help" title={ props.description }>{ props.description }</div>
            </div>
            <ProjectDetail onClose={close}
             team={props.developers}
             description={props.longDescription}
             link={props.link}
             date={props.date}></ProjectDetail>
            <style>{`.expanding .expand-btn{display:none}.expand-btn{transition:all .3s}.expand-btn:hover{transform: scale(1.2)}`}</style>
        </div>
    )
}
export default Card;