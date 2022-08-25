import Modal from "../Modal/Modal"
import TableData from "../Table/Table"
import "./style.css"
import {useState} from "react"

export default function Dashboard(){
    const [searchValue,setSearchValue]=useState("")
    const searchFilter=(e)=>{ 
        setSearchValue(e.target.value); 

        
    }
    
    return(
        <div className="DashBoard">
            <div className="Header"> 
             <input class="form-control formcontrol" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onChange={searchFilter}/>
             <Modal label={"Add user"} type={"add"}/>
            </div>
            <div className="Table">
            <TableData searchValue={searchValue}/>
            </div>
        </div>
    )
}