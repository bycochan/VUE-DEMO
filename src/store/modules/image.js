import axios from "axios"

const image = {
    namespaced: true,
    state: {
      imglist:[]
    },
    mutations: {
      updateGetImg:(state,obj)=>{
        state.imglist = obj.concat(state.imglist)
      }
    },
    actions: {
      getImg ({commit}){
        return axios.post('https://api.apiopen.top/getImages',{
        page:"",
        count:'50'
        })
        .then((res) => {
          if (res.status === 200) {
            commit('updateGetImg',res.data.result)   
          } 
          else{
            alert('获取列表失败!')
          }
          return res
        });
      }
    }
}

export default image