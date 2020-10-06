<template>
  <a-breadcrumb>
    <a-breadcrumb-item>orangeFrameWork</a-breadcrumb-item>
    <a-breadcrumb-item v-if="$route.meta.module"><a href="">{{ $route.meta.module }}</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">{{ $route.meta.title }}</a></a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
name: "Bread"
}
</script>

<style scoped>

</style>
