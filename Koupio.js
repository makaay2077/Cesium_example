Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MmRkMjRiYy0wOGRlLTQ5OWQtYWI3Yi0xMjRiNGM0NDQ0NmEiLCJpZCI6NzUyOTIsImlhdCI6MTY0NTAwNjQxOX0.N1wzsS6DrPHP_3UcgO1LNiRJRh0aI7h48Wk2yM0-0m4';
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
 
});

const initialPosition = Cesium.Cartesian3.fromDegrees(
  27.6813746,
  62.8927412,
  753
);

const initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(
  21.27879878293835,
  -21.34390550872461,
  0.0716951918898415);
  
  
let tileset = null;

let loadTileset = function(assetId) {
  if (tileset !== null) {
    viewer.scene.primitives.remove(tileset);
  }

  let url = Cesium.IonResource.fromAssetId(assetId);

  tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: url
    })
  );

  tileset.readyPromise.then(function(tileset) {
    viewer.scene.camera.setView({
  destination: initialPosition,
  orientation: initialOrientation,
  endTransform: Cesium.Matrix4.IDENTITY,
});

  }).catch(function(error) {
    console.error('Error loading tileset:', error);
  });
};

let assetId = 1624126; 


let kmlOptions = {
  camera: viewer.scene.camera,
  canvas: viewer.scene.canvas,
  clampToGround: true
};
let kmlFiles = [
  '../../SampleData/koupio/45_50_DB.kmz' ,
   '../../SampleData/koupio/50_55_DB.kmz' ,
  '../../SampleData/koupio/55_60_DB.kmz', 
  '../../SampleData/koupio/60_65_DB.kmz',
  '../../SampleData/koupio/65_70_DB.kmz',
  '../../SampleData/koupio/70_75_DB.kmz',
  '../../SampleData/koupio/75_80_DB.kmz',
];

let kmlDataSources = [];

// JSON dosyanızın URL'sini belirtin
const jsonUrl = 'https://api.waqi.info/api/feed/@5718/aqi.json';

// JSON dosyasını yükleme ve Cesium entity olarak ekleme işlemi
function loadJsonAsEntity(jsonUrl) {
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(data.rxs.obs[0].msg.city.geo[1],data.rxs.obs[0].msg.city.geo[0]),
        
        label: {
          text: data.rxs.obs[0].msg.attributions[0].name,
          font: '20pt monospace',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        },
       description: `<br>Tarih ve Saat: ${data.rxs.obs[0].msg.iaqi.pm10.t}<br>Sıcaklık: ${data.rxs.obs[0].msg.iaqi.t.v}<br>Partikül Miktarı(pm10): ${data.rxs.obs[0].msg.iaqi.pm10.v}<br>Sülfür2Oksit(SO2): ${data.rxs.obs[0].msg.iaqi.so2.v}<br>Partikül Madde(pm25): ${data.rxs.obs[0].msg.iaqi.pm25.v}`,
       ellipse: {
                      semiMinorAxis: 2500.0,
                      semiMajorAxis: 4000.0,
                      material: Cesium.Color.BLUE.withAlpha(0.5),
                    },
       
      });
      viewer.zoomTo(viewer.entities);
    
    })
    .catch(error => console.error(error));
}


var geojsonData={
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": 46,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 46,
                "Lainausaika": 1619425634000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619432833000,
                "Palautuksen_koordinaatit": "62.838815, 27.6440138889",
                "Palautuksen_koordinaatit_X": 27.644013888900002,
                "Palautuksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_kesto": "0:25:51",
                "Keskeytyksen_kesto": "1:34:06",
                "Kokonaiskesto": "1:59:58",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 4930
            }
        },
        {
            "type": "Feature",
            "id": 88,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 88,
                "Lainausaika": 1619428769000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430061000,
                "Palautuksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Palautuksen_koordinaatit_X": 27.6595630556,
                "Palautuksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_kesto": "0:21:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:21:32",
                "Kulutettu_energia_Wh": 42.5,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 6850
            }
        },
        {
            "type": "Feature",
            "id": 91,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 91,
                "Lainausaika": 1619429607000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430528000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:15:21",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:21",
                "Kulutettu_energia_Wh": 40.799999999999997,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 3980
            }
        },
        {
            "type": "Feature",
            "id": 92,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.650378056000079,
                    62.896981111000059
                ]
            },
            "properties": {
                "OBJECTID": 92,
                "Lainausaika": 1619429616000,
                "Lainauksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Lainauksen_koordinaatit_X": 27.650378055600001,
                "Lainauksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430042000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:07:05",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:05",
                "Kulutettu_energia_Wh": 8.8000000000000007,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1830
            }
        },
        {
            "type": "Feature",
            "id": 93,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 93,
                "Lainausaika": 1619429655000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433215000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:21:13",
                "Keskeytyksen_kesto": "0:38:06",
                "Kokonaiskesto": "0:59:19",
                "Kulutettu_energia_Wh": 37,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 4230
            }
        },
        {
            "type": "Feature",
            "id": 94,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 94,
                "Lainausaika": 1619429729000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619430272000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:09:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:02",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 2220
            }
        },
        {
            "type": "Feature",
            "id": 95,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 95,
                "Lainausaika": 1619429859000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430550000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:11:31",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:31",
                "Kulutettu_energia_Wh": 32.600000000000001,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 3310
            }
        },
        {
            "type": "Feature",
            "id": 96,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 96,
                "Lainausaika": 1619429918000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430467000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:09:08",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:08",
                "Kulutettu_energia_Wh": 14.9,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 2060
            }
        },
        {
            "type": "Feature",
            "id": 97,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 97,
                "Lainausaika": 1619429944000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430558000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:10:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:14",
                "Kulutettu_energia_Wh": 16.300000000000001,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 1940
            }
        },
        {
            "type": "Feature",
            "id": 98,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 98,
                "Lainausaika": 1619429954000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430641000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:11:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:26",
                "Kulutettu_energia_Wh": 31,
                "Korjattu_energia_Wh": 1.5,
                "Matkan_pituus_m": 3310
            }
        },
        {
            "type": "Feature",
            "id": 99,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 99,
                "Lainausaika": 1619430164000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430226000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:01:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:02",
                "Kulutettu_energia_Wh": 0.5,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": -10
            }
        },
        {
            "type": "Feature",
            "id": 100,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 100,
                "Lainausaika": 1619430172000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619430458000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:04:45",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:45",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 700
            }
        },
        {
            "type": "Feature",
            "id": 101,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 101,
                "Lainausaika": 1619430173000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619430437000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:04:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:23",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 710
            }
        },
        {
            "type": "Feature",
            "id": 102,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 102,
                "Lainausaika": 1619430254000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619430478000,
                "Palautuksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Palautuksen_koordinaatit_X": 27.6595630556,
                "Palautuksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_kesto": "0:03:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:43",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": -510
            }
        },
        {
            "type": "Feature",
            "id": 103,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.64233900000005,
                    62.855023000000074
                ]
            },
            "properties": {
                "OBJECTID": 103,
                "Lainausaika": 1619430284000,
                "Lainauksen_koordinaatit": "62.855023, 27.642339",
                "Lainauksen_koordinaatit_X": 27.642339,
                "Lainauksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431316000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:17:11",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:11",
                "Kulutettu_energia_Wh": 44.299999999999997,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 5730
            }
        },
        {
            "type": "Feature",
            "id": 104,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 104,
                "Lainausaika": 1619430346000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431604000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:20:57",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:57",
                "Kulutettu_energia_Wh": 10.800000000000001,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 1980
            }
        },
        {
            "type": "Feature",
            "id": 105,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 105,
                "Lainausaika": 1619430404000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430687000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:04:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:43",
                "Kulutettu_energia_Wh": 10.300000000000001,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1450
            }
        },
        {
            "type": "Feature",
            "id": 106,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 106,
                "Lainausaika": 1619430415000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430915000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:08:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:19",
                "Kulutettu_energia_Wh": 29.899999999999999,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 2040
            }
        },
        {
            "type": "Feature",
            "id": 107,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 107,
                "Lainausaika": 1619430523000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619431046000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:08:42",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:42",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1360
            }
        },
        {
            "type": "Feature",
            "id": 108,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 108,
                "Lainausaika": 1619430529000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619431043000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:08:33",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:33",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 1360
            }
        },
        {
            "type": "Feature",
            "id": 109,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 109,
                "Lainausaika": 1619430587000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430716000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:02:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:09",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 110,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 110,
                "Lainausaika": 1619430599000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431376000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:12:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:56",
                "Kulutettu_energia_Wh": 32.200000000000003,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 2620
            }
        },
        {
            "type": "Feature",
            "id": 111,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 111,
                "Lainausaika": 1619430618000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619430822000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:03:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:24",
                "Kulutettu_energia_Wh": 6.5,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 690
            }
        },
        {
            "type": "Feature",
            "id": 112,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 112,
                "Lainausaika": 1619430631000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431224000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:09:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:52",
                "Kulutettu_energia_Wh": 10.1,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 1910
            }
        },
        {
            "type": "Feature",
            "id": 113,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 113,
                "Lainausaika": 1619430670000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431209000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:08:59",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:59",
                "Kulutettu_energia_Wh": 17.699999999999999,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 1910
            }
        },
        {
            "type": "Feature",
            "id": 114,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 114,
                "Lainausaika": 1619430720000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431056000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:05:35",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:35",
                "Kulutettu_energia_Wh": 9.8000000000000007,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 1540
            }
        },
        {
            "type": "Feature",
            "id": 115,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 115,
                "Lainausaika": 1619430770000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431800000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:17:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:10",
                "Kulutettu_energia_Wh": 30.100000000000001,
                "Korjattu_energia_Wh": 4.2000000000000002,
                "Matkan_pituus_m": 5430
            }
        },
        {
            "type": "Feature",
            "id": 116,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 116,
                "Lainausaika": 1619431074000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431109000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:00:35",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:35",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 117,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 117,
                "Lainausaika": 1619431142000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431987000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:14:04",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:04",
                "Kulutettu_energia_Wh": 31.600000000000001,
                "Korjattu_energia_Wh": 3.3999999999999999,
                "Matkan_pituus_m": 3560
            }
        },
        {
            "type": "Feature",
            "id": 118,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634813000000065,
                    62.91940500000004
                ]
            },
            "properties": {
                "OBJECTID": 118,
                "Lainausaika": 1619431550000,
                "Lainauksen_koordinaatit": "62.919405, 27.634813",
                "Lainauksen_koordinaatit_X": 27.634813000000001,
                "Lainauksen_koordinaatit_Y": 62.919404999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432082000,
                "Palautuksen_koordinaatit": "62.919405, 27.634813",
                "Palautuksen_koordinaatit_X": 27.634813000000001,
                "Palautuksen_koordinaatit_Y": 62.919404999999998,
                "Lainauksen_kesto": "0:08:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:52",
                "Kulutettu_energia_Wh": 22.5,
                "Korjattu_energia_Wh": 1.8999999999999999,
                "Matkan_pituus_m": 2480
            }
        },
        {
            "type": "Feature",
            "id": 119,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 119,
                "Lainausaika": 1619431637000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619433535000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:31:38",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:31:38",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 6640
            }
        },
        {
            "type": "Feature",
            "id": 120,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 120,
                "Lainausaika": 1619431644000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432130000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:08:05",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:05",
                "Kulutettu_energia_Wh": 12.4,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 2090
            }
        },
        {
            "type": "Feature",
            "id": 121,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 121,
                "Lainausaika": 1619431783000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432489000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:11:45",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:45",
                "Kulutettu_energia_Wh": 23.399999999999999,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 4030
            }
        },
        {
            "type": "Feature",
            "id": 122,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 122,
                "Lainausaika": 1619431867000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432410000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:09:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:03",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 810
            }
        },
        {
            "type": "Feature",
            "id": 123,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 123,
                "Lainausaika": 1619431898000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433452000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:25:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:25:53",
                "Kulutettu_energia_Wh": 73.400000000000006,
                "Korjattu_energia_Wh": 8.1999999999999993,
                "Matkan_pituus_m": 7740
            }
        },
        {
            "type": "Feature",
            "id": 124,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 124,
                "Lainausaika": 1619431931000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432332000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:06:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:41",
                "Kulutettu_energia_Wh": 9.5,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 1670
            }
        },
        {
            "type": "Feature",
            "id": 125,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 125,
                "Lainausaika": 1619431943000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432419000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:07:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:56",
                "Kulutettu_energia_Wh": 5.7999999999999998,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 680
            }
        },
        {
            "type": "Feature",
            "id": 126,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 126,
                "Lainausaika": 1619431951000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619431992000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:00:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 127,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 127,
                "Lainausaika": 1619431967000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432467000,
                "Palautuksen_koordinaatit": "62.8917, 27.64355",
                "Palautuksen_koordinaatit_X": 27.643550000000001,
                "Palautuksen_koordinaatit_Y": 62.8917,
                "Lainauksen_kesto": "0:08:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:19",
                "Kulutettu_energia_Wh": 17.300000000000001,
                "Korjattu_energia_Wh": 2.6000000000000001,
                "Matkan_pituus_m": 1630
            }
        },
        {
            "type": "Feature",
            "id": 128,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 128,
                "Lainausaika": 1619432032000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432846000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:13:34",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:34",
                "Kulutettu_energia_Wh": 34.200000000000003,
                "Korjattu_energia_Wh": 3.2999999999999998,
                "Matkan_pituus_m": 3040
            }
        },
        {
            "type": "Feature",
            "id": 129,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 129,
                "Lainausaika": 1619432156000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432429000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:04:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:32",
                "Kulutettu_energia_Wh": 10.699999999999999,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1110
            }
        },
        {
            "type": "Feature",
            "id": 130,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 130,
                "Lainausaika": 1619432399000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432447000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:00:47",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:47",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 131,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 131,
                "Lainausaika": 1619432461000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433343000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:14:42",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:42",
                "Kulutettu_energia_Wh": 25.399999999999999,
                "Korjattu_energia_Wh": 4,
                "Matkan_pituus_m": 4490
            }
        },
        {
            "type": "Feature",
            "id": 132,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 132,
                "Lainausaika": 1619432472000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433336000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:14:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:23",
                "Kulutettu_energia_Wh": 24.100000000000001,
                "Korjattu_energia_Wh": 2.2000000000000002,
                "Matkan_pituus_m": 3690
            }
        },
        {
            "type": "Feature",
            "id": 133,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 133,
                "Lainausaika": 1619432473000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433343000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:14:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:30",
                "Kulutettu_energia_Wh": 24,
                "Korjattu_energia_Wh": 2.1000000000000001,
                "Matkan_pituus_m": 3710
            }
        },
        {
            "type": "Feature",
            "id": 134,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 134,
                "Lainausaika": 1619432477000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619432503000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:00:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:25",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 135,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.650378056000079,
                    62.896981111000059
                ]
            },
            "properties": {
                "OBJECTID": 135,
                "Lainausaika": 1619432511000,
                "Lainauksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Lainauksen_koordinaatit_X": 27.650378055600001,
                "Lainauksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619433028000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:08:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:37",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 1800
            }
        },
        {
            "type": "Feature",
            "id": 136,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.647065000000055,
                    62.893053330000043
                ]
            },
            "properties": {
                "OBJECTID": 136,
                "Lainausaika": 1619432694000,
                "Lainauksen_koordinaatit": "62.89305333, 27.647065",
                "Lainauksen_koordinaatit_X": 27.647065000000001,
                "Lainauksen_koordinaatit_Y": 62.893053330000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433688000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:16:33",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:33",
                "Kulutettu_energia_Wh": 28.5,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 2120
            }
        },
        {
            "type": "Feature",
            "id": 137,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 137,
                "Lainausaika": 1619432783000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435917000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:52:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:52:14",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 138,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 138,
                "Lainausaika": 1619432845000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619434364000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:25:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:25:19",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 139,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 139,
                "Lainausaika": 1619432853000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619432998000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:02:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:25",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 140,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 140,
                "Lainausaika": 1619432913000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619433256000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:05:42",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:42",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 890
            }
        },
        {
            "type": "Feature",
            "id": 141,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 141,
                "Lainausaika": 1619433028000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433899000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:14:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:30",
                "Kulutettu_energia_Wh": 19.800000000000001,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 4550
            }
        },
        {
            "type": "Feature",
            "id": 142,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 142,
                "Lainausaika": 1619433045000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433481000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:07:15",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:15",
                "Kulutettu_energia_Wh": 12.9,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 1740
            }
        },
        {
            "type": "Feature",
            "id": 143,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 143,
                "Lainausaika": 1619433082000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619433316000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:03:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:53",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 690
            }
        },
        {
            "type": "Feature",
            "id": 144,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 144,
                "Lainausaika": 1619433099000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619433457000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:58",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 1110
            }
        },
        {
            "type": "Feature",
            "id": 145,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 145,
                "Lainausaika": 1619433258000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433873000,
                "Palautuksen_koordinaatit": "62.901186, 27.703538",
                "Palautuksen_koordinaatit_X": 27.703538000000002,
                "Palautuksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_kesto": "0:10:15",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:15",
                "Kulutettu_energia_Wh": 26.5,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2550
            }
        },
        {
            "type": "Feature",
            "id": 146,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 146,
                "Lainausaika": 1619433352000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619434428000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:17:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:56",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.5,
                "Matkan_pituus_m": 2450
            }
        },
        {
            "type": "Feature",
            "id": 147,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 147,
                "Lainausaika": 1619433427000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619434185000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:12:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:37",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 5.7000000000000002,
                "Matkan_pituus_m": 2350
            }
        },
        {
            "type": "Feature",
            "id": 148,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 148,
                "Lainausaika": 1619433491000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433538000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:00:46",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:46",
                "Kulutettu_energia_Wh": 1.3,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 80
            }
        },
        {
            "type": "Feature",
            "id": 149,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 149,
                "Lainausaika": 1619433494000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433678000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:03:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:03",
                "Kulutettu_energia_Wh": 6.4000000000000004,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 760
            }
        },
        {
            "type": "Feature",
            "id": 150,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 150,
                "Lainausaika": 1619433558000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433898000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:34",
                "Keskeytyksen_kesto": "0:00:05",
                "Kokonaiskesto": "0:05:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 151,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 151,
                "Lainausaika": 1619433559000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619433884000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:05:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:25",
                "Kulutettu_energia_Wh": 16.5,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 1460
            }
        },
        {
            "type": "Feature",
            "id": 152,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 152,
                "Lainausaika": 1619433627000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619434717000,
                "Palautuksen_koordinaatit": "62.867176, 27.646607",
                "Palautuksen_koordinaatit_X": 27.646606999999999,
                "Palautuksen_koordinaatit_Y": 62.867176000000001,
                "Lainauksen_kesto": "0:18:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:18:10",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 3900
            }
        },
        {
            "type": "Feature",
            "id": 153,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.710705000000075,
                    62.880566111000064
                ]
            },
            "properties": {
                "OBJECTID": 153,
                "Lainausaika": 1619433837000,
                "Lainauksen_koordinaatit": "62.8805661111, 27.710705",
                "Lainauksen_koordinaatit_X": 27.710705000000001,
                "Lainauksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619434364000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:08:47",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:47",
                "Kulutettu_energia_Wh": 19.199999999999999,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 2650
            }
        },
        {
            "type": "Feature",
            "id": 154,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 154,
                "Lainausaika": 1619433920000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619434038000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:01:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:58",
                "Kulutettu_energia_Wh": 3.8999999999999999,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 390
            }
        },
        {
            "type": "Feature",
            "id": 155,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 155,
                "Lainausaika": 1619434049000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435161000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:07:49",
                "Keskeytyksen_kesto": "0:10:43",
                "Kokonaiskesto": "0:18:32",
                "Kulutettu_energia_Wh": 13.4,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 860
            }
        },
        {
            "type": "Feature",
            "id": 156,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 156,
                "Lainausaika": 1619434068000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619434821000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:12:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:32",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 890
            }
        },
        {
            "type": "Feature",
            "id": 157,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 157,
                "Lainausaika": 1619434208000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619434580000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:05:26",
                "Keskeytyksen_kesto": "0:00:45",
                "Kokonaiskesto": "0:06:12",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 158,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 158,
                "Lainausaika": 1619434258000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619434602000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:05:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:44",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 2.2999999999999998,
                "Matkan_pituus_m": 1100
            }
        },
        {
            "type": "Feature",
            "id": 159,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 159,
                "Lainausaika": 1619434382000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619434649000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:04:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:26",
                "Kulutettu_energia_Wh": 4.2999999999999998,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 810
            }
        },
        {
            "type": "Feature",
            "id": 160,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 160,
                "Lainausaika": 1619434643000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435606000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:16:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:02",
                "Kulutettu_energia_Wh": 23.600000000000001,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 2490
            }
        },
        {
            "type": "Feature",
            "id": 161,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643550000000062,
                    62.891700000000071
                ]
            },
            "properties": {
                "OBJECTID": 161,
                "Lainausaika": 1619434769000,
                "Lainauksen_koordinaatit": "62.8917, 27.64355",
                "Lainauksen_koordinaatit_X": 27.643550000000001,
                "Lainauksen_koordinaatit_Y": 62.8917,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435149000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:06:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:20",
                "Kulutettu_energia_Wh": 15.699999999999999,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 1320
            }
        },
        {
            "type": "Feature",
            "id": 162,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 162,
                "Lainausaika": 1619434900000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435467000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:09:27",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:27",
                "Kulutettu_energia_Wh": 7.9000000000000004,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1090
            }
        },
        {
            "type": "Feature",
            "id": 163,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.646607000000074,
                    62.867176000000029
                ]
            },
            "properties": {
                "OBJECTID": 163,
                "Lainausaika": 1619434935000,
                "Lainauksen_koordinaatit": "62.867176, 27.646607",
                "Lainauksen_koordinaatit_X": 27.646606999999999,
                "Lainauksen_koordinaatit_Y": 62.867176000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619435924000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:16:29",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:29",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 4250
            }
        },
        {
            "type": "Feature",
            "id": 164,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 164,
                "Lainausaika": 1619434939000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435257000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:05:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:17",
                "Kulutettu_energia_Wh": 6.7999999999999998,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 1590
            }
        },
        {
            "type": "Feature",
            "id": 165,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 165,
                "Lainausaika": 1619434964000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619435124000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:02:39",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:39",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 390
            }
        },
        {
            "type": "Feature",
            "id": 166,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 166,
                "Lainausaika": 1619435030000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435768000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:12:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:17",
                "Kulutettu_energia_Wh": 47.100000000000001,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 3070
            }
        },
        {
            "type": "Feature",
            "id": 167,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.710705000000075,
                    62.880566111000064
                ]
            },
            "properties": {
                "OBJECTID": 167,
                "Lainausaika": 1619435040000,
                "Lainauksen_koordinaatit": "62.8805661111, 27.710705",
                "Lainauksen_koordinaatit_X": 27.710705000000001,
                "Lainauksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435241000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:03:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:20",
                "Kulutettu_energia_Wh": 7.0999999999999996,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 740
            }
        },
        {
            "type": "Feature",
            "id": 168,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 168,
                "Lainausaika": 1619435189000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435273000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:01:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:23",
                "Kulutettu_energia_Wh": 1.3,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 130
            }
        },
        {
            "type": "Feature",
            "id": 169,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 169,
                "Lainausaika": 1619435216000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435659000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:07:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:23",
                "Kulutettu_energia_Wh": 12.699999999999999,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 1960
            }
        },
        {
            "type": "Feature",
            "id": 170,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 170,
                "Lainausaika": 1619435358000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436008000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:10:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:49",
                "Kulutettu_energia_Wh": 19.5,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2550
            }
        },
        {
            "type": "Feature",
            "id": 171,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 171,
                "Lainausaika": 1619435743000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619435869000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:02:06",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:06",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 172,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 172,
                "Lainausaika": 1619435751000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436174000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:07:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:03",
                "Kulutettu_energia_Wh": 14,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 1730
            }
        },
        {
            "type": "Feature",
            "id": 173,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 173,
                "Lainausaika": 1619435909000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436428000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:08:38",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:38",
                "Kulutettu_energia_Wh": 17.5,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 2690
            }
        },
        {
            "type": "Feature",
            "id": 174,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 174,
                "Lainausaika": 1619435998000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436146000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:02:28",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:28",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 175,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 175,
                "Lainausaika": 1619436159000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436750000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:09:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:51",
                "Kulutettu_energia_Wh": 20.100000000000001,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 2230
            }
        },
        {
            "type": "Feature",
            "id": 176,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 176,
                "Lainausaika": 1619436228000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436259000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:00:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:30",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 177,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 177,
                "Lainausaika": 1619436263000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619436270000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:00:07",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:07",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 178,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 178,
                "Lainausaika": 1619436274000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619436322000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:00:47",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:47",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 179,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 179,
                "Lainausaika": 1619436289000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436925000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:10:35",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:35",
                "Kulutettu_energia_Wh": 13.9,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 3620
            }
        },
        {
            "type": "Feature",
            "id": 180,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 180,
                "Lainausaika": 1619436308000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437553000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:20:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:44",
                "Kulutettu_energia_Wh": 46.100000000000001,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 6910
            }
        },
        {
            "type": "Feature",
            "id": 181,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 181,
                "Lainausaika": 1619436335000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437006000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:11:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:10",
                "Kulutettu_energia_Wh": 21,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 3130
            }
        },
        {
            "type": "Feature",
            "id": 182,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 182,
                "Lainausaika": 1619436351000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436952000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:10:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:01",
                "Kulutettu_energia_Wh": 22.800000000000001,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 2950
            }
        },
        {
            "type": "Feature",
            "id": 183,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 183,
                "Lainausaika": 1619436421000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619436650000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:03:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:49",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 130
            }
        },
        {
            "type": "Feature",
            "id": 184,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 184,
                "Lainausaika": 1619436515000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437190000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:11:15",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:15",
                "Kulutettu_energia_Wh": 23.5,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2560
            }
        },
        {
            "type": "Feature",
            "id": 185,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 185,
                "Lainausaika": 1619436549000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436991000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:07:21",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:21",
                "Kulutettu_energia_Wh": 7.7999999999999998,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 1550
            }
        },
        {
            "type": "Feature",
            "id": 186,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 186,
                "Lainausaika": 1619436723000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437553000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:13:50",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:50",
                "Kulutettu_energia_Wh": 13.4,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 4480
            }
        },
        {
            "type": "Feature",
            "id": 187,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 187,
                "Lainausaika": 1619436728000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619436792000,
                "Palautuksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Palautuksen_koordinaatit_X": 27.614411111100001,
                "Palautuksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_kesto": "0:01:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:03",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 188,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 188,
                "Lainausaika": 1619436850000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437179000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:28",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:28",
                "Kulutettu_energia_Wh": 14.9,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 940
            }
        },
        {
            "type": "Feature",
            "id": 189,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 189,
                "Lainausaika": 1619436854000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437710000,
                "Palautuksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Palautuksen_koordinaatit_X": 27.614411111100001,
                "Palautuksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_kesto": "0:14:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:16",
                "Kulutettu_energia_Wh": 22.600000000000001,
                "Korjattu_energia_Wh": 2.8999999999999999,
                "Matkan_pituus_m": 4120
            }
        },
        {
            "type": "Feature",
            "id": 190,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 190,
                "Lainausaika": 1619437014000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437269000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:04:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:14",
                "Kulutettu_energia_Wh": 3.2000000000000002,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 690
            }
        },
        {
            "type": "Feature",
            "id": 191,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 191,
                "Lainausaika": 1619437071000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437560000,
                "Palautuksen_koordinaatit": "62.901186, 27.703538",
                "Palautuksen_koordinaatit_X": 27.703538000000002,
                "Palautuksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_kesto": "0:08:08",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:08",
                "Kulutettu_energia_Wh": 16.600000000000001,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 1950
            }
        },
        {
            "type": "Feature",
            "id": 192,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 192,
                "Lainausaika": 1619437284000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437685000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:06:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:41",
                "Kulutettu_energia_Wh": 6.0999999999999996,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1130
            }
        },
        {
            "type": "Feature",
            "id": 193,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 193,
                "Lainausaika": 1619437456000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438271000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:13:34",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:34",
                "Kulutettu_energia_Wh": 27.399999999999999,
                "Korjattu_energia_Wh": 3,
                "Matkan_pituus_m": 3560
            }
        },
        {
            "type": "Feature",
            "id": 194,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 194,
                "Lainausaika": 1619437589000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619438513000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:15:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:24",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2620
            }
        },
        {
            "type": "Feature",
            "id": 195,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 195,
                "Lainausaika": 1619437718000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437828000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:01:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:49",
                "Kulutettu_energia_Wh": 2.7000000000000002,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 270
            }
        },
        {
            "type": "Feature",
            "id": 196,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 196,
                "Lainausaika": 1619437747000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438257000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:08:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:30",
                "Kulutettu_energia_Wh": 11.800000000000001,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 1860
            }
        },
        {
            "type": "Feature",
            "id": 197,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 197,
                "Lainausaika": 1619437769000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438149000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:06:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:20",
                "Kulutettu_energia_Wh": 17.100000000000001,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 1950
            }
        },
        {
            "type": "Feature",
            "id": 198,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 198,
                "Lainausaika": 1619437807000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438398000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:09:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:51",
                "Kulutettu_energia_Wh": 11.6,
                "Korjattu_energia_Wh": 4.9000000000000004,
                "Matkan_pituus_m": 1840
            }
        },
        {
            "type": "Feature",
            "id": 199,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 199,
                "Lainausaika": 1619437871000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619437915000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:00:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:43",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 10
            }
        },
        {
            "type": "Feature",
            "id": 200,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 200,
                "Lainausaika": 1619437872000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438152000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:04:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 201,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 201,
                "Lainausaika": 1619437873000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438620000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:12:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:26",
                "Kulutettu_energia_Wh": 49,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 2390
            }
        },
        {
            "type": "Feature",
            "id": 202,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 202,
                "Lainausaika": 1619437924000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619437963000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:00:38",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:38",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 30
            }
        },
        {
            "type": "Feature",
            "id": 203,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 203,
                "Lainausaika": 1619437930000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438232000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:05:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:02",
                "Kulutettu_energia_Wh": 12.199999999999999,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1450
            }
        },
        {
            "type": "Feature",
            "id": 204,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 204,
                "Lainausaika": 1619437971000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438692000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:12:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:01",
                "Kulutettu_energia_Wh": 21.600000000000001,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 3670
            }
        },
        {
            "type": "Feature",
            "id": 205,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 205,
                "Lainausaika": 1619437980000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438350000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:06:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:09",
                "Kulutettu_energia_Wh": 5,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 1030
            }
        },
        {
            "type": "Feature",
            "id": 206,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 206,
                "Lainausaika": 1619438023000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438444000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:07:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:01",
                "Kulutettu_energia_Wh": 25.600000000000001,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1430
            }
        },
        {
            "type": "Feature",
            "id": 207,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 207,
                "Lainausaika": 1619438047000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438254000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:03:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:26",
                "Kulutettu_energia_Wh": 7.2000000000000002,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 670
            }
        },
        {
            "type": "Feature",
            "id": 208,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 208,
                "Lainausaika": 1619438087000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438553000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:07:45",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:45",
                "Kulutettu_energia_Wh": 7,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 1560
            }
        },
        {
            "type": "Feature",
            "id": 209,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 209,
                "Lainausaika": 1619438096000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619438138000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:00:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:41",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 210,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 210,
                "Lainausaika": 1619438101000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619438426000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:24",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1120
            }
        },
        {
            "type": "Feature",
            "id": 211,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 211,
                "Lainausaika": 1619438143000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438648000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:08:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:25",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 2270
            }
        },
        {
            "type": "Feature",
            "id": 212,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 212,
                "Lainausaika": 1619438166000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619438471000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:05:05",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:05",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 1080
            }
        },
        {
            "type": "Feature",
            "id": 213,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 213,
                "Lainausaika": 1619438204000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438934000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:12:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:10",
                "Kulutettu_energia_Wh": 12.199999999999999,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 2480
            }
        },
        {
            "type": "Feature",
            "id": 214,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 214,
                "Lainausaika": 1619438214000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438488000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:34",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:34",
                "Kulutettu_energia_Wh": 4.0999999999999996,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 910
            }
        },
        {
            "type": "Feature",
            "id": 215,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 215,
                "Lainausaika": 1619438216000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438472000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:16",
                "Kulutettu_energia_Wh": 3.8999999999999999,
                "Korjattu_energia_Wh": 3.5,
                "Matkan_pituus_m": 910
            }
        },
        {
            "type": "Feature",
            "id": 216,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 216,
                "Lainausaika": 1619438222000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438505000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:43",
                "Kulutettu_energia_Wh": 6.4000000000000004,
                "Korjattu_energia_Wh": 4,
                "Matkan_pituus_m": 940
            }
        },
        {
            "type": "Feature",
            "id": 217,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 217,
                "Lainausaika": 1619438250000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438997000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:12:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:26",
                "Kulutettu_energia_Wh": 7.0999999999999996,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 2550
            }
        },
        {
            "type": "Feature",
            "id": 218,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 218,
                "Lainausaika": 1619438276000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439512000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:20:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:36",
                "Kulutettu_energia_Wh": 42.899999999999999,
                "Korjattu_energia_Wh": 5,
                "Matkan_pituus_m": 6500
            }
        },
        {
            "type": "Feature",
            "id": 219,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 219,
                "Lainausaika": 1619438329000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439145000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:13:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:36",
                "Kulutettu_energia_Wh": 23.5,
                "Korjattu_energia_Wh": 1.5,
                "Matkan_pituus_m": 4490
            }
        },
        {
            "type": "Feature",
            "id": 220,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 220,
                "Lainausaika": 1619438605000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439285000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:11:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:19",
                "Kulutettu_energia_Wh": 25.600000000000001,
                "Korjattu_energia_Wh": 2.7000000000000002,
                "Matkan_pituus_m": 3910
            }
        },
        {
            "type": "Feature",
            "id": 221,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 221,
                "Lainausaika": 1619438608000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438721000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:01:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:53",
                "Kulutettu_energia_Wh": 2.8999999999999999,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 320
            }
        },
        {
            "type": "Feature",
            "id": 222,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 222,
                "Lainausaika": 1619438686000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619439190000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:08:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:24",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1400
            }
        },
        {
            "type": "Feature",
            "id": 223,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657027000000028,
                    62.83960600000006
                ]
            },
            "properties": {
                "OBJECTID": 223,
                "Lainausaika": 1619438711000,
                "Lainauksen_koordinaatit": "62.839606, 27.657027",
                "Lainauksen_koordinaatit_X": 27.657026999999999,
                "Lainauksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619438887000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:02:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:56",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 224,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 224,
                "Lainausaika": 1619438757000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439864000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:18:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:18:26",
                "Kulutettu_energia_Wh": 40.600000000000001,
                "Korjattu_energia_Wh": 3.2999999999999998,
                "Matkan_pituus_m": 6170
            }
        },
        {
            "type": "Feature",
            "id": 225,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 225,
                "Lainausaika": 1619438843000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439218000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:06:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:14",
                "Kulutettu_energia_Wh": 6.0999999999999996,
                "Korjattu_energia_Wh": 3.1000000000000001,
                "Matkan_pituus_m": 1390
            }
        },
        {
            "type": "Feature",
            "id": 226,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 226,
                "Lainausaika": 1619438848000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439108000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:04:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:20",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 650
            }
        },
        {
            "type": "Feature",
            "id": 227,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 227,
                "Lainausaika": 1619438860000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439224000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:06:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:03",
                "Kulutettu_energia_Wh": 4.7999999999999998,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 1380
            }
        },
        {
            "type": "Feature",
            "id": 228,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 228,
                "Lainausaika": 1619438979000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619439510000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:08:50",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:50",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1020
            }
        },
        {
            "type": "Feature",
            "id": 229,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 229,
                "Lainausaika": 1619439032000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619439461000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:07:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:09",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1020
            }
        },
        {
            "type": "Feature",
            "id": 230,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 230,
                "Lainausaika": 1619439153000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440209000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:17:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:36",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 231,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 231,
                "Lainausaika": 1619439183000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439955000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:12:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:51",
                "Kulutettu_energia_Wh": 30.899999999999999,
                "Korjattu_energia_Wh": 4,
                "Matkan_pituus_m": 4100
            }
        },
        {
            "type": "Feature",
            "id": 232,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 232,
                "Lainausaika": 1619439244000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439547000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:03",
                "Kulutettu_energia_Wh": 3.2999999999999998,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 1140
            }
        },
        {
            "type": "Feature",
            "id": 233,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679038889000026,
                    62.898906111000031
                ]
            },
            "properties": {
                "OBJECTID": 233,
                "Lainausaika": 1619439301000,
                "Lainauksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Lainauksen_koordinaatit_X": 27.679038888899999,
                "Lainauksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440210000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:15:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:09",
                "Kulutettu_energia_Wh": 34.799999999999997,
                "Korjattu_energia_Wh": 5.5999999999999996,
                "Matkan_pituus_m": 3390
            }
        },
        {
            "type": "Feature",
            "id": 234,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 234,
                "Lainausaika": 1619439308000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619439493000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:03:05",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:05",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 440
            }
        },
        {
            "type": "Feature",
            "id": 235,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 235,
                "Lainausaika": 1619439411000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439724000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:05:13",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:13",
                "Kulutettu_energia_Wh": 5.4000000000000004,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 1450
            }
        },
        {
            "type": "Feature",
            "id": 236,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 236,
                "Lainausaika": 1619439437000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619439874000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:07:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:17",
                "Kulutettu_energia_Wh": 14.9,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 1980
            }
        },
        {
            "type": "Feature",
            "id": 237,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 237,
                "Lainausaika": 1619439588000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440298000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:11:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:49",
                "Kulutettu_energia_Wh": 19.100000000000001,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 2060
            }
        },
        {
            "type": "Feature",
            "id": 238,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 238,
                "Lainausaika": 1619439615000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440282000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:11:07",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:07",
                "Kulutettu_energia_Wh": 20.399999999999999,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 2080
            }
        },
        {
            "type": "Feature",
            "id": 239,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 239,
                "Lainausaika": 1619439629000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440266000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:10:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:37",
                "Kulutettu_energia_Wh": 30,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 2290
            }
        },
        {
            "type": "Feature",
            "id": 240,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 240,
                "Lainausaika": 1619439637000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440350000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:11:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:53",
                "Kulutettu_energia_Wh": 26.100000000000001,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 2250
            }
        },
        {
            "type": "Feature",
            "id": 241,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 241,
                "Lainausaika": 1619439656000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440265000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:10:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:09",
                "Kulutettu_energia_Wh": 26,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 2230
            }
        },
        {
            "type": "Feature",
            "id": 242,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 242,
                "Lainausaika": 1619439666000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440211000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:09:04",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:04",
                "Kulutettu_energia_Wh": 19,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1150
            }
        },
        {
            "type": "Feature",
            "id": 243,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 243,
                "Lainausaika": 1619439679000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440050000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:06:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:10",
                "Kulutettu_energia_Wh": 18.100000000000001,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1140
            }
        },
        {
            "type": "Feature",
            "id": 244,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 244,
                "Lainausaika": 1619439681000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440773000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:18:12",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:18:12",
                "Kulutettu_energia_Wh": 33.799999999999997,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 3580
            }
        },
        {
            "type": "Feature",
            "id": 245,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 245,
                "Lainausaika": 1619439766000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441192000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:23:46",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:23:46",
                "Kulutettu_energia_Wh": 48,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 7610
            }
        },
        {
            "type": "Feature",
            "id": 246,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 246,
                "Lainausaika": 1619439917000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440353000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:07:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:16",
                "Kulutettu_energia_Wh": 5.7999999999999998,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1720
            }
        },
        {
            "type": "Feature",
            "id": 247,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 247,
                "Lainausaika": 1619440086000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440697000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:10:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:10",
                "Kulutettu_energia_Wh": 30.600000000000001,
                "Korjattu_energia_Wh": 2.5,
                "Matkan_pituus_m": 2620
            }
        },
        {
            "type": "Feature",
            "id": 248,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.676918800000067,
                    62.895935800000075
                ]
            },
            "properties": {
                "OBJECTID": 248,
                "Lainausaika": 1619440114000,
                "Lainauksen_koordinaatit": "62.8959358, 27.6769188",
                "Lainauksen_koordinaatit_X": 27.676918799999999,
                "Lainauksen_koordinaatit_Y": 62.895935799999997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440820000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:11:46",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:46",
                "Kulutettu_energia_Wh": 23.300000000000001,
                "Korjattu_energia_Wh": 5.5,
                "Matkan_pituus_m": 3930
            }
        },
        {
            "type": "Feature",
            "id": 249,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 249,
                "Lainausaika": 1619440151000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619440722000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:09:31",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:31",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1090
            }
        },
        {
            "type": "Feature",
            "id": 250,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 250,
                "Lainausaika": 1619440261000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619462643000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "6:13:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "6:13:01",
                "Kulutettu_energia_Wh": 0.40000000000000002,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 30
            }
        },
        {
            "type": "Feature",
            "id": 251,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 251,
                "Lainausaika": 1619440304000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440672000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:05:38",
                "Keskeytyksen_kesto": "0:00:29",
                "Kokonaiskesto": "0:06:08",
                "Kulutettu_energia_Wh": 6.7999999999999998,
                "Korjattu_energia_Wh": 2.7999999999999998,
                "Matkan_pituus_m": 1720
            }
        },
        {
            "type": "Feature",
            "id": 252,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 252,
                "Lainausaika": 1619440421000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619440853000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:07:12",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:12",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 1990
            }
        },
        {
            "type": "Feature",
            "id": 253,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 253,
                "Lainausaika": 1619440583000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441321000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:12:18",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:18",
                "Kulutettu_energia_Wh": 31.5,
                "Korjattu_energia_Wh": 2.2999999999999998,
                "Matkan_pituus_m": 3910
            }
        },
        {
            "type": "Feature",
            "id": 254,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657891000000063,
                    62.874105000000043
                ]
            },
            "properties": {
                "OBJECTID": 254,
                "Lainausaika": 1619440583000,
                "Lainauksen_koordinaatit": "62.874105, 27.657891",
                "Lainauksen_koordinaatit_X": 27.657890999999999,
                "Lainauksen_koordinaatit_Y": 62.874105,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619440823000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:03:59",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:59",
                "Kulutettu_energia_Wh": 10.5,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1110
            }
        },
        {
            "type": "Feature",
            "id": 255,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 255,
                "Lainausaika": 1619440650000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441114000,
                "Palautuksen_koordinaatit": "62.8917, 27.64355",
                "Palautuksen_koordinaatit_X": 27.643550000000001,
                "Palautuksen_koordinaatit_Y": 62.8917,
                "Lainauksen_kesto": "0:07:39",
                "Keskeytyksen_kesto": "0:00:05",
                "Kokonaiskesto": "0:07:44",
                "Kulutettu_energia_Wh": 7.9000000000000004,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1560
            }
        },
        {
            "type": "Feature",
            "id": 256,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 256,
                "Lainausaika": 1619440724000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441167000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:07:22",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:22",
                "Kulutettu_energia_Wh": 7.2999999999999998,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 2120
            }
        },
        {
            "type": "Feature",
            "id": 257,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 257,
                "Lainausaika": 1619440771000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441104000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:32",
                "Kulutettu_energia_Wh": 10.1,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 1440
            }
        },
        {
            "type": "Feature",
            "id": 258,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 258,
                "Lainausaika": 1619440787000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441117000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:29",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:29",
                "Kulutettu_energia_Wh": 17.600000000000001,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1530
            }
        },
        {
            "type": "Feature",
            "id": 259,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.696278000000063,
                    62.886870000000044
                ]
            },
            "properties": {
                "OBJECTID": 259,
                "Lainausaika": 1619440821000,
                "Lainauksen_koordinaatit": "62.88687, 27.696278",
                "Lainauksen_koordinaatit_X": 27.696278,
                "Lainauksen_koordinaatit_Y": 62.886870000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441215000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:06:34",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:34",
                "Kulutettu_energia_Wh": 21.899999999999999,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1610
            }
        },
        {
            "type": "Feature",
            "id": 260,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 260,
                "Lainausaika": 1619440825000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442045000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:20:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:19",
                "Kulutettu_energia_Wh": 24.100000000000001,
                "Korjattu_energia_Wh": 2.1000000000000001,
                "Matkan_pituus_m": 6480
            }
        },
        {
            "type": "Feature",
            "id": 261,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 261,
                "Lainausaika": 1619440872000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441888000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:16:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:56",
                "Kulutettu_energia_Wh": 22,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 4340
            }
        },
        {
            "type": "Feature",
            "id": 262,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 262,
                "Lainausaika": 1619440873000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442043000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:19:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:19:30",
                "Kulutettu_energia_Wh": 26.5,
                "Korjattu_energia_Wh": 2.8999999999999999,
                "Matkan_pituus_m": 6490
            }
        },
        {
            "type": "Feature",
            "id": 263,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 263,
                "Lainausaika": 1619440880000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441368000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:08:08",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:08",
                "Kulutettu_energia_Wh": 17.600000000000001,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 1870
            }
        },
        {
            "type": "Feature",
            "id": 264,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 264,
                "Lainausaika": 1619440898000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441215000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:05:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:17",
                "Kulutettu_energia_Wh": 13.699999999999999,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 1040
            }
        },
        {
            "type": "Feature",
            "id": 265,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 265,
                "Lainausaika": 1619440956000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441479000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:08:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:43",
                "Kulutettu_energia_Wh": 16.300000000000001,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2050
            }
        },
        {
            "type": "Feature",
            "id": 266,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.696278000000063,
                    62.886870000000044
                ]
            },
            "properties": {
                "OBJECTID": 266,
                "Lainausaika": 1619441049000,
                "Lainauksen_koordinaatit": "62.88687, 27.696278",
                "Lainauksen_koordinaatit_X": 27.696278,
                "Lainauksen_koordinaatit_Y": 62.886870000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442129000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:18:00",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:18:00",
                "Kulutettu_energia_Wh": 33.299999999999997,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 4380
            }
        },
        {
            "type": "Feature",
            "id": 267,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 267,
                "Lainausaika": 1619441144000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441464000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:05:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:20",
                "Kulutettu_energia_Wh": 6.5,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 1460
            }
        },
        {
            "type": "Feature",
            "id": 268,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 268,
                "Lainausaika": 1619441170000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619441519000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:05:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:49",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 1060
            }
        },
        {
            "type": "Feature",
            "id": 269,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 269,
                "Lainausaika": 1619441225000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441848000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:10:22",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:22",
                "Kulutettu_energia_Wh": 24.100000000000001,
                "Korjattu_energia_Wh": 2.7999999999999998,
                "Matkan_pituus_m": 3080
            }
        },
        {
            "type": "Feature",
            "id": 270,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 270,
                "Lainausaika": 1619441256000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619441881000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:10:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:25",
                "Kulutettu_energia_Wh": 33.5,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2360
            }
        },
        {
            "type": "Feature",
            "id": 271,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 271,
                "Lainausaika": 1619441372000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442115000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:12:22",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:22",
                "Kulutettu_energia_Wh": 28,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 3630
            }
        },
        {
            "type": "Feature",
            "id": 272,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657027000000028,
                    62.83960600000006
                ]
            },
            "properties": {
                "OBJECTID": 272,
                "Lainausaika": 1619441555000,
                "Lainauksen_koordinaatit": "62.839606, 27.657027",
                "Lainauksen_koordinaatit_X": 27.657026999999999,
                "Lainauksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442225000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:11:10",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:10",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 2490
            }
        },
        {
            "type": "Feature",
            "id": 273,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 273,
                "Lainausaika": 1619441569000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442064000,
                "Palautuksen_koordinaatit": "62.88687, 27.696278",
                "Palautuksen_koordinaatit_X": 27.696278,
                "Palautuksen_koordinaatit_Y": 62.886870000000002,
                "Lainauksen_kesto": "0:08:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:14",
                "Kulutettu_energia_Wh": 9,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 2370
            }
        },
        {
            "type": "Feature",
            "id": 274,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 274,
                "Lainausaika": 1619441576000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442108000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:08:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:51",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 1080
            }
        },
        {
            "type": "Feature",
            "id": 275,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 275,
                "Lainausaika": 1619441599000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442330000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:12:11",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:11",
                "Kulutettu_energia_Wh": 31.300000000000001,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 2780
            }
        },
        {
            "type": "Feature",
            "id": 276,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 276,
                "Lainausaika": 1619441611000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442056000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:07:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:24",
                "Kulutettu_energia_Wh": 16.899999999999999,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1530
            }
        },
        {
            "type": "Feature",
            "id": 277,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 277,
                "Lainausaika": 1619441638000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442278000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:10:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 3170
            }
        },
        {
            "type": "Feature",
            "id": 278,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 278,
                "Lainausaika": 1619441889000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442134000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:04:04",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:04",
                "Kulutettu_energia_Wh": 15.5,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 900
            }
        },
        {
            "type": "Feature",
            "id": 279,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 279,
                "Lainausaika": 1619441925000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442609000,
                "Palautuksen_koordinaatit": "62.901186, 27.703538",
                "Palautuksen_koordinaatit_X": 27.703538000000002,
                "Palautuksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_kesto": "0:11:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:23",
                "Kulutettu_energia_Wh": 30,
                "Korjattu_energia_Wh": 3.2999999999999998,
                "Matkan_pituus_m": 2870
            }
        },
        {
            "type": "Feature",
            "id": 280,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 280,
                "Lainausaika": 1619441931000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442033000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:01:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:41",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 170
            }
        },
        {
            "type": "Feature",
            "id": 281,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 281,
                "Lainausaika": 1619442059000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442884000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:13:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:44",
                "Kulutettu_energia_Wh": 39.200000000000003,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 3190
            }
        },
        {
            "type": "Feature",
            "id": 282,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 282,
                "Lainausaika": 1619442128000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442207000,
                "Palautuksen_koordinaatit": "62.838815, 27.6440138889",
                "Palautuksen_koordinaatit_X": 27.644013888900002,
                "Palautuksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_kesto": "0:01:18",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:18",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 283,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 283,
                "Lainausaika": 1619442148000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442622000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:07:54",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:54",
                "Kulutettu_energia_Wh": 17,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 1540
            }
        },
        {
            "type": "Feature",
            "id": 284,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 284,
                "Lainausaika": 1619442177000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442514000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:05:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:37",
                "Kulutettu_energia_Wh": 7.5,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 1400
            }
        },
        {
            "type": "Feature",
            "id": 285,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 285,
                "Lainausaika": 1619442235000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442511000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:04:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:36",
                "Kulutettu_energia_Wh": 4.2999999999999998,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 680
            }
        },
        {
            "type": "Feature",
            "id": 286,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.64233900000005,
                    62.855023000000074
                ]
            },
            "properties": {
                "OBJECTID": 286,
                "Lainausaika": 1619442272000,
                "Lainauksen_koordinaatit": "62.855023, 27.642339",
                "Lainauksen_koordinaatit_X": 27.642339,
                "Lainauksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443006000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:12:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:14",
                "Kulutettu_energia_Wh": 25.699999999999999,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 3710
            }
        },
        {
            "type": "Feature",
            "id": 287,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 287,
                "Lainausaika": 1619442272000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619443032000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:12:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2250
            }
        },
        {
            "type": "Feature",
            "id": 288,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 288,
                "Lainausaika": 1619442341000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443240000,
                "Palautuksen_koordinaatit": "62.891995, 27.63695",
                "Palautuksen_koordinaatit_X": 27.636949999999999,
                "Palautuksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_kesto": "0:14:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:58",
                "Kulutettu_energia_Wh": 29.399999999999999,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 3640
            }
        },
        {
            "type": "Feature",
            "id": 289,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 289,
                "Lainausaika": 1619442391000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619443275000,
                "Palautuksen_koordinaatit": "62.88687, 27.696278",
                "Palautuksen_koordinaatit_X": 27.696278,
                "Palautuksen_koordinaatit_Y": 62.886870000000002,
                "Lainauksen_kesto": "0:14:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:44",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 1640
            }
        },
        {
            "type": "Feature",
            "id": 290,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 290,
                "Lainausaika": 1619442612000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619442783000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:02:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:51",
                "Kulutettu_energia_Wh": 11.9,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 440
            }
        },
        {
            "type": "Feature",
            "id": 291,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 291,
                "Lainausaika": 1619442652000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442862000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:03:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:30",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 70
            }
        },
        {
            "type": "Feature",
            "id": 292,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 292,
                "Lainausaika": 1619442698000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619442882000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:03:04",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:04",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 50
            }
        },
        {
            "type": "Feature",
            "id": 293,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657027000000028,
                    62.83960600000006
                ]
            },
            "properties": {
                "OBJECTID": 293,
                "Lainausaika": 1619442720000,
                "Lainauksen_koordinaatit": "62.839606, 27.657027",
                "Lainauksen_koordinaatit_X": 27.657026999999999,
                "Lainauksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619445842000,
                "Palautuksen_koordinaatit": "62.867176, 27.646607",
                "Palautuksen_koordinaatit_X": 27.646606999999999,
                "Palautuksen_koordinaatit_Y": 62.867176000000001,
                "Lainauksen_kesto": "0:52:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:52:01",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 3.2000000000000002,
                "Matkan_pituus_m": 4830
            }
        },
        {
            "type": "Feature",
            "id": 294,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 294,
                "Lainausaika": 1619442770000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619443562000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:13:12",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:12",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 1970
            }
        },
        {
            "type": "Feature",
            "id": 295,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 295,
                "Lainausaika": 1619442909000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443362000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:07:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:32",
                "Kulutettu_energia_Wh": 32.899999999999999,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1420
            }
        },
        {
            "type": "Feature",
            "id": 296,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 296,
                "Lainausaika": 1619442942000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444552000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:26:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:26:49",
                "Kulutettu_energia_Wh": 35.700000000000003,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 9450
            }
        },
        {
            "type": "Feature",
            "id": 297,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 297,
                "Lainausaika": 1619443005000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444157000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:19:11",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:19:11",
                "Kulutettu_energia_Wh": 33.299999999999997,
                "Korjattu_energia_Wh": 2.1000000000000001,
                "Matkan_pituus_m": 3430
            }
        },
        {
            "type": "Feature",
            "id": 298,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 298,
                "Lainausaika": 1619443023000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444273000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:20:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:49",
                "Kulutettu_energia_Wh": 52.799999999999997,
                "Korjattu_energia_Wh": 4.9000000000000004,
                "Matkan_pituus_m": 6760
            }
        },
        {
            "type": "Feature",
            "id": 299,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.64233900000005,
                    62.855023000000074
                ]
            },
            "properties": {
                "OBJECTID": 299,
                "Lainausaika": 1619443052000,
                "Lainauksen_koordinaatit": "62.855023, 27.642339",
                "Lainauksen_koordinaatit_X": 27.642339,
                "Lainauksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444073000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:17:00",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:00",
                "Kulutettu_energia_Wh": 45.899999999999999,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 4870
            }
        },
        {
            "type": "Feature",
            "id": 300,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 300,
                "Lainausaika": 1619443059000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443827000,
                "Palautuksen_koordinaatit": "62.8960719444, 27.643175",
                "Palautuksen_koordinaatit_X": 27.643174999999999,
                "Palautuksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_kesto": "0:12:48",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:48",
                "Kulutettu_energia_Wh": 25.100000000000001,
                "Korjattu_energia_Wh": 2.1000000000000001,
                "Matkan_pituus_m": 3190
            }
        },
        {
            "type": "Feature",
            "id": 301,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 301,
                "Lainausaika": 1619443128000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443595000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:07:47",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:47",
                "Kulutettu_energia_Wh": 28.5,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 1740
            }
        },
        {
            "type": "Feature",
            "id": 302,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 302,
                "Lainausaika": 1619443143000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619443503000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:05:59",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:59",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1200
            }
        },
        {
            "type": "Feature",
            "id": 303,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 303,
                "Lainausaika": 1619443274000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443757000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:08:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:02",
                "Kulutettu_energia_Wh": 17.600000000000001,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 2090
            }
        },
        {
            "type": "Feature",
            "id": 304,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657891000000063,
                    62.874105000000043
                ]
            },
            "properties": {
                "OBJECTID": 304,
                "Lainausaika": 1619443488000,
                "Lainauksen_koordinaatit": "62.874105, 27.657891",
                "Lainauksen_koordinaatit_X": 27.657890999999999,
                "Lainauksen_koordinaatit_Y": 62.874105,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444031000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:09:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:03",
                "Kulutettu_energia_Wh": 20,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 2400
            }
        },
        {
            "type": "Feature",
            "id": 305,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.673423000000071,
                    62.920751000000052
                ]
            },
            "properties": {
                "OBJECTID": 305,
                "Lainausaika": 1619443546000,
                "Lainauksen_koordinaatit": "62.920751, 27.673423",
                "Lainauksen_koordinaatit_X": 27.673423,
                "Lainauksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619443979000,
                "Palautuksen_koordinaatit": "62.908465, 27.6948569444",
                "Palautuksen_koordinaatit_X": 27.694856944400001,
                "Palautuksen_koordinaatit_Y": 62.908465,
                "Lainauksen_kesto": "0:07:13",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:13",
                "Kulutettu_energia_Wh": 18.699999999999999,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 2300
            }
        },
        {
            "type": "Feature",
            "id": 306,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 306,
                "Lainausaika": 1619443559000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444391000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:13:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:52",
                "Kulutettu_energia_Wh": 20.399999999999999,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 4040
            }
        },
        {
            "type": "Feature",
            "id": 307,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 307,
                "Lainausaika": 1619443591000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444518000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:15:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:26",
                "Kulutettu_energia_Wh": 19.199999999999999,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 4090
            }
        },
        {
            "type": "Feature",
            "id": 308,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 308,
                "Lainausaika": 1619443594000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619443635000,
                "Palautuksen_koordinaatit": "62.89435, 27.6653161111",
                "Palautuksen_koordinaatit_X": 27.665316111100001,
                "Palautuksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_kesto": "0:00:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 309,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 309,
                "Lainausaika": 1619443599000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444493000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:14:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:53",
                "Kulutettu_energia_Wh": 27.5,
                "Korjattu_energia_Wh": 3.7999999999999998,
                "Matkan_pituus_m": 3170
            }
        },
        {
            "type": "Feature",
            "id": 310,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634813000000065,
                    62.91940500000004
                ]
            },
            "properties": {
                "OBJECTID": 310,
                "Lainausaika": 1619443620000,
                "Lainauksen_koordinaatit": "62.919405, 27.634813",
                "Lainauksen_koordinaatit_X": 27.634813000000001,
                "Lainauksen_koordinaatit_Y": 62.919404999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444481000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:14:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:20",
                "Kulutettu_energia_Wh": 25.899999999999999,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 4580
            }
        },
        {
            "type": "Feature",
            "id": 311,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.63695000000007,
                    62.891995000000065
                ]
            },
            "properties": {
                "OBJECTID": 311,
                "Lainausaika": 1619443634000,
                "Lainauksen_koordinaatit": "62.891995, 27.63695",
                "Lainauksen_koordinaatit_X": 27.636949999999999,
                "Lainauksen_koordinaatit_Y": 62.891995000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444089000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:07:35",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:35",
                "Kulutettu_energia_Wh": 25.699999999999999,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 1690
            }
        },
        {
            "type": "Feature",
            "id": 312,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 312,
                "Lainausaika": 1619443664000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444500000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:13:55",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:55",
                "Kulutettu_energia_Wh": 24.399999999999999,
                "Korjattu_energia_Wh": 4.2000000000000002,
                "Matkan_pituus_m": 3610
            }
        },
        {
            "type": "Feature",
            "id": 313,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 313,
                "Lainausaika": 1619443691000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444396000,
                "Palautuksen_koordinaatit": "62.874105, 27.657891",
                "Palautuksen_koordinaatit_X": 27.657890999999999,
                "Palautuksen_koordinaatit_Y": 62.874105,
                "Lainauksen_kesto": "0:11:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:44",
                "Kulutettu_energia_Wh": 16.899999999999999,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 4050
            }
        },
        {
            "type": "Feature",
            "id": 314,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.665316111000038,
                    62.894350000000031
                ]
            },
            "properties": {
                "OBJECTID": 314,
                "Lainausaika": 1619443703000,
                "Lainauksen_koordinaatit": "62.89435, 27.6653161111",
                "Lainauksen_koordinaatit_X": 27.665316111100001,
                "Lainauksen_koordinaatit_Y": 62.894350000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619444030000,
                "Palautuksen_koordinaatit": "62.8917, 27.64355",
                "Palautuksen_koordinaatit_X": 27.643550000000001,
                "Palautuksen_koordinaatit_Y": 62.8917,
                "Lainauksen_kesto": "0:05:27",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:27",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 1310
            }
        },
        {
            "type": "Feature",
            "id": 315,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 315,
                "Lainausaika": 1619443736000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619444427000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:11:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:30",
                "Kulutettu_energia_Wh": 22.300000000000001,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 3090
            }
        },
      {
            "type": "Feature",
            "id": 1938,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 1938,
                "Lainausaika": 1619552313000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619552840000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:08:46",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:46",
                "Kulutettu_energia_Wh": 14.9,
                "Korjattu_energia_Wh": 3.1000000000000001,
                "Matkan_pituus_m": 2180
            }
        },
        {
            "type": "Feature",
            "id": 1939,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634712000000036,
                    62.870390000000043
                ]
            },
            "properties": {
                "OBJECTID": 1939,
                "Lainausaika": 1619552379000,
                "Lainauksen_koordinaatit": "62.87039, 27.634712",
                "Lainauksen_koordinaatit_X": 27.634712,
                "Lainauksen_koordinaatit_Y": 62.87039,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619552860000,
                "Palautuksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Palautuksen_koordinaatit_X": 27.614411111100001,
                "Palautuksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_kesto": "0:08:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:01",
                "Kulutettu_energia_Wh": 18.800000000000001,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2280
            }
        },
        {
            "type": "Feature",
            "id": 1940,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.66903700000006,
                    62.88722800000005
                ]
            },
            "properties": {
                "OBJECTID": 1940,
                "Lainausaika": 1619552433000,
                "Lainauksen_koordinaatit": "62.887228, 27.669037",
                "Lainauksen_koordinaatit_X": 27.669036999999999,
                "Lainauksen_koordinaatit_Y": 62.887228,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553068000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:10:34",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:34",
                "Kulutettu_energia_Wh": 30.300000000000001,
                "Korjattu_energia_Wh": 4.2999999999999998,
                "Matkan_pituus_m": 2480
            }
        },
        {
            "type": "Feature",
            "id": 1941,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 1941,
                "Lainausaika": 1619552544000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619552644000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:01:40",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:40",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 10
            }
        },
        {
            "type": "Feature",
            "id": 1942,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 1942,
                "Lainausaika": 1619552640000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553390000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:12:29",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:29",
                "Kulutettu_energia_Wh": 21.800000000000001,
                "Korjattu_energia_Wh": 2.8999999999999999,
                "Matkan_pituus_m": 3670
            }
        },
        {
            "type": "Feature",
            "id": 1943,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 1943,
                "Lainausaika": 1619552703000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553500000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:13:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:17",
                "Kulutettu_energia_Wh": 26.199999999999999,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 4400
            }
        },
        {
            "type": "Feature",
            "id": 1944,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 1944,
                "Lainausaika": 1619552752000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554146000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:23:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:23:14",
                "Kulutettu_energia_Wh": 54.299999999999997,
                "Korjattu_energia_Wh": 3.2000000000000002,
                "Matkan_pituus_m": 6460
            }
        },
        {
            "type": "Feature",
            "id": 1945,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 1945,
                "Lainausaika": 1619552824000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553585000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:12:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:41",
                "Kulutettu_energia_Wh": 23.600000000000001,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 4250
            }
        },
        {
            "type": "Feature",
            "id": 1946,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 1946,
                "Lainausaika": 1619552934000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553217000,
                "Palautuksen_koordinaatit": "62.88638523, 27.66322124",
                "Palautuksen_koordinaatit_X": 27.663221239999999,
                "Palautuksen_koordinaatit_Y": 62.886385230000002,
                "Lainauksen_kesto": "0:04:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:43",
                "Kulutettu_energia_Wh": 9.3000000000000007,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1060
            }
        },
        {
            "type": "Feature",
            "id": 1947,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 1947,
                "Lainausaika": 1619553016000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619553404000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:06:27",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:27",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1230
            }
        },
        {
            "type": "Feature",
            "id": 1948,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 1948,
                "Lainausaika": 1619553150000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553871000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:12:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:01",
                "Kulutettu_energia_Wh": 25.199999999999999,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 3250
            }
        },
        {
            "type": "Feature",
            "id": 1949,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 1949,
                "Lainausaika": 1619553184000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553509000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:05:25",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:25",
                "Kulutettu_energia_Wh": 11.6,
                "Korjattu_energia_Wh": 1.5,
                "Matkan_pituus_m": 1450
            }
        },
        {
            "type": "Feature",
            "id": 1950,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.644013889000064,
                    62.838815000000068
                ]
            },
            "properties": {
                "OBJECTID": 1950,
                "Lainausaika": 1619553261000,
                "Lainauksen_koordinaatit": "62.838815, 27.6440138889",
                "Lainauksen_koordinaatit_X": 27.644013888900002,
                "Lainauksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554405000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:19:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:19:03",
                "Kulutettu_energia_Wh": 40.899999999999999,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 5490
            }
        },
        {
            "type": "Feature",
            "id": 1951,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 1951,
                "Lainausaika": 1619553268000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554082000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:13:33",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:33",
                "Kulutettu_energia_Wh": 19.800000000000001,
                "Korjattu_energia_Wh": 2.7000000000000002,
                "Matkan_pituus_m": 3180
            }
        },
        {
            "type": "Feature",
            "id": 1952,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 1952,
                "Lainausaika": 1619553409000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554084000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:11:15",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:15",
                "Kulutettu_energia_Wh": 31,
                "Korjattu_energia_Wh": 2.3999999999999999,
                "Matkan_pituus_m": 2240
            }
        },
        {
            "type": "Feature",
            "id": 1953,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634712000000036,
                    62.870390000000043
                ]
            },
            "properties": {
                "OBJECTID": 1953,
                "Lainausaika": 1619553412000,
                "Lainauksen_koordinaatit": "62.87039, 27.634712",
                "Lainauksen_koordinaatit_X": 27.634712,
                "Lainauksen_koordinaatit_Y": 62.87039,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554425000,
                "Palautuksen_koordinaatit": "62.838815, 27.6440138889",
                "Palautuksen_koordinaatit_X": 27.644013888900002,
                "Palautuksen_koordinaatit_Y": 62.838814999999997,
                "Lainauksen_kesto": "0:16:53",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:53",
                "Kulutettu_energia_Wh": 32.200000000000003,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 4260
            }
        },
        {
            "type": "Feature",
            "id": 1954,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 1954,
                "Lainausaika": 1619553449000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553798000,
                "Palautuksen_koordinaatit": "62.887228, 27.669037",
                "Palautuksen_koordinaatit_X": 27.669036999999999,
                "Palautuksen_koordinaatit_Y": 62.887228,
                "Lainauksen_kesto": "0:05:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:49",
                "Kulutettu_energia_Wh": 19.899999999999999,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1460
            }
        },
        {
            "type": "Feature",
            "id": 1955,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 1955,
                "Lainausaika": 1619553502000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553667000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:02:44",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:02:44",
                "Kulutettu_energia_Wh": 2,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 700
            }
        },
        {
            "type": "Feature",
            "id": 1956,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 1956,
                "Lainausaika": 1619553574000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553651000,
                "Palautuksen_koordinaatit": "62.8928922, 27.6664179",
                "Palautuksen_koordinaatit_X": 27.666417899999999,
                "Palautuksen_koordinaatit_Y": 62.892892199999999,
                "Lainauksen_kesto": "0:01:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:16",
                "Kulutettu_energia_Wh": 0.40000000000000002,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 30
            }
        },
        {
            "type": "Feature",
            "id": 1957,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 1957,
                "Lainausaika": 1619553592000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554129000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:08:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:56",
                "Kulutettu_energia_Wh": 8.4000000000000004,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 1300
            }
        },
        {
            "type": "Feature",
            "id": 1958,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634712000000036,
                    62.870390000000043
                ]
            },
            "properties": {
                "OBJECTID": 1958,
                "Lainausaika": 1619553611000,
                "Lainauksen_koordinaatit": "62.87039, 27.634712",
                "Lainauksen_koordinaatit_X": 27.634712,
                "Lainauksen_koordinaatit_Y": 62.87039,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554563000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:15:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:52",
                "Kulutettu_energia_Wh": 35.399999999999999,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 4630
            }
        },
        {
            "type": "Feature",
            "id": 1959,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.647293330000025,
                    62.893458330000044
                ]
            },
            "properties": {
                "OBJECTID": 1959,
                "Lainausaika": 1619553714000,
                "Lainauksen_koordinaatit": "62.89345833, 27.64729333",
                "Lainauksen_koordinaatit_X": 27.64729333,
                "Lainauksen_koordinaatit_Y": 62.893458330000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554257000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:09:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:02",
                "Kulutettu_energia_Wh": 22.899999999999999,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 1590
            }
        },
        {
            "type": "Feature",
            "id": 1960,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 1960,
                "Lainausaika": 1619553768000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553774000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:00:06",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:06",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 1961,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1961,
                "Lainausaika": 1619553822000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554365000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:09:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:02",
                "Kulutettu_energia_Wh": 2.6000000000000001,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 180
            }
        },
        {
            "type": "Feature",
            "id": 1962,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 1962,
                "Lainausaika": 1619553833000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554655000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:13:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:41",
                "Kulutettu_energia_Wh": 38.899999999999999,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 4460
            }
        },
        {
            "type": "Feature",
            "id": 1963,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1963,
                "Lainausaika": 1619553864000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554387000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:08:42",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:42",
                "Kulutettu_energia_Wh": 29.600000000000001,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 4580
            }
        },
        {
            "type": "Feature",
            "id": 1964,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 1964,
                "Lainausaika": 1619553872000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554623000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:12:30",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:30",
                "Kulutettu_energia_Wh": 18.399999999999999,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2450
            }
        },
        {
            "type": "Feature",
            "id": 1965,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 1965,
                "Lainausaika": 1619553887000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554484000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:09:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:56",
                "Kulutettu_energia_Wh": 8.9000000000000004,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 2180
            }
        },
        {
            "type": "Feature",
            "id": 1966,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 1966,
                "Lainausaika": 1619553891000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553929000,
                "Palautuksen_koordinaatit": "62.8928866, 27.6663719",
                "Palautuksen_koordinaatit_X": 27.666371900000001,
                "Palautuksen_koordinaatit_Y": 62.892886599999997,
                "Lainauksen_kesto": "0:00:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:37",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 1967,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 1967,
                "Lainausaika": 1619553937000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619553983000,
                "Palautuksen_koordinaatit": "62.8929629, 27.6662178",
                "Palautuksen_koordinaatit_X": 27.666217799999998,
                "Palautuksen_koordinaatit_Y": 62.892962900000001,
                "Lainauksen_kesto": "0:00:45",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:00:45",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 1968,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 1968,
                "Lainausaika": 1619554061000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554356000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:04:55",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:55",
                "Kulutettu_energia_Wh": 4,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 1120
            }
        },
        {
            "type": "Feature",
            "id": 1969,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 1969,
                "Lainausaika": 1619554080000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554637000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:09:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:16",
                "Kulutettu_energia_Wh": 15.300000000000001,
                "Korjattu_energia_Wh": 3,
                "Matkan_pituus_m": 2750
            }
        },
        {
            "type": "Feature",
            "id": 1970,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.614411111000038,
                    62.863141944000063
                ]
            },
            "properties": {
                "OBJECTID": 1970,
                "Lainausaika": 1619554166000,
                "Lainauksen_koordinaatit": "62.8631419444, 27.6144111111",
                "Lainauksen_koordinaatit_X": 27.614411111100001,
                "Lainauksen_koordinaatit_Y": 62.863141944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554709000,
                "Palautuksen_koordinaatit": "62.87039, 27.634712",
                "Palautuksen_koordinaatit_X": 27.634712,
                "Palautuksen_koordinaatit_Y": 62.87039,
                "Lainauksen_kesto": "0:09:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:03",
                "Kulutettu_energia_Wh": 12.9,
                "Korjattu_energia_Wh": 3.7000000000000002,
                "Matkan_pituus_m": 2300
            }
        },
        {
            "type": "Feature",
            "id": 1971,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 1971,
                "Lainausaika": 1619554195000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555469000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:21:13",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:21:13",
                "Kulutettu_energia_Wh": 59.399999999999999,
                "Korjattu_energia_Wh": 1.8,
                "Matkan_pituus_m": 6880
            }
        },
        {
            "type": "Feature",
            "id": 1972,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 1972,
                "Lainausaika": 1619554203000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554781000,
                "Palautuksen_koordinaatit": "62.901186, 27.703538",
                "Palautuksen_koordinaatit_X": 27.703538000000002,
                "Palautuksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_kesto": "0:09:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:37",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1870
            }
        },
        {
            "type": "Feature",
            "id": 1973,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 1973,
                "Lainausaika": 1619554335000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554971000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:10:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:36",
                "Kulutettu_energia_Wh": 31.300000000000001,
                "Korjattu_energia_Wh": 3.2999999999999998,
                "Matkan_pituus_m": 2210
            }
        },
        {
            "type": "Feature",
            "id": 1974,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1974,
                "Lainausaika": 1619554373000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555393000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:17:00",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:00",
                "Kulutettu_energia_Wh": 26.699999999999999,
                "Korjattu_energia_Wh": 3,
                "Matkan_pituus_m": 4560
            }
        },
        {
            "type": "Feature",
            "id": 1975,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1975,
                "Lainausaika": 1619554400000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555414000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:16:54",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:54",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 1976,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 1976,
                "Lainausaika": 1619554467000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555411000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:15:43",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:43",
                "Kulutettu_energia_Wh": 30.399999999999999,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 4440
            }
        },
        {
            "type": "Feature",
            "id": 1977,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 1977,
                "Lainausaika": 1619554496000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554869000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:06:12",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:12",
                "Kulutettu_energia_Wh": 12.1,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1900
            }
        },
        {
            "type": "Feature",
            "id": 1978,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1978,
                "Lainausaika": 1619554538000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555414000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:14:36",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:36",
                "Kulutettu_energia_Wh": 25.199999999999999,
                "Korjattu_energia_Wh": 2.2000000000000002,
                "Matkan_pituus_m": 4430
            }
        },
        {
            "type": "Feature",
            "id": 1979,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 1979,
                "Lainausaika": 1619554575000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555416000,
                "Palautuksen_koordinaatit": "62.920751, 27.673423",
                "Palautuksen_koordinaatit_X": 27.673423,
                "Palautuksen_koordinaatit_Y": 62.920751000000003,
                "Lainauksen_kesto": "0:14:00",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:00",
                "Kulutettu_energia_Wh": 30.899999999999999,
                "Korjattu_energia_Wh": 2.5,
                "Matkan_pituus_m": 3640
            }
        },
        {
            "type": "Feature",
            "id": 1980,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 1980,
                "Lainausaika": 1619554623000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619554855000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:03:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:52",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 1981,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 1981,
                "Lainausaika": 1619554665000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555684000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:16:59",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:59",
                "Kulutettu_energia_Wh": 34.200000000000003,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 5630
            }
        },
        {
            "type": "Feature",
            "id": 1982,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657027000000028,
                    62.83960600000006
                ]
            },
            "properties": {
                "OBJECTID": 1982,
                "Lainausaika": 1619554725000,
                "Lainauksen_koordinaatit": "62.839606, 27.657027",
                "Lainauksen_koordinaatit_X": 27.657026999999999,
                "Lainauksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555658000,
                "Palautuksen_koordinaatit": "62.839606, 27.657027",
                "Palautuksen_koordinaatit_X": 27.657026999999999,
                "Palautuksen_koordinaatit_Y": 62.839606000000003,
                "Lainauksen_kesto": "0:15:33",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:33",
                "Kulutettu_energia_Wh": 14.4,
                "Korjattu_energia_Wh": 1.8999999999999999,
                "Matkan_pituus_m": 1460
            }
        },
        {
            "type": "Feature",
            "id": 1983,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 1983,
                "Lainausaika": 1619554824000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555495000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:11:11",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:11:11",
                "Kulutettu_energia_Wh": 32.600000000000001,
                "Korjattu_energia_Wh": 2.6000000000000001,
                "Matkan_pituus_m": 2530
            }
        },
        {
            "type": "Feature",
            "id": 1984,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 1984,
                "Lainausaika": 1619554848000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555647000,
                "Palautuksen_koordinaatit": "62.89063833, 27.690395",
                "Palautuksen_koordinaatit_X": 27.690394999999999,
                "Palautuksen_koordinaatit_Y": 62.890638330000002,
                "Lainauksen_kesto": "0:13:18",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:18",
                "Kulutettu_energia_Wh": 5.2999999999999998,
                "Korjattu_energia_Wh": 0.40000000000000002,
                "Matkan_pituus_m": 540
            }
        },
        {
            "type": "Feature",
            "id": 1985,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 1985,
                "Lainausaika": 1619554868000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555879000,
                "Palautuksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Palautuksen_koordinaatit_X": 27.6595630556,
                "Palautuksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_kesto": "0:16:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:51",
                "Kulutettu_energia_Wh": 43.299999999999997,
                "Korjattu_energia_Wh": 2.2000000000000002,
                "Matkan_pituus_m": 3360
            }
        },
        {
            "type": "Feature",
            "id": 1986,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 1986,
                "Lainausaika": 1619554904000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619555371000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:07:47",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:47",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 3.2999999999999998,
                "Matkan_pituus_m": 2270
            }
        },
        {
            "type": "Feature",
            "id": 1987,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 1987,
                "Lainausaika": 1619555059000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555451000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:06:31",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:06:31",
                "Kulutettu_energia_Wh": 8.5999999999999996,
                "Korjattu_energia_Wh": 2.7000000000000002,
                "Matkan_pituus_m": 2050
            }
        },
        {
            "type": "Feature",
            "id": 1988,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634813000000065,
                    62.91940500000004
                ]
            },
            "properties": {
                "OBJECTID": 1988,
                "Lainausaika": 1619555153000,
                "Lainauksen_koordinaatit": "62.919405, 27.634813",
                "Lainauksen_koordinaatit_X": 27.634813000000001,
                "Lainauksen_koordinaatit_Y": 62.919404999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555688000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:08:54",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:54",
                "Kulutettu_energia_Wh": 15.300000000000001,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2260
            }
        },
        {
            "type": "Feature",
            "id": 1989,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 1989,
                "Lainausaika": 1619555221000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556718000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:24:56",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:24:56",
                "Kulutettu_energia_Wh": 26.600000000000001,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 2540
            }
        },
        {
            "type": "Feature",
            "id": 1990,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.687409000000059,
                    62.887472000000059
                ]
            },
            "properties": {
                "OBJECTID": 1990,
                "Lainausaika": 1619555352000,
                "Lainauksen_koordinaatit": "62.887472, 27.687409",
                "Lainauksen_koordinaatit_X": 27.687408999999999,
                "Lainauksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619555833000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:08:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:01",
                "Kulutettu_energia_Wh": 19,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 2110
            }
        },
        {
            "type": "Feature",
            "id": 1991,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634712000000036,
                    62.870390000000043
                ]
            },
            "properties": {
                "OBJECTID": 1991,
                "Lainausaika": 1619555563000,
                "Lainauksen_koordinaatit": "62.87039, 27.634712",
                "Lainauksen_koordinaatit_X": 27.634712,
                "Lainauksen_koordinaatit_Y": 62.87039,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556419000,
                "Palautuksen_koordinaatit": "62.8969811111, 27.6503780556",
                "Palautuksen_koordinaatit_X": 27.650378055600001,
                "Palautuksen_koordinaatit_Y": 62.896981111099997,
                "Lainauksen_kesto": "0:14:15",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:14:15",
                "Kulutettu_energia_Wh": 32.700000000000003,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 4420
            }
        },
        {
            "type": "Feature",
            "id": 1992,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 1992,
                "Lainausaika": 1619555699000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556058000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:05:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:58",
                "Kulutettu_energia_Wh": 9.3000000000000007,
                "Korjattu_energia_Wh": 0.69999999999999996,
                "Matkan_pituus_m": 1900
            }
        },
        {
            "type": "Feature",
            "id": 1993,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 1993,
                "Lainausaika": 1619555835000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556099000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:23",
                "Kulutettu_energia_Wh": 10.300000000000001,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1030
            }
        },
        {
            "type": "Feature",
            "id": 1994,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 1994,
                "Lainausaika": 1619555846000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556100000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:14",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:14",
                "Kulutettu_energia_Wh": 12.1,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 1040
            }
        },
        {
            "type": "Feature",
            "id": 1995,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 1995,
                "Lainausaika": 1619555890000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556195000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:05:05",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:05",
                "Kulutettu_energia_Wh": 6,
                "Korjattu_energia_Wh": 2.5,
                "Matkan_pituus_m": 1540
            }
        },
        {
            "type": "Feature",
            "id": 1996,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 1996,
                "Lainausaika": 1619555910000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556813000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:15:03",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:15:03",
                "Kulutettu_energia_Wh": 13.4,
                "Korjattu_energia_Wh": 6.4000000000000004,
                "Matkan_pituus_m": 3580
            }
        },
        {
            "type": "Feature",
            "id": 1997,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659563056000025,
                    62.897811944000068
                ]
            },
            "properties": {
                "OBJECTID": 1997,
                "Lainausaika": 1619555911000,
                "Lainauksen_koordinaatit": "62.8978119444, 27.6595630556",
                "Lainauksen_koordinaatit_X": 27.6595630556,
                "Lainauksen_koordinaatit_Y": 62.897811944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556554000,
                "Palautuksen_koordinaatit": "62.8890311111, 27.631185",
                "Palautuksen_koordinaatit_X": 27.631184999999999,
                "Palautuksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_kesto": "0:10:42",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:42",
                "Kulutettu_energia_Wh": 25.800000000000001,
                "Korjattu_energia_Wh": 1.8999999999999999,
                "Matkan_pituus_m": 2150
            }
        },
        {
            "type": "Feature",
            "id": 1998,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.690395000000024,
                    62.890638330000058
                ]
            },
            "properties": {
                "OBJECTID": 1998,
                "Lainausaika": 1619555913000,
                "Lainauksen_koordinaatit": "62.89063833, 27.690395",
                "Lainauksen_koordinaatit_X": 27.690394999999999,
                "Lainauksen_koordinaatit_Y": 62.890638330000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556175000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:04:21",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:21",
                "Kulutettu_energia_Wh": 11.800000000000001,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 1220
            }
        },
        {
            "type": "Feature",
            "id": 1999,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 1999,
                "Lainausaika": 1619555975000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556779000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:13:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:13:23",
                "Kulutettu_energia_Wh": 16.899999999999999,
                "Korjattu_energia_Wh": 7.7000000000000002,
                "Matkan_pituus_m": 3550
            }
        },
        {
            "type": "Feature",
            "id": 2000,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.648777000000052,
                    62.902612000000033
                ]
            },
            "properties": {
                "OBJECTID": 2000,
                "Lainausaika": 1619555995000,
                "Lainauksen_koordinaatit": "62.902612, 27.648777",
                "Lainauksen_koordinaatit_X": 27.648776999999999,
                "Lainauksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556768000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:12:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:12:52",
                "Kulutettu_energia_Wh": 15,
                "Korjattu_energia_Wh": 7.4000000000000004,
                "Matkan_pituus_m": 3540
            }
        },
        {
            "type": "Feature",
            "id": 2001,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 2001,
                "Lainausaika": 1619556008000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557335000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:22:07",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:07",
                "Kulutettu_energia_Wh": 36.5,
                "Korjattu_energia_Wh": 1.3,
                "Matkan_pituus_m": 5060
            }
        },
        {
            "type": "Feature",
            "id": 2002,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 2002,
                "Lainausaika": 1619556049000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557933000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:31:23",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:31:23",
                "Kulutettu_energia_Wh": 33,
                "Korjattu_energia_Wh": 4,
                "Matkan_pituus_m": 4980
            }
        },
        {
            "type": "Feature",
            "id": 2003,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 2003,
                "Lainausaika": 1619556072000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557369000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:21:37",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:21:37",
                "Kulutettu_energia_Wh": 42,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 4970
            }
        },
        {
            "type": "Feature",
            "id": 2004,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 2004,
                "Lainausaika": 1619556120000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556180000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:01:00",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:00",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 0
            }
        },
        {
            "type": "Feature",
            "id": 2005,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.612881000000073,
                    62.883634000000029
                ]
            },
            "properties": {
                "OBJECTID": 2005,
                "Lainausaika": 1619556192000,
                "Lainauksen_koordinaatit": "62.883634, 27.612881",
                "Lainauksen_koordinaatit_X": 27.612881000000002,
                "Lainauksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557421000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:20:28",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:28",
                "Kulutettu_energia_Wh": 35.600000000000001,
                "Korjattu_energia_Wh": 10.9,
                "Matkan_pituus_m": 5530
            }
        },
        {
            "type": "Feature",
            "id": 2006,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 2006,
                "Lainausaika": 1619556210000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557461000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:20:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:51",
                "Kulutettu_energia_Wh": 77.099999999999994,
                "Korjattu_energia_Wh": 1,
                "Matkan_pituus_m": 5560
            }
        },
        {
            "type": "Feature",
            "id": 2007,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.679041944000062,
                    62.893086944000061
                ]
            },
            "properties": {
                "OBJECTID": 2007,
                "Lainausaika": 1619556320000,
                "Lainauksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Lainauksen_koordinaatit_X": 27.679041944400002,
                "Lainauksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556825000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:08:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:24",
                "Kulutettu_energia_Wh": 16,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 2010
            }
        },
        {
            "type": "Feature",
            "id": 2008,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 2008,
                "Lainausaika": 1619556366000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556814000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:07:27",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:27",
                "Kulutettu_energia_Wh": 8.1999999999999993,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 2070
            }
        },
        {
            "type": "Feature",
            "id": 2009,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 2009,
                "Lainausaika": 1619556383000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556644000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:04:20",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:20",
                "Kulutettu_energia_Wh": 2.7999999999999998,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 1120
            }
        },
        {
            "type": "Feature",
            "id": 2010,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643550000000062,
                    62.891700000000071
                ]
            },
            "properties": {
                "OBJECTID": 2010,
                "Lainausaika": 1619556477000,
                "Lainauksen_koordinaatit": "62.8917, 27.64355",
                "Lainauksen_koordinaatit_X": 27.643550000000001,
                "Lainauksen_koordinaatit_Y": 62.8917,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557440000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:16:02",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:02",
                "Kulutettu_energia_Wh": 44.100000000000001,
                "Korjattu_energia_Wh": 2.6000000000000001,
                "Matkan_pituus_m": 4770
            }
        },
        {
            "type": "Feature",
            "id": 2011,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 2011,
                "Lainausaika": 1619556591000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556832000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:04:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:01",
                "Kulutettu_energia_Wh": 4.4000000000000004,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 1020
            }
        },
        {
            "type": "Feature",
            "id": 2012,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 2012,
                "Lainausaika": 1619556593000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619556825000,
                "Palautuksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Palautuksen_koordinaatit_X": 27.694433055600001,
                "Palautuksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_kesto": "0:03:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:03:52",
                "Kulutettu_energia_Wh": 5.2000000000000002,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 1040
            }
        },
        {
            "type": "Feature",
            "id": 2013,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 2013,
                "Lainausaika": 1619556725000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619557267000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:09:01",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:01",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 2.1000000000000001,
                "Matkan_pituus_m": 1740
            }
        },
        {
            "type": "Feature",
            "id": 2014,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 2014,
                "Lainausaika": 1619556815000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558103000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:21:28",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:21:28",
                "Kulutettu_energia_Wh": 28.800000000000001,
                "Korjattu_energia_Wh": 0.29999999999999999,
                "Matkan_pituus_m": 2690
            }
        },
        {
            "type": "Feature",
            "id": 2015,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 2015,
                "Lainausaika": 1619556863000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558095000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:20:31",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:31",
                "Kulutettu_energia_Wh": 23.899999999999999,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 2690
            }
        },
        {
            "type": "Feature",
            "id": 2016,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694433056000037,
                    62.892426944000078
                ]
            },
            "properties": {
                "OBJECTID": 2016,
                "Lainausaika": 1619556865000,
                "Lainauksen_koordinaatit": "62.8924269444, 27.6944330556",
                "Lainauksen_koordinaatit_X": 27.694433055600001,
                "Lainauksen_koordinaatit_Y": 62.8924269444,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558107000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:20:41",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:20:41",
                "Kulutettu_energia_Wh": 21.100000000000001,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 2710
            }
        },
        {
            "type": "Feature",
            "id": 2017,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 2017,
                "Lainausaika": 1619557189000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558241000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:17:31",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:31",
                "Kulutettu_energia_Wh": 31.399999999999999,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 5940
            }
        },
        {
            "type": "Feature",
            "id": 2018,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.643175000000042,
                    62.896071944000028
                ]
            },
            "properties": {
                "OBJECTID": 2018,
                "Lainausaika": 1619557240000,
                "Lainauksen_koordinaatit": "62.8960719444, 27.643175",
                "Lainauksen_koordinaatit_X": 27.643174999999999,
                "Lainauksen_koordinaatit_Y": 62.896071944399999,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558587000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:22:26",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:26",
                "Kulutettu_energia_Wh": 38.299999999999997,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 7550
            }
        },
        {
            "type": "Feature",
            "id": 2019,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 2019,
                "Lainausaika": 1619557293000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619557589000,
                "Palautuksen_koordinaatit": "62.8989061111, 27.6790388889",
                "Palautuksen_koordinaatit_X": 27.679038888899999,
                "Palautuksen_koordinaatit_Y": 62.898906111099997,
                "Lainauksen_kesto": "0:04:55",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:04:55",
                "Kulutettu_energia_Wh": 5.0999999999999996,
                "Korjattu_energia_Wh": 0.59999999999999998,
                "Matkan_pituus_m": 1490
            }
        },
        {
            "type": "Feature",
            "id": 2020,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.681891111000027,
                    62.88083000000006
                ]
            },
            "properties": {
                "OBJECTID": 2020,
                "Lainausaika": 1619557385000,
                "Lainauksen_koordinaatit": "62.88083, 27.6818911111",
                "Lainauksen_koordinaatit_X": 27.681891111100001,
                "Lainauksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619558457000,
                "Palautuksen_koordinaatit": "62.879282, 27.636286",
                "Palautuksen_koordinaatit_X": 27.636285999999998,
                "Palautuksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_kesto": "0:17:52",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:17:52",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 2930
            }
        },
        {
            "type": "Feature",
            "id": 2021,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.657891000000063,
                    62.874105000000043
                ]
            },
            "properties": {
                "OBJECTID": 2021,
                "Lainausaika": 1619557447000,
                "Lainauksen_koordinaatit": "62.874105, 27.657891",
                "Lainauksen_koordinaatit_X": 27.657890999999999,
                "Lainauksen_koordinaatit_Y": 62.874105,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558086000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:10:39",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:39",
                "Kulutettu_energia_Wh": 21.899999999999999,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 2780
            }
        },
        {
            "type": "Feature",
            "id": 2022,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 2022,
                "Lainausaika": 1619557782000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619558421000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:10:38",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:38",
                "Kulutettu_energia_Wh": 0,
                "Korjattu_energia_Wh": 0.90000000000000002,
                "Matkan_pituus_m": 1610
            }
        },
        {
            "type": "Feature",
            "id": 2023,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 2023,
                "Lainausaika": 1619557965000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559345000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:22:59",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:59",
                "Kulutettu_energia_Wh": 49.399999999999999,
                "Korjattu_energia_Wh": 1.2,
                "Matkan_pituus_m": 4410
            }
        },
        {
            "type": "Feature",
            "id": 2024,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 2024,
                "Lainausaika": 1619557968000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559362000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:23:13",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:23:13",
                "Kulutettu_energia_Wh": 39,
                "Korjattu_energia_Wh": 2.6000000000000001,
                "Matkan_pituus_m": 4220
            }
        },
        {
            "type": "Feature",
            "id": 2025,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 2025,
                "Lainausaika": 1619558037000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559346000,
                "Palautuksen_koordinaatit": "62.883634, 27.612881",
                "Palautuksen_koordinaatit_X": 27.612881000000002,
                "Palautuksen_koordinaatit_Y": 62.883634000000001,
                "Lainauksen_kesto": "0:21:49",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:21:49",
                "Kulutettu_energia_Wh": 53.600000000000001,
                "Korjattu_energia_Wh": 1.1000000000000001,
                "Matkan_pituus_m": 4310
            }
        },
        {
            "type": "Feature",
            "id": 2026,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.663587000000064,
                    62.881166000000064
                ]
            },
            "properties": {
                "OBJECTID": 2026,
                "Lainausaika": 1619558056000,
                "Lainauksen_koordinaatit": "62.881166, 27.663587",
                "Lainauksen_koordinaatit_X": 27.663587,
                "Lainauksen_koordinaatit_Y": 62.881166,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558546000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:08:09",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:09",
                "Kulutettu_energia_Wh": 15.699999999999999,
                "Korjattu_energia_Wh": 0.80000000000000004,
                "Matkan_pituus_m": 2040
            }
        },
        {
            "type": "Feature",
            "id": 2027,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.659752000000026,
                    62.894539000000066
                ]
            },
            "properties": {
                "OBJECTID": 2027,
                "Lainausaika": 1619558066000,
                "Lainauksen_koordinaatit": "62.894539, 27.659752",
                "Lainauksen_koordinaatit_X": 27.659752000000001,
                "Lainauksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558638000,
                "Palautuksen_koordinaatit": "62.88083, 27.6818911111",
                "Palautuksen_koordinaatit_X": 27.681891111100001,
                "Palautuksen_koordinaatit_Y": 62.880830000000003,
                "Lainauksen_kesto": "0:09:32",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:32",
                "Kulutettu_energia_Wh": 9.6999999999999993,
                "Korjattu_energia_Wh": 3.7000000000000002,
                "Matkan_pituus_m": 2480
            }
        },
        {
            "type": "Feature",
            "id": 2028,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 2028,
                "Lainausaika": 1619558134000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558438000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:05:04",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:04",
                "Kulutettu_energia_Wh": 13.6,
                "Korjattu_energia_Wh": 0.20000000000000001,
                "Matkan_pituus_m": 1050
            }
        },
        {
            "type": "Feature",
            "id": 2029,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.634813000000065,
                    62.91940500000004
                ]
            },
            "properties": {
                "OBJECTID": 2029,
                "Lainausaika": 1619558187000,
                "Lainauksen_koordinaatit": "62.919405, 27.634813",
                "Lainauksen_koordinaatit_X": 27.634813000000001,
                "Lainauksen_koordinaatit_Y": 62.919404999999998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559201000,
                "Palautuksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Palautuksen_koordinaatit_X": 27.675328888900001,
                "Palautuksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_kesto": "0:16:54",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:16:54",
                "Kulutettu_energia_Wh": 32.299999999999997,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 4230
            }
        },
        {
            "type": "Feature",
            "id": 2030,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 2030,
                "Lainausaika": 1619558233000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559425000,
                "Palautuksen_koordinaatit": "62.855023, 27.642339",
                "Palautuksen_koordinaatit_X": 27.642339,
                "Palautuksen_koordinaatit_Y": 62.855023000000003,
                "Lainauksen_kesto": "0:19:51",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:19:51",
                "Kulutettu_energia_Wh": 39.700000000000003,
                "Korjattu_energia_Wh": 3.7999999999999998,
                "Matkan_pituus_m": 6150
            }
        },
        {
            "type": "Feature",
            "id": 2031,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.710705000000075,
                    62.880566111000064
                ]
            },
            "properties": {
                "OBJECTID": 2031,
                "Lainausaika": 1619558285000,
                "Lainauksen_koordinaatit": "62.8805661111, 27.710705",
                "Lainauksen_koordinaatit_X": 27.710705000000001,
                "Lainauksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559639000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:22:33",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:33",
                "Kulutettu_energia_Wh": 31.5,
                "Korjattu_energia_Wh": 1.6000000000000001,
                "Matkan_pituus_m": 3450
            }
        },
        {
            "type": "Feature",
            "id": 2032,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.710705000000075,
                    62.880566111000064
                ]
            },
            "properties": {
                "OBJECTID": 2032,
                "Lainausaika": 1619558294000,
                "Lainauksen_koordinaatit": "62.8805661111, 27.710705",
                "Lainauksen_koordinaatit_X": 27.710705000000001,
                "Lainauksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559634000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:22:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:19",
                "Kulutettu_energia_Wh": 27.399999999999999,
                "Korjattu_energia_Wh": 1.3999999999999999,
                "Matkan_pituus_m": 3430
            }
        },
        {
            "type": "Feature",
            "id": 2033,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.710705000000075,
                    62.880566111000064
                ]
            },
            "properties": {
                "OBJECTID": 2033,
                "Lainausaika": 1619558296000,
                "Lainauksen_koordinaatit": "62.8805661111, 27.710705",
                "Lainauksen_koordinaatit_X": 27.710705000000001,
                "Lainauksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559644000,
                "Palautuksen_koordinaatit": "62.8928711111, 27.666445",
                "Palautuksen_koordinaatit_X": 27.666445,
                "Palautuksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_kesto": "0:22:28",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:22:28",
                "Kulutettu_energia_Wh": 25.300000000000001,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 3460
            }
        },
        {
            "type": "Feature",
            "id": 2034,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.666445000000067,
                    62.892871111000034
                ]
            },
            "properties": {
                "OBJECTID": 2034,
                "Lainausaika": 1619558370000,
                "Lainauksen_koordinaatit": "62.8928711111, 27.666445",
                "Lainauksen_koordinaatit_X": 27.666445,
                "Lainauksen_koordinaatit_Y": 62.8928711111,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558806000,
                "Palautuksen_koordinaatit": "62.902612, 27.648777",
                "Palautuksen_koordinaatit_X": 27.648776999999999,
                "Palautuksen_koordinaatit_Y": 62.902611999999998,
                "Lainauksen_kesto": "0:07:16",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:07:16",
                "Kulutettu_energia_Wh": 20.100000000000001,
                "Korjattu_energia_Wh": 2,
                "Matkan_pituus_m": 1850
            }
        },
        {
            "type": "Feature",
            "id": 2035,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.631185000000073,
                    62.889031111000065
                ]
            },
            "properties": {
                "OBJECTID": 2035,
                "Lainausaika": 1619558427000,
                "Lainauksen_koordinaatit": "62.8890311111, 27.631185",
                "Lainauksen_koordinaatit_X": 27.631184999999999,
                "Lainauksen_koordinaatit_Y": 62.889031111100003,
                "Lainauksen_tyyppi": "freebike",
                "Palautusaika": 1619559085000,
                "Palautuksen_koordinaatit": "62.894539, 27.659752",
                "Palautuksen_koordinaatit_X": 27.659752000000001,
                "Palautuksen_koordinaatit_Y": 62.894539000000002,
                "Lainauksen_kesto": "0:10:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:58",
                "Kulutettu_energia_Wh": 4.9000000000000004,
                "Korjattu_energia_Wh": 0.10000000000000001,
                "Matkan_pituus_m": 3100
            }
        },
        {
            "type": "Feature",
            "id": 2036,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 2036,
                "Lainausaika": 1619558477000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559024000,
                "Palautuksen_koordinaatit": "62.887472, 27.687409",
                "Palautuksen_koordinaatit_X": 27.687408999999999,
                "Palautuksen_koordinaatit_Y": 62.887472000000002,
                "Lainauksen_kesto": "0:09:06",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:06",
                "Kulutettu_energia_Wh": 12.9,
                "Korjattu_energia_Wh": 0.5,
                "Matkan_pituus_m": 2570
            }
        },
        {
            "type": "Feature",
            "id": 2037,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.67532888900007,
                    62.891521111000031
                ]
            },
            "properties": {
                "OBJECTID": 2037,
                "Lainausaika": 1619558490000,
                "Lainauksen_koordinaatit": "62.8915211111, 27.6753288889",
                "Lainauksen_koordinaatit_X": 27.675328888900001,
                "Lainauksen_koordinaatit_Y": 62.891521111099998,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559097000,
                "Palautuksen_koordinaatit": "62.8805661111, 27.710705",
                "Palautuksen_koordinaatit_X": 27.710705000000001,
                "Palautuksen_koordinaatit_Y": 62.880566111100002,
                "Lainauksen_kesto": "0:10:07",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:10:07",
                "Kulutettu_energia_Wh": 20.899999999999999,
                "Korjattu_energia_Wh": 1.5,
                "Matkan_pituus_m": 2800
            }
        },
        {
            "type": "Feature",
            "id": 2038,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.703538000000037,
                    62.901186000000052
                ]
            },
            "properties": {
                "OBJECTID": 2038,
                "Lainausaika": 1619558492000,
                "Lainauksen_koordinaatit": "62.901186, 27.703538",
                "Lainauksen_koordinaatit_X": 27.703538000000002,
                "Lainauksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558991000,
                "Palautuksen_koordinaatit": "62.8930869444, 27.6790419444",
                "Palautuksen_koordinaatit_X": 27.679041944400002,
                "Palautuksen_koordinaatit_Y": 62.893086944399997,
                "Lainauksen_kesto": "0:08:19",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:08:19",
                "Kulutettu_energia_Wh": 7.7999999999999998,
                "Korjattu_energia_Wh": 1.7,
                "Matkan_pituus_m": 1980
            }
        },
        {
            "type": "Feature",
            "id": 2039,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.699653889000047,
                    62.851841111000056
                ]
            },
            "properties": {
                "OBJECTID": 2039,
                "Lainausaika": 1619558630000,
                "Lainauksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Lainauksen_koordinaatit_X": 27.699653888899999,
                "Lainauksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619558714000,
                "Palautuksen_koordinaatit": "62.8518411111, 27.6996538889",
                "Palautuksen_koordinaatit_X": 27.699653888899999,
                "Palautuksen_koordinaatit_Y": 62.851841111100001,
                "Lainauksen_kesto": "0:01:24",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:01:24",
                "Kulutettu_energia_Wh": 0.59999999999999998,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 90
            }
        },
        {
            "type": "Feature",
            "id": 2040,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.694856944000037,
                    62.908465000000035
                ]
            },
            "properties": {
                "OBJECTID": 2040,
                "Lainausaika": 1619559021000,
                "Lainauksen_koordinaatit": "62.908465, 27.6948569444",
                "Lainauksen_koordinaatit_X": 27.694856944400001,
                "Lainauksen_koordinaatit_Y": 62.908465,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559379000,
                "Palautuksen_koordinaatit": "62.901186, 27.703538",
                "Palautuksen_koordinaatit_X": 27.703538000000002,
                "Palautuksen_koordinaatit_Y": 62.901186000000003,
                "Lainauksen_kesto": "0:05:58",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:05:58",
                "Kulutettu_energia_Wh": 11.199999999999999,
                "Korjattu_energia_Wh": 2.2000000000000002,
                "Matkan_pituus_m": 1270
            }
        },
        {
            "type": "Feature",
            "id": 2041,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.636286000000041,
                    62.879282000000046
                ]
            },
            "properties": {
                "OBJECTID": 2041,
                "Lainausaika": 1619559027000,
                "Lainauksen_koordinaatit": "62.879282, 27.636286",
                "Lainauksen_koordinaatit_X": 27.636285999999998,
                "Lainauksen_koordinaatit_Y": 62.879282000000003,
                "Lainauksen_tyyppi": "ebike",
                "Palautusaika": 1619559585000,
                "Palautuksen_koordinaatit": "62.881166, 27.663587",
                "Palautuksen_koordinaatit_X": 27.663587,
                "Palautuksen_koordinaatit_Y": 62.881166,
                "Lainauksen_kesto": "0:09:17",
                "Keskeytyksen_kesto": null,
                "Kokonaiskesto": "0:09:17",
                "Kulutettu_energia_Wh": 22.300000000000001,
                "Korjattu_energia_Wh": 0,
                "Matkan_pituus_m": 2650
            }
        }
      
     ]
};





const menuOptions = [
  {
     text: '3B Kuopio',
      onselect: function() {
      loadTileset(assetId);
      }
  },
  
  {
    text: 'Desibel Ortalamalarına Koupio Gürültü Verileri ',
    onselect: function() {
      // KML verilerini yükleyin
      kmlDataSources.forEach(ds => viewer.dataSources.remove(ds));
      kmlDataSources = [];
      kmlFiles.forEach((kmlFile) => {
      Cesium.KmlDataSource.load(kmlFile , kmlOptions).then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        kmlDataSources.push(dataSource);
        //viewer.flyTo(dataSource);
      });
        
     });
    },
  },
  
  {
    text: 'Kuopio Gerçek Zamanlı Hava Kalitesi',
    onselect: function() {
      
      loadJsonAsEntity(jsonUrl);
    },
  },
  
  {
    
     text: 'Kuopio Bisiklet Verileri',
    onselect: function() {
      // JSON verilerini yükleyin
     var start, end, startTime, endTime, entity;

    geojsonData.features.forEach(function (feature) {
      var properties = feature.properties;

      start = Cesium.Cartesian3.fromDegrees(
        properties.Lainauksen_koordinaatit_X,
        properties.Lainauksen_koordinaatit_Y
      );

      end = Cesium.Cartesian3.fromDegrees(
        properties.Palautuksen_koordinaatit_X,
        properties.Palautuksen_koordinaatit_Y
      );

      startTime = Cesium.JulianDate.fromDate(new Date(properties.Lainausaika));
      endTime = Cesium.JulianDate.fromDate(new Date(properties.Palautusaika));

      entity = viewer.entities.add({
        availability: new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            start: startTime,
            stop: endTime
          })
        ]),
        position: new Cesium.SampledPositionProperty(),
        path: {
          resolution: 1,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.2,
            color: Cesium.Color.YELLOW
          }),
          width: 10
        }
      });

      entity.position.addSample(startTime, start);
      entity.position.addSample(endTime, end);
    });

    viewer.clock.shouldAnimate = true;
    viewer.clock.multiplier = 10;
    viewer.clock.startTime = Cesium.JulianDate.fromDate(new Date(geojsonData.features[0].properties.Lainausaika));
    viewer.clock.stopTime = Cesium.JulianDate.fromDate(new Date(geojsonData.features[geojsonData.features.length - 1].properties.Palautusaika));
    viewer.clock.currentTime = viewer.clock.startTime;

    viewer.zoomTo(viewer.entities);

        },
    
  }
];

Sandcastle.reset = function () {
  viewer.dataSources.removeAll();
  viewer.entities.removeAll();
  viewer.clock.clockRange = Cesium.ClockRange.UNBOUNDED;
  viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK;
};


// Menüyü oluşturun
Sandcastle.addToolbarMenu(menuOptions, 'toolbar');

