<template>
    <div>
        <div class="logo">
            <el-image
            style="width: 60px; height:60px"
            :src="imgurl"
            fit = "fill"
            ></el-image>
        </div>
        <div class="info">
            <el-badge value="new" type="danger" is-dot >
            <el-button size="small">消息</el-button>
            </el-badge>
        </div>
        <!-- <div class="user">
            <el-avatar :src="userAvatar"></el-avatar>
        </div> -->
        <div class="dropdown">
            <el-dropdown @command="handleCommand" >
            <el-avatar :src="userAvatar"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command = "login">login</el-dropdown-item>
                    <el-dropdown-item command = "logout">logout</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgurl:'https://cn.vuejs.org/images/logo.png',
            userAvatar:"http://wx1.sinaimg.cn/wap720/006dIQw0ly1fd3ome8qlkj30vm0hsaeh.jpg"
        }
    },
    methods: {
        handleCommand(command){
            if(command=="login"){
            this.$router.push({path:"/"});
            }
            if(command=='logout'){
                this.$cookie.delete('name');
                this.$router.push({path:"/"});

            }
        }
    }
}
</script><style scoped>
.logo{
    float: left;
    margin-left: 20px;
}
.info{
    position: absolute;
    top: 14px;
    right: 100px;
}
.dropdown{
    position: absolute;
    top: 10px;
    right: 30px;
}
.el-icon-switch-button{
    font-size: 24px
}
</style>
