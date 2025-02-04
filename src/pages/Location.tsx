import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";


const Location = () =>{

    const containerStyle = {
        width: '100%',
        height: '600px',
    };
    const position = {
        lat: 5.4924731,
        // Latitude
        lng: 37.2192674,}
        return (



        <div>
            <div className="map-location">
                <h4>Location on Map:</h4>
                <iframe
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen>

                </iframe>
            </div>


            <LoadScript googleMapsApiKey="AIzaSyBPculPoX4B0Ay8Bi72M2stNvhxA2gI3KU">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={10}
                >
                    {/* Marker at the destination point */}
                    <Marker
                        onLoad = {onload}
                        position={position}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
export default Location