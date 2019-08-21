<template >
<div>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-form-item label="" prop="name">
            <el-input 
            size="large"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            clearable
            v-model="form.name">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-form-item label="" prop="pwd">
            <el-input 
            size="large"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            clearable 
            show-password
            v-model="form.pwd" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-button type="primary" round>Sign in</el-button> -->
      <el-row  >
        <el-col :span="4" :offset=9>
          <el-button 
          type="primary" 
          v-loading.fullscreen="loading"
          round @click="submitForm()"> Sign in </el-button>
        </el-col>
        <el-col :span="4" >
          <el-button type="danger" round @click="resetForm()">Reset</el-button>
        </el-col>
      </el-row>
      </el-form>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</div>
 
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name:"login",
  data(){
    return{
      form:{
        name:'byco',
        pwd:'1996',
      },
      rules:{
        name:[
          {required: true, message:'用户名不能为空', trigger: 'blur'}
        ],
        pwd:[
          {required: true, message:'密码不能为空', trigger: 'blur'}
        ]
      },
      loading:false
    }
  },
  mounted() {
    let name = this.$cookie.get('name');
    // let pwd = this.$cookie.get('pwd');
    if(name==='byco'){
       this.$router.push({path:"/home"});
    }
  },
  methods:{
    submitForm(){
      this.$refs.form.validate((valid) => {
          if (valid) {
              this.loading = true;
              // alert('submit!');
              // console.log(this.form.name)
              // console.log(this.form.pwd)
              if(this.form.name==='byco'&&this.form.pwd==='1996'){
                this.$cookie.set('name','byco')
                  setTimeout(() => {
                    this.$router.push({path:"/home"});
                    this.loading = false;
                  }, 500);
              
              }
              else{
                alert('登陆失败');
                this.loading = false;
              }
            
          } else {
            // console.log('error submit!!');
            return false;
          }
        })
    },
    resetForm() {
      // this.$refs.form.resetFields();
        this.form.name = "";
        this.form.pwd = "";
        }
  }
}
</script>
