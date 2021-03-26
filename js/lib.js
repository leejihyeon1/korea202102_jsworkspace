/*----------------------------------------------------
앞으로 졸업할 때까지 유용하고 재사용성이 높은 코드는 모아두자!!
나만의 라이브러리!
------------------------------------------------------- */



/*----------------------------------------------------
매개변수 n: 0~n미만까지의 랜덤한 수를 반환하는 함수
------------------------------------------------------- */
function getRandom(n){   //랜덤 값 구하기
    var r=parseInt(Math.random()*n); //0.000xxxx ~ 1 미만 사이의 난수 발생 시켜줌 수*300
    // console.log(r);
    return r;
}

/*----------------------------------------------------
게임 등에서 메모리 제거 및 화면상의 제거를 담당할 함수
container: 어떤 부모 요소에서 지울지 결정
child: 어떤 요소를 지울지
arr: 어떤 배열을 지울지
index: 해당 배열의 몇번째 요소를 지울지
------------------------------------------------------- */
function removeObject(container,child,arr,index){
    //화면에서 삭제 (부모 div로부터 제거)
    //부모 div.removeChild(지울대상 즉 자식요소)
    container.removeChild(child);

    //배열에서 삭제
    //배열.splice(몇번째 녀석? 몇개를?)
    arr.splice(index,1);
}

/*----------------------------------------------------
두 물체간, 충돌여부를 판단해주는 함수
------------------------------------------------------- */

function collisionCheck(me,you){
    var result=false; //이 함수 호출자가 최종적으로 얻어갈 논리값 (true:충돌, false:충돌X)

    var x1=parseInt(me.style.left);    //px제거
    var w1=parseInt(me.style.width);   //px제거
    var y1=parseInt((me.style.top));
    var h1=parseInt((me.style.height));

    var x2=parseInt(you.style.left);    //px제거
    var w2=parseInt(you.style.width);   //px제거
    var y2=parseInt((you.style.top));
    var h2=parseInt((you.style.height));

    var check1=(x1+w1)>=x2 && (y1+h1)>=y2 && 
                        (x1+w1)<=(x2+w2) && (y1+h1)<=(y2+h2);

    var check2=(x1+w1)>=x2 && y1<=(y2+h2) &&
                        (x1+w1)<=(x2+w2) && y1>=y2;

    var check3=x1<=(x2+w2) && y1<=(y2+h2) && 
                        x1 >=x2 && y1>=y2;

    var check4=x1<=(x2+w2) && (y1+h1)>=y2 &&
                        x1>=x2 && (y1+h1)<=(y2+h2);

    result=check1 || check2 || check3|| check4;
    return result;
}

    // //공식!
    // if((x1+w1)>=x2 && (y1+h1)>=y2 && 
    //     (x1+w1)<=(x2+w2) && (y1+h1)<=(y2+h2)){
    //     // alert("x축은 넘어서고 있네요!");
    //     console.log("좌측상단");
    //     // me.style.background="red";
    
    // }else if((x1+w1)>=x2 && y1<=(y2+h2) &&
    //             (x1+w1)<=(x2+w2) && y1>=y2){
    //     console.log("좌측하단");
    //     // me.style.background="red";    

    // }else if(x1<=(x2+w2) && y1<=(y2+h2) && 
    //             x1 >=x2 && y1>=y2){
    //     console.log("우측하단");
    //     // me.style.background="red";

    // }else if(x1<=(x2+w2) && (y1+h1)>=y2 &&
    //             x1>=x2 && (y1+h1)<=(y2+h2)){
    //     console.log("우측상단");
    //     // me.style.background="red";
    // }
