<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="thumbnail" label="Thumbnail" width="180">
      <template slot-scope="scope">
        <el-image style="width: 160px; height: 100px" :src="scope.row.thumbnail" fit="contain" />
      </template>
    </el-table-column>
    <el-table-column prop="element" label="Image Element" width="180"></el-table-column>
    <el-table-column prop="current" label="Current Alt Text" width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.current || '-' }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="suggestion" label="Suggested Alt Text"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        thumbnail: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        element: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png">',
        current: '',
        suggestion: 'Bulbasaur, a kind of Pokémon'
      }]
    }
  }
}
</script>

<style scoped>

</style>
