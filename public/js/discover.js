(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[1186],{57825:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(19755);const i={data:function(){return{authenticated:!1,loaded:!1,config:window.App.config,posts:{},trending:{},trendingDaily:{},trendingMonthly:{},searchTerm:"",trendingRange:"daily",trendingLoading:!0,recommendedLoading:!0}},beforeMount:function(){this.authenticated=a("body").hasClass("loggedIn")},mounted:function(){this.loaded=!0,this.loadTrending(),1==a("body").hasClass("loggedIn")&&(this.fetchData(),axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(t){window._sharedData.curUser=t.data,window.App.util.navatar()})))},methods:{fetchData:function(){var t=this;this.recommendedLoading&&axios.get("/api/v1/discover/posts").then((function(e){t.posts=e.data.posts.filter((function(t){return null!=t})),t.recommendedLoading=!1}))},searchSubmit:function(){this.searchTerm.length>1&&(window.location.href="/i/results?q="+this.searchTerm)},loadTrending:function(){var t=this;"daily"==this.trendingRange&&this.trendingDaily.length&&(this.trending=this.trendingDaily,this.trendingLoading=!1),"monthly"==this.trendingRange&&this.trendingMonthly.length&&(this.trending=this.trendingMonthly,this.trendingLoading=!1),axios.get("/api/pixelfed/v2/discover/posts/trending",{params:{range:this.trendingRange}}).then((function(e){var s=e.data.filter((function(t){return null!==t}));"daily"==t.trendingRange&&(t.trendingDaily=s.filter((function(t){return 0==t.sensitive}))),"monthly"==t.trendingRange&&(t.trendingMonthly=s.filter((function(t){return 0==t.sensitive}))),t.trending=s,t.trendingLoading=!1}))},trendingRangeToggle:function(t){this.trendingLoading=!0,this.trendingRange=t,this.loadTrending()},formatCount:function(t){return App.util.format.count(t)}}}},45763:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t._self._c;return e("div",[t.loaded?e("div",[t.authenticated?e("div",{staticClass:"d-block d-md-none border-top-0 pt-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control rounded-pill shadow-sm",attrs:{placeholder:"Search"},domProps:{value:t.searchTerm},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSubmit.apply(null,arguments)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]):t._e(),t._v(" "),e("section",{staticClass:"mt-3 mb-5 section-explore"},[e("div",{staticClass:"profile-timeline"},[e("div",{staticClass:"row p-0 mt-5"},[e("div",{staticClass:"col-12 mb-3 d-flex justify-content-between align-items-center"},[e("p",{staticClass:"d-block d-md-none h1 font-weight-bold mb-0"},[t._v("Trending")]),t._v(" "),e("p",{staticClass:"d-none d-md-block display-4 font-weight-bold mb-0"},[t._v("Trending")]),t._v(" "),e("div",[e("div",{staticClass:"btn-group"},[e("button",{class:"daily"==t.trendingRange?"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-danger":"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-outline-danger",on:{click:function(e){return t.trendingRangeToggle("daily")}}},[t._v("Daily")]),t._v(" "),e("button",{class:"monthly"==t.trendingRange?"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-danger":"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-outline-danger",on:{click:function(e){return t.trendingRangeToggle("monthly")}}},[t._v("Monthly")])])])])]),t._v(" "),t.trendingLoading?e("div",{staticClass:"row d-flex align-items-center justify-content-center bg-light border",staticStyle:{"min-height":"40vh"}},[t._m(1)]):e("div",{staticClass:"row p-0 d-flex"},t._l(t.trending.slice(0,12),(function(s,a){return t.trending.length?e("div",{staticClass:"col-4 p-1 p-sm-2 p-md-3 pt-0"},[e("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:s.url}},[e("div",{staticClass:"square"},[s.sensitive?e("div",{staticClass:"square-content"},[t._m(0,!0),t._v(" "),e("blur-hash-canvas",{attrs:{width:"32",height:"32",hash:s.media_attachments[0].blurhash}})],1):e("div",{staticClass:"square-content"},[e("blur-hash-image",{attrs:{width:"32",height:"32",hash:s.media_attachments[0].blurhash,src:s.media_attachments[0].preview_url}})],1),t._v(" "),"photo:album"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-images fa-2x"})]):t._e(),t._v(" "),"video"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-video fa-2x"})]):t._e(),t._v(" "),"video:album"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-film fa-2x"})]):t._e(),t._v(" "),e("div",{staticClass:"info-overlay-text"},[e("h5",{staticClass:"text-white m-auto font-weight-bold"},[e("span",[e("span",{staticClass:"far fa-comment fa-lg p-2 d-flex-inline"}),t._v(" "),e("span",{staticClass:"d-flex-inline"},[t._v(t._s(t.formatCount(s.reply_count)))])])])])])])]):e("div",{staticClass:"col-12 d-flex align-items-center justify-content-center bg-light border",staticStyle:{"min-height":"40vh"}},[e("div",{staticClass:"h2"},[t._v("No posts found :(")])])})),0)])]),t._v(" "),t.authenticated?e("section",{staticClass:"pt-5 mb-5 section-explore"},[e("div",{staticClass:"profile-timeline pt-3"},[t._m(2),t._v(" "),t.recommendedLoading?e("div",{staticClass:"row d-flex align-items-center justify-content-center bg-light border",staticStyle:{"min-height":"40vh"}},[t._m(4)]):e("div",{staticClass:"row p-0 d-flex"},t._l(t.posts,(function(s,a){return t.posts.length?e("div",{key:"rmki:"+a,staticClass:"col-4 p-1 p-sm-2 p-md-3 pt-0"},[e("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:s.url}},[e("div",{staticClass:"square"},[s.sensitive?e("div",{staticClass:"square-content"},[t._m(3,!0),t._v(" "),e("blur-hash-canvas",{attrs:{width:"32",height:"32",hash:s.media_attachments[0].blurhash}})],1):e("div",{staticClass:"square-content"},[e("blur-hash-image",{attrs:{width:"32",height:"32",hash:s.media_attachments[0].blurhash,src:s.media_attachments[0].preview_url}})],1),t._v(" "),"photo:album"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-images fa-2x"})]):t._e(),t._v(" "),"video"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-video fa-2x"})]):t._e(),t._v(" "),"video:album"==s.pf_type?e("span",{staticClass:"float-right mr-3 post-icon"},[e("i",{staticClass:"fas fa-film fa-2x"})]):t._e(),t._v(" "),e("div",{staticClass:"info-overlay-text"},[e("h5",{staticClass:"text-white m-auto font-weight-bold"},[e("span",[e("span",{staticClass:"far fa-comment fa-lg p-2 d-flex-inline"}),t._v(" "),e("span",{staticClass:"d-flex-inline"},[t._v(t._s(t.formatCount(s.reply_count)))])])])])])])]):e("div",{staticClass:"col-12 d-flex align-items-center justify-content-center bg-light border",staticStyle:{"min-height":"40vh"}},[e("div",{staticClass:"h2"},[t._v("No posts found :(")])])})),0)])]):t._e()]):e("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"70vh"}},[e("img",{attrs:{src:"/img/pixelfed-icon-grey.svg"}})])])},i=[function(){var t=this._self._c;return t("div",{staticClass:"info-overlay-text-label"},[t("h5",{staticClass:"text-white m-auto font-weight-bold"},[t("span",[t("span",{staticClass:"far fa-eye-slash fa-lg p-2 d-flex-inline"})])])])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row p-0 mt-5"},[e("div",{staticClass:"col-12 mb-3 d-flex justify-content-between align-items-center"},[e("p",{staticClass:"d-block d-md-none h1 font-weight-bold mb-0"},[t._v("For You")]),t._v(" "),e("p",{staticClass:"d-none d-md-block display-4 font-weight-bold mb-0"},[t._v("For You")])])])},function(){var t=this._self._c;return t("div",{staticClass:"info-overlay-text-label"},[t("h5",{staticClass:"text-white m-auto font-weight-bold"},[t("span",[t("span",{staticClass:"far fa-eye-slash fa-lg p-2 d-flex-inline"})])])])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}]},27648:(t,e,s)=>{Vue.component("discover-component",s(57119).default)},57119:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(84369),i=s(46588),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,null,null).exports},46588:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(57825),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},84369:(t,e,s)=>{"use strict";s.r(e);var a=s(45763),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)}},t=>{t.O(0,[8898],(()=>{return e=27648,t(t.s=e);var e}));t.O()}]);