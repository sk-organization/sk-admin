import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
} from 'react-google-maps';

const AdminFranchiseAreas = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIZss7YrLfuwNLGYBKU2LJuEi0Ad4LIBQ',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    style={{ width: '100%', height: '100%', position: 'relative' }}
    onZoomChanged={() => {}}
    defaultZoom={13}
    defaultCenter={{ lat: 27.6796583, lng: 83.4575455 }}
  >
    {props.isMarkerShown && (
      <Marker
        animation
        name="My Marker"
        color="red"
        position={{ lat: 27.6820453, lng: 83.3624951 }}
      />
    )}
    <Polygon
      path={props.adminArea.map(area => ({
        lat: parseFloat(area.polygon.latitude),
        lng: parseFloat(area.polygon.longitude),
      }))}
      key={1}
      options={{
        fillColor: '#ff7675',
        fillOpacity: 0.4,
        strokeColor: '#ff7675',
        strokeOpacity: 1,
        strokeWeight: 1,
      }}
      onClick={() => {
        console.log('ahmet');
      }}
    />
  </GoogleMap>
));

export default AdminFranchiseAreas;
