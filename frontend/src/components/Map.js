import React, {Component} from 'react'
import ReactMapGL from 'mapbox-gl';

class Map extends Component {
    componentDidMount() {
        const map = new ReactMapGL.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/oscarmtzo/cjykcumna0taj1ckepqoxtmi4',
            center: [-99.074097, 19.4360762],
            zoom: 12
        })
        // map.Popup = () => {
           
        // }
    }
    
    render() {
        return(
            <div style = {{width:"100vw", height:"100vh"}} ref={e => (this.mapContainer= e)}/>

        )
    }
}

ReactMapGL.accessToken = 'pk.eyJ1Ijoib3NjYXJtdHpvIiwiYSI6ImNqeG0yY21iMDBjZms0MXJ3OGk1czR0dGcifQ.MUnx9WAsYUnVuM60F-dH8Q'
// class Map extends Component {
//     render(){
//         return(
//             <ReactMapGL
//             mapboxApiAccessToken={TOKEN}
//             width={400}
//             height={400}
//             latitude={37.7577}
//             longitude={-122.4376}
//             zoom={5}
//             onViewportChange={(viewport) => {
//                 const {width, height, latitude, longitude, zoom} = viewport;
//                 // Optionally call `setState` and use the state to update the map.
//             }}
//             />
//         )
//     }
// }
export default Map