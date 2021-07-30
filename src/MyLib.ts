	/*
define("REFERER_MUST_START", "http://(local\.)?shogitter\.com/");
define("DB_USER_TABLE", "chatuser");
define("DB_LOG_TABLE", "chat");
define("LOG_MAX", 30);
define("LOG_DEFAULT", 30);
define("DELETE_SPAN", 60);
define("JS_INCLUDE_POSTFIX", "20131029");
	 */

	/*
function logRoom(roomid, data){
	global db;

	if(count(data['kifu'])<=1) return false;
	unset(data['debug'], data['system']);
	
	data['date']['log'] = new MongoDate();
	newdoc = array(
		'roomid': roomid,
		'data': data,
		'tesuu': count(data['kifu'])-1
	);
	autoincrement=db.command(array('findAndModify': 'autoincrement',
									  'query': array('_id': "result"),
									  'update': array('inc': array('next': 1))));
	newdoc['_id']=autoincrement['value']['next'];
	db.result.save(newdoc);
	db.room.update(array('_id': roomid), array('set': array('logged': true)));
	comment(roomid, "棋譜ログに格納されました． http://shogitter.com/kifu/{autoincrement['value']['next']}");
	return true;
	/*
	doc = db.room.findOne(array('_id': roomid));
	if(!doc){
		return false;
	}
	if(doc['logged']) return false;
	if(count(doc['data']['kifu'])==0) return false;
	unset(doc['data']['debug'], doc['data']['system'], doc['logged']);
	
	doc['data']['date']['log'] = new MongoDate();
	newdoc = array(
		'_id': resultid,
		'roomid': roomid,
		'data': doc['data'],
		'tesuu': count(doc['data']['kifu'])-1
	);
	autoincrement=db.command(array('findAndModify': 'autoincrement',
									  'query': array('_id': "result"),
									  'update': array('inc': array('next': 1))));
	newdoc['_id']=autoincrement['value']['next'];
	db.result.save(newdoc);
	db.room.update(array('_id': roomid), array('set': array('logged': true)));
	comment(roomid, "棋譜ログに格納されました． http://shogitter.com/kifu/{autoincrement['value']['next']}");
	return true;
	 * 
	 * /
	/*
	chatcursor = db.chat.find(array('room': roomid)).sort(array('date': -1));
	lines = array();
	foreach(chatcursor as chat){
		line = array();
		if(chat['twitterid']){
			line['user']=array(
				'id': chat['twitterid'],
				'name': chat['username']
			);
		}
		line['comment']=chat['comment'];
		line['date']=chat['date'];
		lines[]=line;
	}
	doc['chat']=lines;
	 * 
	 * /
}
	
mergeBits(array){
	ret=0;
	foreach(array as value){
		ret=(ret<<value[0])|value[1];
	}
	return ret;
}

extractBits(bits, array, bitlength=64){
	maxbit=64;
	ret=array();
	left=maxbit-bitlength;
	foreach(array as value){
//		ret[]=((bits<<left)>>(maxbit-value));
		ret[]=((((bits<<left)>>1)&~(1<<63))>>(maxbit-value-1));
		left+=value;
	}
	return ret;
}

binstringify(int, length){
	return sprintf("%0{length}s", decbin(int?int:0));
}

binhex(string){
	arr="0123456789ABCDEF";
	
	if(num=strlen(string)%4){
		for(i=num;i<4;i++){
			string.="0";
		}
	}
	while(str=substr(string, 0, 4)){
		ret.=arr[bindec(str)];
		string=substr(string, 4);
	}
	return ret;
}

bin64(string){
	arr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
	if(num=strlen(string)%6){
		for(i=num;i<6;i++){
			string.="0";
		}
	}
	while(str=substr(string, 0, 6)){
		ret.=arr[bindec(str)];
		string=substr(string, 6);
	}
	return ret;
}*/
/**
 * ヘッダ(Content-type)を出力
 */
/*
printHeader(){
	header("Content-Type: text/plain; charset=UTF-8");
	header("Access-Control-Allow-Origin: *");
}

/**
 * フッタを表示(処理時間表示)
 * @global <type> start
 */
/*
printFooter(){
	global start;
	// 処理終了時刻から開始時刻を引いて「処理時間」算出
	elapsed = getmicrotime() - start;
	// 処理時間を整形して表示
	printf(" <small>(処理時間： %f 秒)</small><br>", elapsed);
}
*/
/**
 * エラーを出力して終了(Exceptionオブジェクトを元にして)
 * @param <type> message
 */
/*
printError(e){
	message=e.getMessage().(e.getCode()==0?"":e.getTraceAsString());
//	message=e.getMessage().e.getTraceAsString();
	type=e.getCode();
	printErrorByString(message, type);
}
*/
/**
 * エラーを出力して終了(テキストを元にして)
 * @param <type> message
 * @param <type> type
 */
/*
printErrorByString(message, type=null){
	printHeader();

	switch(type){
		case 1:
			arr['error']="内部エラー! ".message."(このメッセージが出た場合は、棋譜をxml形式で保存した上、管理者に知らせてください。)";
			break;
		default:
			arr['error']=message;
			break;
	}
	echo json_encode(arr);
//	printFooter();
	exit;
}
*/
/**
 * 半角数字を漢数字に変換する（位取り記法）
 * @param	  instr 半角数字
 *		小数、負数に対応；指数表記には未対応
 *		カンマは削除
 * @return	string 漢数字
*/
export function num2kan_decimal(instr: string | number) {
	instr = instr.toString();
	const kantbl1: {[num: string]: string} = {0: '', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', '.': '．', '-': '－'};
	const kantbl2: {[num: string]: string} = {0: '', 1: '十', 2: '百', 3: '千'};
	const kantbl3: {[num: string]: string} = {0: '' , 1: '万', 2: '億', 3: '兆', 4: '京'};

	let outstr = '';
	const len = instr.length;
	const m = Math.floor(len / 4);
	//一、万、億、兆‥‥の繰り返し
	for (let i = 0; i <= m; i++) {
		let s2 = '';
		//一、十、百、千の繰り返し
		for (let j = 0; j < 4; j++) {
			const pos = len - i * 4 - j - 1;
			if (pos >= 0) {
				const ch  = instr.substr(pos, 1);
				const ch1 = kantbl1[ch] || '';
				const ch2 = kantbl2[j]|| '';
				//冒頭が「一」の場合の処理
				if (ch1 != '') {
					if (ch1 == '一' && ch2 != '') s2 = ch2 + s2;
					else							s2 = ch1 + ch2 + s2;
				}
			}
		}
		if (s2 != '')	outstr = s2 + kantbl3[i] + outstr;
	}

	return outstr;
}

/**
 * ２者のレートを元に変動レートを計算する
 */
/*
calcRating(winrate, loserate){
	delta=(int)(16+(loserate-winrate)*0.04);
	if(delta<1){
		delta=1;
	}else if(delta>31){
		delta=31;
	}
	return delta;
}
/**
 * レーティングを元に段級を返す
 */
	/*
rate2dankyu(rate){
	switch(1){
		case rate>=2900:
			return "八段";
		case rate>=2700:
			return "七段";
		case rate>=2500:
			return "六段";
		case rate>=2300:
			return "五段";
		case rate>=2100:
			return "四段";
		case rate>=1900:
			return "三段";
		case rate>=1700:
			return "二段";
		case rate>=1550:
			return "初段";
		case rate>=1450:
			return "1級";
		case rate>=1350:
			return "2級";
		case rate>=1250:
			return "3級";
		case rate>=1150:
			return "4級";
		case rate>=1050:
			return "5級";
		case rate>=950:
			return "6級";
		case rate>=850:
			return "7級";
		case rate>=750:
			return "8級";
		case rate>=650:
			return "9級";
		case rate>=550:
			return "10級";
		case rate>=450:
			return "11級";
		case rate>=350:
			return "12級";
		case rate>=250:
			return "13級";
		case rate>=150:
			return "14級";
		case rate>=50:
			return "15級";
		default:
			return "初心者";
	}
}

/**
 * radiusデザインを含めてエラーを表示して終了する
 */
	/*
die2(message){
	echo "<div class='radius'>{message}</div>";
	printFooterHTML();
	exit;
}

tweet(twitterid, text, async){
	if(_SERVER["SERVER_NAME"]!="shogitter.com"){
		text="test: ".text;
		//return;
	}
	return pushNode("tweet",array('twitterid': twitterid,
								  'comment': text,
								  'async': async));
}
botTweet(text, async=false){
	if(_SERVER["SERVER_NAME"]!="shogitter.com"){
		text="@null test: ".text;
	}
	return pushNode("tweet",array('twitterid': 'bot',
								  'comment': text,
								  'async': async));
}

/**
 * チャットにコメントする
 * @global type conn
 * @param type twitterid
 * @param type roomid
 * @param type comment 
 */
	/*
comment(roomid, comment){
	return pushNode("chat",array('roomid': roomid,
								 'comment': comment));
}

post(server, port, path, data){
/*	hoge=rand(1,10000);
	fh=fopen("file.txt","a");
	fwrite(fh,"{path} (hoge) ".var_export(data,true)."\n");
	fclose(fh);
* /
	
    ch = curl_init("http://".server.":".port.path);
    curl_setopt(ch, CURLOPT_POST, 1);
    curl_setopt(ch, CURLOPT_POSTFIELDS, http_build_query(data, '', '&'));
    curl_setopt(ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt(ch, CURLOPT_HEADER, 1);
	
    ret=curl_exec(ch);
	
    curl_close(ch);
/*	
	fh=fopen("file.txt","a");
	fwrite(fh,"{path} (hoge) returned\n");
	fclose(fh);
* /
	return ret;
}
postNode(path, data){
	return post(Setting.node_host, Setting.node_port, path, data);
}
pushNode(mode, data){
	data['key']=Setting.node_pusher_key;
	return postNode("/pusher/".mode, data);
}

addNotification(roomid, username, DateTime date, tesuu=null){
	global db;
	db.notification.insert(array(
		'room': roomid,
		'date': new MongoDate(date.getTimestamp()),
		'username': username,
		'tesuu': tesuu,
	));
}
removeNotification(roomid, username=null){
	global db;
	criteria = array('room': roomid);
	if(username!==null){
		criteria['username']=username;
	}
	db.notification.remove(criteria);
}
*/