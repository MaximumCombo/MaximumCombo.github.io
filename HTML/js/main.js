
var module_info = [
    {name:'❖', yomi_name:'❖ サイモン simon', d_difficulty: 1, e_difficulty: 2},
    {name:'101 Dalmatians', tran_name:'101匹ワンちゃん', yomi_name:'101ぴきワンちゃん', d_difficulty: 4, e_difficulty: 3},
    {name:'3D Maze', tran_name:'3D迷路', yomi_name:'3Dめいろ', d_difficulty: 3, e_difficulty: 3},
    {name:'Adjacent Letters', tran_name:'隣接文字', yomi_name:'りんせつもじ', d_difficulty: 2, e_difficulty: 3},
    {name:'Adventure Game', tran_name:'アドベンチャーゲーム', d_difficulty: 2, e_difficulty: 3},
    {name:'Alphabet', tran_name:'アルファベット', d_difficulty: 1, e_difficulty: 1},
    {name:'Anagrams', tran_name:'アナグラム', d_difficulty: 2, e_difficulty: 1},
    {name:'Astrology', tran_name:'星占い', yomi_name:'ほしうらない', d_difficulty: 2, e_difficulty: 3},
    {name:'Battleship', tran_name:'戦艦ゲーム', yomi_name:'せんかんゲーム', d_difficulty: 3, e_difficulty: 4},
    {name:'Bitmaps', tran_name:'ビットマップ', d_difficulty: 2, e_difficulty: 2},
    {name:'Bitwise Operations', tran_name:'ビット演算', yomi_name:'ビットえんざん', d_difficulty: 1, e_difficulty: 2},
    {name:'Blind Alley', tran_name:'袋小路', yomi_name:'ふくろこうじ', d_difficulty: 1, e_difficulty: 1},
    {name:'Boolean Venn Diagram', tran_name:'論理ベン図', yomi_name:'ろんりベンず', d_difficulty: 2, e_difficulty: 4},
    {name:'Broken Buttons', tran_name:'壊れたボタン', yomi_name:'こわれたボタン', d_difficulty: 4, e_difficulty: 2},
    {name:'Caesar Cipher', tran_name:'シーザー暗号', yomi_name:'シーザーあんごう', d_difficulty: 1, e_difficulty: 1},
    {name:'Colored Squares', tran_name:'色付き格子', yomi_name:'いろつきこうし', d_difficulty: 1, e_difficulty: 1},
    {name:'Colored Switches', tran_name:'色付きスイッチ', yomi_name:'いろつきスイッチ', d_difficulty: 1, e_difficulty: 2},
    {name:'Colour Flash', tran_name:'カラーフラッシュ', d_difficulty: 3, e_difficulty: 2},
    {name:'Combination Lock', tran_name:'ダイヤルロック', d_difficulty: 1, e_difficulty: 1},
    {name:'Complicated Buttons', tran_name:'複雑ボタン', yomi_name:'ふくざつボタン', d_difficulty: 1, e_difficulty: 2},
    {name:'Connection Check', tran_name:'コネクションチェック', d_difficulty: 1, e_difficulty: 2},
    {name:'Crazy Talk', tran_name:'クレイジートーク', d_difficulty: 2, e_difficulty: 1},
    {name:'Creation', tran_name:'クリエーション', d_difficulty: 2, e_difficulty: 2},
    {name:'Cryptography', tran_name:'暗号', yomi_name:'あんごう', d_difficulty: 2, e_difficulty: 4},
    {name:'Double-Oh', tran_name:'ダブルオー', d_difficulty: 2, e_difficulty: 2},
    {name:'Emoji Math', tran_name:'絵文字算', yomi_name:'えもじさん', d_difficulty: 1, e_difficulty: 1},
    {name:'English Test', tran_name:'英語', yomi_name:'えいご', d_difficulty: 3, e_difficulty: 1},
    {name:'Fast Math', tran_name:'速算', yomi_name:'そくさん', d_difficulty: 1, e_difficulty: 3},
    {name:'FizzBuzz', tran_name:'フィズ・バズ', d_difficulty: 1, e_difficulty: 2},
    {name:'Follow the Leader', tran_name:'周回ワイヤ', yomi_name:'しゅうかいワイヤ', d_difficulty: 2, e_difficulty: 3},
    {name:'Forget Me Not', tran_name:'記録', yomi_name:'きろく', d_difficulty: 2, e_difficulty: 5, tag:'ボス'},
    {name:'Forget Me Maybe', tran_name:'記録・青', yomi_name:'きろく・あお', d_difficulty: 3, e_difficulty: 4, tag:'ボス'},
    {name:'Hexamaze', tran_name:'六角迷路', yomi_name:'ろっかくめいろ', d_difficulty: 2, e_difficulty: 4},
    {name:'Kanji', tran_name:'漢字', yomi_name:'かんじ', d_difficulty: 1, e_difficulty: 1},
    {name:'Laundry', tran_name:'洗濯', yomi_name:'せんたく', d_difficulty: 2, e_difficulty: 4},
    {name:'Letter Keys', tran_name:'文字キー', yomi_name:'もじキー', d_difficulty: 1, e_difficulty: 1},
    {name:'Light Cycle', tran_name:'ライトサイクル', d_difficulty: 3, e_difficulty: 4},
    {name:'Listening', tran_name:'リスニング', d_difficulty: 3, e_difficulty: 2},
    {name:'Mastermind', tran_name:'マスターマインド', d_difficulty: 1, e_difficulty: 1, img:'Mastermind Simple'},
    {name:'Mastermind Cruel', tran_name:'強化版マスターマインド', yomi_name:'きょうかばんマスターマインド', d_difficulty: 3, e_difficulty: 5},
    {name:'Microcontroller', tran_name:'マイクロコントローラー', d_difficulty: 2, e_difficulty: 3},
    {name:'Morsematics', tran_name:'モールス計算', yomi_name:'モールスけいさん', d_difficulty: 4, e_difficulty: 4},
    {name:'Neutralization', tran_name:'化学', yomi_name:'かがく', d_difficulty: 2, e_difficulty: 4},
    {name:'Number Pad', tran_name:'ナンバーパッド', d_difficulty: 2, e_difficulty: 3},
    {name:'Only Connect', tran_name:'オンリーコネクト', d_difficulty: 3, e_difficulty: 4},
    {name:'Piano Keys', tran_name:'ピアノ', d_difficulty: 3, e_difficulty: 2},
    {name:'Plumbing', tran_name:'パイプ', d_difficulty: 4, e_difficulty: 3},
    {name:'Probing', tran_name:'探針', yomi_name:'たんしん', d_difficulty: 3, e_difficulty: 3},
    {name:'Refill that Beer!', tran_name:'ビール', d_difficulty: 1, e_difficulty: 1, tag:'特殊モジュール'},
    {name:'Rock-Paper-Scissors-Lizard-Spock', tran_name:'拡張ジャンケン', yomi_name:'かくちょうジャンケン', d_difficulty: 2, e_difficulty: 2},
    {name:'Round Keypad', tran_name:'円形キーパッド', yomi_name:'えんけいキーパッド', d_difficulty: 2, e_difficulty: 2},
    {name:'Rubik’s Cube', tran_name:'ルービックキューブ', d_difficulty: 4, e_difficulty: 4},
    {name:'Safety Safe', tran_name:'金庫ロック', yomi_name:'きんこロック', d_difficulty: 3, e_difficulty: 3},
    {name:'Sea Shells', tran_name:'シーシェル', d_difficulty: 2, e_difficulty: 3},
    {name:'Shape Shift', tran_name:'図形変化', yomi_name:'ずけいへんげ', d_difficulty: 1, e_difficulty: 3},
    {name:'Simon Screams', tran_name:'サイモンスクリーム', d_difficulty: 2, e_difficulty: 3},
    {name:'Simon States', tran_name:'サイモンステート', d_difficulty: 2, e_difficulty: 2},
    {name:'Skewed Slots', tran_name:'ゆがんだスロット', d_difficulty: 1, e_difficulty: 3},
    {name:'Souvenir', tran_name:'クイズ', d_difficulty: 2, e_difficulty: 4, tag:'ボス'},
    {name:'Switches', tran_name:'スイッチ', d_difficulty: 1, e_difficulty: 3},
    {name:'Symbolic Password', tran_name:'記号パスワード', yomi_name:'きごうパスワード', d_difficulty: 3, e_difficulty: 2},
    {name:'The Bulb', tran_name:'電球', yomi_name:'でんきゅう', d_difficulty: 1, e_difficulty: 2},
    {name:'The Gamepad', tran_name:'ゲームパッド', d_difficulty: 1, e_difficulty: 3},
    {name:'The Square Button', tran_name:'四角いボタン', yomi_name:'しかくいボタン', d_difficulty: 2, e_difficulty: 2, img:'Square Button'},
    {name:'The Swan', tran_name:'スワン', d_difficulty: 3, e_difficulty: 4, tag:'擬似特殊モジュール'},
    {name:'Third Base', tran_name:'サードベース', d_difficulty: 4, e_difficulty: 4},
    {name:'Turn The Key', tran_name:'カギ', d_difficulty: 3, e_difficulty: 1, tag:'時間依存モジュール'},
    {name:'Turn The Keys', tran_name:'2つのカギ', d_difficulty: 3, e_difficulty: 2},
    {name:'Two Bits', tran_name:'2ビット', d_difficulty: 2, e_difficulty: 2},
    {name:'Wire Placement', tran_name:'配置ワイヤ', yomi_name:'はいちワイヤ', d_difficulty: 2, e_difficulty: 2},
    {name:'Word Scramble', tran_name:'並べ替え', yomi_name:'ならべかえ', d_difficulty: 1, e_difficulty: 2},
    {name:'Word Search', tran_name:'ワードサーチ', d_difficulty: 3, e_difficulty: 2},
    {name:'Yahtzee', tran_name:'ヤッツィー', d_difficulty: 2, e_difficulty: 3},

];

function tex_stars(a){
    let text = ""
    const star = "★"

    if (a > 5)
    {
        text = star + " " + a;
    }
    else
    {
        for(let i = a; i > 0; i--){
            text += star;
        }
    }

    return text;
}

//Code by Mimoe
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}

function insert_row_text(a, b) {
    let newRow = table.insertRow();

    let newCell = newRow.insertCell();
    let newText = document.createTextNode(a);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(b);
    newCell.appendChild(newText);
}

function insert_row(a, b){
    let newRow = table.insertRow();

    let newCell = newRow.insertCell();
    newCell.appendChild(a);

    newCell = newRow.insertCell();
    newCell.appendChild(b);
}

function Clear_All_Module(){
    //テーブルのモジュールの数
    var amount = table.rows.length - 1;
    document.getElementById('counts').innerHTML = amount;
    for(var i = 0; i < amount; i++) {
        table.deleteRow(1);
    }
    m_counts = 0;
}

function Insert_Module(info){
    let icon = document.createElement('img');
    let p_l = document.createElement('p');
    let p_r1 = document.createTextNode("解除者: " + tex_stars(info.d_difficulty));
    let p_r2 = document.createTextNode("分析者: " + tex_stars(info.e_difficulty));

    let a = document.createElement('a');
    let p_r = document.createElement('p');
    if (info.img){
        icon.src = "Icons/" + info.img + ".png"
    } else {
        icon.src = "Icons/" + info.name + ".png"
    }

    icon.href = "HTML/" + info.name + ".html"
    p_l.appendChild(icon);  
    
    a.href = "HTML/" + info.name + ".html"
    a.id = 'Module_Name'
    a.target = "_blank"
    if(info.tran_name && !info.name.includes(info.tran_name)){
        a.textContent = info.tran_name + "(" + info.name + ")"
    }
    else
    {
        a.textContent = info.name
    }
    p_l.appendChild(a)

    p_r.appendChild(p_r1);
    p_r.appendChild(document.createElement('br'));
    p_r.appendChild(p_r2);
    if(info.tag){
        var o = document.createElement("span");
        o.innerHTML = info.tag;
        o.style.cssText = "color: #ff0000";
        p_r.appendChild(document.createElement('br'));
        p_r.appendChild(o);
    }

    insert_row(p_l, p_r)
    m_counts++;
}

function Insert_All_Module(){
    module_info.forEach(function(item){
        Insert_Module(item);
    })

    document.getElementById('counts').innerHTML = m_counts;
}

function Insert_Certen_Module(target_name){
    target_name = kanaToHira(target_name.toLowerCase());
    module_info.forEach(function(item){
        if(item.name.toLowerCase().indexOf(target_name) != -1
         || (item.tran_name && kanaToHira(item.tran_name).indexOf(target_name) != -1)
         || (item.yomi_name && kanaToHira(item.yomi_name).indexOf(target_name) != -1)
        ){
            Insert_Module(item);
        }
    })

    document.getElementById('counts').innerHTML = m_counts;
}
//-----------------------------------------------------------------------------------------------------------
//Entry Point -----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
var table = document.getElementById('table');
var table_c = document.getElementById('table_contents');
var m_counts = 0;
var search = document.querySelector(`input[name='module']`);

module_info.sort(function(a,b){
    var a_comp;
    var b_comp;
    if (a.yomi_name) a_comp = kanaToHira(a.yomi_name); else a_comp = kanaToHira(a.tran_name);
    if (b.yomi_name) b_comp = kanaToHira(b.yomi_name); else b_comp = kanaToHira(b.tran_name);

    if (a_comp > b_comp) return 1;
    else return -1;
})



Insert_All_Module();

search.addEventListener('keyup', function () {
    if(search.value != null && search.value != ''){
	    Clear_All_Module();
        Insert_Certen_Module(search.value);
    }
    else
    {
	    Clear_All_Module();
        Insert_All_Module();
    }
});


