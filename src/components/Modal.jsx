import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function Modal() {
  // 스타일링된 컴포넌트 정의
  const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
  `;

  const Dark = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 5;
  `;

  const SmallModalWrap = styled.div`
    width: 450px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    background-color: white;
    border-radius: 8px;
  `;

  const SmallBtnWrap = styled.div`
    display: flex;
    gap: 10px;
  `;

  const LargeModalWrap = styled.div`
    width: 250px;
    height: 200px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    background-color: white;
    border-radius: 8px;
  `;

  const LargeModalBtn = styled.button`
    position: absolute;
    right: 10px;
  `;

  // 모달 상태 관리
  const [modal, setModal] = useState(false);     // 작은 모달 상태
  const [secmodal, setSecModal] = useState(false); // 큰 모달 상태

  // 작은 모달 열기/닫기 토글 함수
  const SmallToggleModal = () => {
    setModal(!modal);
  };

  // 큰 모달 열기/닫기 토글 함수
  const LargeToggleModal = () => {
    setSecModal(!secmodal);
  };

  return (
    <>
      <h1>Modal</h1>
      <ButtonWrap>
        {/* 작은 모달 열기 버튼 */}
        <Button size={'small'} color={'primary'} onClick={SmallToggleModal}>
          open modal
        </Button>
        {/* 큰 모달 열기 버튼 */}
        <Button size={'large'} color={'negative'} onClick={LargeToggleModal}>
          open modal
        </Button>
      </ButtonWrap>

      {/* 작은 모달 컴포넌트 */}
      {modal && (
        <>
          {/* 어두운 배경 */}
          <Dark></Dark>

          {/* 작은 모달 창 */}
          <SmallModalWrap>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <SmallBtnWrap>
              {/* 작은 모달 닫기 버튼 */}
              <Button size={'small'} color={'primary'} onClick={SmallToggleModal}>
                닫기
              </Button>
              {/* 작은 모달 확인 버튼 */}
              <Button size={'small'} color={'negative'}>
                확인
              </Button>
            </SmallBtnWrap>
          </SmallModalWrap>
        </>
      )}

      {/* 큰 모달 컴포넌트 */}
      {secmodal && (
        <>
          {/* 어두운 배경 (큰 모달 외부 클릭으로 모달 닫기) */}
          <Dark onClick={LargeToggleModal}></Dark>

          {/* 큰 모달 창 */}
          <LargeModalWrap>
            {/* 큰 모달 닫기 버튼 */}
            <LargeModalBtn onClick={LargeToggleModal}>X</LargeModalBtn>
            <p>닫기 버튼 1개가 있고, <br />외부 영역을 누르면 모달이 닫혀요.</p>
          </LargeModalWrap>
        </>
      )}
    </>
  );
}

export default Modal;