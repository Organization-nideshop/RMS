<template>
    <div class="modal-backdrop">
        <div class="modal code">
            <div class="modal-header">
                <slot name="header">
                {{title}}<button type="button" class="btn-close" @click="close">x</button>
                </slot>
            </div>
            <div class="modal-body">
                <!-- <slot name="body"></slot> -->
                <img v-bind:src="imgUrl"/>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                  <Button @click="close">关闭</Button>
                  <Button type="primary" @click="download">下载</Button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CodeModal',
    props: {
    title: {
      type: String,
      default: ''
    },
    imgUrl: {
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
            this.$emit('close')
        },
         download: function (){
            this.$emit('download')
        }
    }
}
</script>
<style lang="less">
.modal.c


ode {


  width:





 auto;
  }
</style>
