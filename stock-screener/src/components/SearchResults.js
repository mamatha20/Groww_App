// Added for Search


import React from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'

class SearchResult extends React.Component{
    constructor(props) {
    super(props);
    this.state = {items:[],num_items:0,is_loading:false,url:""}
    // this.storeResults.bind(this)
    // this.search.bind(this)
  }

    storeResults(response){
        // console.log(this)
        console.log(response)

        this.state.items.push(...response.data.items)
        this.state.num_items = this.state.num_items + response.data.items.length
        this.setState({
            num_items: this.state.num_items,
            items : this.state.items,
            is_loading: false,
            url:this.state.url,
        })
    }
    reset(){
        this.setState({
            num_items: 0,
            items : [],
            is_loading: false,
        })
    }
    search = (url=this.state.url,start=1,isNew=false) =>{ // this did the magic
        if(isNew){
            this.reset()
        }
        this.state.is_loading=true
        if(url!==""){
            this.state.url=url
        }
        console.log(url)
        url=this.state.url+'&start='+start
        axios({
            url:url,
            method:"get",
        }).then(function(response) {
            // console.log(this)
             // console.log(response.data.items,response.data.items.length)
             console.log("response recieved")
             this.storeResults(response)
             // console.log(this.state)
        }.bind(this),error => {
            console.log("error")
            console.log(error)
        })
    }
    render(){
        return (
            <div>
                <Search search={this.search}/>
                <Results searchResult={this.state} search={this.search}/>
            </div>
        )
    }
}
export default SearchResult;
