<template>
<div :class="{'sqwgh-tp-comp':true,'isPage':!isPage}">
    <div class="sqwgh-tp-table" ref="ElTableDivRef">
        <slot name="table"></slot>
    </div>
    <div class="sqwgh-tp-page" v-if="isPage">
        <el-pagination
            layout="sizes,slot,prev,jumper,total,next,slot"
            :page-sizes=[10,20,50,80,100]
            :total="total"
            :current-page="currentPage"
            :page-size="pageSize"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
            <div class="el-pagination-slot">
                <el-button :disabled="currentPage==1" class="el-pagination-icon-arrow-left" style="display:none;" icon="el-icon-d-arrow-left" @click="goFirst"></el-button>
                <el-button :disabled="currentPage==totalPage" class="el-pagination-icon-arrow-right" style="display:none;" icon="el-icon-d-arrow-right" @click="goLast"></el-button>
            </div>
        </el-pagination>
    </div>
</div>
</template>
<script>
export default {
    name: 'LayoutTableAndPage',
    props: {
        //是否有分页组件
        isPage: {
          type: Boolean,
          default: true
        },
        //数据总条数
        total: {
            type: [Number,String],
            default: 0
        },
        //当前页
        currentPage: {
            type: [Number,String],
            default: 1
        },
        //每页数据条数
        pageSize: {
            type: [Number,String],
            default: 10
        }
    },
    computed: {
        totalPage(){
            return Math.ceil(this.total/this.pageSize);
        }
    },
    mounted(){
        this.$nextTick(()=>{
            //分页插件中的slot渲染了两次按钮一共有四个，需要移除两个保留两个
            let leftBtns = document.getElementsByClassName("el-pagination-icon-arrow-left");
            for(let i=0;i<leftBtns.length;i++){
              if(i%2==0) leftBtns[i].style.display = 'block';
            }
            let rightBtns = document.getElementsByClassName("el-pagination-icon-arrow-right");
            for(let j=0;j<rightBtns.length;j++){
              if(j%2==1){
                rightBtns[j].style.display = 'block';
              }
            }
            //计算表格的最大高度
            this.$emit('getTableHeight',this.$refs.ElTableDivRef.clientHeight);
        })
    },
    methods: {
        //跳转第一页
        goFirst(){
            this.$emit('pageParamsChange',{
                pageNum: 1,
                pageSize: this.pageSize
            })
        },
        //跳转最后一页
        goLast(){
            this.$emit('pageParamsChange',{
                pageNum: this.totalPage,
                pageSize: this.pageSize
            })
        },
        //监听pageSize的变化
        handleSizeChange(currPageSize){
            console.log('监听currPageSize的变化')
            console.log(currPageSize)
            this.$emit('pageParamsChange',{
                pageNum: 1,
                pageSize: currPageSize
            })
        },
        //监听currentPage的变化
        handleCurrentChange(currPageNum){
            console.log('监听currPageNum的变化')
            console.log(currPageNum)
            this.$emit('pageParamsChange',{
                pageNum: currPageNum,
                pageSize: this.pageSize
            });
        }
    }
}
</script>
<style scoped>
.sqwgh-tp-comp{
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 3rem;
    border: 1px solid #3F8AB9;
}
.sqwgh-tp-comp.isPage{
  padding-bottom: 0;
}
.sqwgh-tp-table,
.sqwgh-tp-table>div{
    width: 100%;
    height: 100%;
}
.sqwgh-tp-table >>> .el-loading-mask{
    background-color: rgba(0,0,0,.8);
}
.sqwgh-tp-table >>> .el-table{
    width: 100%;
    height: 100%;
    background: transparent;
}
.sqwgh-tp-table >>> table{
    border-collapse: collapse;
}
.sqwgh-tp-table >>> .el-table__body-wrapper::-webkit-scrollbar{
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background-color: rgba(255,255,255,.2)!important;
}
.sqwgh-tp-table >>> .el-table__body-wrapper::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,.6)!important;
}
.sqwgh-tp-table >>> tr,
.sqwgh-tp-table >>> th,
.sqwgh-tp-table >>> td{
    background: transparent;
    box-sizing: border-box;
    border: none;
    font-size: 1.4rem;
    height: 4.2rem;
    color: #fff;
    padding: 0;
}
.sqwgh-tp-table >>> th,
.sqwgh-tp-table >>> td{
    border: 1px solid #3F8AB9;
}
.sqwgh-tp-table >>> td{
    background-color: #122842;
}
.sqwgh-tp-table >>> tr:nth-of-type(1) td{
    border-top: none;
}
.sqwgh-tp-table >>> tr td:nth-of-type(1){
    border-left: none;
}
.sqwgh-tp-table >>> tr:hover>td{
    background-color: #0B2122;
}
.sqwgh-tp-table >>> th{
    background-color: #0B2122;
    border-top: none;
}
.sqwgh-tp-table >>> th:nth-of-type(1){
    border-left: none;
}
.sqwgh-tp-table >>> td .cell{
  padding: 0 0.5rem;
  line-height: normal;
}
.sqwgh-tp-table >>> .el-table::before{
  height: 0;
}
.sqwgh-tp-table >>> .el-table__expand-icon{
  color: rgba(255,255,255,.8);
}
.sqwgh-tp-page{
    border-top: 1px solid #3F8AB9;
    background: #122842;
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.sqwgh-tp-page>div{
    height: 100%;
}
.sqwgh-tp-page >>> .el-pagination{
    height: 100%;
    padding: 0.5rem;
    background-color: transparent;
    box-sizing: border-box;
}
.sqwgh-tp-page >>> .el-pagination-slot{
  display: inline-block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.sqwgh-tp-page >>> .el-pagination-slot>.el-pagination-icon-arrow-left,
.sqwgh-tp-page >>> .el-pagination-slot>.el-pagination-icon-arrow-right{
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  line-height: 2rem;
  text-align: center;
  color: rgba(255,255,255,.5);
  font-weight: bold;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
}
.sqwgh-tp-page >>> button.btn-prev,
.sqwgh-tp-page >>> button.btn-next{
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: rgba(255,255,255,.5);
  background-color: transparent;
  padding: 0;
}
.sqwgh-tp-page >>> .el-pagination__jump{
    padding: 0;
    padding-right: 1rem;
    padding-left: 0.5rem;
    margin: 0;
    height: 2rem;
    line-height: 2rem;
    color: rgba(255,255,255,1);
}
.sqwgh-tp-page >>> .el-input.el-pagination__editor{
    width: 4rem;
}
.sqwgh-tp-page >>> .el-input.el-pagination__editor>.el-input__inner{
    width: 3.2rem;
    height: 2rem;
    line-height: 2rem!important;
    border: 1px solid #3F8AB9;
    border-radius: 0;
    color: #fff;
    font-size: 1.2rem;
    padding: 0!important;
    background-color: transparent;
}
.sqwgh-tp-page >>> .el-pagination__total{
    height: 2rem;
    line-height: 2rem;
    color: #fff;
    font-size: 1.2rem;
    min-width: auto;
    margin: 0;
    padding-right: 0.5rem;
}
.sqwgh-tp-page >>> .el-pagination__sizes{
    margin-right: 1rem;
    height: 2rem;
    line-height: 2rem;
}
.sqwgh-tp-page >>> .el-input.el-input--mini{
    width: 8.4rem;
    margin: 0;
}
.sqwgh-tp-page >>> .el-input.el-input--mini>.el-input__inner{
    height: 2rem;
    line-height: 2rem;
    border-radius: 0;
    border: 1px solid #3F8AB9;
    background-color: #122842;
    font-size: 1.2rem;
    color: #fff;
    width: 8.4rem;
}
.sqwgh-tp-page >>> .el-select__caret.el-input__icon{
  line-height: 2rem;
}
</style>
