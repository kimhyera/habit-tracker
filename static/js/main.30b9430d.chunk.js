(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),r=n(9),i=n.n(r),o=(n(16),n(10)),u=n(6),b=n(2),h=n(3),l=n(5),j=n(4),p=(n(17),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).formRef=s.a.createRef(),t.inputRef=s.a.createRef(),t.onSubmit=function(e){e.preventDefault();var n=t.inputRef.current.value;n&&t.props.onAdd(n),t.formRef.current.reset()},t}return Object(h.a)(n,[{key:"render",value:function(){return console.log("habitAddForm"),Object(a.jsxs)("form",{ref:this.formRef,className:"add-form",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"Habit"}),Object(a.jsx)("button",{className:"add-button",children:"Add"})]})}}]),n}(c.PureComponent)),d=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.habit,n=e.name,c=e.count;return console.log("habit: ".concat(n)),Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsx)("span",{className:"habit-name",children:n}),Object(a.jsx)("span",{className:"habit-count",children:c}),Object(a.jsx)("button",{className:"habit-button habit-increase",onClick:function(){return t.props.onIncrement(t.props.habit)},children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-decrease",onClick:function(){return t.props.onDecrement(t.props.habit)},children:Object(a.jsx)("i",{className:"fas fa-minus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-delete",onClick:function(){return t.props.onDelete(t.props.habit)},children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(c.PureComponent),f=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return console.log("habits"),Object(a.jsxs)("div",{className:"habits",children:[Object(a.jsx)(p,{onAdd:this.onAdd}),Object(a.jsx)("ul",{children:this.props.habits.map((function(e){return Object(a.jsx)(d,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(a.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(c.Component),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(a.jsx)("span",{children:"Habit Traker"}),Object(a.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(c.PureComponent),O=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.onIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.onDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(u.a)(Object(u.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.onDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.onAdd=function(e){var n=[].concat(Object(o.a)(t.state.habits),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t.onReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(u.a)(Object(u.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(a.jsx)(f,{habits:this.state.habits,onIncrement:this.onIncrement,onDecrement:this.onDecrement,onDelete:this.onDelete,onAdd:this.onAdd,onReset:this.onReset})]})}}]),n}(c.Component);n(18);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.30b9430d.chunk.js.map