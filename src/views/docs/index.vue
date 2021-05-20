<template>
<div class="zq-app-main-container twoLine">
    <div class="zq-app-main-head">
        <el-form :model="tableQueryForm" :inline="true">
            <div class="zq-app-main-head-item">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="tableQueryForm.name" placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input v-model="tableQueryForm.content" placeholder="请输入内容" />
                </el-form-item>
                <el-form-item label="创建开始时间" prop="startTime">
                    <el-date-picker v-model="tableQueryForm.startTime" type="date" placeholder="请选择开始日期" />
                </el-form-item>
                <el-form-item label="创建结束时间" prop="endTime">
                    <el-date-picker v-model="tableQueryForm.endTime" type="date" placeholder="请输入内容" />
                </el-form-item>
                <el-form-item style="float:right;padding-right:2rem;">
                    <el-button>查询</el-button>
                    <el-button>查询</el-button>
                </el-form-item>
            </div>
            <div class="zq-app-main-head-item">
                <el-form-item label="类型" prop="type">
                    <el-select v-model="tableQueryForm.type" placeholder="请输入内容">
                        <el-option v-for="(item,index) in docsTypeList" :key="item.code" :value="item.code" :label="item.name" />
                    </el-select>
                </el-form-item>
                <el-form-item style="float:right;padding-right:2rem;">
                    <el-button>导出</el-button>
                    <el-button>导入</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
    <div class="zq-app-main-body">
        <LayoutTableAndPage
            :total="total"
            :page-size="tableQueryForm.pageSize"
            :current-page="tableQueryForm.pageNum"
            @pageParamsChange="handlePageParamsChange">
            <div slot="table">
                <el-table :data="tableList">
                    <el-table-column label="序号" type="index" align="center" show-overflow-tooltip width="50"/>
                    <el-table-column label="操作" prop="oparate" align="center" show-overflow-tooltip width="80">
                        <template slot-scope="scope">
                            <el-button @click="viewHandle(scope.row)">查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="名称" prop="name" width="240"/>
                    <el-table-column label="内容" prop="content"/>
                    <el-table-column label="类型" prop="type" width="240"/>
                    <el-table-column label="创建时间" prop="createTime"/>
                </el-table>
            </div>
        </LayoutTableAndPage>
    </div>
    <el-dialog :title="view.title" :visible.sync="view.open">
        <component :is="view.component" />
    </el-dialog>
</div>
</template>
<script>
import { DocsType } from '@/api/comm/index'
import { indexTableList } from '@/api/docs/index'
export default {
    name: 'docs',
    data(){
        return {
            docsTypeList: [],
            //表格查询条件
            tableQueryForm: {
                pageSize: 20,
                pageNum: 1,
                name: '',
                content: '',
                startTime: '',
                endTime: '',
                type: ''
            },
            //表格数据
            tableList: [],
            //表格数据总条数
            total: 0,
            //查看弹窗
            view: {
                title: '标题',
                open: false,
                component: ''
            }
        }
    },
    methods: {
        //监听表格参数的变化
        handlePageParamsChange(params){
            this.tableQueryForm = {
                pageSize: params.pageSize,
                pageNum: params.pageNum
            };
            this.getIndexTableList();
        },
        getIndexTableList(){
            indexTableList(this.tableQueryForm).then(resp=>{
                this.total = resp.total;
                this.tableList = resp.rows;
            })
        },
        viewHandle(row){
            if(row.viewSrc){
                this.view.component = this.loadView(row.viewSrc);
                this.view.open = true;
            }
        },
        //路由懒加载：根据路径获取查看弹窗中的组件
        loadView(view){
            return (resolve) => require([`@/views/${view}`],resolve)
        }
    },
    mounted(){
        DocsType().then(resp => this.docsTypeList = resp);
        this.getIndexTableList();
    }
}
</script>
