<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable buttonAdd buttonExport search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
    <!-- <Modal title="【融智大厦】店坐标设置" modal1=true content="【内容内特】店坐标设置"/> -->
    <button type="button" class="btn" @click="showModal">打开Modal</button>

    <Modal v-show="isModalVisible" @close="closeModal" title="【融智大厦】店坐标设置" content="【内容内特】店坐标设置"/>
  </div>
  <!-- <Modal/> -->
</template>

<script>
import Tables from '_c/tables'
import Modal from '_c/modal'
import { TMap } from './map.js'
import { getTableData } from '@/api/data'
export default {
  name: 'store',
  components: {
    Tables,
    Modal
  },
  data () {
    return {
      columns: [
        // {title: '操作',key: 'handle',options: ['edit','address','code','disable'],width: 300},
        // {title: '门店编码', key: 'code'},
        // {title: '门店名称', key: 'name', sortable: true},
        // {title: '价格体系', key: 'price'},
        // {title: '店长', key: 'shopowner'},
        // {title: '店长手机', key: 'phone'},
        // {title: '地址', key: 'address'}
        {title: '操作',key: 'handle',options: ['edit','address','code','disable'],width: 300,button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '编辑')
              ])
            }
          ]},
        {title: '门店编码', key: 'name'},
        {title: '门店名称', key: 'name', sortable: true},
        {title: '价格体系', key: 'name'},
        {title: '店长', key: 'name'},
        {title: '店长手机', key: 'email'},
        {title: '地址', key: 'name'}
      ],
      tableData: [],
      isModalVisible: false
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    showModal: function () {
    this.isModalVisible = true
    },
    closeModal: function () {
    this.isModalVisible = false
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    }),
    TMap('P2KBZ-ISAWD-MBW4Q-HV2GI-KIGLJ-L6F3E').then(qq => {
        var map = new qq.maps.Map(document.getElementById("container"), {
          // 地图的中心地理坐标。
          center: new qq.maps.LatLng(39.916527, 116.397128),
          zoom: 8
        });
    });
  }
}
</script>

<style>

</style>
