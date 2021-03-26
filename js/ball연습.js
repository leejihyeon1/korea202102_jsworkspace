class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라 하고,
    //생성자 메서드의 목적인 이 객체가 인스턴스화될때, 즉 사물이
    //탄생할 때 알맞는 개성을 부여하기 위함이다!
    //공의 모습, 상태등 형용사 적인 것!! 사실은 변수 값!!
    constructor(container,color,width, height,velX,velY){
        //객체와 함께 살아감.. 즉 객체가 죽을 때 같이 죽음 
        //따라서 this로 명시된 객체가 보유한 변수를 가리켜
        //멤버 변수라 한다!
        this.container=container;//어디에 붙일지를 결정 짓지 말고, 호출자가 결정하도록!
        this.color=color;
        this.x=0;
        this.y=0;
        this.width=width;
        this.height=height;
        this.velX=velX;//좌우 결정
        this.velY=velY;//상하 결정
        this.limitX=parseInt(this.container.style.width);//공의 x축 한계점
        this.limitY=parseInt(this.container.style.height);//공의 y축 한계점

        
        this.div=document.createElement("div");//공을 감쌀 div
        this.div.innerText="●";
        this.div.style.color=this.color;
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        
        //div를 부모 요소에 부착!
        this.container.appendChild(this.div);
    }
    
    move(){//공의 동작
        this.x=this. x+ this.velX;  //10씩 증가하는 등속도 운동
        this.y=this.y+this.velY;   //10씩 증가하는 등속도 운동

        //경계에 다다르면..
        if(this.y>=this.limitY-this.height || this.y<=0){//밑바닥에 도달하면(머리쪽 기준이기 때문에 높이만큼 빼줘야함)
            this.velY*=-1;  //-1을 곱하면 부호가 바뀌기 때문 !
        }else if(this.x>=this.limitX-this.height || this.x<=0){
            this.velX*=-1
        }

        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
    }
}