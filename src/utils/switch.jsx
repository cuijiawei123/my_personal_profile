// src/Switch.js
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 0 10px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #4CAF50;
  }
  &:checked + span:before {
    transform: translateX(30px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const LanguageLabel = styled.span`
  font-size: 16px;
  color: #333;
`;

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <SwitchContainer>
      <LanguageLabel>{i18n.language === 'en' ? 'EN' : '中'}</LanguageLabel>
      <SwitchLabel>
        <SwitchInput type="checkbox" onChange={toggleLanguage} checked={i18n.language === 'zh'} />
        <SwitchSlider />
      </SwitchLabel>
      <LanguageLabel>{i18n.language === 'en' ? '中' : 'EN'}</LanguageLabel>
    </SwitchContainer>
  );
}

export default LanguageSwitch;