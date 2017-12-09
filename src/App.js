import React, { Component } from 'react';
import Events from './components/event';
import './App.css';

class App extends Component {
  constructor(){
    //super();
    this.state = {
      events: [
        { 
          event_name:​ 'Wedding', 
        ​ ​ event_date: '24​ ​ Sept​ ​ 2017', 
        ​ ​ description: 'These​ ​ two​ ​ souls​ ​ came​ ​ in​ ​ union​ ​ to​ ​ commemorate​ ​ their​ ​ love​ \
        ​                  and​ ​ unite​ ​ their promises​ ​ in​ ​ the​ ​ presence​ ​ of​ ​ beloved​ ​ friends​ ​ and​ ​ family.​ ​ \
                          Gordon​ ​ and​ ​ Charline’s​ ​ wedding​ ​ was​ ​ a sight​ ​ to​ ​ behold​ ​ and​ ​ a ​ ​ celebration​ ​ to​ ​ \
                          remember​ ​ because​ ​ of​ ​ the​ ​ peace,​ ​ serenity​ ​ and​ ​ beaut.', 
        ​ ​ images:​ ​ [ 
        ​ ​ ​ ​ 'http://www.culturalindia.net/iliimages/Hindu%20Wedding.jpg', 
        ​ ​ ​ ​ 'http://www.indiamarks.com/wp-content/uploads/Indian-Wedding-1.jpg', 
        ​ ​ ​ ​ 'https://maharaja.co.uk/wp-content/uploads/2017/01/Special-Indian-Wedding-Traditions.jpg', 
        ​ ​ ​ ​ 'http://www.indiamarks.com/wp-content/uploads/Indian-Wedding-1.jpg',          
            'https://www.warble-entertainment.com/blog/wp-content/uploads/2016/06/indian-wedding.jpg', 
        ​ ​ ​ ​ 'https://apis.xogrp.com/media-api/images/0f2701b1-e85d-4127-993f-3bd6b4ea7c2e~rs_768.h' 
        ​ ​ ], 
        ​ ​ category:​ ​ [ 
        ​ ​ ​ ​ "Baraat", 
        ​ ​ ​ ​ "Reception", 
        ​ ​ ​ ​ "Post​ ​ Wedding", 
        ​ ​ ​ ​ "Wedding" 
        ​ ​ ] 
        } 
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"><img src="./logo.png" class="img-responsive logo"/></a>
          </div>
          <ul class="nav navbar-nav">
            
          </ul>
        </div>
      </nav>
      <Events events={this.state.events}/>
      </div>
    );
  }
}

export default App;
