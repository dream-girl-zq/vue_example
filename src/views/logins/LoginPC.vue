<template>
<div class="zq-login-pc-box">
    <div class="zq-login-pc-div">
        <el-form ref="loginFormRef" :model="loginFormModel" :rules="loginFormRules">
            <div class="zq-login-pc-title">欢迎登录</div>
            <el-form-item prop="username">
                <el-input v-model="loginFormModel.username" size="medium" placeholder="请输入账号">
                    <template slot="prepend">账号</template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginFormModel.password" size="medium" placeholder="请输入密码" type="password">
                    <template slot="prepend">密码</template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" class="zq-login-pc-btn" style="width:100%;" @click.native.prevent="handleLogin">
                    <span v-if="!loading">登录</span>
                    <span v-else>登录中...</span>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginPC',
    data(){
        return {
            loginFormModel: {
                username: 'admin',
                password: 'admin123'
            },
            loginFormRules: {
                username: [
                    {required: true,trigger: 'blur',message: '账号不能为空'},
                ],
                password: [
                    {required: true,trigger: 'blur',message: '密码不能为空'}
                ]
            },
            loading: false
        }
    },
    methods: {
        handleLogin(){
            this.$refs.loginFormRef.validate(valid => {
                if(valid){
                    this.loading = true;
                    setTimeout(()=>{
                        this.loading = false;
                        this.$router.push({path: '/Index'});
                    },1500);
                }
            })
        }
    }
}
</script>
<style scoped>
.zq-login-pc-box{
    width: 100%;
    height: 100%;
    position: relative;
}
.zq-login-pc-div{
    width: 48rem;
    height: 32rem;
    margin-top: -16rem;
    margin-left: -24rem;
    background-color: #0B76B1;
    border-radius: 0.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 4rem;
}
.zq-login-pc-title{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    font-family: Microsoft YaHei;
    line-height: 10rem;
    color: #fff;
}
.zq-login-pc-btn{
    background: linear-gradient(0deg, #005EBE, #47A2FF);
    color: #fff;
}
</style>
