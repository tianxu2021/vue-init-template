const plugins = [];
if (["production", "prod"].includes(process.env.NODE_ENV)) {
  plugins.push("transform-remove-console");
}

plugins.push(
  [
    "import", // 按需引入ant-design-vue组件，会自动引入组件对应的css文件
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true, // `style: true` 会加载 less 文件
    },
  ],
  [
    "import", // 按需引入vxe
    {
      libraryName: "vxe-table",
      style: true, // 样式是否也按需加载
    },
    "vxe-table",
  ]
);

module.exports = {
  presets: [["@vue/app", { useBuiltIns: "entry" }]],
  plugins,
};
