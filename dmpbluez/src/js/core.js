/* 调用动画方法
$('选择器').animateCss('动画名')
*/
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationedn animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
})
/* 调用时间 $('选择器').showNowTime() */
$.fn.extend({
    showNowTime: function (className) {
        var newDate = new Date(),
            year = newDate.getFullYear(),
            month = newDate.getMonth() + 1,
            day = newDate.getDate(),
            hours = newDate.getHours(),
            minutes = newDate.getMinutes(),
            second = newDate.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;
        var result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + second;
        this.addClass('yb-show-now-time').text(result);
    }
});
function commafy (num) {
    if (!!num) {
        return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
    } else {
        return '';
    }
}

//mock数据
Mock.mock(
    'http://goss.com', {

        'zy|200-900': 1,
        'xz|2999-9000': 1,
        'bs|1999-4000': 1,
        'jr|1080-2000': 1,
        'total|102000-10002000': 1,
        'array|5-15': [
            {
                'msg|+1': ["爬虫", "eHR", "OA", "IOT", "log", "现场管理", "文旅", "租赁", "预算", "电表", "新媒体", "销售额", "温控", "儿童娱乐", "商服", "客流", "物业", "商管"]
            }
        ]
    }
);

$(function () {
    //计数统计
    $('.dataStatistics').ybCount({ url: "http://goss.com" });
    
    //数据流动清洗
    setInterval(function () {
        $.ajax({
            url: 'http://goss.com',
            dataType: 'json',
            type: 'get'
        }).done(function (req) {
            $('.show-zy').text(commafy(req.zy));
            $('.show-xz').text(commafy(req.xz));
            $('.show-bs').text(commafy(req.bs));
            $('.show-jr').text(commafy(req.jr));
        })
    }, 2000);
    // 地图切换
    !function(){
        var n = 0, count,t;
        count = $('._maps .maps').length;
        $('._maps .maps:not(:first-child)').hide();
        function _move (timer) {
            return setInterval(function () {
                n = n >= (count - 1) ? 0 : ++n;
                $('._maps .maps').fadeOut(1000).parent().children().eq(n).fadeIn(1000);
            }, timer);
        }
        t = _move(5000);
        $('._maps .maps').hover(
            function () {
                clearInterval(t);
            },
            function () {
                t = _move(5000);
            }
        )
    }();
    
    /* ====  echarts  ==== */
    map1();
    map2();
    left1();
    left2();
    left3();
    left4();
    right1();
    right2();
    right4();
    right3();
    borders();

});

function map1() {
    var allData = { "citys": [{ "name": "延寿", "value": [128.331644, 45.451897, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临江", "value": [126.918087, 41.811979, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "嘉兴", "value": [120.755486, 30.746129, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "四平", "value": [124.350398, 43.16642, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "营口", "value": [122.235418, 40.667012, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "密云", "value": [116.801346, 40.35874, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "威海", "value": [122.12042, 37.513068, 32], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "杭州", "value": [120.15507, 30.274085, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "集安", "value": [126.194031, 41.125307, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "贵阳", "value": [106.630154, 26.647661, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "抚顺", "value": [123.957208, 41.880872, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海门", "value": [121.181615, 31.871173, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "珠海", "value": [113.576726, 22.270715, 9], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "河北", "value": [114.475704, 38.584854, -19], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "深圳", "value": [114.057868, 22.543099, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "黄浦", "value": [121.484443, 31.231763, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "蓬莱", "value": [120.758848, 37.810661, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "吉首", "value": [109.705708, 28.266849, -364], "symbolSize": 14, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "甘肃", "value": [103.826308, 36.059421, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "龙井", "value": [129.427066, 42.766311, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "茂名", "value": [110.925456, 21.662999, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "丹东", "value": [124.354707, 40.0005, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "晋中", "value": [112.752695, 37.687024, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "浙江", "value": [120.152792, 30.267447, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "海城", "value": [122.685217, 40.882377, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "溆浦", "value": [110.594921, 27.908281, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "北京", "value": [116.407526, 39.90403, -14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "铁岭", "value": [123.726166, 42.223769, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大同", "value": [113.61244, 40.040295, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "金坛", "value": [119.597897, 31.723247, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "齐齐哈尔", "value": [109.705708, 28.266849, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "咸阳", "value": [108.708991, 34.329605, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "四川", "value": [104.075931, 30.651652, -5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "福田", "value": [114.055036, 22.52153, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "盘锦", "value": [122.070714, 41.119997, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "中山", "value": [113.392782, 22.517646, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "福建", "value": [119.295144, 26.10078, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "泰顺", "value": [119.717649, 27.556884, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宝山", "value": [131.401589, 46.577167, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "庆安", "value": [127.507825, 46.880102, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海淀", "value": [116.298056, 39.959912, 32], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大兴", "value": [116.341395, 39.726929, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "桦川", "value": [130.719081, 47.023001, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "惠州", "value": [114.416196, 23.111847, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "青岛", "value": [120.38264, 36.067082, 52], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "朝阳", "value": [116.443108, 39.92147, 17], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "沈阳", "value": [123.431475, 41.805698, 41], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "菏泽", "value": [115.480656, 35.23375, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南通", "value": [120.894291, 31.980172, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南充", "value": [106.110698, 30.837793, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "双城", "value": [126.312745, 45.383263, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南京", "value": [118.796877, 32.060255, 17], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "新疆", "value": [87.627704, 43.793026, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "成都", "value": [104.066541, 30.572269, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "陕西", "value": [108.954239, 34.265472, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "黄岛", "value": [120.04619, 35.872664, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "温州", "value": [120.699367, 27.994267, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "石家庄", "value": [114.51486, 38.042307, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "邢台", "value": [114.504844, 37.070589, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "赣州", "value": [114.93503, 25.831829, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "义乌", "value": [120.075058, 29.306841, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南昌", "value": [115.858198, 28.682892, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "闵行", "value": [121.381709, 31.112813, 18], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长宁", "value": [121.424624, 31.220367, 7], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "道里", "value": [126.616957, 45.755777, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "乳山", "value": [121.539765, 36.919816, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "双流", "value": [103.923648, 30.574473, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "广州", "value": [113.264435, 23.129163, 13], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "西城", "value": [116.365868, 39.912289, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "佳木斯", "value": [130.318917, 46.799923, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "皇姑", "value": [123.44197, 41.824796, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "榆树", "value": [126.533146, 44.840288, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临汾", "value": [111.518976, 36.088005, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "上海", "value": [121.473701, 31.230416, 44], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "重庆", "value": [106.568088, 29.643221, -23], "symbolSize": 10, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "尚志", "value": [128.009895, 45.209586, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "湖里", "value": [118.146769, 24.512905, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "台州", "value": [121.420757, 28.656386, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "潍坊", "value": [119.161756, 36.706774, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "苏州", "value": [120.585316, 31.298886, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "房山", "value": [116.143267, 39.749144, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "即墨", "value": [120.447128, 36.389639, 15], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "舒兰", "value": [126.965607, 44.406106, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "延吉", "value": [129.508946, 42.891255, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "三河", "value": [117.078295, 39.982718, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大连", "value": [121.614682, 38.914003, 40], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "辉南", "value": [126.046912, 42.684993, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "无锡", "value": [120.31191, 31.49117, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "常州", "value": [119.973987, 31.810689, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "广西", "value": [108.327546, 22.815478, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "泉州", "value": [118.675676, 24.874132, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "昌平", "value": [116.231204, 40.22066, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海阳", "value": [121.158434, 36.776378, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "郑州", "value": [113.625368, 34.7466, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "东城", "value": [116.416357, 39.928353, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "黄骅", "value": [117.330048, 38.371383, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "武侯", "value": [104.04339, 30.641982, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鸡东", "value": [131.12408, 45.260412, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "龙口", "value": [120.477813, 37.646108, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "汤原", "value": [129.905072, 46.730706, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "湖北", "value": [114.341862, 30.546498, -4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "克拉玛依", "value": [84.889207, 45.579889, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "厦门", "value": [118.089425, 24.479834, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "哈尔滨", "value": [126.534967, 45.803775, 8], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "秦皇岛", "value": [119.600493, 39.935385, 7], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "江苏", "value": [118.763232, 32.061707, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "常熟", "value": [120.752481, 31.654376, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "烟台", "value": [121.447935, 37.463822, 24], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "和平", "value": [117.21451, 39.116949, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "环翠", "value": [122.123444, 37.501991, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宣武门外东大街", "value": [116.378888, 39.899332, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "张家港", "value": [120.553284, 31.870367, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临安", "value": [119.724733, 30.233873, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "延安", "value": [109.489727, 36.585455, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "天津", "value": [117.200983, 39.084158, 28], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "城阳", "value": [120.39631, 36.307064, 15], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "石景山", "value": [116.222982, 39.906611, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长沙", "value": [112.938814, 28.228209, 5], "symbolSize": 12, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "安徽", "value": [117.284923, 31.861184, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "昆山", "value": [120.980737, 31.385598, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "徐汇", "value": [121.436525, 31.188523, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "东港", "value": [124.152705, 39.863008, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "廊坊", "value": [116.683752, 39.538047, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鞍山", "value": [122.994329, 41.108647, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海陵", "value": [119.919425, 32.491016, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "吉首", "value": [109.705708, 28.266849, -198], "symbolSize": 8, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "西藏", "value": [91.117212, 29.646923, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "河南", "value": [113.274379, 34.445122, 0], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "湖南", "value": [112.98381, 28.112444, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "佛山", "value": [113.121416, 23.021548, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "珲春", "value": [130.366036, 42.862821, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "扬州", "value": [119.412966, 32.39421, 5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "日照", "value": [119.526888, 35.416377, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "唐山", "value": [118.180194, 39.630867, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "同江", "value": [132.510919, 47.642707, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "荣成", "value": [122.486658, 37.16516, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "虎林", "value": [132.93721, 45.762686, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "武汉", "value": [114.305393, 30.593099, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "合肥", "value": [117.227239, 31.820587, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "荆州", "value": [112.239741, 30.335165, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "丰台", "value": [116.287149, 39.858427, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "山东", "value": [117.020359, 36.66853, -6], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "舟山", "value": [122.207216, 29.985295, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "连云港", "value": [119.221611, 34.596653, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "西安", "value": [108.940175, 34.341568, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "济南", "value": [117.12, 36.651216, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "绵阳", "value": [104.679114, 31.46745, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长沙", "value": [113.000194, 28.242883, -58], "symbolSize": 3, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "山西", "value": [112.562398, 37.873532, -3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "呼和浩特", "value": [106.562914, 29.569238, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "河西", "value": [117.223372, 39.109563, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "兴和", "value": [113.834173, 40.872301, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "重庆", "value": [106.551557, 29.56301, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "胶州", "value": [120.033382, 36.26468, 5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宁波", "value": [121.550357, 29.874557, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "滨海", "value": [119.820831, 33.990334, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "太原", "value": [112.548879, 37.87059, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鸡西", "value": [130.969333, 45.295075, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "兰山", "value": [118.347707, 35.051729, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "阳泉", "value": [113.580519, 37.856972, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "勃利", "value": [130.592171, 45.755063, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长春", "value": [125.323544, 43.817072, 8], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }], "moveLines": [{ "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.576726, 22.270715]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.965607, 44.406106]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.614682, 38.914003]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [126.194031, 41.125307]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.957208, 41.880872]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [118.796877, 32.060255]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [123.431475, 41.805698]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.123444, 37.501991]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [121.614682, 38.914003]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.834173, 40.872301]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [130.592171, 45.755063]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.614682, 38.914003]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.431475, 41.805698]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.381709, 31.112813]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [116.443108, 39.92147]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.04619, 35.872664]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [121.473701, 31.230416]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [109.705708, 28.266849]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.685217, 40.882377]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [109.705708, 28.266849]] }, { "fromName": "四川", "toName": "北京", "coords": [[104.075931, 30.651652], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.365868, 39.912289]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [124.354707, 40.0005]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.550357, 29.874557]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [109.705708, 28.266849]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.585316, 31.298886]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.957208, 41.880872]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.724733, 30.233873]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.298056, 39.959912]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [115.858198, 28.682892]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [109.705708, 28.266849]] }, { "fromName": "山西", "toName": "北京", "coords": [[112.562398, 37.873532], [120.39631, 36.307064]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.264435, 23.129163]] }, { "fromName": "上海", "toName": "北京", "coords": [[121.473701, 31.230416], [109.705708, 28.266849]] }, { "fromName": "四川", "toName": "北京", "coords": [[104.075931, 30.651652], [113.580519, 37.856972]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [109.705708, 28.266849]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [116.298056, 39.959912]] }, { "fromName": "安徽", "toName": "北京", "coords": [[117.284923, 31.861184], [114.475704, 38.584854]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [106.562914, 29.569238]] }, { "fromName": "广西", "toName": "北京", "coords": [[108.327546, 22.815478], [110.925456, 21.662999]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.416357, 39.928353]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [122.070714, 41.119997]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.431475, 41.805698]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.287149, 39.858427]] }, { "fromName": "四川", "toName": "北京", "coords": [[104.075931, 30.651652], [122.070714, 41.119997]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.44197, 41.824796]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [132.93721, 45.762686]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [131.401589, 46.577167]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.38264, 36.067082]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.447935, 37.463822]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [126.918087, 41.811979]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.04619, 35.872664]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.51486, 38.042307]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [129.905072, 46.730706]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.918087, 41.811979]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.12, 36.651216]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [112.548879, 37.87059]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.12042, 37.513068]] }, { "fromName": "湖北", "toName": "北京", "coords": [[114.341862, 30.546498], [114.057868, 22.543099]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [122.486658, 37.16516]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [113.625368, 34.7466]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.443108, 39.92147]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.980737, 31.385598]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.312745, 45.383263]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [84.889207, 45.579889]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [121.473701, 31.230416]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.158434, 36.776378]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.378888, 39.899332]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [116.298056, 39.959912]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [122.12042, 37.513068]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [112.752695, 37.687024]] }, { "fromName": "西藏", "toName": "北京", "coords": [[91.117212, 29.646923], [113.264435, 23.129163]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [120.31191, 31.49117]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.39631, 36.307064]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [116.287149, 39.858427]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.412966, 32.39421]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [117.200983, 39.084158]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.412966, 32.39421]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.755486, 30.746129]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [128.331644, 45.451897]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.075058, 29.306841]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.553284, 31.870367]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [106.630154, 26.647661]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.000194, 28.242883]] }, { "fromName": "河南", "toName": "北京", "coords": [[113.274379, 34.445122], [122.235418, 40.667012]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.227239, 31.820587]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.585316, 31.298886]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.533146, 44.840288]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.752481, 31.654376]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.539765, 36.919816]] }, { "fromName": "四川", "toName": "北京", "coords": [[104.075931, 30.651652], [120.38264, 36.067082]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.057868, 22.543099]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [116.416357, 39.928353]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.473701, 31.230416]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [121.550357, 29.874557]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.181615, 31.871173]] }, { "fromName": "山西", "toName": "北京", "coords": [[112.562398, 37.873532], [123.431475, 41.805698]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [104.066541, 30.572269]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [115.858198, 28.682892]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [109.705708, 28.266849]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [118.347707, 35.051729]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.274379, 34.445122]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.055036, 22.52153]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.973987, 31.810689]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [103.923648, 30.574473]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.161756, 36.706774]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [109.489727, 36.585455]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [125.323544, 43.817072]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.796877, 32.060255]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [117.21451, 39.116949]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [126.534967, 45.803775]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.305393, 30.593099]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.919425, 32.491016]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.526888, 35.416377]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.420757, 28.656386]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [118.089425, 24.479834]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [106.630154, 26.647661]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.994329, 41.108647]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [122.486658, 37.16516]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.200983, 39.084158]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.223372, 39.109563]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.600493, 39.935385]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [112.239741, 30.335165]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.416357, 39.928353]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.447128, 36.389639]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [116.365868, 39.912289]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.341395, 39.726929]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [126.534967, 45.803775]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.763232, 32.061707]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.21451, 39.116949]] }, { "fromName": "江苏", "toName": "北京", "coords": [[118.763232, 32.061707], [131.12408, 45.260412]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [126.046912, 42.684993]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.057868, 22.543099]] }, { "fromName": "福建", "toName": "北京", "coords": [[119.295144, 26.10078], [119.717649, 27.556884]] }, { "fromName": "上海", "toName": "北京", "coords": [[121.473701, 31.230416], [114.057868, 22.543099]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.600493, 39.935385]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.436525, 31.188523]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.222982, 39.906611]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [120.39631, 36.307064]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.12042, 37.513068]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.416196, 23.111847]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.477813, 37.646108]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [124.350398, 43.16642]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [106.110698, 30.837793]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [124.152705, 39.863008]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [108.940175, 34.341568]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [119.820831, 33.990334]] }, { "fromName": "河南", "toName": "北京", "coords": [[113.274379, 34.445122], [120.38264, 36.067082]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.980737, 31.385598]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [112.938814, 28.228209]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.534967, 45.803775]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [128.009895, 45.209586]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [116.416357, 39.928353]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [113.576726, 22.270715]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [123.726166, 42.223769]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.758848, 37.810661]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [117.200983, 39.084158]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [117.200983, 39.084158]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.550357, 29.874557]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.473701, 31.230416]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [113.121416, 23.021548]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.424624, 31.220367]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [130.366036, 42.862821]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [121.484443, 31.231763]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [122.12042, 37.513068]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [125.323544, 43.817072]] }, { "fromName": "新疆", "toName": "北京", "coords": [[87.627704, 43.793026], [121.473701, 31.230416]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [130.969333, 45.295075]] }, { "fromName": "陕西", "toName": "北京", "coords": [[108.954239, 34.265472], [106.562914, 29.569238]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.221611, 34.596653]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.15507, 30.274085]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.755486, 30.746129]] }, { "fromName": "陕西", "toName": "北京", "coords": [[108.954239, 34.265472], [122.070714, 41.119997]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [132.510919, 47.642707]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.15507, 30.274085]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.207216, 29.985295]] }, { "fromName": "河南", "toName": "北京", "coords": [[113.274379, 34.445122], [121.614682, 38.914003]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [104.679114, 31.46745]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [110.594921, 27.908281]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.443108, 39.92147]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.31191, 31.49117]] }, { "fromName": "浙江", "toName": "北京", "coords": [[120.152792, 30.267447], [123.431475, 41.805698]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.146769, 24.512905]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.31191, 31.49117]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.424624, 31.220367]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [120.033382, 36.26468]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.38264, 36.067082]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [116.298056, 39.959912]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.089425, 24.479834]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.392782, 22.517646]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [112.548879, 37.87059]] }, { "fromName": "新疆", "toName": "北京", "coords": [[87.627704, 43.793026], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [104.04339, 30.641982]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [116.683752, 39.538047]] }, { "fromName": "浙江", "toName": "北京", "coords": [[120.152792, 30.267447], [111.518976, 36.088005]] }, { "fromName": "湖北", "toName": "北京", "coords": [[114.341862, 30.546498], [117.200983, 39.084158]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.675676, 24.874132]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.699367, 27.994267]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.180194, 39.630867]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [123.726166, 42.223769]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [120.447128, 36.389639]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [121.473701, 31.230416]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.264435, 23.129163]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.683752, 39.538047]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.486658, 37.16516]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [122.685217, 40.882377]] }, { "fromName": "湖南", "toName": "北京", "coords": [[112.98381, 28.112444], [123.431475, 41.805698]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [120.38264, 36.067082]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [121.614682, 38.914003]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [113.576726, 22.270715]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.143267, 39.749144]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [119.597897, 31.723247]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [109.705708, 28.266849]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.341395, 39.726929]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.801346, 40.35874]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.21451, 39.116949]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [129.427066, 42.766311]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [126.616957, 45.755777]] }, { "fromName": "山东", "toName": "北京", "coords": [[117.020359, 36.66853], [114.305393, 30.593099]] }, { "fromName": "甘肃", "toName": "北京", "coords": [[103.826308, 36.059421], [120.752481, 31.654376]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.447935, 37.463822]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.298056, 39.959912]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [112.938814, 28.228209]] }, { "fromName": "天津", "toName": "北京", "coords": [[117.200983, 39.084158], [114.51486, 38.042307]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.121416, 23.021548]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [117.330048, 38.371383]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [113.392782, 22.517646]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.407526, 39.90403]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.078295, 39.982718]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [127.507825, 46.880102]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [112.938814, 28.228209]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [108.940175, 34.341568]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [116.443108, 39.92147]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [116.287149, 39.858427]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [129.508946, 42.891255]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [125.323544, 43.817072]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.200983, 39.084158]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [116.231204, 40.22066]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [114.93503, 25.831829]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.089425, 24.479834]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [119.600493, 39.935385]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [115.480656, 35.23375]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [121.381709, 31.112813]] }, { "fromName": "长沙", "toName": "北京", "coords": [[113.000194, 28.242883], [116.222982, 39.906611]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.576726, 22.270715]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [120.38264, 36.067082]] }, { "fromName": "北京", "toName": "北京", "coords": [[116.407526, 39.90403], [121.181615, 31.871173]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [125.323544, 43.817072]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.39631, 36.307064]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.61244, 40.040295]] }, { "fromName": "湖北", "toName": "北京", "coords": [[114.341862, 30.546498], [114.504844, 37.070589]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.033382, 36.26468]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [106.551557, 29.56301]] }, { "fromName": "河北", "toName": "北京", "coords": [[114.475704, 38.584854], [130.318917, 46.799923]] }, { "fromName": "甘肃", "toName": "北京", "coords": [[103.826308, 36.059421], [121.614682, 38.914003]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [118.796877, 32.060255]] }, { "fromName": "内蒙古", "toName": "北京", "coords": [[106.568088, 29.643221], [119.526888, 35.416377]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [131.12408, 45.260412]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.447128, 36.389639]] }, { "fromName": "江苏", "toName": "北京", "coords": [[118.763232, 32.061707], [116.443108, 39.92147]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.894291, 31.980172]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.553284, 31.870367]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [117.078295, 39.982718]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [108.708991, 34.329605]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [113.392782, 22.517646]] }, { "fromName": "吉首", "toName": "北京", "coords": [[109.705708, 28.266849], [120.033382, 36.26468]] }] };

    var option = {
        backgroundColor: 'transparent',
        title: {
            text: '湘西旅游景点客源分布图_城规所',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: false,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    //地图区域的颜色
                    areaColor: '#0d2962',
                    //地图
                    borderColor: '#0cb0fc',
                    //边框的宽度
                    borderWidth:1
                },
                emphasis: {
                    //强调颜色，鼠标放上去的颜色
                    areaColor: '#0cb0fc'
                }
            }
        },
        series: [{
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'pin',
                symbolSize: 3,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //散射线起始点的颜色
                        offset: 0, color: '#54e4db'
                    }, {
                        //散射线结束点的颜色
                            offset: 1, color: '#cf366d'
                    }], false),
                    width: 1,
                    opacity: 0.2,
                    curveness: 0.1
                }
            },
            data: allData.moveLines
        }]
    };

    var myChart = echarts.init(document.getElementById('map1'));
    myChart.setOption(option);
}

function map2(){
    var geoCoordMap = {
        "海门": [121.15, 31.89],
        "鄂尔多斯": [109.781327, 39.608266],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
        "泉州": [118.58, 24.93],
        "莱西": [120.53, 36.86],
        "日照": [119.46, 35.42],
        "胶南": [119.97, 35.88],
        "南通": [121.05, 32.08],
        "拉萨": [91.11, 29.97],
        "云浮": [112.02, 22.93],
        "梅州": [116.1, 24.55],
        "文登": [122.05, 37.2],
        "上海": [121.48, 31.22],
        "攀枝花": [101.718637, 26.582347],
        "威海": [122.1, 37.5],
        "承德": [117.93, 40.97],
        "厦门": [118.1, 24.46],
        "汕尾": [115.375279, 22.786211],
        "潮州": [116.63, 23.68],
        "丹东": [124.37, 40.13],
        "太仓": [121.1, 31.45],
        "曲靖": [103.79, 25.51],
        "烟台": [121.39, 37.52],
        "福州": [119.3, 26.08],
        "瓦房店": [121.979603, 39.627114],
        "即墨": [120.45, 36.38],
        "抚顺": [123.97, 41.97],
        "玉溪": [102.52, 24.35],
        "张家口": [114.87, 40.82],
        "阳泉": [113.57, 37.85],
        "莱州": [119.942327, 37.177017],
        "湖州": [120.1, 30.86],
        "汕头": [116.69, 23.39],
        "昆山": [120.95, 31.39],
        "宁波": [121.56, 29.86],
        "湛江": [110.359377, 21.270708],
        "揭阳": [116.35, 23.55],
        "荣成": [122.41, 37.16],
        "连云港": [119.16, 34.59],
        "葫芦岛": [120.836932, 40.711052],
        "常熟": [120.74, 31.64],
        "东莞": [113.75, 23.04],
        "河源": [114.68, 23.73],
        "淮安": [119.15, 33.5],
        "泰州": [119.9, 32.49],
        "南宁": [108.33, 22.84],
        "营口": [122.18, 40.65],
        "惠州": [114.4, 23.09],
        "江阴": [120.26, 31.91],
        "蓬莱": [120.75, 37.8],
        "韶关": [113.62, 24.84],
        "嘉峪关": [98.289152, 39.77313],
        "广州": [113.23, 23.16],
        "延安": [109.47, 36.6],
        "太原": [112.53, 37.87],
        "清远": [113.01, 23.7],
        "中山": [113.38, 22.52],
        "昆明": [102.73, 25.04],
        "寿光": [118.73, 36.86],
        "盘锦": [122.070714, 41.119997],
        "长治": [113.08, 36.18],
        "深圳": [114.07, 22.62],
        "珠海": [113.52, 22.3],
        "宿迁": [118.3, 33.96],
        "咸阳": [108.72, 34.36],
        "铜川": [109.11, 35.09],
        "平度": [119.97, 36.77],
        "佛山": [113.11, 23.05],
        "海口": [110.35, 20.02],
        "江门": [113.06, 22.61],
        "章丘": [117.53, 36.72],
        "肇庆": [112.44, 23.05],
        "大连": [121.62, 38.92],
        "临汾": [111.5, 36.08],
        "吴江": [120.63, 31.16],
        "石嘴山": [106.39, 39.04],
        "沈阳": [123.38, 41.8],
        "苏州": [120.62, 31.32],
        "茂名": [110.88, 21.68],
        "嘉兴": [120.76, 30.77],
        "长春": [125.35, 43.88],
        "胶州": [120.03336, 36.264622],
        "银川": [106.27, 38.47],
        "张家港": [120.555821, 31.875428],
        "三门峡": [111.19, 34.76],
        "锦州": [121.15, 41.13],
        "南昌": [115.89, 28.68],
        "柳州": [109.4, 24.33],
        "三亚": [109.511909, 18.252847],
        "自贡": [104.778442, 29.33903],
        "吉林": [126.57, 43.87],
        "阳江": [111.95, 21.85],
        "泸州": [105.39, 28.91],
        "西宁": [101.74, 36.56],
        "宜宾": [104.56, 29.77],
        "呼和浩特": [111.65, 40.82],
        "成都": [104.06, 30.67],
        "大同": [113.3, 40.12],
        "镇江": [119.44, 32.2],
        "桂林": [110.28, 25.29],
        "张家界": [110.479191, 29.117096],
        "宜兴": [119.82, 31.36],
        "北海": [109.12, 21.49],
        "西安": [108.95, 34.27],
        "金坛": [119.56, 31.74],
        "东营": [118.49, 37.46],
        "牡丹江": [129.58, 44.6],
        "遵义": [106.9, 27.7],
        "绍兴": [120.58, 30.01],
        "扬州": [119.42, 32.39],
        "常州": [119.95, 31.79],
        "潍坊": [119.1, 36.62],
        "重庆": [106.54, 29.59],
        "台州": [121.420757, 28.656386],
        "南京": [118.78, 32.04],
        "滨州": [118.03, 37.36],
        "贵阳": [106.71, 26.57],
        "无锡": [120.29, 31.59],
        "本溪": [123.73, 41.3],
        "克拉玛依": [84.77, 45.59],
        "渭南": [109.5, 34.52],
        "马鞍山": [118.48, 31.56],
        "宝鸡": [107.15, 34.38],
        "焦作": [113.21, 35.24],
        "句容": [119.16, 31.95],
        "北京": [116.46, 39.92],
        "徐州": [117.2, 34.26],
        "衡水": [115.72, 37.72],
        "包头": [110, 40.58],
        "绵阳": [104.73, 31.48],
        "乌鲁木齐": [87.68, 43.77],
        "枣庄": [117.57, 34.86],
        "杭州": [120.19, 30.26],
        "淄博": [118.05, 36.78],
        "鞍山": [122.85, 41.12],
        "溧阳": [119.48, 31.43],
        "库尔勒": [86.06, 41.68],
        "安阳": [114.35, 36.1],
        "开封": [114.35, 34.79],
        "济南": [117, 36.65],
        "德阳": [104.37, 31.13],
        "温州": [120.65, 28.01],
        "九江": [115.97, 29.71],
        "邯郸": [114.47, 36.6],
        "临安": [119.72, 30.23],
        "兰州": [103.73, 36.03],
        "沧州": [116.83, 38.33],
        "临沂": [118.35, 35.05],
        "南充": [106.110698, 30.837793],
        "天津": [117.2, 39.13],
        "富阳": [119.95, 30.07],
        "泰安": [117.13, 36.18],
        "诸暨": [120.23, 29.71],
        "郑州": [113.65, 34.76],
        "哈尔滨": [126.63, 45.75],
        "聊城": [115.97, 36.45],
        "芜湖": [118.38, 31.33],
        "唐山": [118.02, 39.63],
        "平顶山": [113.29, 33.75],
        "邢台": [114.48, 37.05],
        "德州": [116.29, 37.45],
        "济宁": [116.59, 35.38],
        "荆州": [112.239741, 30.335165],
        "宜昌": [111.3, 30.7],
        "义乌": [120.06, 29.32],
        "丽水": [119.92, 28.45],
        "洛阳": [112.44, 34.7],
        "秦皇岛": [119.57, 39.95],
        "株洲": [113.16, 27.83],
        "石家庄": [114.48, 38.03],
        "莱芜": [117.67, 36.19],
        "常德": [111.69, 29.05],
        "保定": [115.48, 38.85],
        "湘潭": [112.91, 27.87],
        "金华": [119.64, 29.12],
        "岳阳": [113.09, 29.37],
        "长沙": [113, 28.21],
        "衢州": [118.88, 28.97],
        "廊坊": [116.7, 39.53],
        "菏泽": [115.480656, 35.23375],
        "合肥": [117.27, 31.86],
        "武汉": [114.31, 30.52],
        "大庆": [125.03, 46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push(geoCoord.concat(data[i].value));
            }
        }
        return res;
    };

    var option = {
        backgroundColor: 'transparent',
        title: {
            text: '各广场客单价分布',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show:false,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            },
            padding:30
        },
        visualMap: {
            min: 0,
            max: 300,
            splitNumber: 5,
            color: ['#ff3970', '#ff6b3e', '#ffc63e', '#33e9ff','#b5e7d1'],
            textStyle: {
                color: '#fff'
            },
            padding:[0, 0, 30, -10]
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    //区域的颜色
                    areaColor: '#0d2962',
                    //区域边框的颜色
                    borderColor: '#0cb0fc',
                    //边框的宽度
                    borderWidth:1
                },
                emphasis: {
                    //鼠标放上去的颜色
                    areaColor: '#0cb0fc'
                }
            }
        },
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData([
                    { name: "海门", value: 9 },
                    { name: "鄂尔多斯", value: 12 },
                    { name: "招远", value: 12 },
                    { name: "舟山", value: 12 },
                    { name: "齐齐哈尔", value: 14 },
                    { name: "盐城", value: 15 },
                    { name: "赤峰", value: 16 },
                    { name: "青岛", value: 18 },
                    { name: "乳山", value: 18 },
                    { name: "金昌", value: 19 },
                    { name: "泉州", value: 21 },
                    { name: "莱西", value: 21 },
                    { name: "日照", value: 21 },
                    { name: "胶南", value: 22 },
                    { name: "南通", value: 23 },
                    { name: "拉萨", value: 24 },
                    { name: "云浮", value: 24 },
                    { name: "梅州", value: 25 },
                    { name: "文登", value: 25 },
                    { name: "上海", value: 25 },
                    { name: "攀枝花", value: 25 },
                    { name: "威海", value: 25 },
                    { name: "承德", value: 25 },
                    { name: "厦门", value: 26 },
                    { name: "汕尾", value: 26 },
                    { name: "潮州", value: 26 },
                    { name: "丹东", value: 27 },
                    { name: "太仓", value: 27 },
                    { name: "曲靖", value: 27 },
                    { name: "烟台", value: 28 },
                    { name: "福州", value: 29 },
                    { name: "瓦房店", value: 30 },
                    { name: "即墨", value: 30 },
                    { name: "抚顺", value: 31 },
                    { name: "玉溪", value: 31 },
                    { name: "张家口", value: 31 },
                    { name: "阳泉", value: 31 },
                    { name: "莱州", value: 32 },
                    { name: "湖州", value: 32 },
                    { name: "汕头", value: 32 },
                    { name: "昆山", value: 33 },
                    { name: "宁波", value: 33 },
                    { name: "湛江", value: 33 },
                    { name: "揭阳", value: 34 },
                    { name: "荣成", value: 34 },
                    { name: "连云港", value: 35 },
                    { name: "葫芦岛", value: 35 },
                    { name: "常熟", value: 36 },
                    { name: "东莞", value: 36 },
                    { name: "河源", value: 36 },
                    { name: "淮安", value: 36 },
                    { name: "泰州", value: 36 },
                    { name: "南宁", value: 37 },
                    { name: "营口", value: 37 },
                    { name: "惠州", value: 37 },
                    { name: "江阴", value: 37 },
                    { name: "蓬莱", value: 37 },
                    { name: "韶关", value: 38 },
                    { name: "嘉峪关", value: 38 },
                    { name: "广州", value: 38 },
                    { name: "延安", value: 38 },
                    { name: "太原", value: 39 },
                    { name: "清远", value: 39 },
                    { name: "中山", value: 39 },
                    { name: "昆明", value: 39 },
                    { name: "寿光", value: 40 },
                    { name: "盘锦", value: 40 },
                    { name: "长治", value: 41 },
                    { name: "深圳", value: 41 },
                    { name: "珠海", value: 42 },
                    { name: "宿迁", value: 43 },
                    { name: "咸阳", value: 43 },
                    { name: "铜川", value: 44 },
                    { name: "平度", value: 44 },
                    { name: "佛山", value: 44 },
                    { name: "海口", value: 44 },
                    { name: "江门", value: 45 },
                    { name: "章丘", value: 45 },
                    { name: "肇庆", value: 46 },
                    { name: "大连", value: 47 },
                    { name: "临汾", value: 47 },
                    { name: "吴江", value: 47 },
                    { name: "石嘴山", value: 49 },
                    { name: "沈阳", value: 50 },
                    { name: "苏州", value: 50 },
                    { name: "茂名", value: 50 },
                    { name: "嘉兴", value: 51 },
                    { name: "长春", value: 51 },
                    { name: "胶州", value: 52 },
                    { name: "银川", value: 52 },
                    { name: "张家港", value: 52 },
                    { name: "三门峡", value: 53 },
                    { name: "锦州", value: 54 },
                    { name: "南昌", value: 54 },
                    { name: "柳州", value: 54 },
                    { name: "三亚", value: 54 },
                    { name: "自贡", value: 56 },
                    { name: "吉林", value: 56 },
                    { name: "阳江", value: 57 },
                    { name: "泸州", value: 57 },
                    { name: "西宁", value: 57 },
                    { name: "宜宾", value: 58 },
                    { name: "呼和浩特", value: 58 },
                    { name: "成都", value: 58 },
                    { name: "大同", value: 58 },
                    { name: "镇江", value: 59 },
                    { name: "桂林", value: 59 },
                    { name: "张家界", value: 59 },
                    { name: "宜兴", value: 59 },
                    { name: "北海", value: 60 },
                    { name: "西安", value: 61 },
                    { name: "金坛", value: 62 },
                    { name: "东营", value: 62 },
                    { name: "牡丹江", value: 63 },
                    { name: "遵义", value: 63 },
                    { name: "绍兴", value: 63 },
                    { name: "扬州", value: 64 },
                    { name: "常州", value: 64 },
                    { name: "潍坊", value: 65 },
                    { name: "重庆", value: 66 },
                    { name: "台州", value: 67 },
                    { name: "南京", value: 67 },
                    { name: "滨州", value: 70 },
                    { name: "贵阳", value: 71 },
                    { name: "无锡", value: 71 },
                    { name: "本溪", value: 71 },
                    { name: "克拉玛依", value: 72 },
                    { name: "渭南", value: 72 },
                    { name: "马鞍山", value: 72 },
                    { name: "宝鸡", value: 72 },
                    { name: "焦作", value: 75 },
                    { name: "句容", value: 75 },
                    { name: "北京", value: 79 },
                    { name: "徐州", value: 79 },
                    { name: "衡水", value: 80 },
                    { name: "包头", value: 80 },
                    { name: "绵阳", value: 80 },
                    { name: "乌鲁木齐", value: 84 },
                    { name: "枣庄", value: 84 },
                    { name: "杭州", value: 84 },
                    { name: "淄博", value: 85 },
                    { name: "鞍山", value: 86 },
                    { name: "溧阳", value: 86 },
                    { name: "库尔勒", value: 86 },
                    { name: "安阳", value: 90 },
                    { name: "开封", value: 90 },
                    { name: "济南", value: 92 },
                    { name: "德阳", value: 93 },
                    { name: "温州", value: 95 },
                    { name: "九江", value: 96 },
                    { name: "邯郸", value: 98 },
                    { name: "临安", value: 99 },
                    { name: "兰州", value: 99 },
                    { name: "沧州", value: 100 },
                    { name: "临沂", value: 103 },
                    { name: "南充", value: 104 },
                    { name: "天津", value: 105 },
                    { name: "富阳", value: 106 },
                    { name: "泰安", value: 112 },
                    { name: "诸暨", value: 112 },
                    { name: "郑州", value: 113 },
                    { name: "哈尔滨", value: 114 },
                    { name: "聊城", value: 116 },
                    { name: "芜湖", value: 117 },
                    { name: "唐山", value: 119 },
                    { name: "平顶山", value: 119 },
                    { name: "邢台", value: 119 },
                    { name: "德州", value: 120 },
                    { name: "济宁", value: 120 },
                    { name: "荆州", value: 127 },
                    { name: "宜昌", value: 130 },
                    { name: "义乌", value: 132 },
                    { name: "丽水", value: 133 },
                    { name: "洛阳", value: 134 },
                    { name: "秦皇岛", value: 136 },
                    { name: "株洲", value: 143 },
                    { name: "石家庄", value: 147 },
                    { name: "莱芜", value: 148 },
                    { name: "常德", value: 152 },
                    { name: "保定", value: 153 },
                    { name: "湘潭", value: 154 },
                    { name: "金华", value: 157 },
                    { name: "岳阳", value: 169 },
                    { name: "长沙", value: 175 },
                    { name: "衢州", value: 177 },
                    { name: "廊坊", value: 193 },
                    { name: "菏泽", value: 194 },
                    { name: "合肥", value: 229 },
                    { name: "武汉", value: 273 },
                    { name: "大庆", value: 279 }
                ]),
                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            }
        ]
    }

    var myChart = echarts.init(document.getElementById('map2'));
    myChart.setOption(option);
}

function left1() {

    var xAxisData = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i < 10; i++) {
        // xAxisData.push('time' + i);
        data1.push((Math.random() * 2).toFixed(2));
        data2.push(-Math.random().toFixed(2));
    }


    var myfontStyle = {
        fontFamily: "Microsoft YaHei",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#fff"
    }

    var itemStyle = {
        normal: {},
        emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };

    var option = {
        title: {
            show:false,
            text: '奖金统计'
        },
        backgroundColor: 'transparent',
        legend: {
            y: 'bottom',
            data: ['进', '出']
        },
        //显示工具栏
        toolbox: {
            show: false,
            feature: {
                restore: {
                    show: true
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
            }
        },
        tooltip: {
            formatter: function (params) {
                console.log(params);
                if (params.value < 0) {
                    return params.name + '<br/>助学金额:' + -params.value
                } else {
                    return params.name + '<br/>助学人数:' + params.value
                }
            }
        },
        xAxis: {
            data: xAxisData,
            name: '',
            position:'bottom',
            silent: false,
            type: 'category',
            nameTextStyle: myfontStyle,
            axisLabel: {
                color: "#FFF"
            },
            z:20,
            data: ['儿童业态', '商业管理', '地产板块', '影视文化', '其他']
        },
        legend: {
            data: ['数据保有量', '数据增速（年）'],
            padding:[0,0,10,0],
            textStyle:{
                color: '#f1f2f3'
            }, 
            right:60,           
            y: "bottom"
        },
        yAxis: [{
            inverse: true,
            name: '数据增速(%)',
            position: 'left',
            offset:-5,
            nameLocation: 'end',
            nameGap:30,
            nameTextStyle: myfontStyle,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: function (value) {
                    if (value < 0) {
                        return -value
                    } else {
                        return value
                    }
                },
                color: "#FFF"
            },
            // max:function (value) {
            //     return value.max - 20
            // }
            max:'dataMax',
            min:'dataMin'

        }, {
            inverse: true,
            name: '数据总量：(TB)',
            position: 'left',
            offset:-20,
            nameTextStyle: myfontStyle,
            nameLocation: 'start',
            splitArea: {
                show: false
            }
        }],
        grid: {},
        series: [{
            name: '数据保有量',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: [-2.3, -2.5, -1.9, -0.5, -0.3]
        }, {
            name: '数据增速（年）',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: [0.3, 0.2, 0.1, 0.1, 0.07]
        }]
    };
    var myChart = echarts.init(document.getElementById('left1'));
    myChart.setOption(option);
}
function left2() {
    var option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        title: {
            text: ''
        },
        grid:{
            x:60,
            y:60,
            x2:60,
            y2:60
        },
        width: '200px',
        height: '90px',
        backgroundColor: 'transparent',
        toolbox: {
            show: false,
            feature: {
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            type: 'graph',
            tooltip: {},
            ribbonType: true,
            layout: 'circular',

            circular: {
                rotateLabel: true
            },
            symbolSize: 3,
            roam: true,
            focusNodeAdjacency: true,

            label: {
                normal: {
                    position: 'center',
                    fontWeight: 'bold',
                    formatter: '{b}',
                    normal: {
                        textStyle: {
                            fontFamily: '微软雅黑'
                        }
                    }
                }
            },

            edgeSymbol: ['circle'],
            edgeSymbolSize: [1, 5],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 13,
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑'
                    }
                }
            },

            itemStyle: {
                normal: {
                    label: {
                        rotate: true,
                        show: true,
                        textStyle: {
                            color: '#FFF',
                            fontWeight: 'normal'
                        }
                    },
                    color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
                },
                emphasis: {
                    label: {
                        show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    }
                }
            },

            data: [
                {
                    name: '商服系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                },
                {
                    name: '租赁系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }, {
                    name: '预算系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }, {
                    name: 'POS客流总部系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }, {
                    name: '温控系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }, {
                    name: '丹寨小镇',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#2a1469'
                        }
                    }
                },
                {
                    name: '八爪鱼',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#39c4bf'
                        }
                    }
                },
                {
                    name: '商管经分APP',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#6ac439'
                        }
                    }
                },
                {
                    name: '儿童娱乐经分',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#f5c312'
                        }
                    }
                },
                {
                    name: '商管主数据',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#f56e12'
                        }
                    }
                }, {
                    name: '酒店系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                },
                {
                    name: '企业策划活动管理系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                },
                {
                    name: '儿童娱乐业务系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }, {
                    name: 'SSO认证系统',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                },
                {
                    name: '成本系统',
                    symbolSize: 12,
                    itemStyle: {
                        normal: {
                            color: '#4e7eed'
                        }
                    }
                }
            ],
            // links: [],
            links: [{
                source: 'POS客流总部系统',
                target: '丹寨小镇',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '酒店系统',
                target: '丹寨小镇',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '租赁系统',
                target: '丹寨小镇',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '商服系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '租赁系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '预算系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: 'POS客流总部系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '温控系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '酒店系统',
                target: '商管经分APP',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '儿童娱乐业务系统',
                target: '儿童娱乐经分',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6ac439'
                    }
                }
            }, {
                source: '租赁系统',
                target: '儿童娱乐经分',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6ac439'
                    }
                }
            }, {
                source: '商服系统',
                target: '商管主数据',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '租赁系统',
                target: '商管主数据',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '预算系统',
                target: '商管主数据',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: 'POS客流总部系统',
                target: '商管主数据',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '温控系统',
                target: '商管主数据',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: 'SSO认证系统',
                target: '八爪鱼',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#ff1dce'
                    }
                }
            }, {
                source: '市规划局',
                target: '验收阶段',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }, {
                source: '市公安局',
                target: '验收阶段',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }, {
                source: '市环保局',
                target: '验收阶段',
                name: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function (params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }

            ]
        }]
    };
    var myChart = echarts.init(document.getElementById('left2'));
    myChart.setOption(option);
}
function left3(){
    function data() {
        var d = [];
        for (var i = 0; i < 12; i++) {
            d.push({
                name: i + '~' + (i + 1),
                value: Math.random() * 100
            });
        }
        return d;
    }

    var option = {
        title: {
            show:false,
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            position: ['48.5%', '49.2%'],
            backgroundColor: 'rgba(50,50,50,0)',
            textStyle: {
                color: 'yellow',
                fontWeight: 'bold'
            },
            formatter: "{d}%"
        },
        series: [{
            name: '上网时间',
            type: 'pie',
            radius: ['5%', '70%'],
            roseType: 'area',
            color: ['#3fa7dc'],
            data: data(),
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }, {
            name: '',
            type: 'gauge',
            min: 0,
            max: 24,
            startAngle: 90,
            endAngle: 449.9,
            radius: '82%',
            splitNumber: 24,
            clockwise: false,
            animation: false,
            detail: {
                formatter: '{value}',
                textStyle: {
                    color: '#63869e'
                }
            },
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [0.25, '#63869e'],
                        [0.75, '#ffffff'],
                        [1, '#63869e']
                    ],
                    width: '40%',
                    shadowColor: '#0d4b81', //默认透明
                    shadowBlur: 40,
                    opacity: 1
                }
            },
            splitLine: {
                length: 5,
                lineStyle: {
                    color: '#ffffff',
                    width: 2
                }
            },
            axisLabel: {
                formatter: function (v) {
                    return v ? v : '';
                },
                textStyle: {
                    color: "red",
                    fontWeight: 700
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    width: 2
                }
            }
        }, {
            name: '',
            type: 'gauge',
            min: 0,
            max: 24,
            startAngle: 90,
            endAngle: 449.9,
            radius: '72%',
            splitNumber: 24,
            clockwise: false,
            animation: false,
            detail: {
                formatter: '{value}',
                textStyle: {
                    color: '#63869e'
                }
            },
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#E8E8E8']
                    ],
                    width: '10%',
                    opacity: 0.8
                }
            },
            splitLine: {
                show: true,
                length: '92%',
                lineStyle: {
                    color: 'grey',
                    width: '1'
                }
            },
            axisLabel: {
                show: false,
                formatter: function (v) {
                    return v ? v : '';
                },
                textStyle: {
                    color: "#fb5310",
                    fontWeight: 700
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    width: 2,
                    borderWidth: 3,
                }
            }
        }]
    };
    var myChart = echarts.init(document.getElementById('left3'));
    myChart.setOption(option);
}
function left4(){
    var data = [
        [-18,
            18,
            0,
            1,
            1,
            10,
            "A000",
            "商管主数据"
        ],
        [-18,
            3,
            0,
            1,
            1,
            10,
            "A000",
            "成本指标精算"
        ],
        [-15,
            14,
            0,
            1,
            1,
            10,
            "A000",
            "儿童娱乐经分"
        ],
        [-10,
            7,
            0,
            1,
            1,
            10,
            "A000",
            "八爪鱼日志管理"
        ],
        [
            3,
            15, -0.890000000000000,
            0,
            0,
            20,
            "Z400",
            "新媒体广告投放"
        ],
        [
            7,
            4, -0.890000000000000,
            0,
            0,
            20,
            "Z400",
            "丹寨小镇"
        ],
        [-15, -10, -0.890000000000000,
            0,
            0,
            20,
            "Z400",
            "商管经分APP"
        ],
        [
            4, -5,
            0,
            0,
            0, -18.420000000000000,
            "2000",
            "商场商户掉铺预测"
        ],
        [
            10, -10,
            0,
            0,
            0, -18.420000000000000,
            "2000",
            "广场停车管理"
        ]
    ];
    var textStyle = {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'microsoft yahei',
        fontSize: 14,
    };
    var option = {
        backgroundColor: 'transparent',
        title: [{
            text: "",
            x: '5%',
            y: 0,
            textStyle: textStyle
        }, {
            text: "客户行为数据化",
            x: '60%',
            y: '5%',
            textStyle: textStyle
        }, {
            text: "业务场景数据化",
            x: '5%',
            y: '5%',
            textStyle: textStyle
        }, {
            text: "场景数据融合分析",
            x: '5%',
            y: '85%',
            textStyle: textStyle
        }, {
            text: "行业大数据应用",
            x: '60%',
            y: '85%',
            textStyle: textStyle
        }],
        tooltip: {
            /*返回需要的信息*/
            formatter: function (param) {
                var value = param.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' + value[7] + '(' + value[6] + ')' +
                    '</div>';
            }
        },
        xAxis: {
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            //坐标刻度最大值
            max: 17,
            //坐标可对最小值
            min: -17
        },
        yAxis: {
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            max: 17,
            min: -17
        },
        series: [{
            name: '',
            data: data,
            type: 'scatter',
            symbolSize: 20,
            label: {
                normal: {
                    position: 'right',
                    show: true,
                    formatter: function (param) {
                        var value = param.value;
                        return value[7];
                    }
                }
            },
        }]
    };
    var myChart = echarts.init(document.getElementById('left4'));
    myChart.setOption(option);
}
function right1() {
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
    ];

    var dataGZ = [
        [26, 37, 27, 1.163, 27, 13, 1],
        [85, 62, 71, 1.195, 60, 8, 2],
        [78, 38, 74, 1.363, 37, 7, 3],
        [21, 21, 36, 0.634, 40, 9, 4],
        [41, 42, 46, 0.915, 81, 13, 5],
        [56, 52, 69, 1.067, 92, 16, 6],
        [64, 30, 28, 0.924, 51, 2, 7],
        [55, 48, 74, 1.236, 75, 26, 8],
        [76, 85, 113, 1.237, 114, 27, 9],
        [91, 81, 104, 1.041, 56, 40, 10],
        [84, 39, 60, 0.964, 25, 11, 11],
        [64, 51, 101, 0.862, 58, 23, 12],
        [70, 69, 120, 1.198, 65, 36, 13],
        [77, 105, 178, 2.549, 64, 16, 14],
        [109, 68, 87, 0.996, 74, 29, 15],
        [73, 68, 97, 0.905, 51, 34, 16],
        [54, 27, 47, 0.592, 53, 12, 17],
        [51, 61, 97, 0.811, 65, 19, 18],
        [91, 71, 121, 1.374, 43, 18, 19],
        [73, 102, 182, 2.787, 44, 19, 20],
        [73, 50, 76, 0.717, 31, 20, 21],
        [84, 94, 140, 2.238, 68, 18, 22],
        [93, 77, 104, 1.165, 53, 7, 23],
        [99, 130, 227, 3.97, 55, 15, 24],
        [146, 84, 139, 1.094, 40, 17, 25],
        [113, 108, 137, 1.481, 48, 15, 26],
        [81, 48, 62, 1.619, 26, 3, 27],
        [56, 48, 68, 1.336, 37, 9, 28],
        [82, 92, 174, 3.29, 0, 13, 29],
        [106, 116, 188, 3.628, 101, 16, 30],
        [118, 50, 0, 1.383, 76, 11, 31]
    ];

    var dataSH = [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7],
        [89, 65, 78, 0.86, 51, 26, 8],
        [53, 33, 47, 0.64, 50, 17, 9],
        [80, 55, 80, 1.01, 75, 24, 10],
        [117, 81, 124, 1.03, 45, 24, 11],
        [99, 71, 142, 1.1, 62, 42, 12],
        [95, 69, 130, 1.28, 74, 50, 13],
        [116, 87, 131, 1.47, 84, 40, 14],
        [108, 80, 121, 1.3, 85, 37, 15],
        [134, 83, 167, 1.16, 57, 43, 16],
        [79, 43, 107, 1.05, 59, 37, 17],
        [71, 46, 89, 0.86, 64, 25, 18],
        [97, 71, 113, 1.17, 88, 31, 19],
        [84, 57, 91, 0.85, 55, 31, 20],
        [87, 63, 101, 0.9, 56, 41, 21],
        [104, 77, 119, 1.09, 73, 48, 22],
        [87, 62, 100, 1, 72, 28, 23],
        [168, 128, 172, 1.49, 97, 56, 24],
        [65, 45, 51, 0.74, 39, 17, 25],
        [39, 24, 38, 0.61, 47, 17, 26],
        [39, 24, 39, 0.59, 50, 19, 27],
        [93, 68, 96, 1.05, 79, 29, 28],
        [188, 143, 197, 1.66, 99, 51, 29],
        [174, 131, 174, 1.55, 108, 50, 30],
        [187, 143, 201, 1.39, 89, 53, 31]
    ];

    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    var option = {
        backgroundColor: 'transparent',
        title: {
            show:false,
            text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        legend: {
            show:false,
            bottom: 5,
            data: ['北京', '上海', '广州'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        visualMap: {
            show: false,
            min: 0,
            max: 20,
            dimension: 6,
            inRange: {
                colorLightness: [0.5, 0.8]
            }
        },
        radar: {
            indicator: [
                { name: 'AQI', max: 300 },
                { name: 'PM2.5', max: 250 },
                { name: 'PM10', max: 300 },
                { name: 'CO', max: 5 },
                { name: 'NO2', max: 200 },
                { name: 'SO2', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#F9713C'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            },
            {
                name: '上海',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#B3E4A1'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            },
            {
                name: '广州',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('right1'));
    myChart.setOption(option);
}
function right2() {

    var option = {
        backgroundColor: 'transparent',
        legend: {
            bottom: 0,
            textStyle: {
                color: '#fff',
            },
            data: ['匙量', '有效源量']
        },
        grid: {
            top:'10%',
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show: "true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                data: ['CPU', '内存', '网络IO']
            },
            {
                type: 'category',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false },
                splitArea: { show: false },
                splitLine: { show: false },
                data: ['CPU', '内存', '网络IO']
            },

        ],
        series: [
            {
                name: '有效房源量',
                type: 'bar',
                yAxisIndex: 1,

                itemStyle: {
                    normal: {
                        show: true,
                        color: '#277ace',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [100, 100, 100]
            },
            {
                name: '钥匙量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#5de3e1',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [61, 77, 20]
            }

        ]
    };

    var myChart = echarts.init(document.getElementById('right2'));
    myChart.setOption(option);
}

function right3() {

    var option = {
        backgroundColor: 'transparent',
        series: [{
            type: 'liquidFill',
            data: [0.45],
            radius: '80%'
        }]
    };
    var myChart = echarts.init(document.getElementById('right3'));
    myChart.setOption(option);
}

function right4() {
    var option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            show:false,
            orient: 'vertical',
            x: 'left',
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '50%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 30, name: '商管主数据' },
                    { value: 25, name: '儿童娱乐经分' },
                    { value: 12, name: '商管APP经分' },
                    { value: 10, name: '丹寨小镇' },
                    { value: 15, name: '八爪鱼' },
                    { value: 8, name: '其他' }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['55%', '80%'],

                data: [
                    { value: 30, name: '商管主数据' },
                    { value: 25, name: '儿童娱乐经分' },
                    { value: 5, name: '商管APP经分' },
                    { value: 5, name: '丹寨小镇' },
                    { value: 25, name: '八爪鱼' },
                    { value: 10, name: '其他' }
                ]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('right4'));
    myChart.setOption(option);
}

function borders(){
    var option = {
        backgroundColor: 'transparent',
        grid: {
            top: 5,
            left: 20,
            right: 10,
            bottom: 5
        },
        xAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            max: 800,
            min: 105
        },
        yAxis: {
            silent: true,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            max: 800,
            min: 100
        },
        series: [{
            coordinateSystem: 'cartesian2d',
            type: 'lines',
            polyline: true,
            zlevel: 1,
            effect: {
                show: true,
                constantSpeed: 100,
                trailLength: 0.5,
                symbolSize: 12,
                symbol: 'circle',
                loop: true
            },
            lineStyle: {
                normal: {
                    color: '#00b0f0',
                    opacity: 1,
                    curveness: 0.2
                }
            },
            data: [{
                coords: [
                    [100, 800],
                    [300, 800],
                    [300, 800],
                    [350, 750],
                    [350, 750],
                    [550, 750],
                    [550, 750],
                    [600, 800],
                    [600, 800],
                    [800, 800],
                    [800, 100],
                    [100, 100],
                    [100, 800]
                ]
            }]
        }]
    };
    var myChart = echarts.init(document.getElementById('Border'));
    myChart.setOption(option);
}