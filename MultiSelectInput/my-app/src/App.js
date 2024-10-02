import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useRef } from 'react';
import Pill from './components/pills';
function App() {


  // 'https://dummyjson.com/users/search?q=John'
  const [searchTerm,setSearchTerm]=useState("");
  const [suggestions,setSuggestions]=useState([])
  const [selectedUsers,setSelectedUsers]=useState([]);
  const [selectedUserSet,setSelectedUserSet]=useState(new Set())
  const inputRef=useRef(null);
  useEffect(()=>{
    const fetchUsers=()=>{
      if(searchTerm.trim()===""){
        setSuggestions([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`).then((res)=>res.json()).then((data)=>setSuggestions(data)).catch((error)=>console.log(error));
    }
    fetchUsers();
  },[searchTerm])
  const handleSelectUser=(user)=>{
  setSelectedUsers([...selectedUsers,user]);
  setSelectedUserSet(new Set([...selectedUserSet,user.email]))
  setSearchTerm("");
  setSuggestions([]);
  }
  const handleRemove=(user)=>{
  const updatedUsers=selectedUsers.filter((selectedUser)=>selectedUser.id!==user.id);
  setSelectedUsers(updatedUsers);
  const updatedEmails=new Set(selectedUserSet);
  updatedEmails.delete(user.email);
  setSelectedUserSet(updatedEmails);
  inputRef.current.focus();
  }
  const handleKeyDown=(e)=>{
    if(e.key==='Backspace' && e.target.value==="" && selectedUsers.length>0){
      const lastUser=selectedUsers[selectedUsers.length-1];
      handleRemove(lastUser);
      setSuggestions([]);
    }
  }
  return (
    <div className="user-search-container">
    <div className='user-search-input'>
      {
        selectedUsers.map((user)=>{
          return (
          <Pill key={user.email} image={user.image} text={`${user.firstName} ${user.lastName}`} onClick={()=>handleRemove(user)}/>)
        })
      }
      <div>
        <input ref={inputRef} type='text' value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search for a
        User' onKeyDown={handleKeyDown}></input>
        <ul className='suggestions-list'>
          {suggestions ?.users?.map((user,index)=>{
            return !selectedUserSet.has(user.email) ? (
            <li key={user.email}>
              <img src={user.image} alt={`${user.firstName}`} onClick={()=>handleSelectUser(user)}/>
              <span>{user.firstName}  {user.lastName}</span>
            </li>) : (<></>)
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
