import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component{

    //Intializing state
    state={ lat: null,errorMesage:''}; 
    
     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(position => this.setState({ lat:position.coords.latitude}),
      err => this.setState({errorMesage:err.message})
      );
     }
    //must method for react

    render() {
        if(!this.state.errorMesage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        if(this.state.errorMesage && !this.state.lat){
            return <div>Latitude:{this.state.errorMesage}</div>;
        }

        return <div>
            <Spinner message="Please accept the Location Request"/>
            </div>

    }
}

ReactDOM.render(<App />,document.querySelector("#root"));