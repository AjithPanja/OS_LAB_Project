(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,n){e.exports=n(527)},214:function(e,t,n){},242:function(e,t){},244:function(e,t){},276:function(e,t){},277:function(e,t){},346:function(e,t){},527:function(e,t,n){"use strict";n.r(t);var a=n(5),u=n.n(a),c=n(63),o=n.n(c),i=n(82),l=n(83),r=n(85),s=n(84),d=n(86),h=n(28),b=n(207),m=n.n(b),p=(n(214),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={value:"Enter Your Code",output:"",lang:"C++"},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n.summa=n.summa.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"summa",value:function(e){document.getElementById("io").innerHTML="<input type='text' value = {this.state.output}/>"}},{key:"handleSubmit",value:function(e){var t=this.state.value,a=n(216),u=this;a({method:"POST",uri:"https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute",json:{script:t,language:"cpp",versionIndex:"0",clientId:"253a2a7d218eed59d4d99b89a24c9c31",clientSecret:"94b3ffea058f9f2f71e2da2dabd03e3aebfd65b9865486fa30bb03cfd88d4565"}}).then(function(e){console.log(e),u.setState({output:e.output})}).catch(function(e){console.log(e)}),e.preventDefault()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("h3",{style:{align:"center",color:"purple"}},"Hello Panja"),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,cols:140,rows:50}))),u.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"Submit!!!"),u.a.createElement("input",{type:"text",id:"io",value:this.state.output}))}}]),t}(a.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement(p,null))}}]),t}(a.Component);o.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[209,2,1]]]);
//# sourceMappingURL=main.2e8e928d.chunk.js.map