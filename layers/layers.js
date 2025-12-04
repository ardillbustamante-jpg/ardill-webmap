ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-19909016.258567, 123089.370635, 19861811.404347, 44927335.427109]);
var wms_layers = [];


        var lyr_OSMDARK_0 = new ol.layer.Tile({
            'title': 'OSM DARK',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            })
        });

        var lyr_Googlemaps_1 = new ol.layer.Tile({
            'title': 'Google maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TTTICKETPOINT_3 = new ol.format.GeoJSON();
var features_TTTICKETPOINT_3 = format_TTTICKETPOINT_3.readFeatures(json_TTTICKETPOINT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTTICKETPOINT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTTICKETPOINT_3.addFeatures(features_TTTICKETPOINT_3);
var lyr_TTTICKETPOINT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTTICKETPOINT_3, 
                style: style_TTTICKETPOINT_3,
                popuplayertitle: 'TT-TICKET POINT',
                interactive: true,
                title: '<img src="styles/legend/TTTICKETPOINT_3.png" /> TT-TICKET POINT'
            });
var format_TTTICKETLINE_4 = new ol.format.GeoJSON();
var features_TTTICKETLINE_4 = format_TTTICKETLINE_4.readFeatures(json_TTTICKETLINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTTICKETLINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTTICKETLINE_4.addFeatures(features_TTTICKETLINE_4);
var lyr_TTTICKETLINE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTTICKETLINE_4, 
                style: style_TTTICKETLINE_4,
                popuplayertitle: 'TT-TICKET LINE',
                interactive: true,
                title: '<img src="styles/legend/TTTICKETLINE_4.png" /> TT-TICKET LINE'
            });
var format_POLE_REGION13_5 = new ol.format.GeoJSON();
var features_POLE_REGION13_5 = format_POLE_REGION13_5.readFeatures(json_POLE_REGION13_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION13_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION13_5.addFeatures(features_POLE_REGION13_5);
cluster_POLE_REGION13_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION13_5
});
var lyr_POLE_REGION13_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION13_5, 
                style: style_POLE_REGION13_5,
                popuplayertitle: 'POLE_REGION 13',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION13_5.png" /> POLE_REGION 13'
            });
var format_POLE_REGION12_6 = new ol.format.GeoJSON();
var features_POLE_REGION12_6 = format_POLE_REGION12_6.readFeatures(json_POLE_REGION12_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION12_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION12_6.addFeatures(features_POLE_REGION12_6);
cluster_POLE_REGION12_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION12_6
});
var lyr_POLE_REGION12_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION12_6, 
                style: style_POLE_REGION12_6,
                popuplayertitle: 'POLE_REGION 12',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION12_6.png" /> POLE_REGION 12'
            });
var format_POLE_REGION11_7 = new ol.format.GeoJSON();
var features_POLE_REGION11_7 = format_POLE_REGION11_7.readFeatures(json_POLE_REGION11_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION11_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION11_7.addFeatures(features_POLE_REGION11_7);
cluster_POLE_REGION11_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION11_7
});
var lyr_POLE_REGION11_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION11_7, 
                style: style_POLE_REGION11_7,
                popuplayertitle: 'POLE_REGION 11',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION11_7.png" /> POLE_REGION 11'
            });
var format_POLE_REGION10_8 = new ol.format.GeoJSON();
var features_POLE_REGION10_8 = format_POLE_REGION10_8.readFeatures(json_POLE_REGION10_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION10_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION10_8.addFeatures(features_POLE_REGION10_8);
cluster_POLE_REGION10_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION10_8
});
var lyr_POLE_REGION10_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION10_8, 
                style: style_POLE_REGION10_8,
                popuplayertitle: 'POLE_REGION 10',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION10_8.png" /> POLE_REGION 10'
            });
var format_POLE_REGION9_9 = new ol.format.GeoJSON();
var features_POLE_REGION9_9 = format_POLE_REGION9_9.readFeatures(json_POLE_REGION9_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION9_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION9_9.addFeatures(features_POLE_REGION9_9);
cluster_POLE_REGION9_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION9_9
});
var lyr_POLE_REGION9_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION9_9, 
                style: style_POLE_REGION9_9,
                popuplayertitle: 'POLE_REGION 9',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION9_9.png" /> POLE_REGION 9'
            });
var format_POLE_REGION8_10 = new ol.format.GeoJSON();
var features_POLE_REGION8_10 = format_POLE_REGION8_10.readFeatures(json_POLE_REGION8_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION8_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION8_10.addFeatures(features_POLE_REGION8_10);
cluster_POLE_REGION8_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION8_10
});
var lyr_POLE_REGION8_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION8_10, 
                style: style_POLE_REGION8_10,
                popuplayertitle: 'POLE_REGION 8',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION8_10.png" /> POLE_REGION 8'
            });
var format_POLE_REGION7_11 = new ol.format.GeoJSON();
var features_POLE_REGION7_11 = format_POLE_REGION7_11.readFeatures(json_POLE_REGION7_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION7_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION7_11.addFeatures(features_POLE_REGION7_11);
cluster_POLE_REGION7_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION7_11
});
var lyr_POLE_REGION7_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION7_11, 
                style: style_POLE_REGION7_11,
                popuplayertitle: 'POLE_REGION 7',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION7_11.png" /> POLE_REGION 7'
            });
var format_POLE_CAR_12 = new ol.format.GeoJSON();
var features_POLE_CAR_12 = format_POLE_CAR_12.readFeatures(json_POLE_CAR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_CAR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_CAR_12.addFeatures(features_POLE_CAR_12);
cluster_POLE_CAR_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_CAR_12
});
var lyr_POLE_CAR_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_CAR_12, 
                style: style_POLE_CAR_12,
                popuplayertitle: 'POLE_CAR',
                interactive: true,
                title: '<img src="styles/legend/POLE_CAR_12.png" /> POLE_CAR'
            });
var format_POLE_REGION5_13 = new ol.format.GeoJSON();
var features_POLE_REGION5_13 = format_POLE_REGION5_13.readFeatures(json_POLE_REGION5_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION5_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION5_13.addFeatures(features_POLE_REGION5_13);
cluster_POLE_REGION5_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION5_13
});
var lyr_POLE_REGION5_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION5_13, 
                style: style_POLE_REGION5_13,
                popuplayertitle: 'POLE_REGION 5',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION5_13.png" /> POLE_REGION 5'
            });
var format_POLE_REGION4B_14 = new ol.format.GeoJSON();
var features_POLE_REGION4B_14 = format_POLE_REGION4B_14.readFeatures(json_POLE_REGION4B_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION4B_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION4B_14.addFeatures(features_POLE_REGION4B_14);
cluster_POLE_REGION4B_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION4B_14
});
var lyr_POLE_REGION4B_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION4B_14, 
                style: style_POLE_REGION4B_14,
                popuplayertitle: 'POLE_REGION 4B',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION4B_14.png" /> POLE_REGION 4B'
            });
var format_POLE_REGION4A_15 = new ol.format.GeoJSON();
var features_POLE_REGION4A_15 = format_POLE_REGION4A_15.readFeatures(json_POLE_REGION4A_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION4A_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION4A_15.addFeatures(features_POLE_REGION4A_15);
cluster_POLE_REGION4A_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION4A_15
});
var lyr_POLE_REGION4A_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION4A_15, 
                style: style_POLE_REGION4A_15,
                popuplayertitle: 'POLE_REGION 4A',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION4A_15.png" /> POLE_REGION 4A'
            });
var format_POLE_REGION3_16 = new ol.format.GeoJSON();
var features_POLE_REGION3_16 = format_POLE_REGION3_16.readFeatures(json_POLE_REGION3_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION3_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION3_16.addFeatures(features_POLE_REGION3_16);
cluster_POLE_REGION3_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION3_16
});
var lyr_POLE_REGION3_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION3_16, 
                style: style_POLE_REGION3_16,
                popuplayertitle: 'POLE_REGION 3',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION3_16.png" /> POLE_REGION 3'
            });
var format_POLE_REGION2_17 = new ol.format.GeoJSON();
var features_POLE_REGION2_17 = format_POLE_REGION2_17.readFeatures(json_POLE_REGION2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION2_17.addFeatures(features_POLE_REGION2_17);
cluster_POLE_REGION2_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION2_17
});
var lyr_POLE_REGION2_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION2_17, 
                style: style_POLE_REGION2_17,
                popuplayertitle: 'POLE_REGION 2',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION2_17.png" /> POLE_REGION 2'
            });
var format_POLE_REGION1_18 = new ol.format.GeoJSON();
var features_POLE_REGION1_18 = format_POLE_REGION1_18.readFeatures(json_POLE_REGION1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_REGION1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_REGION1_18.addFeatures(features_POLE_REGION1_18);
cluster_POLE_REGION1_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_REGION1_18
});
var lyr_POLE_REGION1_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_REGION1_18, 
                style: style_POLE_REGION1_18,
                popuplayertitle: 'POLE_REGION 1',
                interactive: true,
                title: '<img src="styles/legend/POLE_REGION1_18.png" /> POLE_REGION 1'
            });
var format_POLE_NCR_19 = new ol.format.GeoJSON();
var features_POLE_NCR_19 = format_POLE_NCR_19.readFeatures(json_POLE_NCR_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_NCR_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_NCR_19.addFeatures(features_POLE_NCR_19);
cluster_POLE_NCR_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POLE_NCR_19
});
var lyr_POLE_NCR_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POLE_NCR_19, 
                style: style_POLE_NCR_19,
                popuplayertitle: 'POLE_NCR',
                interactive: true,
                title: '<img src="styles/legend/POLE_NCR_19.png" /> POLE_NCR'
            });
var format_CLOSURE_REGION_12_20 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_12_20 = format_CLOSURE_REGION_12_20.readFeatures(json_CLOSURE_REGION_12_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_12_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_12_20.addFeatures(features_CLOSURE_REGION_12_20);
var lyr_CLOSURE_REGION_12_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_12_20, 
                style: style_CLOSURE_REGION_12_20,
                popuplayertitle: 'CLOSURE_REGION_12',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_12_20.png" /> CLOSURE_REGION_12'
            });
var format_CLOSURE_REGION_13_21 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_13_21 = format_CLOSURE_REGION_13_21.readFeatures(json_CLOSURE_REGION_13_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_13_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_13_21.addFeatures(features_CLOSURE_REGION_13_21);
var lyr_CLOSURE_REGION_13_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_13_21, 
                style: style_CLOSURE_REGION_13_21,
                popuplayertitle: 'CLOSURE_REGION_13',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_13_21.png" /> CLOSURE_REGION_13'
            });
var format_CLOSURE_REGION_11_22 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_11_22 = format_CLOSURE_REGION_11_22.readFeatures(json_CLOSURE_REGION_11_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_11_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_11_22.addFeatures(features_CLOSURE_REGION_11_22);
var lyr_CLOSURE_REGION_11_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_11_22, 
                style: style_CLOSURE_REGION_11_22,
                popuplayertitle: 'CLOSURE_REGION_11',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_11_22.png" /> CLOSURE_REGION_11'
            });
var format_CLOSURE_REGION_9_23 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_9_23 = format_CLOSURE_REGION_9_23.readFeatures(json_CLOSURE_REGION_9_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_9_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_9_23.addFeatures(features_CLOSURE_REGION_9_23);
var lyr_CLOSURE_REGION_9_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_9_23, 
                style: style_CLOSURE_REGION_9_23,
                popuplayertitle: 'CLOSURE_REGION_9',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_9_23.png" /> CLOSURE_REGION_9'
            });
var format_CLOSURE_REGION_10_24 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_10_24 = format_CLOSURE_REGION_10_24.readFeatures(json_CLOSURE_REGION_10_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_10_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_10_24.addFeatures(features_CLOSURE_REGION_10_24);
var lyr_CLOSURE_REGION_10_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_10_24, 
                style: style_CLOSURE_REGION_10_24,
                popuplayertitle: 'CLOSURE_REGION_10',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_10_24.png" /> CLOSURE_REGION_10'
            });
var format_CLOSURE_BARMM_25 = new ol.format.GeoJSON();
var features_CLOSURE_BARMM_25 = format_CLOSURE_BARMM_25.readFeatures(json_CLOSURE_BARMM_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_BARMM_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_BARMM_25.addFeatures(features_CLOSURE_BARMM_25);
var lyr_CLOSURE_BARMM_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_BARMM_25, 
                style: style_CLOSURE_BARMM_25,
                popuplayertitle: 'CLOSURE_BARMM',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_BARMM_25.png" /> CLOSURE_BARMM'
            });
var format_CLOSURE_REGION_8_26 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_8_26 = format_CLOSURE_REGION_8_26.readFeatures(json_CLOSURE_REGION_8_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_8_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_8_26.addFeatures(features_CLOSURE_REGION_8_26);
var lyr_CLOSURE_REGION_8_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_8_26, 
                style: style_CLOSURE_REGION_8_26,
                popuplayertitle: 'CLOSURE_REGION_8',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_8_26.png" /> CLOSURE_REGION_8'
            });
var format_CLOSURE_REGION_7_27 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_7_27 = format_CLOSURE_REGION_7_27.readFeatures(json_CLOSURE_REGION_7_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_7_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_7_27.addFeatures(features_CLOSURE_REGION_7_27);
var lyr_CLOSURE_REGION_7_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_7_27, 
                style: style_CLOSURE_REGION_7_27,
                popuplayertitle: 'CLOSURE_REGION_7',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_7_27.png" /> CLOSURE_REGION_7'
            });
var format_CLOSURE_REGION_6_28 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_6_28 = format_CLOSURE_REGION_6_28.readFeatures(json_CLOSURE_REGION_6_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_6_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_6_28.addFeatures(features_CLOSURE_REGION_6_28);
var lyr_CLOSURE_REGION_6_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_6_28, 
                style: style_CLOSURE_REGION_6_28,
                popuplayertitle: 'CLOSURE_REGION_6',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_6_28.png" /> CLOSURE_REGION_6'
            });
var format_CLOSURE_REGION_5_29 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_5_29 = format_CLOSURE_REGION_5_29.readFeatures(json_CLOSURE_REGION_5_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_5_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_5_29.addFeatures(features_CLOSURE_REGION_5_29);
var lyr_CLOSURE_REGION_5_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_5_29, 
                style: style_CLOSURE_REGION_5_29,
                popuplayertitle: 'CLOSURE_REGION_5',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_5_29.png" /> CLOSURE_REGION_5'
            });
var format_CLOSURE_REGION_4B_30 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_4B_30 = format_CLOSURE_REGION_4B_30.readFeatures(json_CLOSURE_REGION_4B_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_4B_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_4B_30.addFeatures(features_CLOSURE_REGION_4B_30);
var lyr_CLOSURE_REGION_4B_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_4B_30, 
                style: style_CLOSURE_REGION_4B_30,
                popuplayertitle: 'CLOSURE_REGION_4B',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_4B_30.png" /> CLOSURE_REGION_4B'
            });
var format_CLOSURE_REGION_4A_31 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_4A_31 = format_CLOSURE_REGION_4A_31.readFeatures(json_CLOSURE_REGION_4A_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_4A_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_4A_31.addFeatures(features_CLOSURE_REGION_4A_31);
var lyr_CLOSURE_REGION_4A_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_4A_31, 
                style: style_CLOSURE_REGION_4A_31,
                popuplayertitle: 'CLOSURE_REGION_4A',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_4A_31.png" /> CLOSURE_REGION_4A'
            });
var format_CLOSURE_REGION_3_32 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_3_32 = format_CLOSURE_REGION_3_32.readFeatures(json_CLOSURE_REGION_3_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_3_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_3_32.addFeatures(features_CLOSURE_REGION_3_32);
var lyr_CLOSURE_REGION_3_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_3_32, 
                style: style_CLOSURE_REGION_3_32,
                popuplayertitle: 'CLOSURE_REGION_3',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_3_32.png" /> CLOSURE_REGION_3'
            });
var format_CLOSURE_REGION_2_33 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_2_33 = format_CLOSURE_REGION_2_33.readFeatures(json_CLOSURE_REGION_2_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_2_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_2_33.addFeatures(features_CLOSURE_REGION_2_33);
var lyr_CLOSURE_REGION_2_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_2_33, 
                style: style_CLOSURE_REGION_2_33,
                popuplayertitle: 'CLOSURE_REGION_2',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_2_33.png" /> CLOSURE_REGION_2'
            });
var format_CLOSURE_REGION_1_34 = new ol.format.GeoJSON();
var features_CLOSURE_REGION_1_34 = format_CLOSURE_REGION_1_34.readFeatures(json_CLOSURE_REGION_1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_REGION_1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_REGION_1_34.addFeatures(features_CLOSURE_REGION_1_34);
var lyr_CLOSURE_REGION_1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_REGION_1_34, 
                style: style_CLOSURE_REGION_1_34,
                popuplayertitle: 'CLOSURE_REGION_1',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_REGION_1_34.png" /> CLOSURE_REGION_1'
            });
var format_CLOSURE_NCR_35 = new ol.format.GeoJSON();
var features_CLOSURE_NCR_35 = format_CLOSURE_NCR_35.readFeatures(json_CLOSURE_NCR_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_NCR_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_NCR_35.addFeatures(features_CLOSURE_NCR_35);
var lyr_CLOSURE_NCR_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_NCR_35, 
                style: style_CLOSURE_NCR_35,
                popuplayertitle: 'CLOSURE_NCR',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_NCR_35.png" /> CLOSURE_NCR'
            });
var format_CLOSURE_CAR_36 = new ol.format.GeoJSON();
var features_CLOSURE_CAR_36 = format_CLOSURE_CAR_36.readFeatures(json_CLOSURE_CAR_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLOSURE_CAR_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLOSURE_CAR_36.addFeatures(features_CLOSURE_CAR_36);
var lyr_CLOSURE_CAR_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLOSURE_CAR_36, 
                style: style_CLOSURE_CAR_36,
                popuplayertitle: 'CLOSURE_CAR',
                interactive: true,
                title: '<img src="styles/legend/CLOSURE_CAR_36.png" /> CLOSURE_CAR'
            });
var group_CLOSURELUZON = new ol.layer.Group({
                                layers: [lyr_CLOSURE_REGION_5_29,lyr_CLOSURE_REGION_4B_30,lyr_CLOSURE_REGION_4A_31,lyr_CLOSURE_REGION_3_32,lyr_CLOSURE_REGION_2_33,lyr_CLOSURE_REGION_1_34,lyr_CLOSURE_NCR_35,lyr_CLOSURE_CAR_36,],
                                fold: 'close',
                                title: 'CLOSURE LUZON'});
var group_CLOSUREVISAYAS = new ol.layer.Group({
                                layers: [lyr_CLOSURE_REGION_8_26,lyr_CLOSURE_REGION_7_27,lyr_CLOSURE_REGION_6_28,],
                                fold: 'close',
                                title: 'CLOSURE VISAYAS'});
var group_CLOSUREMINDANAO = new ol.layer.Group({
                                layers: [lyr_CLOSURE_REGION_12_20,lyr_CLOSURE_REGION_13_21,lyr_CLOSURE_REGION_11_22,lyr_CLOSURE_REGION_9_23,lyr_CLOSURE_REGION_10_24,lyr_CLOSURE_BARMM_25,],
                                fold: 'close',
                                title: 'CLOSURE MINDANAO'});
var group_POLELUZON = new ol.layer.Group({
                                layers: [lyr_POLE_CAR_12,lyr_POLE_REGION5_13,lyr_POLE_REGION4B_14,lyr_POLE_REGION4A_15,lyr_POLE_REGION3_16,lyr_POLE_REGION2_17,lyr_POLE_REGION1_18,lyr_POLE_NCR_19,],
                                fold: 'close',
                                title: 'POLE LUZON'});
var group_POLEVISAYAS = new ol.layer.Group({
                                layers: [lyr_POLE_REGION8_10,lyr_POLE_REGION7_11,],
                                fold: 'close',
                                title: 'POLE VISAYAS'});
var group_POLEMINDANAO = new ol.layer.Group({
                                layers: [lyr_POLE_REGION13_5,lyr_POLE_REGION12_6,lyr_POLE_REGION11_7,lyr_POLE_REGION10_8,lyr_POLE_REGION9_9,],
                                fold: 'close',
                                title: 'POLE MINDANAO'});
var group_TROUBLETICKET = new ol.layer.Group({
                                layers: [lyr_TTTICKETPOINT_3,lyr_TTTICKETLINE_4,],
                                fold: 'close',
                                title: 'TROUBLE TICKET'});
var group_LAYERS = new ol.layer.Group({
                                layers: [lyr_OSMDARK_0,lyr_Googlemaps_1,lyr_OpenStreetMap_2,],
                                fold: 'close',
                                title: 'LAYERS'});

lyr_OSMDARK_0.setVisible(false);lyr_Googlemaps_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(false);lyr_TTTICKETPOINT_3.setVisible(false);lyr_TTTICKETLINE_4.setVisible(false);lyr_POLE_REGION13_5.setVisible(false);lyr_POLE_REGION12_6.setVisible(false);lyr_POLE_REGION11_7.setVisible(false);lyr_POLE_REGION10_8.setVisible(false);lyr_POLE_REGION9_9.setVisible(false);lyr_POLE_REGION8_10.setVisible(false);lyr_POLE_REGION7_11.setVisible(false);lyr_POLE_CAR_12.setVisible(false);lyr_POLE_REGION5_13.setVisible(false);lyr_POLE_REGION4B_14.setVisible(false);lyr_POLE_REGION4A_15.setVisible(false);lyr_POLE_REGION3_16.setVisible(false);lyr_POLE_REGION2_17.setVisible(false);lyr_POLE_REGION1_18.setVisible(false);lyr_POLE_NCR_19.setVisible(false);lyr_CLOSURE_REGION_12_20.setVisible(false);lyr_CLOSURE_REGION_13_21.setVisible(false);lyr_CLOSURE_REGION_11_22.setVisible(false);lyr_CLOSURE_REGION_9_23.setVisible(false);lyr_CLOSURE_REGION_10_24.setVisible(false);lyr_CLOSURE_BARMM_25.setVisible(false);lyr_CLOSURE_REGION_8_26.setVisible(false);lyr_CLOSURE_REGION_7_27.setVisible(false);lyr_CLOSURE_REGION_6_28.setVisible(false);lyr_CLOSURE_REGION_5_29.setVisible(false);lyr_CLOSURE_REGION_4B_30.setVisible(false);lyr_CLOSURE_REGION_4A_31.setVisible(false);lyr_CLOSURE_REGION_3_32.setVisible(false);lyr_CLOSURE_REGION_2_33.setVisible(false);lyr_CLOSURE_REGION_1_34.setVisible(false);lyr_CLOSURE_NCR_35.setVisible(false);lyr_CLOSURE_CAR_36.setVisible(false);
var layersList = [group_LAYERS,group_TROUBLETICKET,group_POLEMINDANAO,group_POLEVISAYAS,group_POLELUZON,group_CLOSUREMINDANAO,group_CLOSUREVISAYAS,group_CLOSURELUZON];
lyr_TTTICKETPOINT_3.set('fieldAliases', {'type': 'type', 'stencil': 'stencil', 'latitude, longitude': 'latitude, longitude', 'name': 'name', 'new id': 'new id', 'tt-ticket i.d': 'tt-ticket i.d', 'coordinates': 'coordinates', 'msp': 'msp', 'sender': 'sender', 'latitude': 'latitude', 'longitude': 'longitude', 'ows tt-ticket i.d': 'ows tt-ticket i.d', 'hyperlink': 'hyperlink', 'link': 'link', 'fiber cut': 'fiber cut', 'column 1': 'column 1', 'ows ticket id': 'ows ticket id', 'remarks': 'remarks', 'affected ticket': 'affected ticket', 'trouble title': 'trouble title', 'affected equipment': 'affected equipment', 'rfo': 'rfo', 'action taken': 'action taken', 'responsible group': 'responsible group', 'date entry': 'date entry', 'date endorsed': 'date endorsed', });
lyr_TTTICKETLINE_4.set('fieldAliases', {'type': 'type', 'stencil': 'stencil', 'latitude, longitude': 'latitude, longitude', 'name': 'name', 'new id': 'new id', 'tt-ticket i.d': 'tt-ticket i.d', 'coordinates': 'coordinates', 'msp': 'msp', 'sender': 'sender', 'latitude': 'latitude', 'longitude': 'longitude', 'ows tt-ticket i.d': 'ows tt-ticket i.d', 'hyperlink': 'hyperlink', 'link': 'link', 'fiber cut': 'fiber cut', 'column 1': 'column 1', 'ows ticket id': 'ows ticket id', 'remarks': 'remarks', 'affected ticket': 'affected ticket', 'trouble title': 'trouble title', 'affected equipment': 'affected equipment', 'rfo': 'rfo', 'action taken': 'action taken', 'responsible group': 'responsible group', 'date entry': 'date entry', 'date endorsed': 'date endorsed', });
lyr_POLE_REGION13_5.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION12_6.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION11_7.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION10_8.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION9_9.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION8_10.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION7_11.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_CAR_12.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION5_13.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION4B_14.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION4A_15.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION3_16.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION2_17.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_REGION1_18.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_POLE_NCR_19.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'pole id': 'pole id', 'type': 'type', 'height in meters': 'height in meters', 'geo': 'geo', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_12_20.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_13_21.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_11_22.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_9_23.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_10_24.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_BARMM_25.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_8_26.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_7_27.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_6_28.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'capacity': 'capacity', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_5_29.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_4B_30.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_4A_31.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_3_32.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_2_33.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_REGION_1_34.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_CLOSURE_NCR_35.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', '': '', });
lyr_CLOSURE_CAR_36.set('fieldAliases', {'sheet': 'sheet', 'row': 'row', 'name': 'name', 'request status': 'request status', 'coordinates': 'coordinates', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_TTTICKETPOINT_3.set('fieldImages', {'type': 'TextEdit', 'stencil': 'TextEdit', 'latitude, longitude': '', 'name': 'TextEdit', 'new id': 'TextEdit', 'tt-ticket i.d': 'TextEdit', 'coordinates': 'TextEdit', 'msp': 'TextEdit', 'sender': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ows tt-ticket i.d': 'TextEdit', 'hyperlink': 'TextEdit', 'link': 'TextEdit', 'fiber cut': 'TextEdit', 'column 1': '', 'ows ticket id': '', 'remarks': 'TextEdit', 'affected ticket': '', 'trouble title': '', 'affected equipment': '', 'rfo': '', 'action taken': '', 'responsible group': '', 'date entry': '', 'date endorsed': '', });
lyr_TTTICKETLINE_4.set('fieldImages', {'type': 'TextEdit', 'stencil': 'TextEdit', 'latitude, longitude': '', 'name': 'TextEdit', 'new id': 'TextEdit', 'tt-ticket i.d': 'TextEdit', 'coordinates': 'TextEdit', 'msp': 'TextEdit', 'sender': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ows tt-ticket i.d': 'TextEdit', 'hyperlink': 'TextEdit', 'link': 'TextEdit', 'fiber cut': 'TextEdit', 'column 1': '', 'ows ticket id': '', 'remarks': 'TextEdit', 'affected ticket': '', 'trouble title': '', 'affected equipment': '', 'rfo': '', 'action taken': '', 'responsible group': '', 'date entry': '', 'date endorsed': '', });
lyr_POLE_REGION13_5.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION12_6.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION11_7.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION10_8.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION9_9.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION8_10.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION7_11.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_CAR_12.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION5_13.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION4B_14.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION4A_15.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION3_16.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION2_17.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_REGION1_18.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_POLE_NCR_19.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'pole id': 'TextEdit', 'type': 'TextEdit', 'height in meters': 'TextEdit', 'geo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_12_20.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_13_21.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_11_22.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_9_23.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_10_24.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_BARMM_25.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_8_26.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': '', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_7_27.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_6_28.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'capacity': '', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_5_29.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_4B_30.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_4A_31.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_3_32.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_2_33.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_REGION_1_34.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_CLOSURE_NCR_35.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '': '', });
lyr_CLOSURE_CAR_36.set('fieldImages', {'sheet': 'TextEdit', 'row': 'Range', 'name': 'TextEdit', 'request status': 'TextEdit', 'coordinates': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_TTTICKETPOINT_3.set('fieldLabels', {'type': 'no label', 'stencil': 'no label', 'latitude, longitude': 'no label', 'name': 'inline label - always visible', 'new id': 'no label', 'tt-ticket i.d': 'no label', 'coordinates': 'no label', 'msp': 'no label', 'sender': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'ows tt-ticket i.d': 'no label', 'hyperlink': 'no label', 'link': 'no label', 'fiber cut': 'no label', 'column 1': 'no label', 'ows ticket id': 'no label', 'remarks': 'no label', 'affected ticket': 'no label', 'trouble title': 'no label', 'affected equipment': 'no label', 'rfo': 'no label', 'action taken': 'no label', 'responsible group': 'no label', 'date entry': 'no label', 'date endorsed': 'no label', });
lyr_TTTICKETLINE_4.set('fieldLabels', {'type': 'no label', 'stencil': 'no label', 'latitude, longitude': 'no label', 'name': 'no label', 'new id': 'no label', 'tt-ticket i.d': 'inline label - always visible', 'coordinates': 'no label', 'msp': 'no label', 'sender': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'ows tt-ticket i.d': 'no label', 'hyperlink': 'no label', 'link': 'no label', 'fiber cut': 'no label', 'column 1': 'no label', 'ows ticket id': 'no label', 'remarks': 'no label', 'affected ticket': 'no label', 'trouble title': 'no label', 'affected equipment': 'no label', 'rfo': 'no label', 'action taken': 'no label', 'responsible group': 'no label', 'date entry': 'no label', 'date endorsed': 'no label', });
lyr_POLE_REGION13_5.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION12_6.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION11_7.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION10_8.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION9_9.set('fieldLabels', {'sheet': 'no label', 'row': 'inline label - always visible', 'pole id': 'no label', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION8_10.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION7_11.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_CAR_12.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION5_13.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION4B_14.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION4A_15.set('fieldLabels', {'sheet': 'no label', 'row': 'inline label - always visible', 'pole id': 'no label', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION3_16.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION2_17.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_REGION1_18.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_POLE_NCR_19.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'pole id': 'inline label - always visible', 'type': 'no label', 'height in meters': 'no label', 'geo': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_12_20.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_13_21.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_11_22.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_9_23.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_10_24.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_BARMM_25.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_8_26.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_7_27.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_6_28.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'capacity': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_5_29.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_4B_30.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_4A_31.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_3_32.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_2_33.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'header label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_REGION_1_34.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_NCR_35.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_CAR_36.set('fieldLabels', {'sheet': 'no label', 'row': 'no label', 'name': 'inline label - always visible', 'request status': 'no label', 'coordinates': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_CLOSURE_CAR_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});