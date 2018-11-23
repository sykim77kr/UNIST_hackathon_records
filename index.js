$(document).ready(function() {
	var imgIndex;
	var imgBoxHeight;
	var imgCnt = 42;
	var imgLine = 4;

	$('#showedImg').css({
		'marginTop': -parseInt($('#showedImg').css('height')) / 2,
		'marginLeft': -parseInt($('#showedImg').css('width')) / 2
	});
	$('#arrowBox').css({
		'marginTop': -parseInt($('#arrowBox').css('height')) / 2,
		'marginLeft': -parseInt($('#arrowBox').css('width')) / 2
	});

    $(document).scroll(function() {
		if($(document).scrollTop() > 0) {
			$('#main_nav').css('opacity', 0.9);
		}
		else {
			$('#main_nav').css('opacity', 0);
		}
	});

	(function() {
		for(var i = 0; i < imgCnt; i++) {
			var itemStr = '<img data-index="' + (i + 1) + '" class="imgResize" src="image/picture/' + (i + 1) + '.jpg" />';

			$('<li></li>').addClass('imgOp').html(itemStr).appendTo($('#imgBox > ul'));
		}
	})();

	$('.imgResize').click(function() {
		imgIndex = $(this).attr('data-index');

		if(imgIndex == 1) {
			$('#leftDir').css('opacity', 0);
			leftArrowImg = false;
		}
		else if(imgIndex == imgCnt) {
			$('#rightDir').css('opacity', 0);
			rightArrowImg = false;
		}
		else {
			$('#leftDir').css('opacity', 1);
			leftArrowImg = true;
			$('#rightDir').css('opacity', 1);
			rightArrowImg = true;
		}

		$('#showImg').css('visibility', 'visible');

		$('#showedImg').attr('src','image/picture/' + $(this).attr('data-index') + '.jpg');
	});

	$('#showImg').click(function() {
		$(this).css('visibility', 'hidden');
	});

	$('#showedImg').click(function(event) {
		event.stopPropagation();
	});

	var leftArrowImg = true;
	var rightArrowImg = true;

	$('#leftDir').click(function() {
		if(imgIndex != 1) {
			imgIndex--;

			if(imgIndex == 1) {
				$(this).css('opacity', '0');
				leftArrowImg = false;
			}
		}
		if(!rightArrowImg) {
			$('#rightDir').css('opacity', '1');
			rightArrowImg = true;
		}

		$('#showedImg').attr('src','image/picture/' + imgIndex + '.jpg');
		event.stopPropagation();
	});
	$('#rightDir').click(function() {
		if(imgIndex != imgCnt) {
			imgIndex++;

			if(imgIndex == imgCnt) {
				$(this).css('opacity', '0');
				rightArrowImg = false;
			}
		}
		if(!leftArrowImg) {
			$('#leftDir').css('opacity', '1');
			leftArrowImg = true;
		}

		$('#showedImg').attr('src','image/picture/' + imgIndex + '.jpg');
		event.stopPropagation();
	});

	$('#plus').click(function(){
		if(imgLine > Math.ceil(imgCnt/4)-2) {
			if(imgLine < Math.ceil(imgCnt/4)) {
				imgBoxHeight = parseInt($('#imgBox').css('height'));
				$('#imgBox').css('height', imgBoxHeight + 270);
				imgLine++;
			}
			else return;
		}
		else {
			imgBoxHeight = parseInt($('#imgBox').css('height'));
			$('#imgBox').css('height', imgBoxHeight + 540);
			imgLine += 2;
		}
	});

	$('#minus').click(function(){
		if(imgLine < 6) {
			if(imgLine == 5) {
				imgBoxHeight = parseInt($('#imgBox').css('height'));
				$('#imgBox').css('height', imgBoxHeight - 270);
				imgLine--;
			}
			else return;
		}
		else {
			imgBoxHeight = parseInt($('#imgBox').css('height'));
			$('#imgBox').css('height', imgBoxHeight - 540);
			imgLine -= 2;
		}
	});

});