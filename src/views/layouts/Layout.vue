<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">{{ collapsed? 'OF':'OrangeFrame'}}</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span>nav 3</span>
        </a-menu-item>
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
            Orange <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"><a-icon type="lock" /> 修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;"><a-icon type="logout" /> 退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="scss">
.layout {
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 2px;
    color: white;
    font:{
      weight: bold;
      family: 宋体;
      size: 18px;
    }
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }


}





</style>
