import{a as vt,b as Ct}from"./chunk-MSM33I7I.js";import{d as _t}from"./chunk-6N4QSK7X.js";import{c as it,d as b,e as nt,f as rt,j as lt,k as ot,l as at,m as st,p as dt,q as ut,r as mt,s as ct,x as pt,y as gt,z as ht}from"./chunk-DKI4PBNW.js";import{b as et}from"./chunk-3FS5RTN6.js";import{Aa as W,Ba as D,Ca as v,Da as h,Db as Q,Fb as X,Jb as Y,Kb as Z,L as O,La as q,Ma as o,Mb as $,Na as f,Nb as tt,Oa as k,Pa as P,R as p,S as g,Ta as I,Ua as T,Va as V,Xa as B,Za as E,a as G,b as N,ea as s,eb as U,fa as x,la as S,na as m,nb as L,ob as J,pb as z,tb as H,wa as r,wb as K,xa as l,ya as M,za as j}from"./chunk-W7CJDNGE.js";var A=d=>({"is-invalid":d});function xt(d,c){d&1&&(r(0,"small",15),o(1," Arrival is required "),l())}function St(d,c){d&1&&(r(0,"small",15),o(1," Departure is required "),l())}function ft(d,c){d&1&&(r(0,"small",15),o(1," Adults is required "),l())}function yt(d,c){d&1&&(r(0,"small",15),o(1," Children is required "),l())}function Rt(d,c){if(d&1){let n=D();r(0,"tr")(1,"td"),o(2),l(),r(3,"td"),o(4),l(),r(5,"td"),o(6),r(7,"span",19),v("click",function(){let t=p(n).$implicit,e=h(2),a=q(29);return g(e.openExtraModal(a,t))}),o(8),l()(),r(9,"td"),o(10),l(),r(11,"td"),o(12),l(),r(13,"td")(14,"button",20),v("click",function(){let t=p(n).index,e=h(2);return g(e.addRoomCount(t))}),r(15,"i",21),o(16,"add"),l()(),r(17,"span",22),o(18),l(),r(19,"button",23),v("click",function(){let t=p(n).index,e=h(2);return g(e.removeRoomCount(t))}),r(20,"i",21),o(21,"remove"),l()()(),r(22,"td")(23,"ng-multiselect-dropdown",24),V("ngModelChange",function(t){let e=p(n).index,a=h(2);return T(a.selectedItems[e],t)||(a.selectedItems[e]=t),g(t)}),l()()()}if(d&2){let n=c.$implicit,i=c.index,t=h(2);s(2),P("",n.roomtype," ",n.rateName,""),s(2),f(n.totalRoom-(n==null||n.dropdownSettings==null?null:n.dropdownSettings.limitSelection)),s(2),P(" ",n.adultOccupant," Adults ",n.childOccupant," Childs "),s(2),k(" ",n.extraAdults==0&&n.extraChilds==0?"add":"("+n.extraAdults+"/"+n.extraChilds+")"," "),s(2),f(n==null||n.roomPrice==null?null:n.roomPrice.toFixed(2)),s(2),f(n==null||n.roomCost==null?null:n.roomCost.toFixed(2)),s(2),m("disabled",(n==null||n.dropdownSettings==null?null:n.dropdownSettings.limitSelection)>=n.totalRoom),s(4),f(n==null||n.dropdownSettings==null?null:n.dropdownSettings.limitSelection),s(),m("disabled",(n==null||n.dropdownSettings==null?null:n.dropdownSettings.limitSelection)===0),s(4),m("placeholder","Select Room")("settings",n.dropdownSettings)("data",t.dropDownData(n.rooms,i)),I("ngModel",t.selectedItems[i])}}function Ft(d,c){if(d&1&&(r(0,"div",16)(1,"table",17)(2,"thead")(3,"tr")(4,"th"),o(5,"Room Type Name"),l(),r(6,"th"),o(7,"Available Rooms"),l(),r(8,"th"),o(9,"Sleeps"),l(),r(10,"th"),o(11,"Rate"),l(),r(12,"th"),o(13,"Cost"),l(),r(14,"th"),o(15,"No. of Rooms"),l(),r(16,"th"),o(17,"Room"),l()()(),r(18,"tbody"),S(19,Rt,24,15,"tr",18),l()()()),d&2){let n=h();s(19),m("ngForOf",n.roomsData)("ngForTrackBy",n.trackByFn)}}function wt(d,c){if(d&1&&(j(0),o(1),W()),d&2){let n,i=h(2);s(),k(" (Total Cost ",(n=i.groupForm.get("totalCost"))==null||n.value==null?null:n.value.toFixed(2),") ")}}function bt(d,c){if(d&1){let n=D();r(0,"div",25)(1,"button",26),v("click",function(){p(n);let t=h();return g(t.onSubmit())}),o(2," Next "),S(3,wt,2,1,"ng-container",27),l()()}if(d&2){let n,i,t=h();s(),m("disabled",(t.totalGuests==null?null:t.totalGuests.adults)+(t.totalGuests==null?null:t.totalGuests.childs)<((n=t.groupForm.get("adults"))==null?null:n.value)+((n=t.groupForm.get("childs"))==null?null:n.value)),s(2),m("ngIf",(t.totalGuests==null?null:t.totalGuests.adults)+(t.totalGuests==null?null:t.totalGuests.childs)>=((i=t.groupForm.get("adults"))==null?null:i.value)+((i=t.groupForm.get("childs"))==null?null:i.value))}}function Dt(d,c){if(d&1){let n=D();r(0,"div",28)(1,"h4",29),o(2,"Add Adults/Children"),l(),r(3,"button",30),v("click",function(){let t=p(n).$implicit;return g(t.dismiss(!1))}),l()(),r(4,"div",31)(5,"table",17)(6,"thead")(7,"tr")(8,"th",32),o(9,"Guests"),l(),r(10,"th",32),o(11,"Rate"),l(),r(12,"th"),o(13,"Number of Extras"),l()()(),r(14,"tbody")(15,"tr")(16,"th",33),o(17,"Adults"),l(),r(18,"td"),o(19),l(),r(20,"td")(21,"select",34),V("ngModelChange",function(t){p(n);let e=h();return T(e.extraGuestsData.extraAdults,t)||(e.extraGuestsData.extraAdults=t),g(t)}),r(22,"option",35),o(23,"0"),l(),r(24,"option",36),o(25,"1"),l(),r(26,"option",37),o(27,"2"),l(),r(28,"option",38),o(29,"3"),l()()()(),r(30,"tr")(31,"th",33),o(32,"Children"),l(),r(33,"td"),o(34),l(),r(35,"td")(36,"select",34),V("ngModelChange",function(t){p(n);let e=h();return T(e.extraGuestsData.extraChilds,t)||(e.extraGuestsData.extraChilds=t),g(t)}),r(37,"option",35),o(38,"0"),l(),r(39,"option",36),o(40,"1"),l(),r(41,"option",37),o(42,"2"),l(),r(43,"option",38),o(44,"3"),l()()()()()()(),r(45,"div",39)(46,"button",40),v("click",function(){let t=p(n).$implicit;return g(t.close(!0))}),o(47," Save "),l()()}if(d&2){let n=h();s(19),f(n.extraGuestsData.adultRate),s(2),I("ngModel",n.extraGuestsData.extraAdults),s(13),f(n.extraGuestsData.childRate),s(2),I("ngModel",n.extraGuestsData.extraChilds)}}var Bt=(()=>{let c=class c{constructor(i,t,e,a,u,_,C){this.fb=i,this.crudService=t,this.alertService=e,this.authService=a,this.route=u,this.router=_,this.modalService=C,this.roomsData=[],this.selectedItems=[],this.totalGuests={adults:0,childs:0},this.propertyUnitId="",this.roomTypeRooms={},this.extraGuestsData={extraAdults:0,extraChilds:0,childRate:0,adultRate:0},this.Today=""}ngOnInit(){this.propertyUnitId=this.authService.getUserInfo()?.user?.propertyUnitId,this.initForms(),this.clearSession()}clearSession(){sessionStorage.removeItem("reservationsArray"),sessionStorage.removeItem("groupDetails"),sessionStorage.removeItem("resdata")}initForms(){let i=new Date,t=this.formatDate(i);this.Today=t;let e=this.formatDate(new Date(i.getTime()+1*24*60*60*1e3));this.groupForm=this.fb.group({arrival:[t,b.required],departure:[e,b.required],adults:[2,[b.min(1),b.required]],childs:[0,b.required],totalCost:[0],totalPrice:[0]})}nextDate(){let i=new Date(this.groupForm.get("arrival")?.value);return i.setDate(i.getDate()+1),this.formatDate(i)}setDeparture(){let i=new Date(this.groupForm.get("arrival")?.value),t=new Date(this.groupForm.get("departure")?.value);if(i>=t){let e=(t.getTime()-i.getTime())/864e5;e=e<1?1:Math.round(e),i.setDate(i.getDate()+e),this.groupForm.controls.departure.setValue(this.formatDate(i))}this.resetGuestTotals()}formatDate(i){return new H("en-US").transform(i,"yyyy-MM-dd")||""}readRooms(){this.resetGuestTotals(),this.crudService.post(Z.READ_RESERVATION_RATE+this.propertyUnitId,this.groupForm.value).then(i=>{this.processRoomsData(i.data)}).catch(i=>{this.alertService.errorAlert(i?.error?.message)})}resetGuestTotals(){this.roomsData=[],this.selectedItems=[],this.roomTypeRooms={},this.totalGuests={adults:0,childs:0},this.groupForm.patchValue({totalCost:0,totalPrice:0})}processRoomsData(i){this.roomsData=i.map(t=>(t.dropdownSettings={singleSelection:!1,limitSelection:0,idField:"id",textField:"roomName",unSelectAllText:"UnSelect All",enableCheckAll:!1,itemsShowLimit:3,allowSearchFilter:!0},t.extraAdults=0,t.extraChilds=0,[t.roomPrice,t.roomCost]=this.calculateRoomCost(t),this.roomTypeRooms[t.roomTypeId]||(this.roomTypeRooms[t.roomTypeId]=t.rooms),this.selectedItems.push([]),t))}calculateRoomCost(i){let t=i.dateRate.reduce((a,u)=>a+Number(u.baseRate)+Number(u.adultRate*i.extraAdults)+Number(u.childRate*i.extraChilds),0),e=t*i.taxPercentage/100;return[t,t+e]}addRoomCount(i){this.updateRoomSelection(i,1)}removeRoomCount(i){this.updateRoomSelection(i,-1)}updateRoomSelection(i,t){let e=this.roomsData[i];if(e.dropdownSettings=Object.assign({},e.dropdownSettings,{limitSelection:e.dropdownSettings.limitSelection+t}),this.roomsData.forEach((a,u)=>{u!==i&&a.roomTypeId===e.roomTypeId&&(a.totalRoom-=t)}),this.totalGuests.adults+=t*e.adultOccupant,this.totalGuests.childs+=t*e.childOccupant,this.groupForm.controls.totalCost.patchValue(this.groupForm.get("totalCost")?.value+t*e.roomCost),this.groupForm.controls.totalPrice.patchValue(this.groupForm.get("totalPrice")?.value+t*e.roomPrice),t<0&&this.selectedItems[i].length>e.dropdownSettings.limitSelection){let a=[...this.selectedItems[i]];a.splice(a.length-1,1),this.selectedItems[i]=Object.assign(a)}}trackByFn(i,t){return t.id}dropDownData(i,t){return i.filter(e=>!this.selectedItems.some((a,u)=>u!==t&&a.some(_=>_.id===e.id)))}onSubmit(){let i=this.prepareReservationDetails();sessionStorage.setItem("resdata",JSON.stringify({reservationDetails:i,groupDetails:this.groupForm.value,roomTypeRooms:this.roomTypeRooms})),this.router.navigate(["/reservation-info"])}prepareReservationDetails(){return this.roomsData.reduce((i,t,e)=>{if(t.dropdownSettings.limitSelection>0){let a=this.createRoomDetails(t,e);return i.concat(a)}return i},[])}createRoomDetails(i,t){let e=this.selectedItems[t].map(u=>N(G({},i),{room:i,roomId:u.id})),a=Array(i.dropdownSettings.limitSelection-e.length).fill(N(G({},i),{room:{id:"assign",roomStatus:"vacant",roomCondition:"clean",roomNumber:"default",roomName:"default"},roomId:"assign"}));return e.concat(a)}openExtraModal(i,t){this.extraGuestsData={extraAdults:t.extraAdults,extraChilds:t.extraChilds,childRate:t.dateRate[0].childRate,adultRate:t.dateRate[0].adultRate},this.modalService.open(i).result.then(e=>{e&&(this.totalGuests.adults-=t.adultOccupant+t.extraAdults,this.totalGuests.childs-=t.childOccupant+t.extraChilds,t.extraAdults=Number(this.extraGuestsData.extraAdults),t.extraChilds=Number(this.extraGuestsData.extraChilds),this.groupForm.controls.totalCost.patchValue(this.groupForm.get("totalCost")?.value-t.roomCost),this.groupForm.controls.totalPrice.patchValue(this.groupForm.get("totalPrice")?.value-t.roomPrice),[t.roomPrice,t.roomCost]=this.calculateRoomCost(t),this.totalGuests.adults+=t.adultOccupant+t.extraAdults,this.totalGuests.childs+=t.childOccupant+t.extraChilds,this.groupForm.controls.totalCost.patchValue(this.groupForm.get("totalCost")?.value+t.roomCost),this.groupForm.controls.totalPrice.patchValue(this.groupForm.get("totalPrice")?.value+t.roomPrice))})}};c.\u0275fac=function(t){return new(t||c)(x(pt),x($),x(tt),x(et),x(Q),x(X),x(_t))},c.\u0275cmp=O({type:c,selectors:[["app-create-reservation"]],standalone:!0,features:[B],decls:30,vars:22,consts:[["extraGuests",""],[1,"container","container_form","my-3","rounded"],[3,"formGroup"],[1,"row","row-cols-1","row-cols-md-2"],[1,"col","mt-3"],[1,"form-label"],["type","date","formControlName","arrival","placeholder","Enter arrival",1,"form-control",3,"input","min","ngClass"],["class","text-danger",4,"ngIf"],["type","date","formControlName","departure","placeholder","Enter departure",1,"form-control",3,"input","min","ngClass"],["type","number","formControlName","adults","placeholder","Enter adults",1,"form-control",3,"ngClass"],["type","number","formControlName","childs","placeholder","Enter children",1,"form-control",3,"ngClass"],[1,"col","my-3"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["class","container-fluid text-center",4,"ngIf"],["class","container text-center",4,"ngIf"],[1,"text-danger"],[1,"container-fluid","text-center"],[1,"table"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"link","text-primary",3,"click"],[1,"btn","btn-primary","p-0","me-1",3,"click","disabled"],[1,"material-symbols-rounded",2,"vertical-align","middle"],[1,"mx-1"],[1,"btn","btn-primary","p-0","ms-1",3,"click","disabled"],["name","roomtype",1,"multiselect_dropdown",3,"ngModelChange","placeholder","settings","data","ngModel"],[1,"container","text-center"],[1,"btn","btn-primary","my-3",3,"click","disabled"],[4,"ngIf"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["scope","col"],["scope","row"],[1,"form-control","text-center","select_reason",3,"ngModelChange","ngModel"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(t,e){if(t&1){let a=D();r(0,"div",1)(1,"form",2)(2,"div",3)(3,"div",4)(4,"label",5),o(5,"Arrival Date"),l(),r(6,"input",6),v("input",function(){return p(a),g(e.setDeparture())}),l(),S(7,xt,2,0,"small",7),l(),r(8,"div",4)(9,"label",5),o(10,"Departure Date"),l(),r(11,"input",8),v("input",function(){return p(a),g(e.resetGuestTotals())}),l(),S(12,St,2,0,"small",7),l(),r(13,"div",4)(14,"label",5),o(15,"Adults"),l(),M(16,"input",9),S(17,ft,2,0,"small",7),l(),r(18,"div",4)(19,"label",5),o(20,"Children"),l(),M(21,"input",10),S(22,yt,2,0,"small",7),l(),r(23,"div",11)(24,"button",12),v("click",function(){return p(a),g(e.readRooms())}),o(25," Show Availability "),l()()()()(),S(26,Ft,20,2,"div",13)(27,bt,4,2,"div",14)(28,Dt,48,4,"ng-template",null,0,U)}if(t&2){let a,u,_,C,y,R,F,w;s(),m("formGroup",e.groupForm),s(5),m("min",e.Today)("ngClass",E(14,A,((a=e.groupForm.get("arrival"))==null?null:a.invalid)&&(((a=e.groupForm.get("arrival"))==null?null:a.dirty)||((a=e.groupForm.get("arrival"))==null?null:a.touched)))),s(),m("ngIf",((u=e.groupForm.get("arrival"))==null?null:u.invalid)&&(((u=e.groupForm.get("arrival"))==null?null:u.dirty)||((u=e.groupForm.get("arrival"))==null?null:u.touched))),s(4),m("min",e.nextDate())("ngClass",E(16,A,((_=e.groupForm.get("departure"))==null?null:_.invalid)&&(((_=e.groupForm.get("departure"))==null?null:_.dirty)||((_=e.groupForm.get("departure"))==null?null:_.touched)))),s(),m("ngIf",((C=e.groupForm.get("departure"))==null?null:C.invalid)&&(((C=e.groupForm.get("departure"))==null?null:C.dirty)||((C=e.groupForm.get("departure"))==null?null:C.touched))),s(4),m("ngClass",E(18,A,((y=e.groupForm.get("adults"))==null?null:y.invalid)&&(((y=e.groupForm.get("adults"))==null?null:y.dirty)||((y=e.groupForm.get("adults"))==null?null:y.touched)))),s(),m("ngIf",((R=e.groupForm.get("adults"))==null?null:R.invalid)&&(((R=e.groupForm.get("adults"))==null?null:R.dirty)||((R=e.groupForm.get("adults"))==null?null:R.touched))),s(4),m("ngClass",E(20,A,((F=e.groupForm.get("childs"))==null?null:F.invalid)&&(((F=e.groupForm.get("childs"))==null?null:F.dirty)||((F=e.groupForm.get("childs"))==null?null:F.touched)))),s(),m("ngIf",((w=e.groupForm.get("childs"))==null?null:w.invalid)&&(((w=e.groupForm.get("childs"))==null?null:w.dirty)||((w=e.groupForm.get("childs"))==null?null:w.touched))),s(2),m("disabled",e.groupForm.invalid),s(2),m("ngIf",e.roomsData.length>0),s(),m("ngIf",e.roomsData.length>0)}},dependencies:[K,L,J,z,gt,ot,mt,ct,it,at,ut,nt,rt,lt,ht,st,dt,Y,Ct,vt]});let d=c;return d})();export{Bt as CreateReservationComponent};