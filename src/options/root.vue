<template lang="pug">
    .wrap
      main.options
        el-container
          el-header
            h2 オプション
          el-main
            el-form(ref='form', :model='form', label-width='300px')
              el-form-item(label='Redmine Project ID')
                el-input(v-model='form.name')
              el-form-item(label='GitLab Project Name')
                el-input(v-model='form.name')
              el-form-item(label='Review Chatwork RoomID')
                el-input(v-model='form.name')
              el-form-item(label='Activity zone')
                el-select(v-model='form.region', placeholder='please select your zone')
                  el-option(label='Zone one', value='shanghai')
                  el-option(label='Zone two', value='beijing')
              el-form-item(label='Activity time')
                el-col(:span='11')
                  el-date-picker(type='date', placeholder='Pick a date', v-model='form.date1', style='width: 100%;')
                el-col.line(:span='2') -
                el-col(:span='11')
                  el-time-picker(type='fixed-time', placeholder='Pick a time', v-model='form.date2', style='width: 100%;')
              el-form-item(label='Instant delivery')
                el-switch(v-model='form.delivery')
              el-form-item(label='Activity type')
                el-checkbox-group(v-model='form.type')
                  el-checkbox(label='Online activities', name='type')
                  el-checkbox(label='Promotion activities', name='type')
                  el-checkbox(label='Offline activities', name='type')
                  el-checkbox(label='Simple brand exposure', name='type')
              el-form-item(label='Resources')
                el-radio-group(v-model='form.resource')
                  el-radio(label='Sponsor')
                  el-radio(label='Venue')
              el-form-item(label='Activity form')
                el-input(type='textarea', v-model='form.desc')
              el-form-item
                el-button(type='primary', @click='onSubmit') Save
                el-button Cancel
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
<style lang="scss">
main.options {
  margin: 0 auto;
  width: 700px;
}
.el-form-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;

  label {
    text-align: center;
  }
}
</style>
