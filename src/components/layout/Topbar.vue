<template>
    <div>
        <div class="imgbox">
            <el-image
            style="width: 60px; height:60px"
            :src="imgurl"
            fit = "fill"
            ></el-image>
        </div>
        <div class="info">
            <el-badge value="new" type="primary">
            <el-button size="small">消息</el-button>
            </el-badge>
        </div>
        <div class="avatar">
            <el-dropdown @command="handleCommand">
                <el-button type="info" icon='el-icon-user-solid' circle >
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command = "login">login</el-dropdown-item>
                    <el-dropdown-item command = "logout">login</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imgurl:'https://cn.vuejs.org/images/logo.png'
        }
    },
    methods: {
        handleCommand(command){
            if(command=="login"){
            this.$router.push({path:"/"});
            }
        }
    }
}
</script><style scoped>
.imgbox{
    float: left;
}
.info{
    position: absolute;
    top: 15px;
    right: 120px;
}
.avatar{
    position: absolute;
    top: 10px;
    right: 30px;
}
</style>
