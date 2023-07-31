import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filteredData:[],
            filterWithName:[],
            filterBasedAge:[],
            total:0
            
        }

        console.log(this.state.userData)
        var filteredData = this.state.userData.filter((el)=>el.user_type==="Designer")
        var filterWithName = this.state.userData.filter((el)=>el.name[0]=="J")
        var filterBasedAge = this.state.userData.filter((el)=>el.age > 28 && el.age <= 50)
        var sum = this.state.userData.reduce((acc,el) => {
            if (el.user_type=="Designer"){
                acc += el.years;
            }
            return acc;
        },0);
        console.log(sum)
        this.state.total = sum;
        this.state.filterBasedAge = filterBasedAge;
        this.state.filterWithName = filterWithName;
        this.state.filteredData = filteredData;
       
    }

    
  render() {
    return (
      <div style={{width:"80%",textAlign:"initial"}}>
        <h1>Display All Items</h1>
        {this.state.userData.map((el)=>(
            <div key={el.id} style={{width:"70%"}}>
                <ul>
                    <li>ID: {el.id} Name: {el.name} Type:{el.user_type}</li>
                </ul>
            </div>
        ))}

        <h1>Display all data based on UserType</h1>
        {this.state.filteredData.map((el)=>(
            <div key={el.id} style={{width:"70%"}}>
            <ul>
                <li>ID: {el.id} Name: {el.name} Type:{el.user_type}</li>
            </ul>
        </div>
        ))}

        <h1>Display all data starting with letter J</h1>
        {this.state.filterWithName.map((el)=>(
            <div key={el.id} style={{width:"70%"}}>
            <ul>
                <li>ID: {el.id} Name: {el.name} Type:{el.user_type}</li>
            </ul>
        </div>
        ))}

        <h1>Filter all the data based on greater than 28 and less than or equal to 50</h1>
        {this.state.filterBasedAge.map((el)=>(
            <div key={el.id} style={{width:"70%"}}>
            <ul>
                <li>ID: {el.id} Name: {el.name} Type:{el.user_type}</li>
            </ul>
        </div>
        ))}

        <h1>Find the total years of Designers</h1>
        <h2>{this.state.total}</h2>

        
        
      </div>
    )
  }
}
