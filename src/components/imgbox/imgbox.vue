<template>
    <div>
         <el-button 
        type="primary" 
        round 
        @click="getImages"
        :loading="false">
            查看图片<i class="el-icon-video-camera"> </i>
        </el-button>
        <el-collapse >
            <el-collapse-item title="imageTable" name="imageTable">
                <div>
                <el-table
                    :data="imglist"
                    style="width: 100%">
                    <el-table-column
                        prop="time"
                        label="time">
                    </el-table-column>
                    <el-table-column
                        prop="img"
                        label="label" >
                    </el-table-column>
                </el-table>
                </div>
            </el-collapse-item>
        </el-collapse>
        <div class="imgBox">
            <div class="imglist" v-for="item in imglist" :key="item.index">
                <el-image :src="item.img" fit = 'fill'></el-image>
            </div>
        </div>
    </div>
</template>\
<script>
export default {
    computed: {
         imglist(){
             return this.$store.state.image.imglist    
         }
    },
    methods: {
        getImages(){
                this.loading="true";
                this.$store.dispatch('image/getImg')
        }
    },
}
</script>
<style scoped lang='scss'>
.imgBox{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
        .imglist{
            margin: 5px;
            width: 250px;
            height: 250px;
        }
}
</style>