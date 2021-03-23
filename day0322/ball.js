class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라 하고,
    //생성자 메서드의 목적인 이 객체가 인스턴스화될때, 즉 사물이
    //탄생할 때 알맞는 개성을 부여하기 위함이다!
    //공의 모습, 상태등 형용사 적인 것!! 사실은 변수 값!!
    constructor(container,color,velX,velY){
        this.container=container;//어디에 붙일지를 결정 짓지 말고, 호출자가 결정하도록!
        this.color=color;
        this.x=0;
        this.y=0;
        this.velX=velX;
        this.velY=velY;
        
        this.div=document.createElement("div");//공을 감쌀 div
        this.div.style.width=35+"px";
        this.div.style.height=35+"px";
        this.div.style.color=this.color;
        this.div.innerText="●";
        this.div.style.fontSize=35+"px";
        this.div.style.position="absolute";
        
        //div를 부모 요소에 부착!
        this.container.appendChild(this.div);
    }
    
    move(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
    }
}