<style lang="less">
@import './index.less';
</style>
<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-header">
                <slot name="header">
                {{title}}<button type="button" class="btn-close" @click="close">x</button>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                <div id="container"></div>
                <!-- 地址：<input value="{{content}}"> -->
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                <!-- 这是Modal弹框的脚部 -->
                  <Button @click="close">取消</Button>
                  <Button type="primary" @click="close">关闭</Button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
    data () {
        return {
        }
    },
    methods: {
        close: function () {
            this.$emit('close');
        }
    }
}
</script>
