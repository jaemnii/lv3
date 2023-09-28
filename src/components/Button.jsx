import React from 'react';
import styled from 'styled-components';

// Button 컴포넌트


function Button({ size, color, icon, onClick, children }) {
  // 스타일드 컴포넌트 사용
  const Button = styled.div`
    ${() => colorHandler(color)}; // 색상설정
    ${() => sizeHandler(size)};   // 크기설정
    border-radius: 10px;          // 모서리 둥글게 
    display: flex;                // 가로정렬
    justify-content: center;      // 수평정렬
    align-items: center;          // 수직정렬
    font-size: 13px;              // 폰트크기.
    cursor: pointer;              // 커서스타일을 포인터로
    &:active {                    // 클릭시 활성상태
      filter: brightness(70%);    // 밝기를 70%로 줄여 클릭 시 어둡게 표시합니다.
    }
  `;
  
  // colorHandler 함수는 color 매개변수에 따라 버튼의 색상 스타일을 설정합니다.
  const colorHandler = (color) => {
    switch (color) {
      case 'primary':
        return `border: 3px solid #55EFC4; background-color: #55EFC4`; // Primary 버튼 스타일
      case 'negative':
        return `border: 3px solid #FAB1A0; color: #D63031; background-color: #FAB1A0`; // Negative 버튼 스타일
    }
  };

  // sizeHandler 함수는 size 매개변수에 따라 버튼의 크기 스타일을 설정합니다.
  const sizeHandler = (size) => {
    switch (size) {
      case 'large':
        return `width: 185px; height: 45px; background-color: white; font-weight: bold;`; // 큰 버튼 스타일
      case 'medium':
        return `width: 120px; height: 40px;`; // 중간 크기 버튼 스타일
      case 'small':
        return `width: 90px; height: 35px;`;  // 작은 버튼 스타일
    }
  };

  return (
    <>
      {/* 버튼을 렌더링하고 클릭 이벤트를 처리할 수 있도록 설정. */}
      <Button onClick={onClick}>
        {children}&nbsp;{icon}
      </Button>
    </>
  );
}

export default Button; 