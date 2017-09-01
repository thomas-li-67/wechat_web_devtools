'use strict';!function(require,directRequire){const a=require('react'),b=require('./fc137838572a83604db39acff8e909e0.js'),c=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),d=require('./eadce02c750c875a10680bcfedadec88.js'),e=require('redux'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./875171e7b864aa58d026d4fa0999fbd1.js'),{connect:h}=require('react-redux');class i extends a.Component{constructor(a){super(a),this.state={show:a.show,left:0,top:0}}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show})}onShowClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect();this.setState({left:b.left,top:b.top+b.height}),this.props.onShowClick()}onSelectClick(a,b){b.stopPropagation(),this.props.onSelectClick(a)}onAddDeviceClick(){this.props.setAddDevicePopUp({show:!0})}onRemoveDeviceClick(a){this.props.removeDevice(a)}render(){let b=this.props,c=b.show?'ui-icon-arrow-up-o':'ui-icon-arrow-down-o',d=[],e='default';return b.list.map((c,f)=>{e!=c.type&&d.push(a.createElement('div',{className:'ui-dropdown-divider',key:`divider_${f}`})),d.push(a.createElement('div',{className:'ui-dropdown-item',key:f,onClick:this.onSelectClick.bind(this,f)},a.createElement('div',{className:'ui-dropdown-item-hd'},f==b.current?a.createElement('i',{className:'ui-icon-tick'}):null),a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('span',null,c.name),a.createElement('span',{className:'ui-desc'},c.desc)),'custom'==c.type?a.createElement('div',{className:'ui-dropdown-item-ft',onClick:this.onRemoveDeviceClick.bind(this,f)},a.createElement('span',{className:'ui-dropdown-opr'},a.createElement('i',{className:'ui-icon-close'}))):null)),e=c.type}),a.createElement('div',{className:'simulator-toolbar-item',onClick:this.onShowClick.bind(this)},a.createElement('p',null,b.currentWording),a.createElement('i',{className:c}),a.createElement(g,{show:this.state.show,style:{left:this.state.left,top:this.state.top},inClassName:'ui-popover',outClassName:'ui-animate-fadeOut ui-popover'},a.createElement('div',{className:'ui-dropdown'},d,a.createElement('div',{className:'ui-dropdown-divider'}),a.createElement('div',{className:'ui-dropdown-item',onClick:this.onAddDeviceClick.bind(this)},a.createElement('div',{className:'ui-dropdown-item-hd'},a.createElement('i',{className:'ui-icon-plus'})),a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('span',null,'\u81EA\u5B9A\u4E49'))))))}}module.exports=h((a)=>{let b=a.toolbar.device;return{show:a.toolbar.clickKey==d.DEVICE,list:b.list,currentWording:b.list[b.current].name,current:b.current,left:0,top:27}},(a)=>{return{onShowClick:f.bindActionCreators(b.toggleDeviceToolbar,a),onSelectClick:f.bindActionCreators(b.selectDevice,a),removeDevice:f.bindActionCreators(b.removeDevice,a),setAddDevicePopUp:f.bindActionCreators(c.setAddDevicePopUp,a)}})(i)}(require('lazyload'),require);