<template>
  <el-table-column :prop="col.prop"
    :label="col.label"
     width='200px'
    align="left">
    <template v-if="col.children">
        <el-table-column v-for="(item, index) in col.children"
        :prop="item.prop"
        :label="item.label"
        :key="index"
        width='100px'
        :col="item"></el-table-column>
    </template>

  </el-table-column>
</template>

<script>
export default {
  name: 'MyColumn',
  props: {
    col: {
      type: Object
    }
  },
  
}
</script>
<style scoped>
</style>