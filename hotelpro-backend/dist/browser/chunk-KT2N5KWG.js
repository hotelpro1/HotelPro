import{a as f}from"./chunk-MSXCR3QF.js";import{c as z,d as p,e as k,f as j,k as V,m as A,n as G,p as Z,w as B,x as D,y as Y,z as $}from"./chunk-DKI4PBNW.js";import{Ca as E,Da as c,Fb as R,Jb as T,Kb as U,L as O,Ma as d,Mb as q,Nb as L,Xa as N,ea as m,fa as F,la as u,na as s,pb as w,wa as r,wb as I,xa as t,ya as _}from"./chunk-W7CJDNGE.js";function H(e,l){e&1&&(r(0,"small",23),d(1,"Primary Property Name is required"),t())}function J(e,l){e&1&&(r(0,"small",23),d(1,"Primary Property Name must be at least 3 characters long"),t())}function K(e,l){e&1&&(r(0,"small",23),d(1,"Primary Property Name cannot start with a space"),t())}function Q(e,l){if(e&1&&(r(0,"div"),u(1,H,2,0,"small",22)(2,J,2,0,"small",22)(3,K,2,0,"small",22),t()),e&2){let a,i,o,n=c();m(),s("ngIf",(a=n.userForm.get("primaryPropertyName"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=n.userForm.get("primaryPropertyName"))==null||i.errors==null?null:i.errors.minlength),m(),s("ngIf",(o=n.userForm.get("primaryPropertyName"))==null||o.errors==null?null:o.errors.noLeadingSpace)}}function W(e,l){e&1&&(r(0,"small",23),d(1,"First Name is required"),t())}function X(e,l){e&1&&(r(0,"small",23),d(1,"First Name must be at least 2 characters long"),t())}function ee(e,l){e&1&&(r(0,"small",23),d(1,"First Name cannot start with a space"),t())}function te(e,l){if(e&1&&(r(0,"div"),u(1,W,2,0,"small",22)(2,X,2,0,"small",22)(3,ee,2,0,"small",22),t()),e&2){let a,i,o,n=c();m(),s("ngIf",(a=n.userForm.get("firstName"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=n.userForm.get("firstName"))==null||i.errors==null?null:i.errors.minlength),m(),s("ngIf",(o=n.userForm.get("firstName"))==null||o.errors==null?null:o.errors.noLeadingSpace)}}function ne(e,l){e&1&&(r(0,"small",23),d(1,"Last Name is required"),t())}function re(e,l){e&1&&(r(0,"small",23),d(1,"Last Name must be at least 2 characters long"),t())}function ie(e,l){e&1&&(r(0,"small",23),d(1,"Last Name cannot start with a space"),t())}function le(e,l){if(e&1&&(r(0,"div"),u(1,ne,2,0,"small",22)(2,re,2,0,"small",22)(3,ie,2,0,"small",22),t()),e&2){let a,i,o,n=c();m(),s("ngIf",(a=n.userForm.get("lastName"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=n.userForm.get("lastName"))==null||i.errors==null?null:i.errors.minlength),m(),s("ngIf",(o=n.userForm.get("lastName"))==null||o.errors==null?null:o.errors.noLeadingSpace)}}function oe(e,l){e&1&&(r(0,"small",23),d(1,"Email is required"),t())}function ae(e,l){e&1&&(r(0,"small",23),d(1,"Invalid email format"),t())}function me(e,l){if(e&1&&(r(0,"div"),u(1,oe,2,0,"small",22)(2,ae,2,0,"small",22),t()),e&2){let a,i,o=c();m(),s("ngIf",(a=o.userForm.get("email"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=o.userForm.get("email"))==null||i.errors==null?null:i.errors.email)}}function se(e,l){e&1&&(r(0,"small",23),d(1,"Phone Number is required"),t())}function de(e,l){if(e&1&&(r(0,"div"),u(1,se,2,0,"small",22),t()),e&2){let a,i=c();m(),s("ngIf",(a=i.userForm.get("phone"))==null||a.errors==null?null:a.errors.required)}}function ue(e,l){e&1&&(r(0,"small",23),d(1,"City is required"),t())}function pe(e,l){e&1&&(r(0,"small",23),d(1,"City cannot start with a space"),t())}function _e(e,l){if(e&1&&(r(0,"div"),u(1,ue,2,0,"small",22)(2,pe,2,0,"small",22),t()),e&2){let a,i,o=c();m(),s("ngIf",(a=o.userForm.get("address.city"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=o.userForm.get("address.city"))==null||i.errors==null?null:i.errors.noLeadingSpace)}}function ce(e,l){e&1&&(r(0,"small",23),d(1,"State is required"),t())}function ge(e,l){e&1&&(r(0,"small",23),d(1,"State must contain only letters"),t())}function fe(e,l){e&1&&(r(0,"small",23),d(1,"State cannot start with a space"),t())}function ve(e,l){if(e&1&&(r(0,"div"),u(1,ce,2,0,"small",22)(2,ge,2,0,"small",22)(3,fe,2,0,"small",22),t()),e&2){let a,i,o,n=c();m(),s("ngIf",(a=n.userForm.get("address.state"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=n.userForm.get("address.state"))==null||i.errors==null?null:i.errors.pattern),m(),s("ngIf",(o=n.userForm.get("address.state"))==null||o.errors==null?null:o.errors.noLeadingSpace)}}function Ce(e,l){e&1&&(r(0,"small",23),d(1,"ZIP Code is required. "),_(2,"br"),t())}function xe(e,l){e&1&&(r(0,"small",23),d(1,"ZIP Code must be 6-8 digits long"),t())}function ye(e,l){if(e&1&&(r(0,"div"),u(1,Ce,3,0,"small",22)(2,xe,2,0,"small",22),t()),e&2){let a,i,o=c();m(),s("ngIf",(a=o.userForm.get("address.zipCode"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=o.userForm.get("address.zipCode"))==null||i.errors==null?null:i.errors.zipCode)}}function he(e,l){e&1&&(r(0,"small",23),d(1,"Password is required"),t())}function Pe(e,l){e&1&&(r(0,"small",23),d(1,"Password must be at least 8 characters long"),t())}function Se(e,l){e&1&&(r(0,"small",23),d(1,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),t())}function Me(e,l){if(e&1&&(r(0,"div"),u(1,he,2,0,"small",22)(2,Pe,2,0,"small",22)(3,Se,2,0,"small",22),t()),e&2){let a,i,o,n=c();m(),s("ngIf",(a=n.userForm.get("password"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",(i=n.userForm.get("password"))==null||i.errors==null?null:i.errors.minlength),m(),s("ngIf",(o=n.userForm.get("password"))==null||o.errors==null?null:o.errors.passwordStrength)}}function be(e,l){e&1&&(r(0,"small",23),d(1,"Confirm Password is required "),_(2,"br"),t())}function Fe(e,l){e&1&&(r(0,"small",23),d(1,"Passwords must match"),t())}function Oe(e,l){if(e&1&&(r(0,"div"),u(1,be,3,0,"small",22)(2,Fe,2,0,"small",22),t()),e&2){let a,i=c();m(),s("ngIf",(a=i.userForm.get("confirmpassword"))==null||a.errors==null?null:a.errors.required),m(),s("ngIf",i.userForm.errors==null?null:i.userForm.errors.mismatch)}}var je=(()=>{let l=class l{constructor(i,o,n,g){this.formBuilder=i,this.crudService=o,this.alertService=n,this.router=g,this.userForm=this.formBuilder.group({primaryPropertyName:["",[p.required,f.noLeadingSpace,p.minLength(3)]],firstName:["",[p.required,f.noLeadingSpace,p.minLength(2)]],lastName:["",[p.required,f.noLeadingSpace,p.minLength(2)]],email:["",[p.required,p.email]],phone:["",[p.required]],address:this.formBuilder.group({addressLine1:[""],city:["",[p.required,f.noLeadingSpace]],state:["",[p.required,p.pattern(/^[A-Za-z\s]+$/),f.noLeadingSpace]],zipCode:["",[p.required,f.zipCodeValidator]]}),password:["",[p.required,f.passwordValidator]],confirmpassword:["",p.required]},{validator:this.passwordMatchValidator})}onSubmit(){if(this.userForm.valid){let i=this.userForm.value;this.crudService.post(U.CREATE_PROPERTY,i).then(o=>{this.alertService.successAlert(o.message),this.router.navigate(["/login"])}).catch(o=>{this.alertService.errorAlert(o?.error?.message||o.message)})}else this.alertService.errorAlert("Please fill all required fields correctly.")}passwordMatchValidator(i){return i.get("password")?.value===i.get("confirmpassword")?.value?null:{mismatch:!0}}};l.\u0275fac=function(o){return new(o||l)(F(D),F(q),F(L),F(R))},l.\u0275cmp=O({type:l,selectors:[["app-register-user"]],standalone:!0,features:[N],decls:62,vars:12,consts:[[1,"parent"],[1,"container"],[1,"title"],[3,"ngSubmit","formGroup"],[1,"user__details"],[1,"input__box"],[1,"details"],["type","text","placeholder","Primary Property Name","formControlName","primaryPropertyName"],[4,"ngIf"],["type","text","placeholder","First Name","formControlName","firstName"],["type","text","placeholder","Last Name","formControlName","lastName"],["type","email","placeholder","johnsmith@hotmail.com","formControlName","email"],["type","tel","placeholder","012-345-6789","formControlName","phone","maxlength","10"],["formGroupName","address",1,"input__box"],["type","text","placeholder","Street","formControlName","addressLine1"],["type","text","placeholder","City","formControlName","city"],["type","text","placeholder","State","formControlName","state"],["type","text","placeholder","ZIP Code","formControlName","zipCode"],["type","password","placeholder","********","formControlName","password"],["type","password","placeholder","********","formControlName","confirmpassword"],[1,"button"],["type","submit","value","Register",3,"disabled"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,n){if(o&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),d(3,"Registration"),t(),r(4,"form",3),E("ngSubmit",function(){return n.onSubmit()}),r(5,"div",4)(6,"div",5)(7,"span",6),d(8,"Primary Property Name*"),t(),_(9,"input",7),u(10,Q,4,3,"div",8),t(),r(11,"div",5)(12,"span",6),d(13,"First Name*"),t(),_(14,"input",9),u(15,te,4,3,"div",8),t(),r(16,"div",5)(17,"span",6),d(18,"Last Name*"),t(),_(19,"input",10),u(20,le,4,3,"div",8),t(),r(21,"div",5)(22,"span",6),d(23,"Email*"),t(),_(24,"input",11),u(25,me,3,2,"div",8),t(),r(26,"div",5)(27,"span",6),d(28,"Phone Number*"),t(),_(29,"input",12),u(30,de,2,1,"div",8),t(),r(31,"div",13)(32,"span",6),d(33,"Street"),t(),_(34,"input",14),t(),r(35,"div",13)(36,"span",6),d(37,"City*"),t(),_(38,"input",15),u(39,_e,3,2,"div",8),t(),r(40,"div",13)(41,"span",6),d(42,"State*"),t(),_(43,"input",16),u(44,ve,4,3,"div",8),t(),r(45,"div",13)(46,"span",6),d(47,"ZIP Code*"),t(),_(48,"input",17),u(49,ye,3,2,"div",8),t(),r(50,"div",5)(51,"span",6),d(52,"Password*"),t(),_(53,"input",18),u(54,Me,4,3,"div",8),t(),r(55,"div",5)(56,"span",6),d(57,"Confirm Password*"),t(),_(58,"input",19),u(59,Oe,3,2,"div",8),t()(),r(60,"div",20),_(61,"input",21),t()()()()),o&2){let g,v,C,x,y,h,P,S,M,b;m(4),s("formGroup",n.userForm),m(6),s("ngIf",((g=n.userForm.get("primaryPropertyName"))==null?null:g.invalid)&&(((g=n.userForm.get("primaryPropertyName"))==null?null:g.dirty)||((g=n.userForm.get("primaryPropertyName"))==null?null:g.touched))),m(5),s("ngIf",((v=n.userForm.get("firstName"))==null?null:v.invalid)&&(((v=n.userForm.get("firstName"))==null?null:v.dirty)||((v=n.userForm.get("firstName"))==null?null:v.touched))),m(5),s("ngIf",((C=n.userForm.get("lastName"))==null?null:C.invalid)&&(((C=n.userForm.get("lastName"))==null?null:C.dirty)||((C=n.userForm.get("lastName"))==null?null:C.touched))),m(5),s("ngIf",((x=n.userForm.get("email"))==null?null:x.invalid)&&(((x=n.userForm.get("email"))==null?null:x.dirty)||((x=n.userForm.get("email"))==null?null:x.touched))),m(5),s("ngIf",((y=n.userForm.get("phone"))==null?null:y.invalid)&&(((y=n.userForm.get("phone"))==null?null:y.dirty)||((y=n.userForm.get("phone"))==null?null:y.touched))),m(9),s("ngIf",((h=n.userForm.get("address.city"))==null?null:h.invalid)&&(((h=n.userForm.get("address.city"))==null?null:h.dirty)||((h=n.userForm.get("address.city"))==null?null:h.touched))),m(5),s("ngIf",((P=n.userForm.get("address.state"))==null?null:P.invalid)&&(((P=n.userForm.get("address.state"))==null?null:P.dirty)||((P=n.userForm.get("address.state"))==null?null:P.touched))),m(5),s("ngIf",((S=n.userForm.get("address.zipCode"))==null?null:S.invalid)&&(((S=n.userForm.get("address.zipCode"))==null?null:S.dirty)||((S=n.userForm.get("address.zipCode"))==null?null:S.touched))),m(5),s("ngIf",((M=n.userForm.get("password"))==null?null:M.invalid)&&(((M=n.userForm.get("password"))==null?null:M.dirty)||((M=n.userForm.get("password"))==null?null:M.touched))),m(5),s("ngIf",((b=n.userForm.get("confirmpassword"))==null?null:b.invalid)&&(((b=n.userForm.get("confirmpassword"))==null?null:b.dirty)||((b=n.userForm.get("confirmpassword"))==null?null:b.touched))),m(2),s("disabled",n.userForm.invalid)}},dependencies:[Y,V,z,k,j,B,$,A,Z,G,I,w,T],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}[_nghost-%COMP%]{--main-blue: #71b7e6;--main-purple: #9b59b6;--main-grey: #ccc;--sub-grey: #d9d9d9}.parent[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,var(--main-blue),var(--main-purple));padding:10px}.container[_ngcontent-%COMP%]{width:100%;background:#fff;padding:25px 30px;border-radius:5px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px;font-weight:500;position:relative}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before{content:"";position:absolute;height:3.5px;width:30px;background:linear-gradient(135deg,var(--main-blue),var(--main-purple));left:0;bottom:0}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user__details[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:20px 0 12px}form[_ngcontent-%COMP%]   .user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]{width:calc(50% - 20px);margin-bottom:15px}.user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{font-weight:500;margin-bottom:5px;display:block}.user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:45px;width:100%;outline:none;border-radius:5px;border:1px solid var(--main-grey);padding-left:15px;font-size:16px;border-bottom-width:2px;transition:all .3s ease}.user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{border-color:var(--main-purple)}form[_ngcontent-%COMP%]   .gender__details[_ngcontent-%COMP%]   .gender__title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}form[_ngcontent-%COMP%]   .gender__details[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex;width:80%;margin:15px 0;justify-content:start}.gender__details[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center}.gender__details[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:18px;width:18px;background:var(--sub-grey);border-radius:50%;margin:10px;border:5px solid transparent;transition:all .3s ease}#dot-1[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], #dot-2[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], #dot-3[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]{border-color:var(--sub-grey);background:var(--main-purple)}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:45px;margin:45px 0}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:100%;outline:none;color:#fff;border:none;font-size:18px;font-weight:500;border-radius:5px;background:linear-gradient(135deg,var(--main-blue),var(--main-purple));transition:all .3s ease;cursor:pointer}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background:linear-gradient(-135deg,var(--main-blue),var(--main-purple));cursor:pointer}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{filter:opacity(.5);pointer-events:none}@media only screen and (max-width: 584px){.container[_ngcontent-%COMP%]{max-width:100%}form[_ngcontent-%COMP%]   .user__details[_ngcontent-%COMP%]   .input__box[_ngcontent-%COMP%]{margin-bottom:15px;width:100%}form[_ngcontent-%COMP%]   .gender__details[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user__details[_ngcontent-%COMP%]{overflow-y:scroll}.user__details[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}}']});let e=l;return e})();export{je as RegisterUserComponent};