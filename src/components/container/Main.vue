<template>
  <main class="el-main" :style="{ height }">
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: "ElMain",
};
</script>
<script setup lang="ts">
import { withDefaults } from "vue";

interface Props {
  height?: string;
}

withDefaults(defineProps<Props>(), {
  height: "200px",
});
</script>

<style lang="scss">
@import "../../styles/minin.scss";
@include b(main) {
  padding: 10px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #ecf5ff;
}
</style>
