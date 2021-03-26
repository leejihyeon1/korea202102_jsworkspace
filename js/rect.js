class Rect{ //모자이크용 사각형 정의
    constructor(container,width,height,x,y,bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg;//배경색 

        this.init();//내 메소드 호출!
    }

    //디자인 초기화
    init(){
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.background=this.bg;
        this.div.style.border="1px solid white";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div);

        //클릭이벤트 연결
        this.div.addEventListener("click",function(){
            console.log(this,"부름?");
            this.style.opacity=0.3;//this.div는 빈 박스에 꾸며줄 때 쓴거고 this는 다 꾸며진 그 상자를 말함
            
        })
    }
}