<template>
  <a-layout style="height: 100vh">
    <app-bar />
    <a-layout>
      <a-layout-sider>
        <app-side-bar />
      </a-layout-sider>
      <a-layout-content style="padding: 12px">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
