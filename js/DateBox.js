/*
달력의 셀 하난를 표현하는 사각형
일정 등록 및 날짜 표가 가능한 객체
 */
class DateBox{
    constructor(container, width, height, text, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.div.innerText=text;//인수로 넘겨받은 문자열을 div에 출력
        this.bg=bg;//배경색을 인수로 넘겨받자
        this.text;
        this.init();
    }
    init(){
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;
        this.div.style.border="1px solid red";
        this.div.style.boxSizing="border-box";
        this.div.style.float="left";    //block이니깐
        this.container.appendChild(this.div);
    
    }

    textCh(){//innerText가 안돼서 text로 갔다가 innerText로 
        this.div.innerText = this.text;
    }
}