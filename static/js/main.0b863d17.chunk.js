(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),a=i.n(s),d=i(10),c=i.n(d),r=(i(16),i(3)),o=i(4),l=i(7),b=i(6),u=i(5),j=(i(17),i(2)),p=(i(9),function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).setDisabled=function(e){n.setState({disabled:e})},n.state={disabled:!1},n}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({},this.props),{},{children:[Object(n.jsx)("input",{type:"text",id:"school",placeholder:"School",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",id:"graduationType",placeholder:"Level of Education",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",className:"dateStarted",placeholder:"Date Started",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",className:"dateEnded",placeholder:"Date Ended",disabled:this.state.disabled}),Object(n.jsx)("textarea",{className:"description",placeholder:"Enter some more information",disabled:this.state.disabled})]}))}}]),i}(s.Component)),h=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).setDisabled=function(t){e.setState({disabled:t})},e.state={disabled:!1},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({},this.props),{},{children:[Object(n.jsx)("input",{type:"text",id:"company",placeholder:"Company",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",id:"position",placeholder:"Position",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",className:"dateStarted",placeholder:"Date Started",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",className:"dateEnded",placeholder:"Date Ended",disabled:this.state.disabled}),Object(n.jsx)("textarea",{className:"description",placeholder:"Enter some more information",disabled:this.state.disabled})]}))}}]),i}(s.Component),m=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).setDisabled=function(t){e.setState({disabled:t})},e.state={disabled:!1},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({},this.props),{},{children:[Object(n.jsx)("input",{type:"text",id:"fname",placeholder:"First Name",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",id:"lname",placeholder:"Last Name",disabled:this.state.disabled}),Object(n.jsx)("input",{type:"text",id:"dob",placeholder:"Date of Birth",disabled:this.state.disabled})]}))}}]),i}(s.Component),x=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={firstName:"",lastName:"",dateOfBirth:"",addEducation:!1,addExperience:!1},n.infoElements=[a.a.createRef()],n.educationRefList=[],n.educationElements=[],n.experienceRefList=[],n.experienceElements=[],n.submit=n.submit.bind(Object(l.a)(n)),n.addEducation=n.addEducation.bind(Object(l.a)(n)),n.addExperience=n.addExperience.bind(Object(l.a)(n)),n}return Object(o.a)(i,[{key:"submit",value:function(e,t){for(var i=0;i<e.length;i++)e[i].current.setDisabled(t)}},{key:"addEducation",value:function(){var e=this;this.setState({addEducation:!0}),this.educationRefList.push(a.a.createRef()),this.educationElements=this.educationRefList.map((function(t,i){return Object(n.jsx)(p,{className:"education",ref:e.educationRefList[i]},i)}))}},{key:"addExperience",value:function(){var e=this;this.setState({addExperience:!0}),this.experienceRefList.push(a.a.createRef()),this.experienceElements=this.experienceRefList.map((function(t,i){return Object(n.jsx)(h,{className:"experience",ref:e.experienceRefList[i]},i)}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"app",children:[Object(n.jsx)("h1",{children:"Resume Builder"}),Object(n.jsxs)("form",{children:[Object(n.jsx)(m,{className:"info",ref:this.infoElements[0]}),Object(n.jsx)("button",{className:"submit",type:"button",onClick:function(){return e.submit(e.infoElements,!0)},id:"submitInfo",children:"Submit"}),Object(n.jsx)("button",{className:"edit",type:"button",onClick:function(){return e.submit(e.infoElements,!1)},id:"editInfo",children:"Edit"})]}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h2",{children:"Education"}),Object(n.jsx)("button",{className:"submit",type:"button",onClick:function(){return e.submit(e.educationRefList,!0)},id:"submitEducation",children:"Submit"}),Object(n.jsx)("button",{className:"add",type:"button",onClick:this.addEducation,id:"addEducation",children:"Add"}),Object(n.jsx)("button",{className:"edit",type:"button",onClick:function(){return e.submit(e.educationRefList,!1)},id:"editEducatthis.educationRefListion",children:"Edit"}),Object(n.jsx)("ul",{children:this.educationElements})]}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h2",{children:"Experience"}),Object(n.jsx)("button",{className:"submit",type:"button",onClick:function(){return e.submit(e.experienceRefList,!0)},id:"submitExperience",children:"Submit"}),Object(n.jsx)("button",{className:"add",type:"button",onClick:this.addExperience,id:"addExperience",children:"Add"}),Object(n.jsx)("button",{className:"edit",type:"button",onClick:function(){return e.submit(e.experienceRefList,!1)},id:"editExperience",children:"Edit"}),Object(n.jsx)("ul",{children:this.experienceElements})]})]})}}]),i}(s.Component),f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,d=t.getTTFB;i(e),n(e),s(e),a(e),d(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()},9:function(e,t,i){}},[[18,1,2]]]);
//# sourceMappingURL=main.0b863d17.chunk.js.map