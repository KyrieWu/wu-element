<template>
  <footer class="el-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script lang="ts">
export default {
  name: "ElFooter",
};
</script>
<script setup lang="ts">
import { withDefaults } from "vue";

interface Props {
  height?: string;
}

withDefaults(defineProps<Props>(), {
  height: "60px",
});
</script>

<style lang="scss">
@import "../../styles/minin.scss";
@include b(footer) {
  padding: 10px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #c6e2ff;
}
</style>
