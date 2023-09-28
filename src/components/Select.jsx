import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Select() {
  const languageList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [language, setLanguage] = useState('리액트');
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => setShowList(!showList);
  const liClickHandler = (index) => {
    setLanguage(languageList[index]);
    toggleShowList();
  };

  const selectWrapRef = useRef();
  useEffect(() => {
    const clickListOutside = (e) => {
      if (selectWrapRef.current && !selectWrapRef.current.contains(e.target)) {
        toggleShowList();
      }
    };
    document.addEventListener('mousedown', clickListOutside);
    return () => {
      document.removeEventListener('mousedown', clickListOutside);
    };
  }, []);

  return (
    <>
      <Wrap>
      <h1>Select</h1>
        <SelectButton
          onClick={toggleShowList}
        >
          {language}
        </SelectButton>
        {
          showList &&
          <div
            ref={selectWrapRef}
          >
            <LanguageUl>
            {
              languageList.map((item, index) => {
                return (
                  <LanguageLi
                    key={index}
                    onClick={() => liClickHandler(index)}
                  >
                    { item }
                  </LanguageLi>
                )
              })
            }
            </LanguageUl>
          </div>
        }
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  border: 3px solid lightgrey;
  margin-top: 30px;
  overflow: hidden;
`;

const SelectButton = styled.button`
  width: 245px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
`;

const LanguageUl = styled.ul`
  width: 245px;
  height: 40px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  position: absolute;
  `;

const LanguageLi = styled.li`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
    border-radius: 5px;
  }
  &:first-child {
    border-top: 1px solid lightgrey;
    border-radius: 5px;
  }
  &:last-child {
    border-bottom: 1px solid lightgrey;
    border-radius: 5px;
  }
`;

export default Select