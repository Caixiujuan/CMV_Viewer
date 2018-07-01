// http://dojotoolkit.org/reference-guide/1.10/dojo/i18n.html
define({
    root: {
        Labels: {
            selectALayer: '图层查询',
            selectAQuery: '语句查询',
            spatialFilter: '应用空间滤波器',
            buffer: '缓冲区',
            displayBuffer: '仅显示缓冲区',
            attributeAddToExisting: '添加到现有结果',
            spatialAddToExisting: '添加到现有结果',
            selectFeaturesBy: '通过要素查询',
            tabTitleByAttribute: '通过属性查询',
            tabTitleByShape: '通过形状查询',
            exactMatches: '只精准匹配',

            importDialogTitle: '导入查询',
            exportDialogTitle: '导出查询',

            // used for "Spatial Filters"
            spatialFilters: {
                entireMap: '整个地图（过滤器）',
                currentExtent: '当前地图范围',
                identifiedFeature: '特征识别',
                searchSource: '用于搜索的滤波器',
                searchFeatures: '查询结果的要素',
                searchSelected: '在查询结果中搜索要素',
                searchBuffer: '用于搜索的缓冲区'
            }
        },
        Buttons: {
            search: {
                label: '查询',
                showLabel: true
            },
            stopDrawing: {
                label: '停止绘制',
                showLabel: true
            },
            selectByRectangle: {
                label: '矩形查询',
                showLabel: false
            },
            selectByCircle: {
                label: '圆查询',
                showLabel: false
            },
            selectByPoint: {
                label: '点查询',
                showLabel: false
            },
            selectByPolyline: {
                label: '线查询',
                showLabel: false
            },
            selectByFreehandPolyline: {
                label: '自由线查询',
                showLabel: false
            },
            selectByPolygon: {
                label: '面查询',
                showLabel: false
            },
            selectByFreehandPolygon: {
                label: '自由面查询',
                showLabel: false
            },
            selectByIdentify: {
                label: '根据识别特征查询',
                showLabel: false
            },
            selectBySelected: {
                label: '根据选择要锁查询',
                showLabel: false
            },
            switchToBasic: {
                label: '切换到基础查询',
                showLabel: true
            },
            switchToAdvanced: {
                label: '切换到高级查询',
                showLabel: true
            },
            importSQL: {
                label: '输入',
                showLabel: false
            },
            exportSQL: {
                label: '输出',
                showLabel: false
            },
            clearFields: {
                label: '清除',
                showLabel: true
            }
        }
    }
});