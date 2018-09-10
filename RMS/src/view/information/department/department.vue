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
  name: 'department',
  components: {
    Tables,
  },
  data () {
    return {
      columns: [
        {title: '操作',key: 'handle',link:{edit:'/information/department/edit',other:''},options: ['edit','disable'],width: 300,},
        {title: '部门编码', key: 'name'},
        {title: '部门名称', key: 'name', sortable: true},
        {title: '联系人', key: 'name'},
        {title: '联系人手机', key: 'name'},
        {title: '地址', key: 'email'},
        {title: '备注', key: 'name'}
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
