<template>
    <div class="model-container">
        <el-card shadow="never">
            <div slot="header" class="clearfix">
                <span><i class="iconfont icon-sousuo"></i>快捷搜索</span>
                <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
            </div>
            <el-row :gutter="15">
                <el-col :span="2"><el-input placeholder="请输入关键字" size=""></el-input></el-col>
                <el-col :span="2"><el-input placeholder="请输入关键字" size=""></el-input></el-col>
                <el-col :span="2"><el-input placeholder="请输入关键字" size=""></el-input></el-col>
            </el-row>
            
        </el-card>
        <el-card shadow="never">鼠标悬浮时显示</el-card>
    </div>
</template>
<style lang="scss" scoped>

</style>
