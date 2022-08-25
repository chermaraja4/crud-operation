import Table from 'react-bootstrap/Table';
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { DeleteUserDetails } from '../../Reducer/User/user.action';
import {useEffect, useState,useRef } from "react"
import './Style.css'

export default function TableData(props) {
  const {searchValue}=props

  const dispatch=useDispatch();
  const userDetails=useSelector((state)=>state.User) 
   const user= userDetails.user_list;

   const deleteList=(age)=>{
    dispatch(DeleteUserDetails({type:"DeleteUser",payload: age}))  
   }
  const [tableList,setTableList]=useState(user)
  useEffect(()=>{
    setTableList([...user])
  },[user])

   useEffect(()=>{
      const keys = ["FullName","PhoneNumber","UserName"];
     if(!searchValue) return;
      const filter=user.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchValue))
    );
    setTableList([...filter])  

   },[searchValue])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>PhoneNumber</th> 
          <th>username</th>        
          <th className='center'>Edit</th>
          <th className='center'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tableList.map((list,index)=>{
            return(
                <tr>
                <td>{index+1}</td>
                <td>{list.FullName}</td>
                <td>{list.PhoneNumber}</td>
                <td>{list.UserName}</td>
                <td className='center'> <Modal  list={list} label={<i class="fa fa-pencil" aria-hidden="true" type={"edit"} ></i>}/></td>
                <td className='center'><button type="button" class="btn btn-outline-danger" onClick={()=>deleteList(list.age)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                
              </tr>
            )
        })}
      </tbody>
    </Table>
  );
}

