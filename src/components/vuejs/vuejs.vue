<template>
    <div>
        <el-link 
            href="https://cn.vuejs.org/" 
            :underline = false
            target="_blank">Vue.js
        </el-link>
        <div v-html="html"></div>
    </div>
</template>
<script>
import showdown from 'showdown'
import vuemd from './../../assets/biji.md'
export default {
    components: {
        // eslint-disable-next-line
        showdown
    },
    data() {
        return {
            msg:vuemd,
            html:''
        }
    },
    mounted () {
        let converter = new showdown.Converter()
        let text = this.msg.toString()
        this.html = converter.makeHtml(text)
    }
}
</script>
<style scoped>

</style>
