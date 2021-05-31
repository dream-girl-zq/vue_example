<template>
<div class="zq-login-div">
    <LoginPC v-if="isPC" />
    <LoginMobile v-else />
</div>
</template>
<script>
export default {
    name: 'Login',
    components: {
        LoginMobile: (resolve) => require(['./logins/LoginMobile'],resolve),
        LoginPC: (resolve) => require(['./logins/LoginPC'],resolve)
    },
    data(){
        return {
            isPC: true
        }
    },
    created(){
        //判断运行环境是在移动端或PC端
        const sUserAgent = navigator.userAgent.toLowerCase();
        const bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        const bIsMidp = sUserAgent.match(/midp/i) == "midp";
        const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        const bIsAndroid = sUserAgent.match(/android/i) == "android";
        const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if(bIsIpad || bIsIphoneOs|| bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){
            this.isPC = false;
        }else{
            this.isPC = true;
        }
    }
}
</script>
<style scoped>
.zq-login-div{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/bg-login.png);
    background-size: 100% 100%;
    background-position: center center;
}
</style>
