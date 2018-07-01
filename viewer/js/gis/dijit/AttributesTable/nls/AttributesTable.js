// http://dojotoolkit.org/reference-guide/1.10/dojo/i18n.html
define({
    root: {
        messages: {
            searching: {
                title: '查询中...',
                message: '请等待...'
            },

            searchError: {
                title: '查询错误',
                message: '对不起，出现错误您的查询请求无法完成。'
            },

            searchResults: {
                title: '查询结果',
                message: null,
                noFeatures: '没有特征要素',
                feature: '特征要素',
                features: '多个特征要素',
                found: '查找'
            }
        },

        menus: {
            zoom: {
                title: '缩放',
                zoomToFeatures: '缩放到所有特征要素',
                zoomToSelectedFeatures: '缩放到所选择的特征要素',
                zoomToBuffer: '缩放到缓冲区'
            },

            clear: {
                title: '清除',
                clearFeatures: '清除所有特征要素',
                clearSelectedFeatures: '清除所选择的特征要素',
                clearBufferGraphics: '清除缓冲区',
                clearGrid: '清除表格',
                clearAll: '清除所有'
            },

            'export': {
                title: '输出'
            }
        }
    }
});
