import{b as T}from"./chunk-3FS5RTN6.js";import{Da as b,Fb as C,Kb as D,L as y,Ma as i,Mb as x,Na as s,Nb as R,Oa as S,Xa as g,bb as I,db as E,ea as n,fa as v,ta as p,tb as _,ua as h,va as u,wa as t,xa as e}from"./chunk-W7CJDNGE.js";function A(r,o){if(r&1&&(t(0,"th",12),i(1),I(2,"date"),e()),r&2){let m=o.$implicit;n(),s(E(2,1,m.Date,"dd MMM"))}}function M(r,o){if(r&1&&(t(0,"td",17),i(1),e()),r&2){let m=o.$implicit;n(),s(m.Available)}}function O(r,o){if(r&1&&(t(0,"tr")(1,"th",16),i(2),e(),h(3,M,2,1,"td",17,p),e()),r&2){let m=o.$implicit,c=o.$index,d=b();n(2),s(m.RoomTypeName),n(),u(d.availabilityData==null||d.availabilityData[c]==null?null:d.availabilityData[c].Occupancy)}}function k(r,o){if(r&1&&(t(0,"tr")(1,"th",18),i(2),e(),t(3,"td"),i(4),e()()),r&2){let m=o.$implicit;n(2),s(m==null?null:m.roomTypeName),n(2),s(m==null||m.dailyRates==null?null:m.dailyRates[0].baseRate)}}var j=(()=>{let o=class o{constructor(c,d,a,l){this.authService=c,this.router=d,this.crudService=a,this.alertService=l,this.totalRooms=0,this.availableRooms=0}ngOnInit(){this.userInfo=this.authService.getUserInfo()?.user,console.log(this.userInfo),this.fetchData()}fetchData(){let c=new Date,d=new Date;d.setDate(d.getDate()+6),this.crudService.post(D.READ_FUTURE_AVAILABILITY,{propertyUnitId:this.userInfo.propertyUnitId,startDate:c,endDate:d}).then(l=>{this.availabilityData=l.data,console.log(this.availabilityData);for(let f of this.availabilityData)this.totalRooms+=f.TotalRoom,this.availableRooms+=f.Occupancy?.[0]?.Available}).catch(l=>{this.alertService.errorAlert(l?.error?.message||l.message)}),this.crudService.post(D.READ_FRONTDESK_DASHBOARD,{propertyUnitId:this.userInfo.propertyUnitId,startDate:c}).then(l=>{this.reservationData=l.data,console.log(this.reservationData)}).catch(l=>{this.alertService.errorAlert(l?.error?.message||l.message)});let a=new Date(c);a.setDate(a.getDate()+1),this.crudService.post(D.READ_TAPECHART,{startDate:c,endDate:a,propertyUnitId:this.userInfo.propertyUnitId,from:"dashboard"}).then(l=>{this.roomData=l.data,console.log(this.roomData)}).catch(l=>{this.alertService.errorAlert(l.statusMessage)})}};o.\u0275fac=function(d){return new(d||o)(v(T),v(C),v(x),v(R))},o.\u0275cmp=y({type:o,selectors:[["app-frontdesk-dashboard"]],standalone:!0,features:[g],decls:92,vars:8,consts:[[1,"container-fluid","my-4"],[1,"row"],[1,"col-lg-3","col-md-6","mb-4"],[1,"card","bg-light","text-dark","shadow"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"col-lg-8","mb-4"],[1,"card","shadow"],[1,"card-header"],[1,"table","table-hover","future-table"],["scope","col",1,"text-left"],["scope","col",1,"text-center"],[1,"col-lg-4","mb-4"],[1,"table","table-hover"],["scope","col"],["scope","row",1,"text-left"],["scope","row",1,"text-center"],["scope","row"]],template:function(d,a){d&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),i(6,"Total Arrivals"),e(),t(7,"p",6),i(8),e()()()(),t(9,"div",2)(10,"div",3)(11,"div",4)(12,"h5",5),i(13,"Checkin Completed"),e(),t(14,"p",6),i(15),e()()()(),t(16,"div",2)(17,"div",3)(18,"div",4)(19,"h5",5),i(20,"Checkout Remaining"),e(),t(21,"p",6),i(22),e()()()(),t(23,"div",2)(24,"div",3)(25,"div",4)(26,"h5",5),i(27,"Checkout Completed"),e(),t(28,"p",6),i(29),e()()()()(),t(30,"div",1)(31,"div",2)(32,"div",3)(33,"div",4)(34,"h5",5),i(35,"Total Inhouse"),e(),t(36,"p",6),i(37),e()()()(),t(38,"div",2)(39,"div",3)(40,"div",4)(41,"h5",5),i(42,"Total Reservations"),e(),t(43,"p",6),i(44),e()()()(),t(45,"div",2)(46,"div",3)(47,"div",4)(48,"h5",5),i(49,"Available Rooms"),e(),t(50,"p",6),i(51),e()()()(),t(52,"div",2)(53,"div",3)(54,"div",4)(55,"h5",5),i(56,"Total Rooms"),e(),t(57,"p",6),i(58),e()()()()(),t(59,"div",1)(60,"div",7)(61,"div",8)(62,"div",9)(63,"h5",5),i(64,"Future Availability"),e()(),t(65,"div",4)(66,"table",10)(67,"thead")(68,"tr")(69,"th",11),i(70,"Room Type"),e(),h(71,A,3,4,"th",12,p),e()(),t(73,"tbody"),h(74,O,5,1,"tr",null,p),e()()()()(),t(76,"div",13)(77,"div",8)(78,"div",9)(79,"h5",5),i(80,"Today's Room Rates"),e()(),t(81,"div",4)(82,"table",14)(83,"thead")(84,"tr")(85,"th",15),i(86,"Room Type"),e(),t(87,"th",15),i(88,"Rate"),e()()(),t(89,"tbody"),h(90,k,5,2,"tr",null,p),e()()()()()()()),d&2&&(n(8),s(a.reservationData==null?null:a.reservationData.totalArrival),n(7),s(a.reservationData==null?null:a.reservationData.checkinCompleted),n(7),s(a.reservationData==null?null:a.reservationData.checkoutRemaining),n(7),s(a.reservationData==null?null:a.reservationData.checkoutCompleted),n(8),s(a.reservationData==null?null:a.reservationData.inhouse),n(7),s(a.reservationData==null?null:a.reservationData.totalReservation),n(7),s(a.availableRooms),n(7),S("",a.totalRooms," "),n(13),u(a.availabilityData==null||a.availabilityData[0]==null?null:a.availabilityData[0].Occupancy),n(3),u(a.availabilityData),n(16),u(a.roomData))},dependencies:[_],styles:["body[_ngcontent-%COMP%]{background-color:#f8f9fa}.navbar-brand[_ngcontent-%COMP%]{font-size:1.5rem}.card-title[_ngcontent-%COMP%]{font-size:1.2rem}.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:700}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:.95rem}.badge[_ngcontent-%COMP%]{font-size:.9rem}.list-group-item[_ngcontent-%COMP%]{font-size:1.1rem}"]});let r=o;return r})();export{j as FrontdeskDashboardComponent};