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
  name: 'supplier',
  components: {
    Tables,
  },
  data () {
    return {
      columns: [
        {title: '操作',key: 'handle',link:{edit:'/information/department/edit',other:''},options: ['edit','disable'],width: 300,},
        {title: '状态', key: 'name'},
        {title: '编码', key: 'name', sortable: true},
        {title: '供应商名称', key: 'name'},
        {title: '联系人', key: 'name'},
        {title: '手机号', key: 'name'},
        {title: '地址', key: 'name'},
        {title: '邮箱', key: 'email'},
        {title: '账号', key: 'name'},
        {title: '开户号', key: 'name'},
        {title: '税号', key: 'name'},
        {title: '营业执照', key: 'name'},
        {title: '生产许可证', key: 'name'},
        {title: '食品流通许可证', key: 'name'}
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

