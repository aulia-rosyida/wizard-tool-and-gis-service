# Wizard Tools with GIS Services


## Features (Done)
- [x] Leaflet
- [x] ReactJs
- [x] 4 step wizard
- [x] Step 1: Input Form (Dropdown, TextField, Date Picker)
- [x] Step 2: Choose preferred Basemap (OpenStreetmap, Google Basemap)
- [x] Step 3: 
        - Shows a window with basemap 
        - Load Default Map Layer (Indonesia peat distribution) using Geojson 
        - Drawing polygon enhancement with calculating area tooltip
        - Marking point enhancement with coordinate tooltip
- [x] Step 4: Review Screen
- [x] Change Bootstrap to Tailwind

## Features (Needed Improvement)
- Step 2: Esri Map 

  Progress: Already got API KEY for the url and maps can be showing

  Problem: After some hours it doesn't appeared 

- Step 3: Screenshot basemap

  Progress: Already find a library that recommended: leaflet-simple-map-screenshoter

  Problem: When try to implemented it, it is not working yet

- Step 4: Export PDF

  Progress: Already find a library that recommended: jspdf
  
  Problem: When try to implemented it, it is not working yet

## Features (Not Implemented Yet)
- Second Page : Upload geospatial (Shapefile data)
- Login system with username, email, name, and password

## How to use
- clone this repo
```
    git clone git@github.com:aulia-rosyida/wizard-tool-and-gis-service.git
```

- install depp

```
    yarn or yarn install
```
- run project
```
    yarn start
```