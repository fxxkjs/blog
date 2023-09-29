<template>
  <div class="about" ref="editorRef" id="vditor">

  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Vditor from 'vditor'
import "vditor/src/assets/less/index.less"
const contentEditor = ref("");
onMounted(() => {
  contentEditor.value = new Vditor("vditor", {
    height: 560,
    toolbarConfig: {
      pin: true,
    },
    cache: {
      enable: false,
    },
    after: () => {
      contentEditor.value.setValue("hello,Vditor+Vue!");
    },
  });
});
</script>



<style></style>
 