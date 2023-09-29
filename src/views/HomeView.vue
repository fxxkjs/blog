<template>
  <a-upload-dragger v-model:fileList="fileList" :multiple="true" :customRequest="md.upMd" :onRemove=md.delMd>
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">xxxxxxx</p>
    <p class="ant-upload-hint">yyyyyyy</p>
  </a-upload-dragger>
</template>


<script setup>
import { ref } from 'vue';
import http from "../http/http"
import { InboxOutlined } from '@ant-design/icons-vue';
// import { message } from 'ant-design-vue';


// upload
const fileList = ref([]);

const md = {
  upMd: async info => {
    const req = await http.md.post(info)
    req.data.code === 1 ? info.onSuccess() : info.onError()
  },
  delMd: async file => {
    file.percent = 0
    file.status = "uploading"
    const req = await http.md.del(file.name)
    req.data.code === 1 ? true : false
  }
}


</script>

