<template>
  <div class="header">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}"></router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Herder',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
