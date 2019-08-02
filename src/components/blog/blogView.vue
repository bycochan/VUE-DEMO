<template >
    <div class="box" >

        <div >
            <el-card v-for="item in techList" :key="item.index" class="titleList"> 
                <li>
                    <el-link 
                    :href="item.url" 
                    :underline = false
                    target="_blank">{{item.title}}
                    </el-link> 
                </li>
            </el-card>
        </div>
        <div >
            <el-card v-for="item in holeList" :key="item.index" class="titleList"> 
                <li>
                    <el-link 
                    :href="item.url" 
                    :underline = false
                    target="_blank">{{item.title}}
                    </el-link> 
                </li>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    props: ["techList",'holeList'],
     data() {
        return {
        }
    },
}
</script>
<style scoped>
.box{
    width: 1000px;
    height: 480;
    overflow-y: scroll
}
.titleList {
    height: 70px;
    margin: 10px 0;
    text-align: left;
}
.titleList li{
    font-size: 1.08rem;
}
</style>
