import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function Input() {
  // 이름(name)과 가격(price) 상태를 관리하기 위한 useState
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 이름 입력 값이 변경될 때 호출되는 함수
  const nameValue = (event) => {
    setName(event.target.value);
  }

  // 가격 입력 값이 변경될 때 호출되는 함수
  const priceValue = (event) => {
    const inputText = event.target.value;
    // 숫자와 소수점 이외의 문자를 모두 제거하여 새로운 가격 값 생성
    const newPrice = inputText.replace(/[^0-9.]/g, '');

    // 숫자와 소수점만 입력되었을 때만 state 업데이트
    if (/^\d*\.?\d*$/.test(newPrice)) {
      setPrice(newPrice);
    }
  }

  // 저장 버튼 클릭 시 호출되는 함수
  const ClickButtonHandler = () => {
    // 이름과 가격이 모두 입력되지 않았을 경우 알림창 표시
    if (name.length === 0 && price.length === 0) {
      return alert('이름과 가격 모두 입력해주세요.');
    } 
    // 입력된 이름과 가격을 알림창에 표시 (가격에서 쉼표(,) 제거)
    alert(`name : ${name}, price : ${String(price).replaceAll(',', '')}`);
  }

  return (
    <>
      <h1>Input</h1>
      <InputBoxWrap>
        {/* 이름 입력란 */}
        <InputBox>
          <p>이름</p>
          <MainInput value={name} onChange={nameValue} />
        </InputBox>
        {/* 가격 입력란 */}
        <InputBox>
          <p>가격</p>
          <MainInput value={price} onChange={priceValue} placeholder='0' />
          {/* placeholder는 HTML <input> 요소에서 사용되는 속성(attribute) 중 하나입니다. 이 속성을 사용하면 입력 필드 내에 텍스트 또는 힌트를 제공 */}
        </InputBox>
        {/* 저장 버튼 */}
        <Button size={'small'} color={'primary'} onClick={ClickButtonHandler}>
          저장
        </Button>
      </InputBoxWrap>
    </>
  );
}

// 입력란을 감싸는 스타일링된 컴포넌트
const InputBoxWrap = styled.div`
  display: flex;
  gap: 20px;
`;

// 입력란과 라벨을 감싸는 스타일링된 컴포넌트
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// 입력란 스타일링
const MainInput = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default Input; 
