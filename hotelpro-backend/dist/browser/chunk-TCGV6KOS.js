import{a as ue,b as ge}from"./chunk-MSM33I7I.js";import{d as pe}from"./chunk-6N4QSK7X.js";import{c as X,d as D,e as Z,f as $,j as ee,k as te,l as ne,m as ie,p as ae,q as oe,r as re,s as le,u as se,x as me,y as de,z as ce}from"./chunk-DKI4PBNW.js";import{b as Q}from"./chunk-3FS5RTN6.js";import{Aa as O,Ba as k,Ca as f,Da as w,Db as q,Fb as H,Jb as Y,Kb as M,L as T,La as I,Ma as m,Mb as J,Na as V,Nb as K,Oa as R,R as u,S as g,T as F,Ta as C,U as P,Ua as x,Va as b,Xa as A,Za as N,bb as W,db as L,ea as s,eb as U,fa as v,la as h,na as c,nb as j,ob as z,pb as B,tb as y,wa as i,wb as G,xa as e,ya as S,za as E}from"./chunk-W7CJDNGE.js";var _e=a=>({yield:a});function fe(a,d){if(a&1&&(i(0,"option",38),m(1),e()),a&2){let l=d.$implicit;c("value",l._id),s(),R(" ",l.ratePlanName," ")}}function ve(a,d){if(a&1&&(i(0,"th"),m(1),W(2,"date"),S(3,"br"),e()),a&2){let l=d.$implicit;s(),R(" ",L(2,1,l,"dd MMM")," ")}}function we(a,d){if(a&1&&(i(0,"td")(1,"div",41),m(2),e()()),a&2){let l=d.$implicit;s(),c("ngClass",N(2,_e,l==null?null:l.yieldApplied)),s(),R(" ",l==null?null:l.baseRate," ")}}function ye(a,d){if(a&1&&(i(0,"tr")(1,"td",40),m(2),e(),h(3,we,3,4,"td",35),e()),a&2){let l=w().$implicit;s(2),V(l.roomTypeName),s(),c("ngForOf",l.dailyRates)}}function Se(a,d){if(a&1&&(E(0),h(1,ye,4,2,"tr",39),O()),a&2){let l=d.$implicit;s(),c("ngIf",l.Show)}}function Re(a,d){a&1&&(i(0,"small",56),m(1," Please enter valid start date "),e())}function Ce(a,d){a&1&&(i(0,"small",56),m(1," Please enter valid end date "),e())}function xe(a,d){if(a&1&&(i(0,"option",38),m(1),e()),a&2){let l=d.$implicit;c("value",l.item_text),s(),R(" ",l.item_text," ")}}function be(a,d){a&1&&(i(0,"small",56),m(1," Room type is required "),e())}function De(a,d){a&1&&(i(0,"small",56),m(1," Please enter valid rate "),e())}function Me(a,d){if(a&1){let l=k();i(0,"div",42)(1,"h4",43),m(2,"Change Rate"),e(),i(3,"button",44),f("click",function(){let t=u(l).$implicit;return g(t.dismiss(!1))}),e()(),i(4,"form",45)(5,"table",46)(6,"tr")(7,"td",5)(8,"div",47),m(9,"Start Date :"),e()(),i(10,"td")(11,"input",48),f("input",function(){u(l);let t=w();return g(t.checkDates())}),e(),h(12,Re,2,0,"small",49),e()(),i(13,"tr")(14,"td",5)(15,"div",47),m(16,"End Date :"),e()(),i(17,"td")(18,"input",50),f("input",function(){u(l);let t=w();return g(t.checkDates())}),e(),h(19,Ce,2,0,"small",49),e()(),i(20,"tr")(21,"td")(22,"div",51),m(23,"Room Type*:"),e()(),i(24,"td")(25,"div")(26,"select",52),h(27,xe,2,2,"option",8),e(),h(28,be,2,0,"small",49),e()()(),i(29,"tr")(30,"td",5)(31,"div",47),m(32,"New Rate:"),e()(),i(33,"td"),S(34,"input",53),h(35,De,2,0,"small",49),e()()()(),i(36,"div",54)(37,"button",55),f("click",function(){u(l);let t=w();return g(t.changeRate())}),m(38," Save "),e()()}if(a&2){let l,r,t,n,o=w();s(4),c("formGroup",o.changeRateForm),s(7),c("min",o.Max),s(),c("ngIf",((l=o.changeRateForm.get("startDate"))==null?null:l.invalid)&&((l=o.changeRateForm.get("startDate"))==null?null:l.touched)),s(6),c("min",o.changeRateForm.controls.endDate.value),s(),c("ngIf",((r=o.changeRateForm.get("endDate"))==null?null:r.invalid)&&((r=o.changeRateForm.get("endDate"))==null?null:r.touched)),s(8),c("ngForOf",o.dropdownList),s(),c("ngIf",((t=o.changeRateForm.get("roomType"))==null?null:t.invalid)&&((t=o.changeRateForm.get("roomType"))==null?null:t.touched)),s(6),c("min",0),s(),c("ngIf",((n=o.changeRateForm.get("newRate"))==null?null:n.invalid)&&((n=o.changeRateForm.get("newRate"))==null?null:n.touched)),s(2),c("disabled",o.changeRateForm.invalid)}}var ze=(()=>{let d=class d{constructor(r,t,n,o,_,p,he){this.crudService=r,this.fb=t,this.alertService=n,this.router=o,this.activeRoute=_,this.modalService=p,this.authService=he,this.propertyUnitId="",this.Week=2,this.dropdownList=[],this.selectedItems=[],this.ratePlanList=[],this.RoomTypes=[],this.RatePlanId=""}ngOnInit(){this.propertyUnitId=this.authService.getUserInfo()?.user?.propertyUnitId,this.Max=new y("en-US").transform(new Date,"yyyy-MM-dd"),this.Date=new y("en-US").transform(new Date,"yyyy-MM-dd"),this.Today=new y("en-US").transform(new Date,"yyyy-MM-dd"),this.dropdownSettings={singleSelection:!1,idField:"item_id",textField:"item_text",unSelectAllText:"UnSelect All",enableCheckAll:!1,itemsShowLimit:2,allowSearchFilter:!0},this.changeRateForm=this.fb.group({startDate:[this.Date,D.required],endDate:[this.Date,D.required],roomType:["",D.required],newRate:[0,D.required]}),this.readRatePlans()}readRatePlans(){this.crudService.post(M.READ_RATEPLAN,{propertyUnitId:this.propertyUnitId,fromList:!0}).then(r=>{console.log(r),this.ratePlanList=r.data.ratePlanList;for(let t of this.ratePlanList)if(t.isBaseRate){this.RatePlanId=t._id;break}this.fetchdata()}).catch(r=>{console.log(r),this.alertService.errorAlert(r?.error?.message)})}fetchdata(){if(this.Week<2&&(this.Week=2),this.Week>52&&(this.Week=52),new Date(this.Date).toISOString()<new Date(this.Today).toISOString()){this.Date=this.Today,this.alertService.errorAlert("You cannot visit past data");return}this.startDate=new Date(this.Date.replace(/-/g,"/")),this.startDate.setHours(0,0,0,0),this.endDate=new Date(this.startDate),this.endDate.setDate(this.endDate.getDate()+this.Week*7),this.DateArr=[];for(let n=new Date(this.startDate);n<this.endDate;n.setDate(n.getDate()+1))this.DateArr.push(new Date(n));let r=this.startDate.toLocaleDateString("en-CA"),t=this.endDate.toLocaleDateString("en-CA");this.crudService.post(M.READ_FUTURE_RATES,{startDate:r,endDate:t,ratePlanId:this.RatePlanId,propertyUnitId:this.propertyUnitId}).then(n=>{this.dropdownList=[],this.RoomData=n.data,this.changeRateForm.patchValue({roomType:this.RoomData?.[0].roomTypeName});for(let o of this.RoomData)this.dropdownList.includes(o.roomTypeName)||this.dropdownList.push(o.roomTypeName),o.Show=!0;this.dropdownList=this.dropdownList.map(o=>({item_id:o,item_text:o}))}).catch(n=>{this.alertService.errorAlert(n.statusMessage)})}add(){this.Week+=1}sub(){this.Week>2&&(this.Week-=1)}changeRate(){(this.changeRateForm.controls.startDate.value?.toString()<this.Date||this.changeRateForm.controls.endDate.value?.toString()<this.Date)&&(this.alertService.errorAlert("You can not change rates of past date"),this.modalService.dismissAll()),console.log(this.changeRateForm.value);let r="";for(let t of this.RoomData)if(t.roomTypeName==this.changeRateForm.controls.roomType.value){r=t.ratePlanRoomRateId;break}this.crudService.post(M.UPDATE_FUTURE_RATES,{changeRates:this.changeRateForm.value,ratePlanRoomRateId:r}).then(t=>{this.alertService.successAlert("Rate updated successfully")}).catch(t=>{this.alertService.errorAlert(t.statusMessage)}).finally(()=>{this.ngOnInit(),this.modalService.dismissAll()})}checkDates(){this.changeRateForm.controls.startDate.value?.toString()>=this.changeRateForm.controls.endDate.value?.toString()&&this.changeRateForm.patchValue({endDate:this.changeRateForm.controls.startDate.value})}openRangeUpdateModal(r){this.changeRateForm.patchValue({startDate:this.Date,endDate:this.Date,roomType:this.RoomData?.[0].roomTypeName,newRate:0}),this.modalService.open(r).result.then(t=>{})}filterRoom(){let r=this.selectedItems.map(t=>t.item_id);if(r.length>0)for(let t of this.RoomData)r.includes(t.roomTypeName)?t.Show=!0:t.Show=!1;else for(let t of this.RoomData)t.Show=!0}};d.\u0275fac=function(t){return new(t||d)(v(J),v(me),v(K),v(H),v(q),v(pe),v(Q))},d.\u0275cmp=T({type:d,selectors:[["app-future-rates"]],standalone:!0,features:[A],decls:54,vars:12,consts:[["Range",""],[1,"p-2",2,"background-color","#f1f8ff"],[1,"mx-3","d-flex","mt-4","bg-white"],[1,"w-100","d-flex","mx-3","justify-content-between"],[1,"d-flex","my-2","align-items-center"],[1,"black_font"],[1,"ms-1"],["id","options",1,"form-control",2,"appearance","auto",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"black_font","ms-3"],["type","date",1,"form-control",3,"ngModelChange","ngModel","min"],[1,"black_font","align-items-center","ms-3"],[1,"input_container","ms-1"],["type","number",1,"input","form-control","field","text-center","hide-spinner",3,"ngModelChange","ngModel","min"],[1,"input_img",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","20","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"],[1,"input_img1",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","20","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-dash-circle"],["d","M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"],[1,"ms-3"],[1,"btn","btn-success","button","w-auto",3,"click"],[1,"d-flex"],[1,"d-flex","ms-2","align-items-center"],[1,"ms-2","align-self-center",2,"width","200px !important"],["name","roomtype",2,"font-size","13px !important","background","white !important",3,"ngModelChange","onSelect","onDeSelect","placeholder","settings","data","ngModel"],[1,"d-flex","justify-content-right","ms-4"],[1,"align-self-center","d-flex"],[1,"yield","px-2"],[1,"mx-3","mt-4","inline2","pb-3"],[1,"col-12","pl-0"],["id","scroll",2,"overflow-x","auto","border-right","1px solid rgba(0, 0, 0, 0.1)","max-height","600px !important"],[1,"table-bordered","global_table",2,"overflow-x","hidden !important"],[2,"z-index","101"],[4,"ngFor","ngForOf"],[1,"ms-3","d-flex","justify-content-center"],[1,"ms-3","btn","btn-primary","button","w-auto",3,"click"],[3,"value"],[4,"ngIf"],[2,"z-index","10"],[3,"ngClass"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"px-2","mt-2",3,"formGroup"],[1,"table","table-sm","table-borderless","add_table"],[1,"mt-2"],["type","date","formControlName","startDate",1,"form-control",3,"input","min"],["class","text-danger",4,"ngIf"],["type","date","formControlName","endDate",1,"form-control",3,"input","min"],[1,"mt-1"],["id","options","formControlName","roomType",1,"form-control",2,"appearance","auto"],["type","number","formControlName","newRate",1,"form-control",3,"min"],[1,"d-flex","justify-content-center"],[1,"btn","btn-success","my-2",3,"click","disabled"],[1,"text-danger"]],template:function(t,n){if(t&1){let o=k();i(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),m(5,"Rate Plan :"),e(),i(6,"div",6)(7,"select",7),b("ngModelChange",function(p){return u(o),x(n.RatePlanId,p)||(n.RatePlanId=p),g(p)}),h(8,fe,2,2,"option",8),e()(),i(9,"div",9),m(10,"Start Date :"),e(),i(11,"div",6)(12,"input",10),b("ngModelChange",function(p){return u(o),x(n.Date,p)||(n.Date=p),g(p)}),e()(),i(13,"div",11),m(14,"Week :"),e(),i(15,"div",12)(16,"input",13),b("ngModelChange",function(p){return u(o),x(n.Week,p)||(n.Week=p),g(p)}),e(),i(17,"div",14),f("click",function(){return u(o),g(n.add())}),F(),i(18,"svg",15),S(19,"path",16)(20,"path",17),e()(),P(),i(21,"div",18),f("click",function(){return u(o),g(n.sub())}),F(),i(22,"svg",19),S(23,"path",16)(24,"path",20),e()()(),P(),i(25,"div",21)(26,"button",22),f("click",function(){return u(o),g(n.fetchdata())}),m(27," Find "),e()()(),i(28,"div",23)(29,"div",23)(30,"div",24)(31,"div",5),m(32,"Filter :"),e()(),i(33,"div",25)(34,"ng-multiselect-dropdown",26),b("ngModelChange",function(p){return u(o),x(n.selectedItems,p)||(n.selectedItems=p),g(p)}),f("onSelect",function(){return u(o),g(n.filterRoom())})("onDeSelect",function(){return u(o),g(n.filterRoom())}),e()(),i(35,"div",27)(36,"div",28)(37,"div",29),m(38,"Yield Apply"),e()()()()()()(),i(39,"div",30)(40,"div",31)(41,"div",32)(42,"table",33)(43,"thead")(44,"th",34),m(45,"Room Type"),e(),h(46,ve,4,4,"th",35),e(),i(47,"tbody"),h(48,Se,2,1,"ng-container",35),e()()()()(),i(49,"div",36)(50,"button",37),f("click",function(){u(o);let p=I(53);return g(n.openRangeUpdateModal(p))}),m(51," Change Rate "),e()()(),h(52,Me,39,10,"ng-template",null,0,U)}t&2&&(s(7),C("ngModel",n.RatePlanId),s(),c("ngForOf",n.ratePlanList),s(4),C("ngModel",n.Date),c("min",n.Max),s(4),C("ngModel",n.Week),c("min",2),s(18),c("placeholder","Select Room Type")("settings",n.dropdownSettings)("data",n.dropdownList),C("ngModel",n.selectedItems),s(12),c("ngForOf",n.DateArr),s(2),c("ngForOf",n.RoomData))},dependencies:[de,te,re,le,X,ne,oe,Z,$,se,ee,ge,ue,G,j,z,B,y,ce,ie,ae,Y],styles:[".input_container[_ngcontent-%COMP%]{position:relative;width:20%}.input_img[_ngcontent-%COMP%], .input_img1[_ngcontent-%COMP%]{bottom:2px;top:6px;width:22px;height:22px;position:absolute;cursor:pointer}.input[_ngcontent-%COMP%]{margin:0}.input_img[_ngcontent-%COMP%]{right:5px}.input_img1[_ngcontent-%COMP%]{left:5px}.hide-spinner[_ngcontent-%COMP%]::-webkit-outer-spin-button, .hide-spinner[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.clean[_ngcontent-%COMP%], .dirty[_ngcontent-%COMP%]{column-width:40px}.clean_active[_ngcontent-%COMP%]{background:#6ccfca;border-radius:10px}.dirty_active[_ngcontent-%COMP%]{background:#ffa4a3;border-radius:10px}.checkedout[_ngcontent-%COMP%], .inhouse[_ngcontent-%COMP%], .reservation[_ngcontent-%COMP%]{font-size:13px;font-weight:500;letter-spacing:1px;text-transform:capitalize;margin-left:2px!important;border-radius:10px!important}.reservation[_ngcontent-%COMP%]{background:#bee2f8!important;color:#000}.inhouse[_ngcontent-%COMP%]{background:#6ccfca!important;color:#000}.checkedout[_ngcontent-%COMP%]{background:#1d366d!important;color:#fff}.renovation[_ngcontent-%COMP%]{background:#ffccd1!important;color:#000;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:capitalize;margin-left:2px!important;border-radius:10px!important}.overlap[_ngcontent-%COMP%]{position:relative}.first-content[_ngcontent-%COMP%]{position:absolute;top:-9px;left:40px;z-index:1}.second-content[_ngcontent-%COMP%]{position:absolute;top:-9px;left:0;z-index:2}.global_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .global_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px}.global_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .global_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{position:sticky!important;left:0!important;min-width:115px!important;width:115px!important;max-width:115px!important}.global_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{background:#fff!important}.yield[_ngcontent-%COMP%]{background-color:#ffff008f}@media only screen and (max-width: 590px){.clean[_ngcontent-%COMP%], .dirty[_ngcontent-%COMP%]{column-width:15px}}"]});let a=d;return a})();export{ze as FutureRatesComponent};