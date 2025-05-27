# Likelion_13th
## <Assignment1>
### 김지훈

- **전공**: 글로벌SW융합전공  
- **학번**: 2020114744  
- **파트**: Front-end  
- **취미**:  
  - 기록 (일기)  
  - 운동 (헬스, 런닝)  
  - 음악 감상 (Coldplay, Maroon 5)

> **각오 한 마디**  
> 모든 건 마음먹기에 달렸다고 생각합니다.  
> 실력적으로 뛰어나지는 않지만 폐를 끼치지 않도록  
> 모든 활동에 최선을 다해 임하겠습니다.

## <Assignment2>
## 1. 실행 컨텍스트 실험 로그 + 해석

```js
console.log(a);
var a = 10;
function outer() {
    console.log("바깥 1");
    function inner() {
        console.log('안의 함수');
    }
    inner();
    console.log("바깥 2");
}
outer();
```

### 결과
```
undefined
바깥 1
안의 함수
바깥 2
```

### 해석
- 첫 줄 `console.log(a)`는 변수 선언 전에 실행되므로 `undefined` 출력 (변수 호이스팅).
- `outer` 함수 실행 시 순차적으로 내부 출력이 발생.
- `inner` 함수는 `outer`의 실행 컨텍스트 내에서 선언되고 호출되어 `안의 함수`를 출력.

---

## 2. `this` 실험 결과 비교

```html
<button onClick={function () { console.log(this) }}>버튼1</button>
<button onClick={() => console.log(this)}>버튼2</button>
```

위 코드 JS로 직접 구현.

```js
const btn1 = document.createElement('button');
btn1.innerText = '버튼1';
btn1.onclick = function () { console.log('버튼1 this:', this); };
document.body.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.innerText = '버튼2';
btn2.onclick = () => { console.log('버튼2 this:', this); };
document.body.appendChild(btn2);
```

### 결과
- 버튼1: `this`는 해당 버튼 요소 자체를 가리킴.
- 버튼2: 화살표 함수는 자신만의 `this`를 가지지 않으므로 상위 스코프인 전역 객체 (`window`)를 가리킴.

---

## 3. DOM 조작 방법 설명

```js
const scrollBtn = document.createElement('button');
scrollBtn.innerText = 'Todo로 스크롤';
scrollBtn.onclick = () => {
  document.getElementById('todo-input').scrollIntoView({ behavior: 'smooth' });
};
document.body.appendChild(scrollBtn);
```

- `document.createElement()`로 버튼을 생성하고 `appendChild()`로 DOM에 삽입.
- `scrollIntoView()` 메서드로 특정 요소(`#todo-input`)로 스크롤 이동.

---

## 4. 사용한 조건부 스타일 / theme 적용 방식
li.className = todo.completed ? 'completed' : '';
- 완료된 항목에 `.completed` 클래스를 부여해 완료 표시 스타일을 적용
- styled-components의 `props` 기반 조건부 스타일과 비슷하게 동작