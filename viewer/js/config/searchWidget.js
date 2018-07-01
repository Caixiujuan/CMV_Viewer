/*eslint no-alert: 0*/
define([
    'dojo/on',
    'dojo/_base/lang',
    'dojo/date/locale',
    'dojo/number',
    'esri/geometry/geometryEngine',
	'dojo/i18n!./nls/main'
], function (on, lang, locale, number, geometryEngine) {

    function formatDateTime (value) {
        if (value instanceof Date) {
            return locale.format(value, {
                formatLength: 'short'
            });
        }
        return '';
    }

    function formatDate (value) {
        if (value instanceof Date) {
            return locale.format(value, {
                selector: 'date',
                formatLength: 'medium'
            });
        }
        return '';
    }

    function getDateTime (value) {
        if (isNaN(value) || value === 0 || value === null) {
            return null;
        }
        return new Date(value);
    }
	
	/*function (i18n, lang, number) {

    var linkTemplate = '<a href="{url}" target="_blank">{text}</a>';
    function directionsFormatter (noValue, attributes) {
        return lang.replace(linkTemplate, {
            url: 'https://www.google.com/maps/dir/' + attributes.Address + ' Louisville, KY',
            text: 'Get Directions'
        });
    }*/

    return {
        map: true,
        mapClickMode: true,

        queryStringOptions: {
        valueParameter: 'NAME'
        },
        searchLayerInfos: true,
        enableAdvancedSearch: true,
        enableClearButton: true,

        layers: [
            {
                name: '黑龙江湿地图层',
                expression: '', // additional where expression applied to all queries
                idProperty: 'objectid',
                labelWidth: 110,
                queryParameters: {
                    type: 'spatial', // spatial, relationship, table or database
                    layerID: 'louisvillePubSafety', // from operational layers
                    sublayerID: 0,
                    outFields: ['*']
                },
                infoTemplates: {
                    buffer: {
                        title: 'Search Buffer',
                        content: function (feature) {
                            if (feature.geometry) {
                                return number.format(geometryEngine.geodesicArea(feature.geometry, 'acres'), {
                                    places: 2
                                }) + ' Acres';
                            }
                            return '';
                        }
                    }
                },
                attributeSearches: [
                    {
                        name: 'Search For NNRboundary',
                        searchFields: [
                            {
                                field: '名称',
                                label: '名称',
                                expression: '',
                                width: 'calc(100% - 130px)'
                            },
                            {
                                field: 'NAME',
                                label: 'NAME',
                                expression: '',
                                values: [],
                                width: 125
                            }
                        ],
                        title: 'Assessments',
                        topicID: 'assessmentsQuery'
                    }
                ]
            },
            {
				/*name:'黑龙江基础数据',
                name: '三环泡国家级自然保护区边界线',
				name: '三环泡国家级自然保护区边界面',*/
				name: '黑龙江基础数据',
                expression: '', // additional where expression applied to all queries
                idProperty: 'OBJECTID',
                attributeSearches: [
                    {
                        name: 'HeilongjiangBaisicdata',
                        queryParameters: {
                            type: 'table', // spatial, relationship, table or database
                            layerID: 'damageAssessment', // from operational layers 
                            sublayerID: 6,
                            outFields: ['*']
                        },
                        enableClearButton: true,
						enableAdvancedSearch: true,
                        searchFields: [
                            {
                                field: 'NAME99',
                                label: '名字',
                                expression: '(NAME99 LIKE \'%[value]%\')',
                                required: true,
                                minChars: 3,
                                defaultValue: '泰来县',
                                width: 'calc(100% - 65px)'
                            },
                            {
                                field: 'AREA',
                                label: 'AREA>=',
                                type: 'numberspinner',
                                constraints: {min: 0, max: 100000, places: 0},
                                defaultValue: 0,
                                expression: '(AREA >= [value])',
                                width: 120
                            },
                            {
                                field: 'AREA',
                                label: 'AREA <=',
                                type: 'numberspinner',
                                expression: '(AREA <= [value])',
                                constraints: {min: 0, max: 99999, places: 0},
                                defaultValue: 2,
                                width: 120
                            }
                        ],

                        title: 'HeilongjiangBaisicdata',
                        topicID: 'hospitalQuery',
                        gridOptions: {
                            columns: [
                                {
                                    id: 'Action',
                                    field: 'OBJECTID',
                                    label: 'Action',
                                    width: 60,
                                    sortable: true,
                                    exportable: true,
                                    renderCell: function (object, value, node) {
                                        on(node, 'click', function () {
                                            alert('Do something exciting here like search for related records or edit the selected record.');
                                        });
                                        node.innerHTML = '<i class=\'fa fa-pencil\' style=\'margin-left:8px;\'></i>';
                                    }
                                },
                                {
                                    field: 'NAME99',
                                    label: 'Name'
                                },
                                {
                                    field: 'AREA',
                                    label: 'Area',
                                    width: 150
                                },
                                {
                                    field: 'PERIMETER',
                                    label: 'Perimeter',
                                    width: 80
                                },
                                {
                                    field: 'BOUNT_',
                                    label: 'Bount',
                                    width: 50
                                },
                                {
                                    field: 'ADCODE99',
                                    label: 'Adcode',
                                    width: 100
                                },
                                {
                                    field: 'Shape_Length',
                                    label: 'Shape_length',
                                    width: 100
                                },
                                {
                                    field: 'Shape_Area',
                                    label: 'Shape_Area',
                                    width: 120,
                                    get: function (object) { // allow export as a proper date
                                        return getDateTime(object.LASTUPDATE);
                                    },
                                    formatter: formatDateTime
                                }
                            ],
                            sort: [
                                {
                                    property: 'NAME',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    },
                    {
                        name: 'HLJ_Soil',
                        queryParameters: {
                            type: 'table', // spatial, relationship, table or database
                            url: 'https://10.10.11.94:6443/arcgis/rest/services/HLJbasicdata/MapServer/4',
                            outFields: ['*']
                        },
                        enableAdvancedSearch: true,

                        searchFields: [
                            {
                                field: '亚类',
                                label: '亚类',
                                expression: '(亚类 = \'[value]\')',
                                unique: true,
                                includeBlankValue: true,
                                width: 'calc(100% - 85px)'
                            },
                            {	
                                field: 'AREA',
                                label: '面积',
                                expression: '( >= \'[value]\')',
                                //type: 'date',
								type: 'numberspinner',
                                labelWidth: 110,
                                width: 130
                            },
                            {
                                field: 'AREA',
                                label: '面积',
                                expression: '(AREA <= \'[value]\')',
                                //type: 'date',
								type: 'numberspinner',
                                labelWidth: 110,
                                width: 130
                            }
                        ],

                        title: '植被面积',
                        topicID: 'policeStationQuery',
                        gridOptions: {
                            columns: [
                                {
                                    field: 'OBJECTID',
                                    label: 'OBJECTID',
                                    width: 150
                                },
                                {
                                    field: 'SOILCODE',
                                    label: 'Soilcode',
                                    width: 150
                                },
                                {
                                    field: '亚类',
                                    label: '亚类',
                                    width: 100
                                },
                                {
                                    field: '土类代码',
                                    label: '土类代码',
                                    width: 100
                                },
                                {
                                    field: '土纲',
                                    label: '土纲',
                                    width: 100,
                                    get: function (object) { // allow export as a proper date
                                        return new Date(object.LASTUPDATE);
                                    },
                                    formatter: formatDateTime
                                }
                            ],
                            sort: [
                                {
                                    property: 'PDNAME',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: '黑龙江基础数据查询',
                findOptions: {
                    url: 'https://10.10.11.94:6443/arcgis/rest/services/HLJbasicdata/MapServer',
                    layerIds: [1, 2, 3, 4, 5, 6, 7],
                    searchFields: ['OBJECTID', 'AREA', 'NAME99', 'Shape_Area','Shape_Length']
                },
                attributeSearches: [
                    {
                        name: '通过名字进行黑龙江基础数据查询',
					    enableAdvancedSearch: true,
                        searchFields: [
                            {
                                field: 'NAME99',
                                label: 'Name',
                                expression: '[value]%\')',
                                placeholder: 'fdname, pdname, name or NAME99',
                                required: true,
                                minChars: 3,
                                height: 120,
                                width: 'calc(100% - 65px)'
                            }
                        ],

                        title: '黑龙江基础数据查询',
                        topicID: 'findPublicSafterQuery',
                        gridOptions: {
                            columns: [
                                {
                                    field: 'NAME99',
                                    label: 'Name'
                                },
                                {
                                    field: 'displayFieldName',
                                    label: 'Field',
                                    width: 150
                                },
                                {
                                    field: 'layerName',
                                    label: 'Layer',
                                    width: 150
                                },
                                {
                                    field: 'Last Update Date',
                                    label: 'Last Updated',
                                    width: 150,
                                    get: function (object) { // allow export as a proper date
                                        return new Date(object['Last Update Date']);
                                    },
                                    formatter: formatDate

                                }
                            ],
                            sort: [
                                {
                                    property: 'Name',
                                    descending: false
                                }
                            ]
                        }
                    }
                ]
            }
       ]
    };
});