<style lang="less">
  @import './home.less';
</style>
<template>
  <div>
    <Row class="tip">
          <Col span="24">尊敬的用户，欢迎来到商家管理后台，你需要一款得心应手的管理系统!<br/>我们希望赋能每位商家，让商家实现自主化经营管理，摆脱平台束缚。本系统将给你带来智能化全新互联网+实体经营管理体验。</Col>
    </Row>
    <Card shadow class="detail">
      <Row>
          <Col span="24"> 按照以下步骤开始使用 </Col>
      </Row>
      <Row :gutter="16">
            <Col span="20">
              1收银端
              <span>
                无论宽屏、方屏都有对应的收银系统可供下载
              </span>
            </Col>
            <Col span="4"> 下载 </Col>
      </Row>
      <Row :gutter="16">
            <Col span="20">
              维护门店
              <span>
                维护门店信息，是各类业务操作的基础
              </span>
            </Col>
            <Col span="4"> 前往 </Col>
      </Row>
      <Row :gutter="16">
            <Col span="20">
              录入商品
              <span>
                任何收银软件都需要基础的商品资料等信息来支撑才能运行，<br/>商品资料的录入是必须要去完成的“刚需”环节
              </span>
            </Col>
            <Col span="4">前往</Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    Example
  }
}
</script>
