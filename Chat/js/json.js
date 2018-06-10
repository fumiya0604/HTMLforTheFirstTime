function appendText(form){
	var room = document.getElementById('room');  //idからdivを取得
	var map = new Map();                         //Mapを生成
	
	var name = form.name.value;                  //nameの中身を取得
	
	var content = form.content.value;            //contentの中身を取得
	
	map.set('name', name);                       //入力値をJSON形式に変換
	map.set('content', content);
	
	var toJson = JSON.stringify([...map]);       //JSONに変換する
	
	console.log(toJson + 'がJSON形式');
	
	var toJs = JSON.parse(toJson);               //JavaScriptにパースする
	console.log(toJs + 'がパースして戻した結果');
	
	var text = document.createElement('div');    //新しくdivタグを作成する
	if(name == 'ひろと'){
		text.setAttribute('class', 'red');
	}else if(name == 'ふみや'){
		text.setAttribute('class', 'blue');
	}
	
	
	if(name != ""){  //nameが入力されていたら
		text.innerHTML = name + ' : ' + content;  //入力された文字を作成したdivタグのセットする
	}
	
	room.appendChild(text);                       //元のdivに新で作成したdivを子要素としてappend(追加)する
	
}