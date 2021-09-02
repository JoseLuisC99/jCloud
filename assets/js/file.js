window.addEventListener('load',function(){
	var types = {
		'zip': "RAR Compressed",
		'txt': "Text Document",
		'pdf': "PDF Document",
		'epud': "EPUB Document",
		// OFFICE TYPES
		'docx': "MS Word",
		'xlsx': "MS Excel",
		'pptx': "MS PowerPoint",
		// IMAGE TYPES
		'bmp': "BMP Image",
		'eps': "EPS Image",
		'gif': "GIF Image",
		'jpeg': "JPEG Image",
		'jpg': "JPEG Image",
		'png': "PNG Image",
		'tif': "TIF Image",
		// AUDIO TYPES
		'acc': "AAC Audio",
		'aiff': "AIFF Audio",
		'flac': "FLAC Audio",
		'm4a': "M4A Audio",
		'mp3': "MP3 Audio",
		'ogg': "OGG Media",
		'opus': "OPUS Audio",
		'wav': "WAV Audio",
		'wma': "WMA Audio",
		// VIDEO TYPES
		"3g2": "3G2 Video",
		"3gp": "3GP Video",
		"avi": "AVI Video",
		"flv": "FLV Video",
		"mkv": "MKV Video",
		"mov": "MOV Video",
		"mp4": "MP4 Video",
		"mpeg": "MPEG Video",
		"webm": "WEBM Video",
		"mmv": "WMV Video",
		'wmv': "WMV Audio",
		// EXECUTABLES TYPES
		"exe": "Executable",
		"apk": "Android App",
		"app": "Apple App"
	}
	var fileInput = document.getElementById('File');
	fileInput.addEventListener('change',function(e){
		var file = e.target.files[0];

		var fileName = file.name.split('.');
		var type = types[fileName.pop().toLowerCase()];
		if(type == undefined)
			type = 'Archivo';

		document.getElementById('prevSize').innerHTML = " " + file.size + " bytes";
		document.getElementById('preType').innerHTML = " " + type;

		document.getElementById('Size').value = file.size;
		document.getElementById('Type').value = type;
		document.getElementById('Name').value = file.name;
		document.getElementById('Date').value = getDate(new Date());
		document.getElementById('Last').value = getDate(file.lastModifiedDate);
		document.getElementById('Mime').value = file.type;
		document.getElementById('Key').value = alt(97,122);
	});
});

function getDate(date){
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.toString();
	d = d.split(" ");
	d = d[2];
	var h = date.getHours();
	var min = date.getMinutes();
	if(m<10){
		m = '0' + m;
	}
	if(h<10)
		h = '0' + h;
	if(min<10){
		min = '0' + min;
	}

	return y + '-' + m + '-' + d + ' ' + h + ':' + min;
}
function alt(min, max) {
	var num = Math.round((Math.random() * (max - min)) + min);
	var str = "";
    for (var i = 0; i < 15; i++) {
    	var num = Math.round((Math.random() * (max - min)) + min);
    	str += String.fromCharCode(num);
	}
  	return str;
}