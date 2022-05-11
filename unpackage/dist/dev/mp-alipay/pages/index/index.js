"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    navToTest() {
      common_vendor.index.navigateTo({
        url: "/pages/test/test",
        success({ eventChannel }) {
          eventChannel.emit("testData", { value: "\u6D4B\u8BD5\u6570\u636E" });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.navToTest && $options.navToTest(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenxuejian/HBuilderProjects/UniTest/pages/index/index.vue"]]);
my.createPage(MiniProgramPage);
