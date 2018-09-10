import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * RMS中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    meta: {
      icon: 'logo-buffer',
      title: '首页'
    },
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          hideParentInMenu: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
    {
    path: '/information',
    name: 'information',
    meta: {
      icon: 'logo-buffer',
      title: '基础信息'
    },
    component: Main,
    children: [
      {
        path: 'company_information',
        name: 'company_information',
        meta: {
          title: '公司信息维护'
        },
        component: () => import('@/view/information/company-information/company-information.vue'),
      },
      {
        path: 'store',
        name: 'store',
        meta: {
          title: '门店管理'
        },
        redirect: 'store/index',
        component: parentView,
        children: [
          {
            path: 'index',
            name: 'index',
            meta: {
              title: '门店管理',
              hideParentInMenu: true
            },
            component: () => import('@/view/information/store/store.vue')
          },
          {
            path: 'add',
            name: 'add',
            meta: {
              title: '门店新增',
              hideInMenu: true
            },
            component: () => import('@/view/information/store/addOrUpdate.vue')
          },
          {
            path: 'edit',
            name: 'edit',
            meta: {
              title: '门店编辑',
              hideInMenu: true
            },
            component: () => import('@/view/information/store/addOrUpdate.vue')
          }
        ]
      },
      {
        path: 'department',
        name: 'department',
        meta: {
          title: '公司部门管理'
        },
        component: () => import('@/view/information/department/department.vue')
      },
      {
        path: 'customer',
        name: 'customer',
        meta: {
          title: '大客户管理'
        },
        component: () => import('@/view/information/customer/customer.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/view/information/user/user.vue')
      },
      {
        path: 'supplier',
        name: 'supplier',
        meta: {
          title: '供应商管理'
        },
        component: () => import('@/view/information/supplier/supplier.vue')
      },
      {
        path: 'landing',
        name: 'landing',
        meta: {
          title: '打印设置'
        },
        component: () => import('@/view/information/landing/landing.vue')
      },
      {
        path: 'printer',
        name: 'printer',
        meta: {
          title: '计算机登陆审核'
        },
        component: () => import('@/view/information/printer/printer.vue')
      },
      {
        path: 'cash_register',
        name: 'cash_register',
        meta: {
          title: '收银机配置'
        },
        component: () => import('@/view/information/cash-register/cash-register.vue')
      },
      {
        path: 'template',
        name: 'template',
        meta: {
          title: '模板设置'
        },
        component: () => import('@/view/information/template/template.vue')
      },
      {
        path: 'pay',
        name: 'pay',
        meta: {
          title: '支付方式'
        },
        component: () => import('@/view/information/pay/pay.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      icon: 'logo-buffer',
      title: '商品'
    },
    component: Main,
    children: [
      {
        path: 'management',
        name: 'management',
        meta: {
          title: '商品管理'
        },
        component: () => import('@/view/goods/management/management.vue')
      },
      {
        path: 'modify_price',
        name: 'modify_price',
        meta: {
          title: '商品调价'
        },
        component: () => import('@/view/goods/modify-price/modify-price.vue')
      }
    ]
  },
  {
    path: '/coupons',
    name: 'coupons',
    meta: {
      icon: 'logo-buffer',
      title: '礼券'
    },
    component: Main,
    children: [
      {
        path: 'coupons_index',
        name: 'coupons_index',
        meta: {
          title: '礼券名称'
        },
        component: () => import('@/view/sales/coupons/coupons-index/coupons-index.vue')
      },
      {
        path: 'coupons_sale',
        name: 'coupons_sale',
        meta: {
          title: '礼券销售'
        },
        component: () => import('@/view/sales/coupons/coupons-sale/coupons-sale.vue')
      }
    ]
 },
{
  path: '/card',
  name: 'card',
  meta: {
    icon: 'logo-buffer',
    title: '卡'
  },
  component: Main,
  children: [
    {
      path: 'card_templet',
      name: 'card_templet',
      meta: {
        title: '卡模板'
      },
      component: () => import('@/view/sales/card/card-templet/card-templet.vue')
    },
    {
      path: 'card_send',
      name: 'card_send',
      meta: {
        title: '发卡'
      },
      component: () => import('@/view/sales/card/card-send/card-send.vue')
    },
    {
      path: 'card_sale',
      name: 'card_sale',
      meta: {
        title: '卡销售'
      },
      component: () => import('@/view/sales/card/card-sale/card-sale.vue')
    }
  ]
},
{
  path: '/sales_promotion',
  name: 'sales_promotion',
  meta: {
    hide: true
  },
  component: Main,
  children: [
    {
      path: 'sales_promotion',
      name: 'sales_promotion',
      meta: {
        icon: 'ios-hammer',
        title: '单品促销'
      },
      component: () => import('@/view/sales/sales-promotion/sales-promotion.vue')
    }
  ]
},
{
  path: '/package_promotion',
  name: 'package_promotion',
  meta: {
    hide: true
  },
  component: Main,
  children: [
    {
      path: 'package_promotion',
      name: 'package_promotion',
      meta: {
        icon: 'ios-hammer',
        title: '套餐促销'
      },
      component: () => import('@/view/sales/package-promotion/package-promotion.vue')
    }
  ]
},
{
  path: '/full_reduction_promotion',
  name: 'full_reduction_promotion',
  meta: {
    hide: true
  },
  component: Main,
  children: [
    {
      path: 'full_reduction_promotion',
      name: 'full_reduction_promotion',
      meta: {
        icon: 'ios-hammer',
        title: '满减/送促销'
      },
      component: () => import('@/view/sales/full-reduction-promotion/full-reduction-promotion.vue')
    }
  ]
},
{
  path: '/customer_maintenance',
  name: 'customer_maintenance',
  meta: {
    icon: 'logo-buffer',
    title: '客群维护'
  },
  component: Main,
  children: [
    {
      path: 'grade',
      name: 'grade',
      meta: {
        title: '等级管理'
      },
      component: () => import('@/view/sales/customer-maintenance/grade/grade.vue')
    },
    {
      path: 'recharge',
      name: 'recharge',
      meta: {
        title: '充值管理'
      },
      component: () => import('@/view/sales/customer-maintenance/recharge/recharge.vue')
    },
    {
      path: 'integral',
      name: 'integral',
      meta: {
        title: '积分管理'
      },
      component: () => import('@/view/sales/customer-maintenance/integral/integral.vue')
    },
    {
      path: 'growthvalue',
      name: 'growthvalue',
      meta: {
        title: '成长值管理'
      },
      component: () => import('@/view/sales/customer-maintenance/growthvalue/growthvalue.vue')
    },
    {
      path: 'activatecard',
      name: 'activatecard',
      meta: {
        title: '开卡策略'
      },
      component: () => import('@/view/sales/customer-maintenance/activatecard/activatecard.vue')
    },
    {
      path: 'perinformation',
      name: 'perinformation',
      meta: {
        title: '完善资料策略'
      },
      component: () => import('@/view/sales/customer-maintenance/perinformation/perinformation.vue')
    },
    {
      path: 'recommend',
      name: 'recommend',
      meta: {
        title: '推荐赠送策略'
      },
      component: () => import('@/view/sales/customer-maintenance/recommend/recommend.vue')
    },
    {
      path: 'signin',
      name: 'signin',
      meta: {
        title: '签到赠送策略'
      },
      component: () => import('@/view/sales/customer-maintenance/signin/signin.vue')
    }
  ]
},
  {
    path: '/member',
    name: 'member',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'member',
        name: 'member',
        meta: {
          icon: 'ios-hammer',
          title: '会员'
        },
        component: () => import('@/view/member/member.vue')
      }
    ]
  },
  {
    path: '/storehouse',
    name: 'storehouse',
    meta: {
      icon: 'logo-buffer',
      title: '仓库管理'
    },
    component: Main,
    children: [
      {
        path: 'purchase_order',
        name: 'purchase_order',
        meta: {
          title: '采购单'
        },
        component: () => import('@/view/storehouse/purchase-order/purchase-order.vue')
      },
      {
        path: 'materials_storehouse',
        name: 'materials_storehouse',
        meta: {
          title: '原料库管理'
        },
        component: () => import('@/view/storehouse/materials-storehouse/materials-storehouse.vue')
      },
      {
        path: 'product_storehouse',
        name: 'product_storehouse',
        meta: {
          title: '成品库管理'
        },
        component: () => import('@/view/storehouse/product-storehouse/product-storehouse.vue')
      }
    ]
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      icon: 'logo-buffer',
      title: '报表中心'
    },
    component: Main,
    children: [
      {
        path: 'transaction_profile',
        name: 'transaction_profile',
        meta: {
          icon: 'md-trending-up',
          title: '交易概况'
        },
        component: () => import('@/view/report/transaction-profile/transaction-profile.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
]
