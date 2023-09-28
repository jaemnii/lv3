import React from 'react';
import styled from 'styled-components';
import Button from './Button'; // 버튼컴포넌트 불러오기

function Buttons() {
  // 버튼의 크기 및 색상 옵션을 정의합니다.
  const size = ['large', 'medium', 'small']; // 크기 옵션: 큰 버튼, 중간 크기 버튼, 작은 버튼
  const color = ['primary', 'negative'];      // 색상 옵션: Primary 색상, Negative 색상

  // Primary 버튼 클릭 시 실행될 함수를 정의합니다.
  const prBtnClickHandler = () => alert(`버튼을 만들어보세요!`);
  
  // Negative 버튼 클릭 시 실행될 함수를 정의합니다.
  const ngBtnClickHandler = () => prompt(`어렵나요🤔?`);

  return (
    <>
      <h1>Button</h1>
      {/* Primary 버튼 섹션 */}
      <ButtonsSection>
        <Button 
          size={size[0]} // 큰 Primary 버튼을 생성
          color={color[0]} // Primary 스타일의 색상을 적용
          onClick={prBtnClickHandler} // Primary 버튼 클릭 시 prBtnClickHandler 함수 실행
        >
          Large Primary Button
        </Button>
        <Button
          size={size[1]} // 중간 크기 Primary 버튼을 생성
          color={color[0]} // Primary 스타일의 색상을 적용
        >
          Medium
        </Button>
        <Button
          size={size[2]} // 작은 Primary 버튼을 생성
          color={color[0]} // Primary 스타일의 색상을 적용
        >
          Small
        </Button>
      </ButtonsSection>

      {/* Negative 버튼 섹션 */}
      <ButtonsSection>
        <Button
          size={size[0]} // 큰 Negative 버튼을 생성
          color={color[1]} // Negative 스타일의 색상을 적용
          onClick={ngBtnClickHandler} // Negative 버튼 클릭 시 ngBtnClickHandler 함수가 실행
        >
          Large Negative Button
        </Button>
        <Button
          size={size[1]} // 중간 크기 Negative 버튼을 생성
          color={color[1]} // Negative 스타일의 색상을 적용
        >
          Medium
        </Button>
        <Button
          size={size[2]} // 작은 Negative 버튼을 생성
          color={color[1]} // Negative 스타일의 색상을 적용
        >
          Small
        </Button>
      </ButtonsSection>
    </>
  )
}

// 버튼 스타일 설정
const ButtonsSection = styled.section`
  margin: 10px; // 주위 여백
  display: flex; // 요소를 가운데로 정렬
  flex-direction: row; // 가로로 나란히 정렬
  gap: 20px; // 내부 요소 여백
`;

export default Buttons // buttons 컴포넌트 내보내기
