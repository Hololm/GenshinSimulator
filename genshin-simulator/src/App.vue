<template>
  <body>
    <div class="bannerName">
      <el-select v-model="value" class="m-2" placeholder="Select" size="large">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
  <div class="bannerImage">
    <img v-bind:src="'../gacha-banners/' + value + '.png'" :alt="value">
  </div>
  </body>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Venti',
    label: 'Venti',
  },
  {
    value: 'Klee',
    label: 'Klee',
  },
  {
    value: 'Tartaglia',
    label: 'Tartaglia',
  },
  {
    value: 'Zhongli',
    label: 'Zhongli',
  },
  {
    value: 'Albedo',
    label: 'Albedo',
  },
  {
    value: 'Ganyu',
    label: 'Ganyu',
  },
  {
    value: 'Xiao',
    label: 'Xiao',
  },
  {
    value: 'Hu Tao',
    label: 'Hu Tao',
  },
  {
    value: 'Eula',
    label: 'Eula',
  },
  {
    value: 'Kaedehara Kazuha',
    label: 'Kaedehara Kazuha',
  },
  {
    value: 'Kamisato Ayaka',
    label: 'Kamisato Ayaka',
  },
  {
    value: 'Yoimiya',
    label: 'Yoimiya',
  },
  {
    value: 'Raiden Shogun',
    label: 'Raiden Shogun',
  },
  {
    value: 'Sangonomiya Kokomi',
    label: 'Sangonomiya Kokomi',
  },
  {
    value: 'Arataki Itto',
    label: 'Arataki Itto',
  },
  {
    value: 'Shenhe',
    label: 'Shenhe',
  },
  {
    value: 'Yae Miko',
    label: 'Yae Miko',
  },
  {
    value: 'Kamisato Ayato',
    label: 'Kamisato Ayato',
  },
  {
    value: 'Yelan',
    label: 'Yelan',
  },
]
</script>
<style>
</style>