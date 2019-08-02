<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <!-- <HelloWorld msg = "welcome"/> -->
     <login />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import login from '@/components/login.vue'

export default {
  components: {
    login
  },
}
</script>
