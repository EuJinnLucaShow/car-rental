"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[438],{7438:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a,r,i,l,c=t(3433),o=t(9439),f=t(2791),s=t(3891),p=t(5551),u=t(168),x=t(6088),m=t(1087),g=x.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),d=x.Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 50px 29px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),h=x.Z.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=(0,x.Z)(m.rU)(l||(l=(0,u.Z)(["\n  padding: 14px 34px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  margin-top: 20px;\n  font-family: 'Manrope';\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42;\n  text-transform: none;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),v=t(5048),M=t(6351),j=t(3329);var k=function(){var e=(0,f.useState)([]),n=(0,o.Z)(e,2),t=n[0],a=n[1],r=(0,v.v9)(M.T);(0,f.useEffect)((function(){r&&a(r.favorites)}),[r]);var i=(0,f.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),l=(0,o.Z)(i,2),u=l[0],x=l[1],m=(0,f.useState)(null),k=(0,o.Z)(m,2),b=k[0],w=k[1],y=(0,f.useState)(!1),S=(0,o.Z)(y,2),P=S[0],C=S[1];(0,f.useEffect)((function(){if(P)if(u.make||u.filteredPrices.length>0||u.minMileage||u.maxMileage){var e=t.filter((function(e){return(!u.make||e.make===u.make.value)&&(!(u.filteredPrices.length>0&&!u.filteredPrices.some((function(n){return n.value===e.rentalPrice.replace("$","")})))&&(!(u.minMileage&&e.mileage<u.minMileage)&&!(u.maxMileage&&e.mileage>u.maxMileage)))}));w(e)}else w(t)}),[u,t,P]);var F=t?(0,c.Z)(new Set(t.map((function(e){return e.make})))):[],E=t?(0,c.Z)(new Set(t.map((function(e){return e.rentalPrice.replace("$","")})))):[],$=t?(0,c.Z)(new Set(t.map((function(e){return e.mileage})))):[],_=Math.min.apply(Math,(0,c.Z)($)),z=Math.max.apply(Math,(0,c.Z)($));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{children:(0,j.jsx)(p.Z,{makes:F,prices:E,minMileage:_,maxMileage:z,onFilterChange:function(e){x(e),C(!0)},filters:u})}),(0,j.jsx)(d,{children:P?null!==b&&b.length>0?b.map((function(e,n){return(0,j.jsx)(s.Z,{data:e},n)})):(0,j.jsx)("div",{children:"No results found for the selected criteria."}):t.length>0?t.map((function(e,n){return(0,j.jsx)(s.Z,{data:e},n)})):(0,j.jsxs)(h,{children:[(0,j.jsx)("span",{children:"Favorite is empty."}),(0,j.jsx)(Z,{to:"/catalog",children:"Go to catalog"})]})})]})}}}]);
//# sourceMappingURL=438.9102122c.chunk.js.map