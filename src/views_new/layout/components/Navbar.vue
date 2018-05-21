<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <div class="right-menu">
      <!-- <lang-select class="international right-menu-item"></lang-select>

      <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip> -->
      <div class="user-infro right-menu-item">
          <!-- <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
          <i class="el-icon-caret-bottom"></i> -->
          <i class="iconfont user-icon icon-yonghu"></i>
          <span class="user-name">欧阳娜娜</span>
          <span class="user-branch">车管科</span>
      </div>
      <!-- <el-dropdown class="avatar-container right-menu-item" trigger="hover">
        
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->

      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>


      <el-dropdown class="setting-wrapper right-menu-item" trigger="hover">
        <div class="setting-icon-wrapper"><i class="iconfont icon-shezhi"></i></div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item><i class="iconfont icon-shouye" style="margin-right:5px;"></i>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;"><i class="iconfont icon-tuichu1" style="margin-right:5px;"></i>退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    LangSelect,
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      float: left;
      margin-right: 15px;
    }
    .screenfull {
      
    }
    .user-infro {
        cursor: pointer;
        position: relative;
        height: 50px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        .user-icon{
          font-size: 20px;
          border: solid 1px #999;
          border-radius: 50%;
          color: #999;
          padding: 5px;
        }
        .user-name{
          position: relative;
          top: -2px;
          font-size: 14px;
          color:#666;
        }
        .user-branch{
          position: relative;
          top: -3px;
          background: #ff0000;
          color: #fff;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 12px
        }
      }
      .setting-wrapper{
        height: 30px;
        .setting-icon-wrapper{
          i{
            font-size: 20px;
            color: #999;
            cursor: pointer;
            &:hover{
              color: #333;
            }
          }
        }
      }
  }
}
</style>
