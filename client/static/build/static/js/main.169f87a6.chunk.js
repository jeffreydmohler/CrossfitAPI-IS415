(this.webpackJsonpintexapp=this.webpackJsonpintexapp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),c=(a(62),a(8)),o=a.n(c),s=a(87),u=a(18),m=a(88),d=a(30),E=a(31),b=a(34),p=a(35),f=a(37),h=a.n(f),y=l.a.createContext(),g=a(127),v=a(126),x=a(82),S=a(7),w=a(24),k=a(132),C=a(133),_=a(131),B=a(73),O=a.n(B);var F=function(e){return l.a.createElement(k.a,{expand:"lg",variant:"light",bg:"secondary"},l.a.createElement(S.b,{to:"/"},l.a.createElement(k.a.Brand,null,l.a.createElement("img",{alt:"charitable",src:O.a,width:"50"}),"Crossfit Predictor")),l.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"},l.a.createElement(S.b,{to:"/create2",className:"nav-link"},"Women's Predictor \xa0 |"),l.a.createElement(S.b,{to:"/create",className:"nav-link"},"Men's Predictor \xa0 |"),l.a.createElement(S.b,{to:"/fraud-detection",className:"nav-link"},"Crossfit Workouts \xa0 |"),l.a.createElement(S.b,{to:"/add",className:"nav-link"},"Add a Crossfit Record ")),l.a.createElement(C.a,null,l.a.createElement(C.a,{className:"mr-auto pr-4"},l.a.createElement(S.b,{to:"/cart",className:"nav-link"})),l.a.createElement(_.a,{title:"Welcome, User",alignRight:!0},l.a.createElement(_.a.Item,null,"My Account"),l.a.createElement(_.a.Divider,null),l.a.createElement(_.a.Item,{href:"#action/3.4"},"Logout")))))},P=a(80),N=a(81),A=a.n(N),G=a(57),W=a.n(G);var j=function(e){return l.a.createElement("div",null,l.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,width:"auto",className:W.a.Video},l.a.createElement("source",{src:A.a,type:"video/mp4"}),"Your browser does not support this video type"),l.a.createElement("div",{className:W.a.Content},l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("h1",null,"Welcome to the Crossfit Predictor")),l.a.createElement(v.a,null,"\xa0"),l.a.createElement(v.a,null,l.a.createElement(x.a,null,l.a.createElement(S.b,{to:"/create2"},l.a.createElement(P.a,{variant:"outline-success",size:"lg"},"Run Women's Prediction"))),l.a.createElement(x.a,null,l.a.createElement(S.b,{to:"/create"},l.a.createElement(P.a,{variant:"outline-success",size:"lg"},"Run Men's Prediction")))))))},T=a(134),R=a(128),D=a(130),z=a(13),U=a(36),I=(a(54),a(59)),H=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={country:e.country,region:e.state},n}return Object(E.a)(a,[{key:"selectCountry",value:function(e){this.setState({country:e})}},{key:"selectRegion",value:function(e){this.setState({region:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.country,n=t.region;return l.a.createElement("div",null,l.a.createElement(I.a,{name:"location_country",id:"cntry",value:a,valueType:"short",onChange:function(t){return e.selectCountry(t)},priorityOptions:["US","CA","GB"],disabled:this.props.disable,required:!0}),l.a.createElement(I.b,{name:"location_state",id:"state",countryValueType:"short",country:a,value:n,valueType:"short",onChange:function(t){return e.selectRegion(t)},disabled:this.props.disable}))}}]),a}(n.Component),L=a(129),q=a(86),M=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).interval=void 0,e.state={isAnimated:!1},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.repeat?this.interval=window.setInterval((function(){e.setState({isAnimated:!e.state.isAnimated})}),1e3*this.props.duration):this.setState({isAnimated:!this.state.isAnimated})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return l.a.createElement(q.a,{start:function(){return{value:e.props.valueStart}},update:function(){return{value:[e.state.isAnimated?e.props.valueEnd:e.props.valueStart],timing:{duration:1e3*e.props.duration,ease:e.props.easingFunction}}}},(function(t){var a=t.value;return e.props.children(a)}))}}]),a}(l.a.Component);M.defaultProps={valueStart:0};var J,V,Q,Y,K=M,$=a(37),X=function(e){return e>65?"Excellent":e>55?"Good":e>45?"Average":e>35?"Fair":e>0?"Poor":"Predict"},Z=0,ee=X(Z);function te(e){return l.a.createElement(ie,null)}var ae,ne,le,re,ie=function(e){return l.a.createElement(z.c,{initialValues:{title:"",description:"",location_country:"",location_state:"",has_beneficiary:"",is_charity:"",goal_lnplus:0},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return console.log("validating",e),e.title||(t.title="*Required"),e.title.length>200&&(t.title="Shorter Title"),e.description||(t.description="*Required"),""===e.has_beneficiary&&(t.description="Beneficiary is Required"),""===e.is_charity&&(t.description="Organzier Type is Required"),t},onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J=document.getElementById("cntry"),V=J.options[J.selectedIndex].value,t.location_country=V,Q=document.getElementById("state"),Y=Q.options[Q.selectedIndex].value,t.location_state=Y,console.log("submit",t),e.next=9,$.post("/api/predict/",{values:t});case 9:return n=e.sent,console.log(n.data),Z=n.data,ee=X(Z),document.documentElement.scrollTop=0,e.next=16,new Promise((function(e){setTimeout((function(){e(),a.setSubmitting(!1)}),2e3)}));case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return l.a.createElement(ce,{form:e})}))},ce=function(e){return l.a.createElement(z.b,null,l.a.createElement(g.a,null,l.a.createElement(T.a.Header,{as:"h5"},"Predict Men's Crossfit -- Will you make it into the games?"),l.a.createElement(v.a,null,l.a.createElement(x.a,{md:"10"},l.a.createElement(T.a.Body,null,l.a.createElement(oe,{title:"Title:",name:"title",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(oe,{title:"Description:",name:"description",type:"text",as:"textarea"}),l.a.createElement("span",{className:"form-label"},"Location:")," ",l.a.createElement("br",null),l.a.createElement(H,{disable:e.form.isSubmitting}),l.a.createElement("br",null),l.a.createElement("span",{className:"form-label"},"Has a specific beneficiary been declared?")," ",l.a.createElement("br",null),l.a.createElement(se,{name:"has_beneficiary",type:"radio",label:"Yes",value:"TRUE"}),l.a.createElement(se,{name:"has_beneficiary",type:"radio",label:"No",value:"FALSE"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"form-label"},"Campaign organizer type:"),l.a.createElement("br",null),l.a.createElement(se,{name:"is_charity",type:"radio",label:"Charitable Organization",value:"TRUE"}),l.a.createElement(se,{name:"is_charity",type:"radio",label:"Individual",value:"FALSE"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(oe,{title:"Fundraising Goal (USD)",name:"goal_lnplus",type:"number",disabled:e.form.isSubmitting,width:"25%"}),l.a.createElement(S.b,{to:"/fraud-detection",className:"ml-1",style:{fontSize:"13px",color:"blue"}},"Workout Descriptions")),l.a.createElement(P.a,{type:"submit",disabled:e.form.isSubmitting,className:"mb-4 w-100 ml-3"},l.a.createElement(R.a,{animation:"border",variant:"success",size:"sm",style:{visibility:e.form.isSubmitting?"visible":"hidden"}}),"\xa0  \xa0 Predict")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{md:"2"},l.a.createElement("br",null),l.a.createElement(K,{valueStart:0,valueEnd:Z,duration:1.4,easingFunction:L.a},(function(e){return l.a.createElement(U.a,{value:e,styles:Object(U.b)({pathTransition:"none"})},l.a.createElement("div",{style:{color:"#3e98c7",fontSize:"20px"}},ee," "))})),l.a.createElement("br",null),l.a.createElement("span",{className:"text-center form-label"}," Success Score: ",parseFloat(Z).toFixed(2))))))},oe=function(e){return l.a.createElement(z.a,{name:e.name},(function(t){return l.a.createElement(D.a.Group,null,e.title&&l.a.createElement(D.a.Label,null,e.title),l.a.createElement(D.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,as:e.as,style:{display:"block",width:e.width},maxLength:400})),t.meta.touched&&t.meta.error&&l.a.createElement("div",{className:"text-danger"},t.meta.error))}))},se=function(e){return l.a.createElement(z.a,{name:e.name},(function(t){return l.a.createElement(D.a.Check,Object.assign({inline:!0,name:e.name,type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,label:e.label,value:e.value}))}))},ue=a(37),me=function(e){return e>65?"Excellent":e>55?"Good":e>45?"Average":e>35?"Fair":e>0?"Poor":"Predict"},de=0,Ee=me(de);function be(e){return l.a.createElement(pe,null)}var pe=function(e){return l.a.createElement(z.c,{initialValues:{title:"",description:"",location_country:"",location_state:"",has_beneficiary:"",is_charity:"",goal_lnplus:0},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return console.log("validating",e),e.title||(t.title="*Required"),e.title.length>200&&(t.title="Shorter Title"),e.description||(t.description="*Required"),""===e.has_beneficiary&&(t.description="Beneficiary is Required"),""===e.is_charity&&(t.description="Organzier Type is Required"),t},onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae=document.getElementById("cntry"),ne=ae.options[ae.selectedIndex].value,t.location_country=ne,le=document.getElementById("state"),re=le.options[le.selectedIndex].value,t.location_state=re,console.log("submit",t),e.next=9,ue.post("/api/predict/",{values:t});case 9:return n=e.sent,console.log(n.data),de=n.data,Ee=me(de),document.documentElement.scrollTop=0,e.next=16,new Promise((function(e){setTimeout((function(){e(),a.setSubmitting(!1)}),2e3)}));case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return l.a.createElement(fe,{form:e})}))},fe=function(e){return l.a.createElement(z.b,null,l.a.createElement(g.a,null,l.a.createElement(T.a.Header,{as:"h5"},"Predict Women's Crossfit -- Will you make it into the games?"),l.a.createElement(v.a,null,l.a.createElement(x.a,{md:"10"},l.a.createElement(T.a.Body,null,l.a.createElement(he,{title:"Title:",name:"title",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(he,{title:"Description:",name:"description",type:"text",as:"textarea"}),l.a.createElement("span",{className:"form-label"},"Location:")," ",l.a.createElement("br",null),l.a.createElement(H,{disable:e.form.isSubmitting}),l.a.createElement("br",null),l.a.createElement("span",{className:"form-label"},"Has a specific beneficiary been declared?")," ",l.a.createElement("br",null),l.a.createElement(ye,{name:"has_beneficiary",type:"radio",label:"Yes",value:"TRUE"}),l.a.createElement(ye,{name:"has_beneficiary",type:"radio",label:"No",value:"FALSE"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"form-label"},"Campaign organizer type:"),l.a.createElement("br",null),l.a.createElement(ye,{name:"is_charity",type:"radio",label:"Charitable Organization",value:"TRUE"}),l.a.createElement(ye,{name:"is_charity",type:"radio",label:"Individual",value:"FALSE"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(he,{title:"Fundraising Goal (USD)",name:"goal_lnplus",type:"number",disabled:e.form.isSubmitting,width:"25%"}),l.a.createElement(S.b,{to:"/fraud-detection",className:"ml-1",style:{fontSize:"13px",color:"blue"}},"Workout Descriptions")),l.a.createElement(P.a,{type:"submit",disabled:e.form.isSubmitting,className:"mb-4 w-100 ml-3"},l.a.createElement(R.a,{animation:"border",variant:"success",size:"sm",style:{visibility:e.form.isSubmitting?"visible":"hidden"}}),"\xa0  \xa0 Predict")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{md:"2"},l.a.createElement("br",null),l.a.createElement(K,{valueStart:0,valueEnd:de,duration:1.4,easingFunction:L.a},(function(e){return l.a.createElement(U.a,{value:e,styles:Object(U.b)({pathTransition:"none"})},l.a.createElement("div",{style:{color:"#3e98c7",fontSize:"20px"}},Ee," "))})),l.a.createElement("br",null),l.a.createElement("span",{className:"text-center form-label"}," Success Score: ",parseFloat(de).toFixed(2))))))},he=function(e){return l.a.createElement(z.a,{name:e.name},(function(t){return l.a.createElement(D.a.Group,null,e.title&&l.a.createElement(D.a.Label,null,e.title),l.a.createElement(D.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,as:e.as,style:{display:"block",width:e.width},maxLength:400})),t.meta.touched&&t.meta.error&&l.a.createElement("div",{className:"text-danger"},t.meta.error))}))},ye=function(e){return l.a.createElement(z.a,{name:e.name},(function(t){return l.a.createElement(D.a.Check,Object.assign({inline:!0,name:e.name,type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,label:e.label,value:e.value}))}))},ge=a(37);function ve(e){return l.a.createElement(xe,null)}var xe=function(e){return l.a.createElement(z.c,{initialValues:{Country:"US",Age:"2",Height:"54",BodyWeight:"120",GamesQualify:"TRUE",BackSquat:"150",CleanAndJerk:"120",Snatch:"130",Deadlift:"150",FightGoneBad:"170",MaxPullUps:"18"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){return console.log("validating",e),{}},onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit",t),e.next=3,ge.post("/api/men/",{Country:t.Country,Age:t.Age,Height:t.Height,BodyWeight:t.BodyWeight,GamesQualify:t.GamesQualify,BackSquat:t.BackSquat,CleanAndJerk:t.CleanAndJerk,Snatch:t.Snatch,Deadlift:t.Deadlift,FightGoneBad:t.FightGoneBad,MaxPullUps:t.MaxPullUps});case 3:return n=e.sent,console.log(n),document.documentElement.scrollTop=0,e.next=8,new Promise((function(e){setTimeout((function(){e(),a.setSubmitting(!1)}),2e3)}));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return l.a.createElement(Se,{form:e})}))},Se=function(e){return l.a.createElement(z.b,null,l.a.createElement(g.a,null,l.a.createElement(T.a.Header,{as:"h5"},"Predict Men's Crossfit -- Will you make it into the games?"),l.a.createElement(v.a,null,l.a.createElement(x.a,{md:"10"},l.a.createElement(T.a.Body,null,l.a.createElement(we,{title:"Country:",name:"Country",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"Age:",name:"Age",type:"text"}),l.a.createElement(we,{title:"Height:",name:"Height",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"BodyWeight:",name:"BodyWeight",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"GamesQualify:",name:"GamesQualify",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"BackSquat:",name:"BackSquat",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"Snatch:",name:"Snatch",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"Deadlift:",name:"Deadlift",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"FightGoneBad:",name:"FightGoneBad",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"MaxPullUps:",name:"MaxPullUps",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(we,{title:"CleanAndJerk:",name:"CleanAndJerk",type:"text",disabled:e.form.isSubmitting}),l.a.createElement(S.b,{to:"/fraud-detection",className:"ml-1",style:{fontSize:"13px",color:"blue"}},"Workout Descriptions")),l.a.createElement(P.a,{type:"submit",disabled:e.form.isSubmitting,className:"mb-4 w-100 ml-3"},l.a.createElement(R.a,{animation:"border",variant:"success",size:"sm",style:{visibility:e.form.isSubmitting?"visible":"hidden"}}),"\xa0  \xa0 Predict")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{md:"2"}))))},we=function(e){return l.a.createElement(z.a,{name:e.name},(function(t){return l.a.createElement(D.a.Group,null,e.title&&l.a.createElement(D.a.Label,null,e.title),l.a.createElement(D.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field,{disabled:e.disabled,as:e.as,style:{display:"block",width:e.width},maxLength:400})),t.meta.touched&&t.meta.error&&l.a.createElement("div",{className:"text-danger"},t.meta.error))}))};function ke(e){return l.a.createElement("div",{className:"text-center"},"Crossfit Predictor  \xa9 ",(new Date).getFullYear())}function Ce(e){return l.a.createElement(v.a,null,l.a.createElement(x.a,{md:"1"}),l.a.createElement(x.a,{md:"10"},l.a.createElement("div",null,l.a.createElement(T.a.Header,{as:"h2"},"CrossFit Workouts"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,l.a.createElement("b",null,"CrossFit Workouts")),l.a.createElement("h6",null,"Filthy Fifty "),l.a.createElement("h6",null,"Fight Gone Bad"),l.a.createElement("h6",null,"Fran"),l.a.createElement("h6",null,"Grace"),l.a.createElement("h6",null,"Helen"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Filthy Fifty: ")),l.a.createElement("h6",null,"50 Box Jumps (24/20 in)"),l.a.createElement("h6",null,"50 Jumping Pull-Ups"),l.a.createElement("h6",null,"50 Kettlebell Swings (1/.75 pood)"),l.a.createElement("h6",null,"50 Walking Lunge Steps"),l.a.createElement("h6",null,"50 Knees-to-Elbows"),l.a.createElement("h6",null,"50 Push Presses (45/35 lb)"),l.a.createElement("h6",null,"50 Back Extensions"),l.a.createElement("h6",null,"50 Wall Ball Shots (20/14 lb)"),l.a.createElement("h6",null,"50 Burpees"),l.a.createElement("h6",null,"50 Double-Unders"),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Fight Gone Bad: ")),l.a.createElement("h6",null,"3 Rounds For Total Reps in 17 minutes"),l.a.createElement("h6",null,"1 minute Wall Ball Shots (20/14 lb)"),l.a.createElement("h6",null,"1 minute Sumo Deadlift High-Pulls (75/55 lb)"),l.a.createElement("h6",null,"1 minute Box Jumps (20 in)"),l.a.createElement("h6",null,"1 minute Push Press (75/55 lb)"),l.a.createElement("h6",null,"1 minute Row (calories)"),l.a.createElement("h6",null,"1 minute Rest"),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Fran: ")),l.a.createElement("h6",null,"Perform 21 thrusters followed by 21 pull-ups, 15 thrusters followed by 15 pull-ups, and 9 thrusters followed by 9 pull-ups. As fast as humanly possible."),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Grace: ")),l.a.createElement("h6",null,"Grace is a CrossFit Girl benchmark workout (WOD). Grace is also one of the best known CrossFit workouts. It is just 30 cleans and jerks for time with 135 lbs for men and 95 lbs for women."),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Helen: ")),l.a.createElement("h6",null,"As fast as humanly possible, perform three rounds of a 400m sprint, 21 kettlebell swings (24kg) and 12 pull ups."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"text-center"},l.a.createElement("h3",null,"Helpful CrossFit Links"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://games.crossfit.com/leaderboard/open/2021?view=0&division=1&scaled=0&sort=0"},l.a.createElement(P.a,null,"Crossfit Leaderboard")),"         ",l.a.createElement("a",{href:"https://www.crossfit.com/"},l.a.createElement(P.a,null,"Crossfit Home Page"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"text-bottom"},"NOTE: All of the information and workouts on this page are provided by WodWell. For more information, visit ",l.a.createElement("a",{href:"https://wodwell.com/wods/?sort=popular"},"www.wodwell.com"),"."),l.a.createElement("br",null))))}var _e=function(){return l.a.createElement(S.a,null,l.a.createElement(g.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(v.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 border-bottom shadow-sm",bg:"secondary"},l.a.createElement(x.a,null,l.a.createElement(F,null))),l.a.createElement(v.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(x.a,null,l.a.createElement(w.c,null,l.a.createElement(w.a,{exact:!0,path:"/"},l.a.createElement(j,null)),l.a.createElement(w.a,{path:"/create"},l.a.createElement(te,null)),l.a.createElement(w.a,{path:"/create2"},l.a.createElement(be,null)),l.a.createElement(w.a,{path:"/add"},l.a.createElement(ve,null)),l.a.createElement(w.a,{path:"/fraud-detection"},l.a.createElement(Ce,null))))),l.a.createElement(v.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0"},l.a.createElement(x.a,{style:{backgroundColor:"#CEECEF"},className:"px-3 py-2"},l.a.createElement(ke,{style:{position:"fixed",left:0,bottom:0}})))))},Be=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).actions={},n.state={campaigns:{}},n}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement(y.Provider,{value:Object(m.a)({},this.state,{},this.actions)},l.a.createElement(_e,null))}},{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/campaign/");case 2:t=e.sent,a={},n=Object(s.a)(t.data);try{for(n.s();!(l=n.n()).done;)r=l.value,a[r.id]=r,a[r.id].percent_of_goal=100*a[r.id].percent_of_goal}catch(i){n.e(i)}finally{n.f()}this.setState({campaigns:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){e.exports={Container:"front_Container__zIeoa",Video:"front_Video__P-A3z",Content:"front_Content__yf_VR",SubContent:"front_SubContent__2BaO3"}},62:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/world.cb5c3e41.svg"},81:function(e,t,a){e.exports=a.p+"static/media/FootageOfSunsetView.8d4ce80b.mp4"},91:function(e,t,a){e.exports=a(121)}},[[91,1,2]]]);
//# sourceMappingURL=main.169f87a6.chunk.js.map