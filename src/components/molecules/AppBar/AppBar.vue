<script setup lang="ts">
import { BulbOutlined, DesktopOutlined, GithubOutlined } from "@ant-design/icons-vue";

import { CONSTANTS } from "@lib";
</script>

<template>
  <a-page-header
    title="Son of Atlan"
    :avatar="{ src: 'https://www.kindpng.com/picc/m/386-3861419_data-science-icon-png-transparent-png.png' }"
    style="border-bottom: 1px solid rgb(235, 237, 240)">
    <template #extra>
      <a-button :href="CONSTANTS.NOTION_URL" target="_blank">
        <template #icon>
          <bulb-outlined />
        </template>
        Design Doc
      </a-button>
      <a-button :href="CONSTANTS.MIRO_URL" target="_blank">
        <template #icon>
          <desktop-outlined />
        </template>
        Wireframe
      </a-button>
      <a-button :href="CONSTANTS.GITHUB_URL" target="_blank">
        <template #icon>
          <github-outlined />
        </template>
        GitHub
      </a-button>
    </template>
  </a-page-header>
</template>
