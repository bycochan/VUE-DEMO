<template >
    <div class="box">
        <el-tabs v-model="activeName"  @tab-click="handleClick" type="border-card">
            <el-tab-pane label="技术贴" name="techList" class="content_box">  
            <el-card v-for="item in techList" :key="item.index" class="titleList"> 
                <li>
                    <el-link 
                    :href="item.url" 
                    :underline = false
                    target="_blank">{{item.title}}
                    </el-link> 
                </li>
            </el-card>
            </el-tab-pane>
            <el-tab-pane label="踩坑" name="holeList" class="content_box">       
            <el-card v-for="item in holeList" :key="item.index" class="titleList"> 
                <li>
                    <el-link 
                    :href="item.url" 
                    :underline = false
                    target="_blank">{{item.title}}
                    </el-link> 
                </li>
            </el-card>
            </el-tab-pane>
            <el-tab-pane label="数据资产" name="mocs" class="content_box">  
            <el-card v-for="item in mocsList" :key="item.index" class="titleList"> 
                <li>
                    <el-link 
                    :href="item.url" 
                    :underline = false
                    target="_blank">{{item.title}}
                    </el-link> 
                </li>
            </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName:'techList'
        }
    },
    computed: {
        techList(){
            return this.$store.state.blogModule.techList
        },
        holeList(){
            return this.$store.state.blogModule.holeList
        },
        mocsList(){
            return this.$store.state.blogModule.mocsList
        }
    },
    methods:{
        handleClick() {
        // console.log(this.techList);
        // console.log(this.holeList);
      }
    }
}
</script>
<style scoped lang='scss'>
.box{
    position: fixed;
    width: inherit;
        .content_box{
            width: 100%;
            max-height: 460px;
            overflow-y: scroll;
                .titleList {
                    height: 70px;
                    margin: 10px 0;
                    text-align: left;
                        li{
                            font-size: 1.08rem;
                        }
                }
        }
}
</style>
