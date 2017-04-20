/*! gruntyplate - v0.1.0 - 2017-04-03
* Copyright (c) 2017 Gruntyplate;*/

app.overlay=function(a){"use strict";function b(){a(".js-overlay").click("on",function(){a(this).attr("data-overlay-type")}),a(".overlay").click("on",function(b){b.target===b.currentTarget&&(a("body").removeClass("is-overlay-open is-overlay-transparent"),a(".overlay").empty())})}a(window).on("load",b)}(jQuery);
//# sourceMappingURL=application.js.map