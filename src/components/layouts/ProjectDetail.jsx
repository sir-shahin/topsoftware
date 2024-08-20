import {useState,useEffect} from 'react';
import {developers} from '../../pages/api/team';

const ProjectDetail = (props) =>{
    let [developer,setDeveloper] = useState(developers[props.team[0]]);
    let [projectDevelopers,setProjectDevelopers] = useState([]);
    let fetchDeveloper = (id) => {
        setDeveloper(developers[id])
    }
    useEffect(()=>{
        let devs = [];
        props.team.map((developerId,index)=>{
            devs[index] = developers[developerId]
        });
        setProjectDevelopers(devs);
    },[developer]);

    return(
        <div className="discriptions w-full md:w-2/3">
                <div className="flex flex-col md:flex-row">
                    <div className="pl-6 w-full md:w-2/3">
                        <div className="mt-4"><small className="pr-2 text-gray-600">Start date:</small> {props.date}</div>      
                        <div className="mt-4">
                            <small className="pr-2 text-gray-600">Creator(s):</small>
                            <div>
                                { projectDevelopers.map(dev =>{
                                    return(
                                    <div onClick={()=>fetchDeveloper(dev.id)} key={dev.id} className="mx-2 cursor-pointer hover:text-blue-500">{dev.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                        { props.link && 
                        <div className="mt-4"><small className="pr-2 text-gray-600">Link:</small>
                            <a href={props.link} target="_blank" className="text-blue-400 hover:text-blue-500">{props.link}</a>
                        </div> }
                        <div className="mt-4">
                            <small className="pr-2 text-gray-600">Description:</small>
                            <p className="p-3 rounded-lg text-gray-700" dangerouslySetInnerHTML={{__html: props.description}}></p>       
                        </div>  
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="text-right -mt-2 mb-4 hidden md:block">
                            <span onClick={props.onClose} className="p-3 hide-in-mobile cursor-pointer text-gray-600 hover:text-black">&times;</span>
                        </div>
                        <div className="h-full">
                            <div className="bg-gray-100 rounded-xl shadow border pb-5">
                                <img src={developer.image} alt={developer.name}/>
                                <div className="text-xl text-center">{developer.name}</div>
                                <div className="pl-3">
                                    <div className="text-gray-500 font-extralight text-xs mt-3">Role on this project:</div>
                                    <div className="text-normal">{developer.role}</div>
                                    <div className="text-gray-500 font-extralight text-xs mt-3">Date of birth:</div>
                                    <div className="text-normal">{developer.birthday}</div>
                                    <div className="text-gray-500 font-extralight text-xs mt-3">Phone number:</div>
                                    <div className="text-normal">{developer.phone}</div>
                                </div>
                            </div>
                            <div className="pt-7 text-right">
                                <span onClick={props.onClose} className="bg-gray-400 hover:bg-gray-500 cursor-pointer text-white rounded px-8 py-2">Close</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ProjectDetail;