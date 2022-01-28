(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["redirects-pro-Logs-vue"],{"18d81":function(t,s,e){},"2de6":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-redirects-logs"},[e("base-wp-table",{key:t.wpTableKey,attrs:{filters:[],totals:t.totals.logs,columns:t.columns,rows:t.logs,loading:t.wpTableLoading,"show-search":!1,"bulk-options":t.bulkOptions},on:{"process-bulk-action":t.processBulkAction,paginate:t.processPagination,"sort-column":t.processSort},scopedSlots:t._u([{key:"last_accessed",fn:function(s){var e=s.column;return[t._v(" "+t._s(t.$moment.utc(e).tz(t.$moment.tz.guess()).format("MMMM D, YYYY"))+" "+t._s(t.strings.at)+" "+t._s(t.$moment.utc(e).tz(t.$moment.tz.guess()).format("h:mm a"))+" ")]}},{key:"actions",fn:function(s){var o=s.index,i=s.row;return[e("div",{staticClass:"actions-wrapper"},[e("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.additionalInfo)+" ")]},proxy:!0}],null,!0)},[e("svg-circle-information",{staticClass:"log-info",nativeOn:{click:function(s){return t.showInfo(i)}}})],1),e("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.delete)+" ")]},proxy:!0}],null,!0)},[e("svg-trash",{staticClass:"remove-log",nativeOn:{click:function(s){return t.maybeDeleteLog(o)}}})],1)],1)]}}])}),t.showDeleteModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(s){s.stopPropagation(),t.showDeleteModal=!1}}},[e("svg-close",{on:{click:function(s){t.showDeleteModal=!1}}})],1),e("h3",[t._v(t._s(t.strings.areYouSureDeleteLog))]),e("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.strings.actionCannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium",loading:t.deletingLog},on:{click:t.processDeleteLog}},[t._v(" "+t._s(t.strings.yesDeleteLog)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(s){t.showDeleteModal=!1}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,2323889100)}):t._e(),t.activeRow?e("core-modal",{on:{close:function(s){t.activeRow=null}},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[t._v(" "+t._s(t.strings.additionalInfo)+" ")]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body info"},[e("div",[e("strong",[t._v(t._s(t.strings.url)+":")]),t._v(" "+t._s(t.activeRow.url)+" ")]),e("div",[e("strong",[t._v(t._s(t.strings.hits)+":")]),t._v(" "+t._s(t.activeRow.hits)+" ")]),e("div",[e("strong",[t._v(t._s(t.strings.lastAccessed)+":")]),t._v(" "+t._s(t.$moment.utc(t.activeRow.last_accessed).tz(t.$moment.tz.guess()).format("MMMM D, YYYY"))+" "+t._s(t.strings.at)+" "+t._s(t.$moment.utc(t.activeRow.last_accessed).tz(t.$moment.tz.guess()).format("h:mm a"))+" ")]),t.activeRow.ip?e("div",[e("strong",[t._v(t._s(t.strings.lastIp)+":")]),t._v(" "),e("code",[t._v(t._s(t.activeRow.ip))])]):t._e(),t.getHeaderInfo(t.activeRow)?e("div",[e("strong",[t._v(t._s(t.strings.headers)+":")]),e("table",{staticClass:"header-table"},t._l(t.getHeaderInfo(t.activeRow),(function(s,o){return e("tr",{key:o},[e("td",[e("strong",[t._v(t._s(o)+":")])]),e("td",[t._v(t._s(s))])])})),0)]):t._e()])]},proxy:!0}],null,!1,1360068377)}):t._e()],1)},i=[],n=e("5530"),a=(e("4e82"),e("7db0"),e("2f62")),l=e("b13e"),r={mixins:[l["a"]],data:function(){return{slug:"logs",bulkOptions:[{label:this.$t.__("Delete",this.$td),value:"delete"}]}},watch:{logs:{deep:!0,handler:function(){this.wpTableKey+=1}}},computed:Object(n["a"])(Object(n["a"])({},Object(a["c"])("redirects",["logs"])),{},{columns:function(){return[{slug:"url",label:this.strings.url,sortable:!0,sortDir:"url"===this.sort.logs?this.sortDir.logs:"asc",sorted:"url"===this.sort.logs},{slug:"hits",label:this.strings.hits,width:"97px",sortable:!0,sortDir:"hits"===this.sort.logs?this.sortDir.logs:"asc",sorted:"hits"===this.sort.logs},{slug:"last_accessed",label:this.strings.lastAccessed,width:"210px",sortable:!0,sortDir:"last_accessed"===this.sort.logs?this.sortDir.logs:"asc",sorted:"last_accessed"===this.sort.logs},{slug:"actions",label:"",width:"65px"}]}}),methods:{processBulkAction:function(t){var s=this,e=t.action,o=t.selectedRows;if(o.length)return"delete"===e?(this.wpTableLoading=!0,this.deleteLog(o).then((function(){s.wpTableLoading=!1,s.processPagination(s.paginatedPage)}))):void(this.logUrls=o)},processPagination:function(t){var s=this;this.wpTableLoading=!0,this.paginate({page:t,paginateLogs:!0,filter:{slug:"logs"}}).then((function(){s.wpTableLoading=!1}))},processSort:function(t,s){var e=this;s.target.blur(),this.wpTableLoading=!0,this.updateSort({slug:"logs",column:t.slug}),this.updateSortDir({slug:"logs",dir:this.sort.logs!==t.slug?t.sortDir:"asc"===t.sortDir?"desc":"asc"}),this.paginate({page:1,paginateLogs:!0,filter:{slug:"logs"},sort:!0}).then((function(){e.wpTableLoading=!1}))},maybeDeleteLog:function(t){var s=this.logs.find((function(s,e){return e===t}));s&&(this.showDeleteModal=!0,this.shouldDeleteLog=s.url)},processDeleteLog:function(){var t=this;this.deletingLog=!0,this.wpTableLoading=!0,this.deleteLog([this.shouldDeleteLog]).then((function(){t.wpTableLoading=!1,t.deletingLog=!1,t.showDeleteModal=!1,t.shouldDeleteLog=null,t.processPagination(t.paginatedPage)}))}}},c=r,d=(e("3214"),e("2877")),u=Object(d["a"])(c,o,i,!1,null,null,null);s["default"]=u.exports},3214:function(t,s,e){"use strict";e("18d81")},b13e:function(t,s,e){"use strict";e.d(s,"a",(function(){return a}));var o=e("5530"),i=e("2f62"),n=e("9c0e"),a={mixins:[n["c"]],data:function(){return{activeRow:null,logUrls:[],deletingLog:!1,showDeleteModal:!1,shouldDeleteLog:null,wpTableKey:0,wpTableLoading:!1,strings:{lastIp:this.$t.__("Last IP",this.$td),headers:this.$t.__("Headers",this.$td),at:this.$t.__("at",this.$td),additionalInfo:this.$t.__("Additional Info",this.$td),delete:this.$t.__("Delete",this.$td),areYouSureDeleteLog:this.$t.__("Are you sure you want to delete this record?",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),yesDeleteLog:this.$t.__("Yes, I want to delete this record",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),url:this.$t.__("URL",this.$td),hits:this.$t.__("Hits",this.$td),lastAccessed:this.$t.__("Last Accessed",this.$td)}}},computed:Object(o["a"])({},Object(i["e"])("redirects",["filters","totals","options","sort","sortDir","paginatedPage"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["b"])("redirects",["filter","paginate","deleteLog"])),Object(i["d"])("redirects",["updateSort","updateSortDir"])),{},{showInfo:function(t){this.activeRow=t},getHeaderInfo:function(t){var s=JSON.parse(t.request_data);return s.headers?s.headers:null}})}}}]);