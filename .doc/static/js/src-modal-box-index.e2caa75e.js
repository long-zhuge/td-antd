(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/modalBox/index.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/createClass.js"),l=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/getPrototypeOf.js"),s=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/inherits.js"),c=n("./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=n("react"),r=n.n(b),d=n("./node_modules/_@mdx-js_react@1.5.1@@mdx-js/react/dist/index.es.js"),A=n("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),m=n("./node_modules/_antd@3.25.1@antd/es/modal/index.js"),j=(n("./node_modules/_antd@3.25.1@antd/es/modal/style/index.js"),function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={visible:!1},n.show=function(e){n.setState({visible:!0},(function(){e&&e()}))},n.hide=function(e){n.setState({visible:!1},(function(){e&&e()}))},n.ok=function(){var e=n.props.handleOk;e?e():n.hide()},n.cancel=function(){var e=n.props.handleCancel;e?e():n.hide()},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.visible,t=this.props,n=t.width,a=void 0===n?500:n,o=t.children;return b.createElement(m.a,Object.assign({width:a,visible:e,onOk:this.ok,onCancel:this.cancel,destroyOnClose:!0,maskClosable:!1},this.props),o)}}]),t}(b.Component));"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBox",filename:"src/modalBox/index.js"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBox",filename:"src/modalBox/index.js"}}),n.d(t,"default",(function(){return p}));var g={},O="wrapper";function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(d.b)(O,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("h2",{id:"modalbox"},"ModalBox"),Object(d.b)("p",null,"\u57fa\u4e8e Modal \u7684\u4e8c\u6b21\u5c01\u88c5\uff0c\u901a\u8fc7 refs \u8c03\u7528\u7ec4\u4ef6\u51fd\u6570\u6765\u6253\u5f00\u6d6e\u5c42\u3002"),Object(d.b)(A.c,{__position:0,__code:'class Example extends React.Component {\n    handleClick() {\n      this.modalRef.show()\n    }\n    render() {\n      return (\n        <React.Fragment>\n          <button onClick={() => this.handleClick()}>Show Modal</button>\n          <ModalBox\n            title="demo"\n            ref={r => {\n              this.modalRef = r\n            }}\n          >\n            content\n          </ModalBox>\n        </React.Fragment>\n      )\n    }\n  }',__scope:{props:this?this.props:n,Playground:A.c,ModalBox:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKY9SceJr28dDZXaD04AEchJCIIioBIrBJFUbBcIg9hA0lMiTU1dowVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdlIAFk09gADZNO09YwGAgAxb1oESZT-GcQ4EQdTAYKEfgljo1BKDgPSESs6sbJoZwICwy52AARiMnT5H4wSpgAQTmKT2AjKDyBsKB0DDVCOSksRMujGR2BRCSYG4YBsLEqq4HkLca2AHLoHy4IADJOvGRJ5koZo2rygruFGuUwGQyUBlQdp2AAfg2dqwwjIqriGjrUES6spBkKs3zMGF1WOGAwDCKAphW4rSu2tLl2rCxgEu7gStk-6a3IOC4DsM8sG9MlumwED0DsTiCBwNdqBdV6axh6YMFgewoFibZLuh2GYYmWwcDo9B4jFMAcDgYYRhWlcYa29GLEnSMirRymJ1HPpzCjN76cYUGcFszIUivAhmvpmHGA8cIInMahEeRmqnpKzG4HwSoEaRnYVqa5xifYQjcagKRhZuah-YFhNNeI7wycN8YXlgPgQEwOj-DNw2ujAGqjmemSHfN2Xsfo_GMoED36fkCnzYsA2Q90EDRFZgWpGNhjvDDympA5rnXB5_RE5ht9A7N4OYa6AgmdrH6_tgdhNxXIPo0kW69rML8QComicZNpiWI0LQKGA_QGDwo6jBCEHNW4-UzTY_CNfokf3AIdBPTgWj6PHo72hnuf4EXrXJEq30VX9Z0sAnzBTtCc6ek-uw48Y6EsCBoezXBx1IczNGUSyDK6fYVhbAgDxYCuU6UA4AwB0hYeQe91hE1GBlCM5APBFTdp_R47BAB8ZoALk9ACEVoAQANABiFiuL2wCCBiSyFlM2398h_2iqiBkoCaxKEyggl6ZtkHwCRjQS0thXCUPNAfC0bDGTRzgewbqPQPArT3uTD86xwH8QsDYTy0lYHwKukgyQ7BsE4MABG2gBGTXwQSQmo5iG0FIdHchv9_6GniMA2hYCljS3dtHFhcA2EWhYBUbhvDzT8LNkIkRcDxGVykdWGR-8LCUF2IoxhDiYbIMAJ0OgBvxUAHYegAs7UAJDGgA6lJXMlGScN0CwB1LsNC0kvb9koHcCRNYIDNAjH4eGMACm0zNrUvJ9SUZBPRgXJmFSwF6KxvImAATgkQOrHEAS84YFRNUewBJgA15U0RkrJ1AhJQWaQjdwCIoCoQyiUgccBumcGqasmA9h1nzkadHI5JyxlQEGR0xmAhUD7LzviPpXABntNQsMqmdApyo0WagZZX8f6UK2cU_Rb9aD7OyZ_CwOJ0AFmkgAVhUipGx71cobTRUUl5ctSnlNkTWTpDzrro0YHHD2cKJg1UpXgZ5MMzGUJqgy2AdKazUAKTVL24TWVhNQFcjZnL9GjI2Ty46KIhCJB1HyqAAUBH0yiHAbYiMApcKtsAQBwDRXABwDqnZZTGpm0zjJdaYZWWx3ogbD5W0toNyCtsNOf5NDUEAhHHuYE0b8FQN6RkSB2D8B-MWaoGRzQ_n-j5dY_BWAZHyNQfgVx-AqRwImlS4bqz8HKOQfoMxuz-l9fwFKFU8Jl1DWXTAZJKCJFzHkAoDMzTmgDX8UsqaLD8CiGgONfqVDhg7s2ztZafnwggPADtn9-CmklB28Q3AYpmRwEmJNvaW0gDXpOkAAA9edAAmTdC6QBorHZqS0kRV1iGnbO-dKaQDSLMPIBugbvAfGoJAFI_44DOu0K60CIBZIgFoD6LIcb_WmloOacdFpZgzH4LeoO8ggA",mdxType:"Playground"},function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.modalRef.show()}},{key:"render",value:function(){var e=this;return Object(d.b)(r.a.Fragment,null,Object(d.b)("button",{onClick:function(){return e.handleClick()}},"Show Modal"),Object(d.b)(j,{title:"demo",ref:function(t){e.modalRef=t},mdxType:"ModalBox"},"content"))}}]),t}(r.a.Component)),Object(d.b)("h2",{id:"api"},"API"),Object(d.b)("p",null,"\u652f\u6301\u539f ",Object(d.b)("a",Object.assign({parentName:"p"},{href:"https://ant-design.gitee.io/components/modal-cn/"}),"Modal")," API"),Object(d.b)("table",null,Object(d.b)("thead",{parentName:"table"},Object(d.b)("tr",{parentName:"thead"},Object(d.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(d.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(d.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(d.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"))),Object(d.b)("tbody",{parentName:"table"},Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"show(callback)"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u6d6e\u5c42\u663e\u793a\u7684\u51fd\u6570"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"hide(callback)"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u6d6e\u5c42\u9690\u85cf\u7684\u51fd\u6570"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"handleOk"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"handleCancel"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(d.b)("td",Object.assign({parentName:"tr"},{align:"left"}))))))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/modalBox/index.mdx"}}),p.isMDXComponent=!0}}]);