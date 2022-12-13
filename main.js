let latitude = 22.7868584, longitude = 88.3643296

// initializing map box
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:0
})

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gate")
var img3 = document.querySelector("#victoria")
var img4 = document.querySelector("#lotus")

// amber
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

// gate
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([28.6129, 77.2295])
.addTo(map)

// victoria memorial
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([22.5448, 88.3426])
.addTo(map)

// lotus temple
var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([28.5535, 77.2588])
.addTo(map)


map.addControl(
    new mapboxgl.MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);