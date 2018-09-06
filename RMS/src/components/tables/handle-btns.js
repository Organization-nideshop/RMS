const btns = {
  edit: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'text',
        size: 'small'
      },
      on: {
        click: () => {
          // vm.$router.go('add');//其中add是你定义的一个路由模块
          // this.$router.push({path: ''/order/index''});
          // this.$router.push({path: '/order/page1',query:{ id:'2'}});
          // this.$router.push({name: '/order/page2',params:{ id:'6'}});
          // alert(JSON.stringify(params.column.link.edit))
          vm.$router.push({path: params.column.link.edit})
        }
      }
    }, '编辑')
  },
  address: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'text',
        size: 'small'
      },
      on: {
        click: () => {
          this.$emit('success', true)
        }
      }
    }, '地址')
  },
  code: (h, params, vm) => {
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
      h('Button', {
        props: {
          type: 'text',
          size: 'small'
        }
      }, '门店二维码')
    ])
  },
  disable: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要禁用吗?'
      },
      on: {
        'on-ok': () => {
          vm.$Message.info('已禁用');
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'text',
          size: 'small'
        }
      }, '禁用')
    ])
  },
  delete: (h, params, vm) => {
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
      h('Button', {
        props: {
          type: 'text'
        }
      }, '删除')
    ])
  }
}

export default btns
