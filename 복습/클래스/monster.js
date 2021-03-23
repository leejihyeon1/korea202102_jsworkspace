class Monster{
    constructor(container,src,y,velY){  //appenChild위치, 속도
        this.y=y;   //y위치
        this.velY=velY; //y이동 속도
        this.src=src;
        this.container=container;   //appendchild할 위치

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.width=250+"px";
        this.img.style.height=250+"px";

        this.container.appendChild(this.img);

        
    }
    move(){
        this.y = this.y+this.velY; 
        this.img.style.top=this.y+"px";
    }
}
