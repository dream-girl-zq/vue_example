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
                    <el-input v-model="tableQueryForm.startTime" placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="创建结束时间" prop="endTime">
                    <el-input v-model="tableQueryForm.endTime" placeholder="请输入内容" />
                </el-form-item>
                <el-form-item style="float:right;padding-right:2rem;">
                    <el-button>查询</el-button>
                    <el-button>查询</el-button>
                </el-form-item>
            </div>
            <div class="zq-app-main-head-item">
                <el-form-item label="类型" prop="type">
                    <el-select v-model="tableQueryForm.type" placeholder="请输入内容">
                        <el-option value="1" label="类型一" />
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
                    <el-table-column label="序号" prop="index" show-overflow-tooltip width="50"/>
                    <el-table-column label="操作" prop="oparate" show-overflow-tooltip width="240">
                        <template slot-scope="scope">
                            <el-button>查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="名称" prop="name"/>
                    <el-table-column label="内容" prop="content"/>
                    <el-table-column label="类型" prop="type"/>
                    <el-table-column label="创建时间" prop="createTime"/>
                </el-table>
            </div>
        </LayoutTableAndPage>
    </div>
</div>
</template>
<script>
import { indexTableList } from '@/api/docs/index'
export default {
    name: 'docs',
    data(){
        return {
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
        }
    },
    mounted(){
        this.getIndexTableList();
    }
}
</script>
