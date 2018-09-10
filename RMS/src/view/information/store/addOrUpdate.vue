<style lang="less">
@import "./addOrUpdate.less";
</style>
<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="门店编码">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="门店名称">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="门店车间">
        <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="裱花间"></Checkbox>
            <Checkbox label="现烤间"></Checkbox>
            <Checkbox label="水吧"></Checkbox>
        </CheckboxGroup>
    </FormItem>
    <FormItem label="门店电话">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="店长">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="店长手机">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="地址设置">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="备注">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
        <Button style="margin-right: 8px">取消</Button>
        <Button type="primary">保存</Button>
    </FormItem>
  </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
