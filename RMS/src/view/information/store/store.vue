<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable buttonAdd buttonExport search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
    <Modal v-show="isModalVisible" @close="closeModal" title="【融智大厦】店坐标设置" content="【内容内特】店坐标设置"/>
    <CodeModal v-show="isCodeVisible" @close="closeCodeModal" @download="downloadCode" title="门店二维码" :imgUrl="imgUrl" />
  </div>
</template>

<script>
import Tables from '_c/tables'
import Modal from '_c/modal'
import CodeModal from '_c/modal/code/modal'
import { TMap } from './map.js'
import { getTableData } from '@/api/data'
import imgUrl from '@/assets/images/code.png'
export default {
  name: 'store',
  components: {
    Tables,
    Modal,
    CodeModal
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
        {title: '操作',key: 'handle',link:{edit:'/information/store/edit',other:''},options: ['edit','disable'],width: 300,
        button: [
            (h, params, vm) => {
              return h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.isModalVisible = true
                  }
                }
              }, '地址')
            },
            (h, params, vm) => {
              return h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.isCodeVisible = true
                    // this.remove(params.index)
                    this.imgUrl = imgUrl
                  }
                }
              }, '门店二维码')
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
      isModalVisible: false,
      isCodeVisible: false,
      imgUrl:'',
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    closeModal () {
      this.isModalVisible = false
    },
    closeCodeModal (){
      this.isCodeVisible = false
    },
    downloadCode (){
      var url = this.imgUrl
      var a = document.createElement('a')
      var event = new MouseEvent('click')
      a.download = name || 'codeImg'
      a.href = url
      a.dispatchEvent(event);
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
