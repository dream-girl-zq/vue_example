<template>
<div class="zq-login-mobile-box">
    <div class="zq-login-mobile-div">
        <div class="zq-login-mobile-title">欢迎登录</div>
        <van-form ref="loginFormRef">
            <div class="zq-login-mobile-form">
                <van-field
                    label-width="3rem"
                    v-model="loginFormModel.username"
                    left-icon="contact"
                    right-icon="question-o"
                    @click-right-icon="$toast('账号必须是手机号')"
                    name="账号" label="账号"/>
            </div>
            <div class="zq-login-mobile-form">
                <van-field type="password"
                    label-width="3rem"
                    v-model="loginFormModel.password"
                    left-icon="closed-eye"
                    right-icon="question-o"
                    @click-right-icon="$toast('密码必须是数字、字母、下划线')"
                    name="密码" label="密码"/>
            </div>
            <div class="zq-login-mobile-btn">
                <van-button :loading="loading" round block type="info" @click="handleLogin">登陆</van-button>
            </div>
        </van-form>
    </div>
</div>
</template>
<script>
export default {
    name: 'LoginMobile',
    data(){
        return {
            loginFormModel: {
                username: '',
                password: ''
            },
            loginFormRules: {
                username: [{required: true,message: '请填写账号'}],
                password: [{required: true,message: '请填写密码'}]
            },
            loading: false
        }
    },
    methods: {
        handleLogin(){
            if(this.loginFormModel.username==''){
                this.$toast('账号不能为空');
                return;
            }
            if(this.loginFormModel.password==''){
                this.$toast('密码不能为空');
                return;
            }
            this.loading = true;
            setTimeout(()=>{
                this.loading = false;
                this.$router.push({path: '/IndexMobile'})
            },2000);
        }
    }
}
</script>
<style scoped>
.zq-login-mobile-box{
    width: 100%;
    height: 100%;
    position: relative;
}
.zq-login-mobile-div{
    width: 32rem;
    height: 30rem;
    background-color: #0B76B1;
    border-radius: 0.6rem;
    position: absolute;
    top: 15rem;
    left: 50%;
    margin-left: -16rem;
    padding: 0 2rem;
}
.zq-login-mobile-title{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    font-family: Microsoft YaHei;
    line-height: 10rem;
    color: #fff;
}
.zq-login-mobile-form{
    width: 100%;
    height: 6rem;
}
.zq-login-mobile-btn{
    height: 8rem;
}
.zq-login-mobile-btn .van-button{
    height: 4.4rem;
    font-size: 1.4rem;
}
</style>
