<template>
  <aside class="el-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script lang="ts">
export default {
  name: "ElAside",
};
</script>
<script setup lang="ts">
import { withDefaults } from "vue";

interface Props {
  width?: string;
}

withDefaults(defineProps<Props>(), {
  width: "100px",
});
</script>

<style lang="scss">
@import "../../styles/minin.scss";
@include b(aside) {
  padding: 10px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #d9ecff;
}
</style>
