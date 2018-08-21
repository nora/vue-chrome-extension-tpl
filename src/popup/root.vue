<template lang="pug">
    div
      el-button(type="primary" @click="hundleClickRequest") Get URL
</template>
<script>
export default {
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {
    tab() {
      chrome.tabs.create({ url: 'pages/app.html' });
    },
    getCurrentTab() {
      return new Promise(resolve => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
          resolve(tabs[0].url);
        });
      });
    },
    async hundleClickRequest() {
      const url = await this.getCurrentTab();
      alert(url);
    },
  },
};
</script>
<style lang="scss">
div {
  color: blue;
}
</style>
