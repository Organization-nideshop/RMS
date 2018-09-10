<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable buttonAdd buttonExport search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'template',
  components: {
    Tables,
  },
  data () {
    return {
      columns: [
        {title: '操作',key: 'handle',link:{edit:'/information/department/edit',other:''},options: ['edit','disable'],width: 300,},
        {title: '状态', key: 'name'},
        {title: '模板类型', key: 'name', sortable: true},
        {title: '模板编码', key: 'name'},
        {title: '模板名称', key: 'name'},
      ],
      tableData: [],
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style lang="less">
</style>
