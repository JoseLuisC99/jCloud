window.addEventListener('load',function(){
	var buttons = document.getElementsByClassName('menu-file-button');
	var btnInfo = document.getElementsByClassName('info-file');
	var btnLink = document.getElementsByClassName('link-file');
	var open = false;
	for(var i = buttons.length - 1; i >= 0; i--){
		buttons[i].addEventListener('click',function(){
			if(open){
				var menus = document.getElementsByClassName('menu-file');
				for(var i = menus.length - 1; i >= 0; i--) {
					menus[i].style.display = 'none';
				}
				open = false;
			}else{
				var menu = this.children[1];
				menu.style.display = 'inline-block';
				open = true;
			}
		});
	}
	for(var i = btnInfo.length - 1; i >= 0; i--){
		btnInfo[i].addEventListener("click",function(){
			var info = CreateInfo(this.dataset);
			document.getElementsByTagName('main')[0].appendChild(info);
		});
	}
	for(var i = btnLink.length - 1; i >= 0; i--) {
		btnLink[i].addEventListener('click',function(){
			var links = CreateLink(this.dataset);
			document.getElementsByTagName('main')[0].appendChild(links);
		});
	}
});

function CreateInfo(information){
	var content = document.createElement('div');
	content.classList.add('menu-file-content');

	var style = document.createElement('div');
	style.classList.add('new_style_form');
	style.classList.add('row');

	var icon = document.createElement('div');
	icon.classList.add('col');
	icon.classList.add('m4');
	icon.classList.add('s12');
	icon.classList.add('icon-type-file');

	var image = document.createElement('span');
	image.classList.add('fa');
	image.classList.add('fa-file');

	var info = document.createElement('div');
	info.classList.add('col');
	info.classList.add('m8');
	info.classList.add('s12');

	var close = document.createElement('button');
	close.classList.add('btn');
	close.classList.add('btn-floating');
	close.classList.add('close-menu');

	var cross = document.createElement('span');
	cross.classList.add('fa');
	cross.classList.add('fa-times');

	var row1 = document.createElement('div');
	row1.classList.add('row');

	var p1 = document.createElement('p');
	p1.classList.add('col');
	p1.classList.add('s12');

	var nameLabel = document.createElement('span');
	nameLabel.style.display = 'block';
	nameLabel.classList.add('grey-text');
	nameLabel.innerHTML = 'Nombre:';

	var name = document.createElement('span');
	name.innerHTML = information.name;

	var row2 = document.createElement('p');
	row2.classList.add('row');

	var p2 = document.createElement('div');
	p2.classList.add('col');
	p2.classList.add('s6');

	var sizeLabel = document.createElement('span');
	sizeLabel.classList.add('grey-text');
	sizeLabel.style.display = 'block';
	sizeLabel.innerHTML = 'Tamaño:';

	var size = document.createElement('span');
	size.innerHTML = information.size + "B";

	var p3 = document.createElement('div');
	p3.classList.add('col');
	p3.classList.add('s6');

	var lastLabel = document.createElement('span');
	lastLabel.classList.add('grey-text');
	lastLabel.style.display = 'block';
	lastLabel.innerHTML = 'Última modificación:';

	var last = document.createElement('div');
	last.innerHTML = information.last;

	var p4 = document.createElement('p');
	p4.classList.add('col');
	p4.classList.add('s12');

	var createLabel = document.createElement('span');
	createLabel.style.display = 'block';
	createLabel.classList.add('grey-text');
	createLabel.innerHTML = "Creada:";

	var create = document.createElement('span');
	create.innerHTML = information.date;

	icon.appendChild(image);
	style.appendChild(icon);

	p1.appendChild(nameLabel);
	p1.appendChild(name);

	p2.appendChild(sizeLabel);
	p2.appendChild(size);
	p3.appendChild(lastLabel);
	p3.appendChild(last);
	p4.appendChild(createLabel);
	p4.appendChild(create);

	row2.appendChild(p2);
	row2.appendChild(p3);

	row1.appendChild(p1);
	row1.appendChild(row2);
	row1.appendChild(p4);
	close.appendChild(cross);
	info.appendChild(close);
	info.appendChild(row1);
	style.appendChild(info);

	content.appendChild(style);

	close.addEventListener('click',function(){
		content.parentElement.removeChild(content);
	});

	return content;
}

function CreateLink(information){
	var file = information.file;
	var key = information.key;
	var content = document.createElement('div');
	content.classList.add('menu-file-content');

	var style = document.createElement('div');
	style.classList.add('new_style_form');
	style.classList.add('row');

	var col1 = document.createElement('div');
	col1.classList.add('col');
	col1.classList.add('s12');

	var close = document.createElement('button');
	close.classList.add('btn');
	close.classList.add('btn-floating');
	close.classList.add('close-menu');

	var cross = document.createElement('span');
	cross.classList.add('fa');
	cross.classList.add('fa-times');

	var title = document.createElement('p');
	title.classList.add('medium-text');
	title.classList.add('center-align');
	title.innerHTML = "Exportar los enlaces de los archivos";

	var row1 = document.createElement('div');
	row1.classList.add('row');

	var col2 = document.createElement('div');
	col2.classList.add('col');
	col2.classList.add('s12');

	var title2 = document.createElement('p');
	title2.classList.add('no-margin');
	title2.innerHTML = "Exportar:";

	var btn1 = document.createElement('button');
	btn1.classList.add('btn');
	btn1.classList.add('btn-exports');

	var img1 = document.createElement('span');
	img1.classList.add('fa');
	img1.classList.add('fa-lock');
	img1.style.paddingRight = '5px';
	btn1.appendChild(img1);
	btn1.innerHTML += "Enlace sin clave";

	var btn2 = document.createElement('button');
	btn2.classList.add('btn');
	btn2.classList.add('btn-exports');

	var img2 = document.createElement('span');
	img2.classList.add('fa');
	img2.classList.add('fa-key');
	img2.style.paddingRight = '5px';
	btn2.appendChild(img2);
	btn2.innerHTML += "Clave de cifrado";

	var btn3 = document.createElement('button');
	btn3.classList.add('btn');
	btn3.classList.add('btn-exports');
	btn3.style.float = 'right';

	var img3 = document.createElement('span');
	img3.classList.add('fa');
	img3.classList.add('fa-unlock-alt');
	img3.style.paddingRight = '5px';
	btn3.appendChild(img3);
	btn3.innerHTML += "Enlace con clave";

	var col3 = document.createElement('div');
	col3.classList.add('col');
	col3.classList.add('s12');

	var links = document.createElement('div');
	links.setAttribute('id','Links');

	var col4 = document.createElement('div');
	col4.classList.add('col');
	col4.classList.add('s3');

	var fileIcon = document.createElement('span');
	fileIcon.classList.add('fa');
	fileIcon.classList.add('fa-file');
	fileIcon.classList.add('grey-text');
	fileIcon.classList.add('small-icon');

	var col5 = document.createElement('div');
	col5.classList.add('col');
	col5.classList.add('s9');

	var row2 = document.createElement('div');
	row2.classList.add('row');

	var col6 = document.createElement('div');
	col6.classList.add('col');
	col6.classList.add('s12');

	var spec1 = document.createElement('span');
	spec1.classList.add('label-link');

	var b = document.createElement('b');
	b.innerHTML = information.name; // AQUI VA EL NOMBRE
	spec1.appendChild(b);

	var spec2 = document.createElement('span');
	spec2.classList.add('label-link');
	spec2.innerHTML = information.size + "B"; // AQUI VA EL TAMAÑO

	var col7 = document.createElement('div');
	col7.classList.add('col');
	col7.classList.add('s12');

	var input = document.createElement('input');
	input.setAttribute('id','link');
	input.setAttribute('disabled','disabled');

	var col8 = document.createElement('div');
	col8.classList.add('col');
	col8.classList.add('s12');

	var copy = document.createElement('button');
	copy.classList.add('btn');
	copy.classList.add('transparent');
	copy.classList.add('grey-text');
	copy.classList.add('right');
	copy.innerHTML = "Copiar";

	col7.appendChild(input);
	col8.appendChild(copy);

	col6.appendChild(spec1);
	col6.appendChild(spec2);

	row2.appendChild(col6);
	row2.appendChild(col7);
	col5.appendChild(row2);

	col2.appendChild(title2);
	col2.appendChild(btn1)
	col2.appendChild(btn2);
	col2.appendChild(btn3);

	col4.appendChild(fileIcon);
	links.appendChild(col4);
	links.appendChild(col5);
	links.appendChild(col8);

	col3.appendChild(links);

	row1.appendChild(col2);
	row1.appendChild(col3);

	close.appendChild(cross);
	col1.appendChild(close);
	col1.appendChild(title);
	col1.appendChild(row1);
	style.appendChild(col1);
	content.appendChild(style);

	close.addEventListener('click',function(){
		content.parentElement.removeChild(content);
	});

	input.value = "http://localhost:8080/downloads/" + file;

	btn1.addEventListener('click',function(){
		input.value = "http://localhost:8080/downloads/" + file;
	});
	btn2.addEventListener('click',function(){
		input.value = key;
	});
	btn3.addEventListener('click',function(){
		input.value = "http://localhost:8080/downloads/" + file + "/" + key;
	});

	return content;
}