
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
	
	$.fn.equalHeights = function() {
		
		//vars
		var that = this, className = '.'+$(this).prop('class');
		
		//initiate 
		var init = function() {
			
			var height = 0;
			
			//find and set the height of the tallest element
			that.each(function() {
				var elementHeight = $(this).height();
				height = (elementHeight > height) ? elementHeight : height;
			});
			
			//set all elements to equal height
			$(className).css("height",height);
				
		};
		
		//re initiate
		var reInit = _.debounce(function(e) {
			init();
		},400);
		
		//initiate 
		init();

		//check for window resize
		$(window).resize(function() {
			//reset height to auto
			$(className).css("height","auto");
			//re initiate
			reInit();
		});
	
			
	};
	
}(jQuery));
