import React,{Component,useState} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Radium from 'radium';
class App extends Component{

state={
  persons:[
    {id:"ad123",name:"hosein",family:"majzobi"},
    {id:"ad12323",name:"Samane",family:"Khandan"},
    {id:"41412",name:"Shervin",family:"Rezaee"},
    {id:"21321321",name:"Moen ",family:"Hodavandi"},
    {id:"adsax2",name:"Sebor",family:"Taboor"},
  ],
  username:"MehdiShariati",
  showPersons:false
}
bindingInputValueUserNameToOutPut=(e)=>{
  this.setState({
    username:e.target.value
  })
}
PersonDisplayHandler=()=>{
  this.setState({
    showPersons:!this.state.showPersons
  })
}

changeNameHandler=(event,index)=>{
 
 let selectedPersonIndex=this.state.persons.findIndex((prs)=>{
    return prs.id === index;
  })
  const person={
    ...this.state.persons[selectedPersonIndex]
  };
  person.name=event.target.value;
  const persons=[...this.state.persons];
  persons[selectedPersonIndex]=person;
  this.setState({persons:persons});


}
render(){
 
  let pr=null;
  if(this.state.showPersons){

    pr=this.state.persons.map((pr,index)=><Person name={pr.name} family={pr.family} key={pr.id} change={(event)=>this.changeNameHandler(event,pr.id)}></Person>)
  }
  let styles={
    padding:"50px",
    width:"100%" ,
    height:"100%" 
 }
 let ButtonSs={
   width:'100px',
   height:'100px',
  transition:"width 3s, height 3s",
     ":hover":{
      height:'250px',
       width:"250px",
     
     
     }
 }
  return(

    <div style={styles}>
      
      <button style={ButtonSs} type="button" onClick={this.PersonDisplayHandler}  >ShowPersons</button>
      
   <UserInput change={this.bindingInputValueUserNameToOutPut} currentName={this.state.username} ></UserInput>
 
    <UserOutput username={this.state.username} />
    <UserOutput username={this.state.username} />
    <UserOutput username={this.state.username} />
    {pr}
    </div>
  );





}





}








export default Radium(App);



