import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';




class WeatherList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon ,lat } = cityData.city.coord;


        console.log(temps);
        return(
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} long={lon} />
                </td>
                <td><Chart data={temps} color ='salmon'  units="K"/></td>
                <td><Chart data={pressure} color ='steelblue' units="hPa"/></td>
                <td><Chart data={humidity} color ='gray' units="%"/></td>
            </tr>
        );
    }


    render() {
        return (
           <table className="table table-hover">
               <thead>
                   <tr>
                       <th>City</th>
                       <th>Temperature</th>
                       <th>Pressure</th>
                       <th>Humidity</th>
                   </tr>
               </thead>
               <tbody>
                {this.props.weather.map(this.renderWeather)}
               </tbody>
           </table>
        );
    }
}


function mapStateToProps({ weather }) {
    //What Ever is Returned from here will show up as props in bookList
    return { weather }; //{ weather } === { weather : weather }
}


export default connect(mapStateToProps)(WeatherList);