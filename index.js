var yScreen = document.body.clientHeight;
var big_bg =document.getElementById('big_bg');

Calender();

function Calender() {
    var tb = document.getElementById('tb');
    var header = document.getElementById('header');
    var ul = tb.getElementsByTagName('ul')[1];
    var select_1 = document.getElementById('select_1');
    var select_2 = document.getElementById('select_2');
    var now =new Date();
    var nowYear =now.getFullYear();
    var nowMouth =now.getMonth()+1;
    changeValue();
    createSelect();
    function createCalender(_year,_mouth) {
        var date =new Date(_year,_mouth-1,1);
        var now = new Date();
        var nowdate = now.getDate();
        var row =getRow(_year,_mouth);
        var week =date.getDay();
        var days = new Date(_year,_mouth,0).getDate();
        for(var i=0;i<row;i++){
            for(var j = 0;j < 7;j++){
                var li = document.createElement('li');

                if( j< week && i === 0){
                    li.innerHTML =' ';
                }else{
                    if((i*7+j+1)-week<=days){
                        li.innerHTML =(i*7+j+1)-week;
                    }
                }
                if((i*7+j+1)-week == nowdate && now.getMonth()+1 == _mouth&&now.getFullYear() ==_year){

                    li.style.backgroundColor = 'orange';
                    li.style.color = '#fff';
                }
                ul.appendChild(li);
            }
        }
    }
    function getRow(_year,_mouth) {
        var date =new Date(_year,_mouth-1,1);
        var week =date.getDay();
        var days = new Date(_year,_mouth,0).getDate();
        var str =Math.ceil((days+week)/7);
        return str;
    }
    function createSelect() {
        var now =new Date();
        for(var i=1995;i<=2050;i++){
            var options_year = document.createElement('option');
            options_year.innerHTML = i;
            select_1.appendChild(options_year);
        }
        for(var j =1;j<=12;j++){
            var options_mouth = document.createElement('option');
            options_mouth.innerHTML = j+'月';
            select_2.appendChild(options_mouth);
        }
        select_1.value =now.getFullYear();
        select_2.value =now.getMonth()+1+'月';
    }
    function changeValue() {
        createCalender(nowYear,nowMouth);
        var value;
        select_1.onchange = function () {
            removeUlchild();
            value = select_2.selectedIndex+1;
            createCalender(this.value,value);
        }
        select_2.onchange = function () {
            removeUlchild();
            value = select_2.selectedIndex+1;
            createCalender(select_1.value,value);

        }
    }
    function removeUlchild() {
        while(ul.hasChildNodes()){
            ul.removeChild(ul.lastChild);
        }
    }
}
