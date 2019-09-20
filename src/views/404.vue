<template >
    <div class="bg"> 
        <el-alert
            class="alert"
            title="Oops! Page Not Found"
            type="error"
            show-icon 
            :closable="false"
            center>
        </el-alert>
        <img :src="bg" alt="404">
        <div class="img404">
            <img :src="img404" alt="404" ><br><br><br><br>
            <router-link to="/home">
               返回首页
            </router-link>
        </div>
    </div>
</template>
<script>
import bg from '@/assets/bg.png';
import img404 from '@/assets/404.png'
export default {
    data() {
        return {
            bg,
            img404
        }
    },
}
</script>
<style scoped lang='scss'>
.bg {
    position: fixed;
    width: 100%;
        img{
            position: relative;
            bottom: -50px;
            z-index: -10;
            background-repeat:no-repeat;
            background-size: 100% 100%; 
        }
        .alert{
            height: 60px;   
        }
        .img404{
            position: absolute;
            left: 38%;
            top: 60px;
        }
}

</style>

