import ScalableMarkerSymbol = require('scalable-marker-symbol');
import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import Graphic = require('esri/Graphic');
import Point = require('esri/geometry/Point');
import SimpleMarkerSymbol = require('esri/symbols/SimpleMarkerSymbol');

let svgSymbol = new ScalableMarkerSymbol();
svgSymbol.width = 40;
svgSymbol.height = 80;
svgSymbol.path =  'M 150, 0 L 75 200 L 225 200 Z'

let referenceSymbol = new SimpleMarkerSymbol({
  size: 10,
  color: 'red'
});

let point = new Point({
  longitude: -121.84068298339844,
  latitude: 37.50552177429198
});

let pointGraphic = new Graphic({
  geometry: point,
  symbol: svgSymbol
});

// This is used to show the center of the SVG graphic location for testing
let referenceGraphic = new Graphic( {
  geometry: point,
  symbol: referenceSymbol
});

let map = new Map({
  basemap: 'gray'
});
let view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 12,
  center: [-121.848889, 37.505833]
});

view.graphics.addMany([pointGraphic, referenceGraphic]);
