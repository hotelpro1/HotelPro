import{b as U,c as M,d as C,e as q,f as G,k as W,l as J,m as Y,p as $,q as z,r as H,s as K,x as L,z as Q}from"./chunk-DKI4PBNW.js";import{b as w}from"./chunk-3FS5RTN6.js";import{Ba as x,Ca as g,Da as S,Db as R,Fb as B,Kb as V,L as F,Ma as i,Mb as O,Na as I,Nb as j,Oa as _,R as k,S as b,Xa as A,Za as E,ea as l,fa as y,la as v,na as p,nb as D,ob as N,pb as P,wa as t,wb as T,xa as e,ya as f}from"./chunk-W7CJDNGE.js";var X=a=>({"is-invalid":a});function Z(a,m){a&1&&(t(0,"small",26),i(1," amount is required "),e())}function ee(a,m){a&1&&(t(0,"small",26),i(1," remark is required "),e())}function te(a,m){if(a&1){let c=x();t(0,"tr")(1,"td"),i(2),e(),t(3,"td"),i(4),e(),t(5,"td"),i(6),e(),t(7,"td")(8,"i",30),g("click",function(){let r=k(c).index,n=S(2);return b(n.removePaymnetObj(r))}),i(9," delete "),e()()()}if(a&2){let c=m.$implicit;l(2),_(" ",c.amount," "),l(2),_(" ",c.deposit?"Yes":"No"," "),l(2),_(" ",c.remark," ")}}function ie(a,m){if(a&1&&(t(0,"div",27)(1,"table",28)(2,"thead")(3,"tr")(4,"th"),i(5,"Amount"),e(),t(6,"th"),i(7,"Deposit"),e(),t(8,"th"),i(9,"remark"),e(),t(10,"th"),i(11,"Action"),e()()(),t(12,"tbody"),v(13,te,10,3,"tr",29),e()()()),a&2){let c=S();l(13),p("ngForOf",c.paymentEntries)("ngForTrackBy",c.trackByFn)}}var de=(()=>{let m=class m{constructor(o,r,n,s,u,d){this.fb=o,this.route=r,this.router=n,this.alertService=s,this.authService=u,this.crudService=d,this.paymentEntries=[],this.propertyUnitId="",this.currentBalance=0,this.isWalkin=!1}ngOnInit(){this.propertyUnitId=this.authService.getUserInfo()?.user?.propertyUnitId,this.isWalkin=this.router.url!="/reservation-payment",this.paymentForm=this.fb.group({paymentType:["cash"],amount:[10,[C.min(1),C.required]],deposit:[!1,C.required],remark:[""]});let o=sessionStorage.getItem("reservationsArray"),r=sessionStorage.getItem("groupDetails");o&&r&&(this.reservationsArray=JSON.parse(o),this.groupDetails=JSON.parse(r),this.groupDetails.totalTax=this.groupDetails.totalCost-this.groupDetails.totalPrice,this.groupDetails.totalBalance=-this.groupDetails.totalCost,this.groupDetails.totalPayment=0,this.groupDetails.totalDeposit=0,this.paymentForm.controls.amount.patchValue(this.groupDetails.totalCost),this.currentBalance=this.groupDetails.totalCost)}onAddPayment(){this.paymentForm.valid&&(this.paymentEntries.push(this.paymentForm.value),this.paymentForm.get("deposit")?.value||(this.currentBalance-=this.paymentForm.get("amount")?.value),this.paymentForm.patchValue({paymentType:"cash",amount:this.currentBalance,deposit:!1,remark:""}))}onPayment(){let o={propertyUnitId:this.propertyUnitId,reservationsArray:this.reservationsArray,groupDetails:this.groupDetails,paymentEntries:this.paymentEntries,isWalkin:this.isWalkin};this.crudService.post(V.CREATE_RESERVATION,o).then(r=>{console.log(r),this.alertService.successAlert("Reservation created successfully"),this.router.navigate(["/guest-folio/"+r?.data?._id])}).catch(r=>{this.alertService.errorAlert(r?.error?.message||"An error occurred while processing payment"),console.error(r)})}trackByFn(o,r){return o}removePaymnetObj(o){this.paymentEntries[o].deposit||(this.currentBalance+=this.paymentEntries[o].amount,this.paymentForm.patchValue({paymentType:"cash",amount:this.currentBalance,deposit:!1,remark:""})),this.paymentEntries.splice(o,1)}};m.\u0275fac=function(r){return new(r||m)(y(L),y(R),y(B),y(j),y(w),y(O))},m.\u0275cmp=F({type:m,selectors:[["app-create-reservation-payment"]],standalone:!0,features:[A],decls:42,vars:12,consts:[[1,"container","container_form","my-3","pb-3","rounded"],[1,"form-label","mt-2"],[1,"fw-semibold"],[3,"formGroup"],[1,"row"],[1,"col-md-3","mt-3"],[1,"form-label"],["formControlName","paymentType",1,"form-control","select_reason"],["value","cash"],["value","upi"],["value","card"],["value","cloud"],[1,"col-md-3","mt-3","col-9"],["type","number","formControlName","amount","placeholder","Enter amount",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-md-1","col-3","mt-3"],[1,"mt-4"],[1,"form-label","me-2"],["type","checkbox","formControlName","deposit",1,"form-check-input"],[1,"col-md-3","col-9","mt-3"],["type","text","formControlName","remark","placeholder","Enter remark",1,"form-control",3,"ngClass"],[1,"col-md-2","col-3","mt-3"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","mt-4",3,"click","disabled"],["class","container-fluid text-center",4,"ngIf"],[1,"btn","btn-primary","mt-2","me-2",3,"click"],[1,"text-danger"],[1,"container-fluid","text-center"],[1,"table"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"material-symbols-rounded","text-danger","pt-2",3,"click"]],template:function(r,n){if(r&1&&(t(0,"div",0)(1,"label",1),i(2," Total Balance : "),t(3,"span",2),i(4),e()(),t(5,"form",3)(6,"div",4)(7,"div",5)(8,"label",6),i(9,"Select Payment Type"),e(),t(10,"select",7)(11,"option",8),i(12,"Cash"),e(),t(13,"option",9),i(14,"UPI"),e(),t(15,"option",10),i(16,"Card"),e(),t(17,"option",11),i(18,"Cloud"),e()()(),t(19,"div",12)(20,"label",6),i(21,"Amount "),e(),f(22,"input",13),v(23,Z,2,0,"small",14),e(),t(24,"div",15)(25,"div",16)(26,"label",17),i(27,"Deposit "),e(),f(28,"input",18),e()(),t(29,"div",19)(30,"label",6),i(31,"Remark "),e(),f(32,"input",20),v(33,ee,2,0,"small",14),e(),t(34,"div",21)(35,"div",22)(36,"button",23),g("click",function(){return n.onAddPayment()}),i(37," Add "),e()()()()()(),v(38,ie,14,2,"div",24),t(39,"div",22)(40,"button",25),g("click",function(){return n.onPayment()}),i(41," Payment "),e()()),r&2){let s,u,d,h;l(4),I(n.currentBalance),l(),p("formGroup",n.paymentForm),l(17),p("ngClass",E(8,X,((s=n.paymentForm.get("amount"))==null?null:s.invalid)&&(((s=n.paymentForm.get("amount"))==null?null:s.dirty)||((s=n.paymentForm.get("amount"))==null?null:s.touched)))),l(),p("ngIf",((u=n.paymentForm.get("amount"))==null?null:u.invalid)&&(((u=n.paymentForm.get("amount"))==null?null:u.dirty)||((u=n.paymentForm.get("amount"))==null?null:u.touched))),l(9),p("ngClass",E(10,X,((d=n.paymentForm.get("remark"))==null?null:d.invalid)&&(((d=n.paymentForm.get("remark"))==null?null:d.dirty)||((d=n.paymentForm.get("remark"))==null?null:d.touched)))),l(),p("ngIf",((h=n.paymentForm.get("remark"))==null?null:h.invalid)&&(((h=n.paymentForm.get("remark"))==null?null:h.dirty)||((h=n.paymentForm.get("remark"))==null?null:h.touched))),l(3),p("disabled",n.paymentForm.invalid),l(2),p("ngIf",n.paymentEntries.length>0)}},dependencies:[T,D,N,P,Q,W,H,K,M,J,U,z,q,G,Y,$]});let a=m;return a})();export{de as CreateReservationPaymentComponent};