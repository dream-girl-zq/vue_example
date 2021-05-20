<template>
<div style="width:100%;height:auto;">
    <el-collapse>
        <el-collapse-item title="在github上创建远程仓库" name="1">
            <div>登陆github，在github上创建远程仓库</div>
            <img v-for="(item,index) in pngJSON['1']" :src="loadSrc(item)" :key="1000+index"/>
        </el-collapse-item>
        <el-collapse-item title="在本地安装git环境" name="2">
            <div>登陆github，在github上创建远程仓库</div>
        </el-collapse-item>
        <el-collapse-item title="在本地创建项目" name="3">
            <div>vue项目搭建</div>
        </el-collapse-item>
        <el-collapse-item title="把本地项目的文件夹变成Git可管理的仓库" name="4">
            <div>打开本地项目文件夹，点击鼠标右键后点击Git Bash Here打开Git命令行</div>
            <div>使用命令(git init)把文件夹变成Git管理的仓库</div>
            <div>命令(git init)运行完成后会在文件夹下生成一个.git文件夹(.git默认时隐藏文件夹)</div>
        </el-collapse-item>
        <el-collapse-item title="提交本地项目的文件及文件夹" name="5">
            <div>使用命令(git add .)把文件夹下的目录以及文件全部都提交</div>
            <div>也可使用命令(git add 文件名)提交指定文件</div>
            <div>使用命令(git status)查看现在的状态</div>
            <img v-for="(item,index) in pngJSON['5']" :src="loadSrc(item)" :key="5000+index"/>
        </el-collapse-item>
        <el-collapse-item title="把本地项目的文件提交到本地仓库" name="6">
            <div>使用命令(git commit -m "这里面写你的注释")把文件提交到本地仓库</div>
            <img v-for="(item,index) in pngJSON['6']" :src="loadSrc(item)" :key="6000+index"/>
        </el-collapse-item>
        <el-collapse-item title="在Github上新建SSH key" name="7">
            <div>由于本地Git仓库和Github仓库之间的传输时通过SSH加密的，所以连接时需要设置一下</div>
            <div>创建SSH KEY，看下C盘用户目录下有没有.ssh目录以及id_rsa和id_rsa.pub文件</div>
            <div>如果没有，通过命令(ssh-keygen -t rsa -C "youremail@example.com")创建.ssh目录，一路回车即可</div>
            <div>登陆Github，右上角头像位置点击找到Settings菜单，继续点击SSH and GPG KEYS，然后新建SSH key</div>
            <div>新建SSH key时，将.ssh/id_rsa.pub文件中的内容复制到key的输入框中即可创建</div>
            <img v-for="(item,index) in pngJSON['7']" :src="loadSrc(item)" :key="7000+index"/>
        </el-collapse-item>
        <el-collapse-item title="连接远程Git仓库" name="8">
            <div>使用命令(git remote add origin "github上的仓库地址")关联本地仓库和Github上的仓库</div>
            <div>如果报"error:remote origin already exists."需要先删除远程git仓库</div>
            <div>使用命令(git remote rm origin)删除远程仓库</div>
            <div>删除后，使用命令(git remote add origin "github上的仓库地址")重新连接远程Git仓库</div>
        </el-collapse-item>
        <el-collapse-item title="把本地库上的所有内容推送到远程仓库上" name="9">
            <div>使用命令(git push -u origin master)把本地库的所有内容推送到远程仓库上</div>
            <img v-for="(item,index) in pngJSON['9']" :src="loadSrc(item)" :key="9000+index"/>
        </el-collapse-item>
        <el-collapse-item title="修改文件后上传修改的文件内容" name="10">
            <div>打开本地项目，点击鼠标右键后点击Git Bash Here</div>
            <div>使用命令(git add .)把文件下的目录以及文件全部都提交</div>
            <div>使用命令(git status)查看现在的状态</div>
            <div>使用命令(git commit -m "这里面写你的注释")把文件提交的本地仓库</div>
            <div>使用命令(git push -u origin master)把本地库的所有内容推送到远程仓库上</div>
        </el-collapse-item>
    </el-collapse>
</div>
</template>
<script>
import pngJSON from '@/assets/docs_githubs/githubUploadPorject/json/png.json'
export default {
    name: 'githubUploadPorject',
    data(){
        return {
            pngJSON
        }
    },
    methods: {
        loadSrc(src){
            return require('../../../../'+src);
        }
    }
}
</script>
