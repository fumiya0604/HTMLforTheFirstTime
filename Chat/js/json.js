function appendText(form){
	var room = document.getElementById('room');  //id����div���擾
	var map = new Map();                         //Map�𐶐�
	
	var name = form.name.value;                  //name�̒��g���擾
	
	var content = form.content.value;            //content�̒��g���擾
	
	map.set('name', name);                       //���͒l��JSON�`���ɕϊ�
	map.set('content', content);
	
	var toJson = JSON.stringify([...map]);       //JSON�ɕϊ�����
	
	console.log(toJson + '��JSON�`��');
	
	var toJs = JSON.parse(toJson);               //JavaScript�Ƀp�[�X����
	console.log(toJs + '���p�[�X���Ė߂�������');
	
	var text = document.createElement('div');    //�V����div�^�O���쐬����
	if(name == '�Ђ��'){
		text.setAttribute('class', 'red');
	}else if(name == '�ӂ݂�'){
		text.setAttribute('class', 'blue');
	}
	
	
	if(name != ""){  //name�����͂���Ă�����
		text.innerHTML = name + ' : ' + content;  //���͂��ꂽ�������쐬����div�^�O�̃Z�b�g����
	}
	
	room.appendChild(text);                       //����div�ɐV�ō쐬����div���q�v�f�Ƃ���append(�ǉ�)����
	
}