(function(a){a.fn.equalHeights=function(c,b){tallest=(c)?c:0;this.each(function(){if(a(this).height()>tallest){tallest=a(this).height()}});if((b)&&tallest>b){tallest=b}return this.each(function(){a(this).height(tallest).css("overflow","auto")})}})(jQuery);