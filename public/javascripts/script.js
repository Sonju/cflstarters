$(document).ready(function(){

// *** jQuery for page scrolling feature -  requires jQuery Easing plugin ***//
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(41.883162,-87.712797),
        zoom: 12,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
{
"featureType": "landscape",
"stylers": [
  {
    "hue": "#FFBB00"
  },
  {
    "saturation": 43.400000000000006
  },
  {
    "lightness": 37.599999999999994
  },
  {
    "gamma": 1
  }
]
},
{
"featureType": "road.highway",
"stylers": [
  {
    "hue": "#FFC200"
  },
  {
    "saturation": -61.8
  },
  {
    "lightness": 45.599999999999994
  },
  {
    "gamma": 1
  }
]
},
{
"featureType": "road.arterial",
"stylers": [
  {
    "hue": "#FF0300"
  },
  {
    "saturation": -100
  },
  {
    "lightness": 51.19999999999999
  },
  {
    "gamma": 1
  }
]
},
{
"featureType": "road.local",
"stylers": [
  {
    "hue": "#FF0300"
  },
  {
    "saturation": -100
  },
  {
    "lightness": 52
  },
  {
    "gamma": 1
  }
]
},
{
"featureType": "water",
"stylers": [
  {
    "hue": "#0078FF"
  },
  {
    "saturation": -13.200000000000003
  },
  {
    "lightness": 2.4000000000000057
  },
  {
    "gamma": 1
  }
]
},
{
"featureType": "poi",
"stylers": [
  {
    "hue": "#00FF6A"
  },
  {
    "saturation": -1.0989010989011234
  },
  {
    "lightness": 11.200000000000017
  },
  {
    "gamma": 1
  }
]
}
],
    }
    var mapElement = document.getElementById('cflmap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['CFL Starters & Alternators, Northside', '4929 West Grand Avenue, Chicago, IL  60639', '(773) 968-7978', 'undefined', 'cflstarterschicago.com', 41.915374, -87.750617, 'https://mapbuildr.com/assets/img/markers/default.png'],['CFL Starters & Alternators, Southside', '2917 W. Cermak Road, Chicago, IL  60623', '(773) 221-0100', 'undefined', 'undefined', 41.851589, -87.700179, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
    ];
    for (i = 0; i < locations.length; i++) {
  if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
  if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
  if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
       if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
       if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
 }
function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
  var infoWindowVisible = (function () {
          var currentlyVisible = false;
          return function (visible) {
              if (visible !== undefined) {
                  currentlyVisible = visible;
              }
              return currentlyVisible;
           };
       }());
       iw = new google.maps.InfoWindow();
       google.maps.event.addListener(marker, 'click', function() {
           if (infoWindowVisible()) {
               iw.close();
               infoWindowVisible(false);
           } else {
               var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p></div>";
               iw = new google.maps.InfoWindow({content:html});
               iw.open(map,marker);
               infoWindowVisible(true);
           }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
        infoWindowVisible(false);
    });
}
}


});
