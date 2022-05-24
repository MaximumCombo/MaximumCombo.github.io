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


