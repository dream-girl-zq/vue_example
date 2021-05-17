<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body">
        <LayoutTableAndPage>
            <div slot="table">
                <el-table>
                    <el-table-column label="序号" prop="index" show-overflow-tooltip width="50"/>
                    <el-table-column label="操作" prop="oparate" show-overflow-tooltip width="240">
                        <template slot-scope="scope">
                            <el-button/>
                        </template>
                    </el-table-column>
                    <el-table-column label="项目名称"/>
                    <el-table-column label="项目内容"/>
                </el-table>
            </div>
        </LayoutTableAndPage>
    </div>
</div>
</template>
<script>
export default {
    name: 'Index'
}
</script>
