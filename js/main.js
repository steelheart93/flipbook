$(window).ready(function () {
	$.when(loadPages(1, 12, "jpg")).then(function () {
		$('.flipbook').turn({
			width: 922,
			height: 600,
			elevation: 50,
			gradients: true
		});

		$("#pageFld").val($(".flipbook").turn("page"));

		$(".flipbook").bind("turned", function (event, page, view) {
			$("#pageFld").val(page);
		});

		$("#pageFld").change(function () {
			$(".flipbook").turn("page", $(this).val());
		});

		$("#prevBtn").click(function () {
			$(".flipbook").turn("previous");
		});

		$("#nextBtn").click(function () {
			$(".flipbook").turn("next");
		});
	});
});

$(window).bind('keydown', function (e) {
	if (e.keyCode == 37)
		$('.flipbook').turn('previous');
	else if (e.keyCode == 39)
		$('.flipbook').turn('next');
});

function addPage(nombre) {
	let f = $('.flipbook');
	f.html(f.html() + `<div style="background-image:url(pages/${nombre})"></div>`);
}

function loadPages(inicio, fin, formato) {
	console.log("loading pages...");

	for (let i = inicio; i <= fin; i++) {
		addPage(`${i}.${formato}`);
	}
}
