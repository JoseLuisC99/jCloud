window.addEventListener('load',function(){
	var types = {
		"File": "fa-file-o",
		"RAR Compressed": "fa-file-archive-o",
		"Text Document": "fa-file-text-o",
		"PDF Document": "fa-file-pdf-o",
		"EPUB Document": "fa-book",
		// OFFICE TYPES
		"MS Word": "fa-file-word-o",
		"MS Excel": "fa-file-excel-o",
		"MS PowerPoint": "fa-file-powerpoint-o",
		// IMAGE TYPES
		"BMP Image": "fa-file-image-o",
		"EPS Image": "fa-file-image-o",
		"GIF Image": "fa-file-image-o",
		"JPEG Image": "fa-file-image-o",
		"PNG Image": "fa-file-image-o",
		"PSD Image": "fa-file-image-o",
		"TIF Image": "fa-file-image-o",
		// AUDIO TYPES
		"AAC Audio": "fa-file-audio-o",
		"AIFF Audio": "fa-file-audio-o",
		"FLAC Audio": "fa-file-audio-o",
		"M4A Audio": "fa-file-audio-o",
		"MP3 Audio": "fa-file-audio-o",
		"OGG Audio": "fa-file-audio-o",
		"OPUS Audio": "fa-file-audio-o",
		"WAV Audio": "fa-file-audio-o",
		"WMA Audio": "fa-file-audio-o",
		// VIDEO TYPES
		"3G2 Video": "fa-file-video-o",
		"3GP Video": "fa-file-video-o",
		"AVI Video": "fa-file-video-o",
		"FLV Video": "fa-file-video-o",
		"MKV Video": "fa-file-video-o",
		"MOV Video": "fa-file-video-o",
		"MP4 Video": "fa-file-video-o",
		"MPEG Video": "fa-file-video-o",
		"OGG Video": "fa-file-video-o",
		"WEBM Video": "fa-file-video-o",
		"WMV Video": "fa-file-video-o",
		// CODE TYPES
		"Batch Source Code": "fa-file-code-o",
		"C Source Code": "fa-file-code-o",
		"C++ Source Code": "fa-file-code-o",
		"C# Source Code": "fa-file-code-o",
		"HTML Document": "fa-file-code-o",
		"J# Source Code": "fa-file-code-o",
		"Java Source Code": "fa-file-code-o",
		"JavaScript": "fa-file-code-o",
		"Objetive-C Source Code": "fa-file-code-o",
		"Perl Source Code": "fa-file-code-o",
		"PHP Source Code": "fa-file-code-o",
		"Python Source Code": "fa-file-code-o",
		"Ruby Source Code": "fa-file-code-o",
		"Scala Source Code": "fa-file-code-o",
		"Smalltalk Source Code": "fa-file-code-o",
		"Swift Source Code": "fa-file-code-o",
		"VisualBasic Source Code": "fa-file-code-o",
		// EXECUTABLE TYPES
		"Executable": "fa-cogs",
		"Android App": "fa-android",
		"Apple App": "fa-apple"
	}
	var elem = document.getElementsByClassName('icon-file');
	for (var i = elem.length - 1; i >= 0; i--) {
		var type = elem[i].dataset.type;
		elem[i].classList.add(types[type]);
	}
});