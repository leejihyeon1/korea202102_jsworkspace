// 비행기를 정의해본다~
// 비행기라는 사용자 정의 자료형을 선언!
class Plane{
    //변수,함가 올수있다!!!! (와야한다 아님!)

    //객체의 초기화는 생성자 메서드가 담당한다
    //비행기가 어떤 특성을 가지고 태어날지를 결정!
    constructor(container,src,width,height,x,y,velX,velY){
        //멤버 변수 선언 및 초기화 
        this.container=container;   //비행기가 붙을 부모 요소
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX; //주인공의 x축으로의 속도를 결정
        this.velY=velY;
        
        this.img=document.createElement("img");
        //멤버 변수를 이용한 속성 값 지정
        this.img.style.width=this.width+"px";
        this.img.style.width=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.src=this.src;

        //화면에 부착
        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;   //등속도 계속 누적
        this.y+=this.velY;

        if(this.x<=0){  //좌측 화면 밖으로 나가지 않도록 고정!
            this.x=0;
        }
        //적군과의 충돌 체크(hp감소, 적군 삭제)
        for(var i=0;i<enemyArray.length;i++){
            if(collisionCheck(this.img , enemyArray[i].img)){ 
                removeObject(this.container, enemyArray[i].img,  enemyArray, i);
                removeObject(info, hpArray[hpArray.length-1].img, hpArray ,hpArray.length-1);//나의 hp제거 
                //주인공의 에너지가 모두 소진 되었는지 .. hp배열의 길이가 0이면 소진
                if(hpArray.length==0){
                    var div=document.createElement("div");
                    div.style.fontSize="150px";
                    div.style.textAlign="center";
                    div.style.color="black";
                    div.style.fontWeight="bold";
                    div.style.height=600+"px";
                    div.innerText="GAME OVER <br><a href=\"javascript:location.reload()\">RETRY</a></br>";
                    this.container.appendChild(div);
                }
            }
        }

        //아이템을 먹으면 총알 바꾸기
        /*
        role1 : candy1.png) 무기를 미사일로 전환
        role2 : candy2.png) 적군 모두 소멸
        role3 : candy3.png) hp추가
        role4 : candy4.png) 주인공 속도 업그레이드
        */
        for(var i=0; i<itemArray.length; i++){
            if(collisionCheck(this.img,itemArray[i].img)){
                //조건은 롤을 통해 처리 가능
                 //어떤 사탕을 먹었는지를 조사
                 var itemRole=itemArray[i].itemRole;    //주인공이랑 충동할 한 아이템의  role
                removeObject(this.container,itemArray[i].img,itemArray,i);//사탕제거

                //조건은 롤을 통해 처리 가능... 어떤 사탕을 먹었는지를 조사
                switch(itemRole.role){
                    case 0 :changeWeapon();break;//무기교체
                    case 1: clearEnemy(); break;//적군소멸
                    case 2: increaseHp(); break;//hp추가
                    case 3: speedUp(); break;//속도 증가
                }
            }
        }
        

        if(this.x>=screen.width-this.width){
            this.x=screen.width-this.width;
        }
    }
    //변경된 값을 화면에 보여주기 위한 그래픽 처리(게임분야 및 그래픽 분야에서는 렌더링)
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}
