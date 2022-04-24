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
    <img v-bind:src="'../gacha-banners/charbanner/' + value + '.png'" :alt="value">
    <div class="details">
      <el-row>
        <el-button round plain color="#f2b738" @click="$router.push('/details')">Details</el-button>
        <el-button round plain color="#f2b738" @click="$router.push('/inventory')">Inventory</el-button>
      </el-row>
    </div>
  </div>
  <el-row class="wish">
    <el-button round plain color="#f2b738" @click="$router.push('/wish1')">Wish (x1)</el-button>
    <el-button round plain color="#f2b738" @click="$router.push('/wish10')">Wish (x10)</el-button>
  </el-row>
  </body>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Main.vue",
  data() {
    return {
      value: ref(''),
      options: [
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
            value: 'Hutao',
            label: 'Hu Tao',
          },
          {
            value: 'Eula',
            label: 'Eula',
          },
          {
            value: 'Kazuha',
            label: 'Kaedehara Kazuha',
          },
          {
            value: 'Ayaka',
            label: 'Kamisato Ayaka',
          },
          {
            value: 'Yoimiya',
            label: 'Yoimiya',
          },
          {
            value: 'Raidenshogun',
            label: 'Raiden Shogun',
          },
          {
            value: 'Kokomi',
            label: 'Sangonomiya Kokomi',
          },
          {
            value: 'Itto',
            label: 'Arataki Itto',
          },
          {
            value: 'Shenhe',
            label: 'Shenhe',
          },
          {
            value: 'Yaemiko',
            label: 'Yae Miko',
          },
          {
            value: 'Ayato',
            label: 'Kamisato Ayato',
          },
      ]
    }
  },
};
</script>

<style scoped>

</style>