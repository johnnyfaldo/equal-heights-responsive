
//	 Equal Heights Responsive 1.0
//   Author: John Faldo 
//   Copyright John Faldo 2013 

/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function($) {
	
	$.fn.equalHeights = function(options) {
		
		//settings
		var settings = $.extend ({
			//resize elements upon window resize
			responsive:   false,
			//animate the resize
			animate:      false,
			//animate speed
			animateSpeed: 200
		},options);
		
		var that = this, className = '.'+$(this).prop('class');
		
		var init = function() {
			
			var height = 0;
			
			//find and set the height of the tallest element
			that.each(function() {
				var elementHeight = $(this).height();
				height = (elementHeight > height) ? elementHeight : height;
			});
			
			//if animate setting is true, transition into new dimensions
			if(settings.animate === true) {
				that.each(function() {
					$(this).animate({height:height},settings.animateSpeed);
				});
			}else {
				//resize without animation
				$(className).css("height",height);
			}
				
		};
		
		//re initialise
		var reInit = _.debounce(function(e) {
			init();
		},400);
		
		//initialise
		init();
		
		//check for window resize if responsive setting is true
		if(settings.responsive === true) {
			$(window).resize(function() {
				//reset height to auto
				$(className).css("height","auto");
				//re initialise
				reInit();
			});
		}
			
	};
	
}(jQuery));
