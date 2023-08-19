module.exports = {
  printWidth: 200, // 单行长度，超过自动换行
  arrowParens: "always", // 单参数箭头函数参数周围不使用圆括号
  singleQuote: true, // 使用单引号
  useTabs: false,
  tabWidth: 2, // 缩进长度
  endOfLine: "lf",
  trailingComma: "all", // 允许函数的最后一个参数有尾逗号
  semi: true, // 句末使用分号
  proseWrap: "never",
  overrides: [{ files: ".prettierrc", options: { parser: "json" } }],
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"],
};
