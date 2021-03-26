// 총알을 정의한다
class Bullet{
    constructor(container,src,width,height,x,y,velX,velY){
        //멤버 변수(객체와 생명을 같이하는 변수)
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //총알의 모습을 설정해본다!
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //부모요소에 부착
        this.container.appendChild(this.img);
    }
    
    tick(){//물리량 변화 (이동 값 정의)
        this.x+=this.velX;
        this.y+=this.velY;

        //나(총알)와 적군과의 충돌체크!(총알인 나와 적군은 일대다 관계)
        //화면에 존재하는 모든 적군을 대상으로 충돌검사!
        //만일 적군과 총알인 내가 충돌하게 된다면, 제거대상은 적군 뿐 아니라 나도 해당!!
        for(var i=0; i<enemyArray.length;i++){
            var hitResult=collisionCheck(this.img,enemyArray[i].img); //객체 자체는 무형의 단위일뿐 style을 가질 수 없다.
            //그 객체의 인스턴스가 가진 멤버 변수 중 우리는 img를 사용할 것임.
            if(hitResult){
                removeObject(this.container,enemyArray[i].img,enemyArray,i);//적군 없애기
                removeObject(this.container,this.img,bulletArray,bulletArray.indexOf(this));//총알 없애기
            }
        }
        
       //총알은 날아가다가, 자신이 스크린을 벗어 난다면, 자살
       //같은 html파일에 불러온 js파일이라면 js에서 다른 js 불러올 수 있다 
       //html파일 내의 변수도 호출 가능 ex)bulletArray..
       if(this.x> screen.width){
           var index=bulletArray.indexOf(this);
           removeObject(this.container,this.img,bulletArray,index); //총알배열의 크기에 변경사항 생김
       }      
    }

    render(){//그래픽 적 처리(이동값 적용)
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}