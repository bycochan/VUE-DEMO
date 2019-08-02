<template>
    <div>
        <div class="head">
            <el-link 
                href="https://element.eleme.cn/#/zh-CN/component/quickstart" 
                :underline = false
                target="_blank"> Element-UI 
            </el-link>
            <p>基于 Vue 2.0 的桌面端组件库</p>
        </div>
        <div class="main">
            <el-collapse >
                <el-collapse-item title="默认样式修改" name="1">
                    <div>使用  /deep/</div>
                    <blockquote>.homePage /deep/ .el-main {
                                padding: 0;
                    }
                    </blockquote>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>