<template>
  <el-container
      class="layout-container-demo"
      style="height: 500px; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-row>
        <el-col>
          <h5>用户菜单</h5><br>
          <el-menu
              default-active=""
          >
            <el-sub-menu index="1">

              <el-menu-item-group title="Pixiv">
                <router-link to="/pare" tag="span">
                  <el-menu-item index="1-1">
                    <div>
                      <download size="18" style="vertical-align: 5%"/>
                      001
                    </div>
                  </el-menu-item>
                </router-link>
                <el-menu-item index="1-2">
                  <div>
                    <download size="18" style="vertical-align: 5%"/>
                    002
                  </div>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item>

              123
            </el-menu-item>
          </el-menu>

        </el-col>
      </el-row>
    </el-aside>

    <el-container>
      <el-header style="text-align: center; font-size: 12px">
        鸢月P站图片代下系统
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import {Download} from '@icon-park/vue-next'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Download
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
