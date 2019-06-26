'use strict'

const postcss = require('postcss')
const Px2rem = require('px2rem')

module.exports = postcss.plugin('postcss-px2rem', function (options) {
  Object.prototype.toString.call(options) !== '[object Array]' && (options = [options])
  return function (css, result) {
    let cssText = css.toString()
    options.forEach(o => {
      if (o.exclude && css.source.input.file.match(o.exclude) !== null) {
        result.root = css;
        return
      }
      if (o.include && css.source.input.file.match(o.exclude) === null) {
        result.root = css;
        return
      }
      const px2remIns = new Px2rem(o)
      cssText = px2remIns.generateRem(oldCssText);
    })
    const cssObj = postcss.parse(cssText)
    result.root = cssObj
  }
})
