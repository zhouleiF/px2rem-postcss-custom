# postcss-px2rem-custom
这是基于postcss与px2rem的一个扩展，旨在自定义文件的转换方案。
可以传入一个数组，分别指定不同文件使用不同的转换值。

[postcss](https://www.npmjs.com/package/postcss)
[px2rem](https://www.npmjs.com/package/px2rem).

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

## 使用
在`postcss.config.js`中配置
```
module.exports = {
  plugins: {
    'postcss-px2rem-custom': [
      {
        remUnit: 75,
        exclude: /node_modules/i
      },
      {
        remUnit: 37.5,
        include: /vant/i
      }
    ]
  }
}
```

## License

MIT
