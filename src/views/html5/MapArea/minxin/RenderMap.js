/*
* vue混入mixin
* [1]、混入概念：一个混入对象可以包含任意组件选项，
* --------------当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项
* --------------如data、methods、computed、watch、mounted等等都会混入对应的组件选项中
* [2]、混入规则：当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并
* --------------如data对象在内部会进行递归合并，并在发生冲突时以组件数据优先
* --------------如同名的生命周期钩子函数将合并为一个数组，都会被调用，但混入对象的钩子将在组件自身钩子之前调用
* --------------如值为对象的选项(methods、conmponents、directives等)将被合并为同一个对象，两个对象键名冲突时，取组件对象的键值对
* [3]、全局混入：Vue.mixin({})
* --------------一旦使用全局混入，它将影响每一个之后创建的Vue实例
* --------------使用恰当时，这可以用来为自定义选项注入处理逻辑
* [4]、自定义选项的合并策略：new Vue({ myOption })
* -------------------------自定义选项将使用默认策略，即简单地覆盖已有值
* -------------------------如果想让自定义选项以自定义逻辑合并，可用Vue.config.optionMergeStrategies.myOption=function(toVal,fromVal){}
* */
export default {
    data(){
        return {
            colorObj: {
                orange: 'ef790f',
                yellow: 'b7eb09',
                green: '07d98d'
            },
            Imgvisibility: 'hidden'
        }
    },
    methods: {
        imgLoadHandle(){
            let colorObj = this.colorObj;
            let mapConf = {};
            mapConf.boxW = $('.MapBox').width();
            mapConf.boxH = $('.MapBox').height();
            mapConf.imgW = $('.MapImg').width();
            mapConf.imgH = $('.MapImg').height();
            let scaleW = mapConf.boxW/mapConf.imgW;
            let scaleH = mapConf.boxH/mapConf.imgH;
            let scale,marginCalc;
            if(scaleW>scaleH){
                scale = scaleH;
                marginCalc = (mapConf.boxW-mapConf.imgW*scale)/2;
                $('.MapBox').css({
                    'transform':'scale('+scale+')',
                    'margin-left': marginCalc+'px'
                })

            }else{
                scale = scaleW;
                marginCalc = (mapConf.boxH-mapConf.imgH*scale)/2;
                $('.MapBox').css({
                    'transform':'scale('+scale+')',
                    'margin-top': marginCalc+'px'
                })
            }
            let _area = $('area');
            for(let i=0;i<_area.length;i++){
                let fillColor = 'B7EC0A';
                if(i%3==0){
                    fillColor = colorObj.orange;
                }else if(i%3==1){
                    fillColor = colorObj.yellow;
                }else if(i%3==2){
                    fillColor = colorObj.green;
                }
                $(_area[i]).data('maphilight',{
                    alwaysOn: true,
                    strokeColor: fillColor,
                    strokeWidth: 2,
                    fillColor: fillColor,
                    fillOpacity: .3,
                    shadow: true
                }).trigger('alwaysOn.maphilight');
                this.Imgvisibility = 'visible';
            }
        },
        //(1)$('#'+code).data('maphilight',{fillOpacity: .5});
        //(2)let areaDataConf = $(_area[i]).data('maphilight');
        //areaDataConf.fillOpacity = .5;
        //(2)$('#'+code).data('maphilight', areaDataConf);
        //区别：(1)是只设置了fillOpacity属性，其他的用插件默认值
        //区别：(2)是获取已经设置的配置项再改变其中fillOpacity属性的值，最后设置把所有配置项的值
        mouseoverHandle(code){
            //这个for循环的作用：
            //触发点击事件时不会触发mouseout事件，设置的area背景色还是鼠标悬浮的颜色
            //这样会出现两个area同时显示鼠标悬浮颜色的情况
            //在mouseover的方法最前面加一个for循环给所有的area背景色进行重置是必要的
            let _area = $('area');
            for(let i=0;i<_area.length;i++){
                let areaDataConf = $(_area[i]).data('maphilight');
                areaDataConf.fillOpacity = .3;
                $(_area[i]).data('maphilight',areaDataConf).trigger('alwaysOn.maphilight');
            }
            let dataConf = $('#'+code).data('maphilight');
            dataConf.fillOpacity = .6;
            $('#'+code).data('maphilight',dataConf).trigger('alwaysOn.maphilight');;
        },
        mouseoutHandle(code){
            let dataConf = $('#'+code).data('maphilight');
            dataConf.fillOpacity = 0.3;
            $('#'+code).data('maphilight',dataConf).trigger('alwaysOn.maphilight');;
        }

    },
    mounted(){
        $(".MapImg").maphilight();
    }
}
