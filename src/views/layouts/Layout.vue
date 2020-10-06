<template>
  <a-layout class="layout">
    <a-layout-sider class="left-menu" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">{{ collapsed ? '橘子' : 'OrangeFrame' }}</div>
      <a-menu theme="dark" mode="inline" :defaultOpenKeys="openKeys" :default-selected-keys="selectedKeys">
        <a-menu-item key="/">
          <router-link to="/" tag="div">
            <a-icon type="home"/>
            <span>首页</span></router-link>
        </a-menu-item>
        <a-sub-menu key="用户管理">
          <span slot="title"><a-icon type="user"/><span>用户管理</span></span>
          <a-menu-item key="/userlist">
            <router-link to="/userlist" tag="div">用户列表</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="业务管理">
          <span slot="title"><a-icon type="appstore"/><span>业务管理</span></span>
          <a-menu-item key="/orderlist">
            <router-link to="/orderlist" tag="div">工单列表</router-link>
          </a-menu-item>
          <a-menu-item key="3-2">
            投诉列表
          </a-menu-item>
          <a-menu-item key="3-3">
            客户列表
          </a-menu-item>
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="flex j-sb" style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown style="margin-right: 20px">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            Orange
            <a-icon type="down"/>
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="lock"/>
                修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="logout">
                <a-icon type="logout"/>
                退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Bread></Bread>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Bread from "~c/Bread";
export default {

  name: 'Layout',
  components:{
    Bread
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: []
    };
  },
  created() {
    this.openKeys = [this.$route.meta.module]
    this.selectedKeys = [this.$route.path]
  },
  methods: {
    logout() {
      this.$ms("退出成功", () => {
        this.$router.push('/login')
      })

    }
  }
};
</script>
<style lang="scss">

.layout {
  height: 100vh;

  .left-menu {
    height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    /*滚动区域背景*/
    &::-webkit-scrollbar-track-piece {
      background-color: #1d1c1c;
      -webkit-border-radius: 6px;
    }

    /*竖向滚动条*/
    &::-webkit-scrollbar-thumb:vertical {
      height: 5px;
      background-color: #424040;
      -webkit-border-radius: 6px;
    }

  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 2px;
    color: white;
    font: {
      weight: bold;
      family: 宋体;
      size: 13px;
    }
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }


}


</style>
