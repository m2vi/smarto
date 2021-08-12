import styled from 'styled-components';

export const Wrapper = styled.div`
  background: '#36393f';
d`;

export const ModalWrapper = styled.div`
  background-color: #18191c;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 600px;
  min-height: 200px;
`;

export const BackgroundColor = styled.div`
  background-color: ${props => props.color};
  width: 600px;
  height: 120px;
  position: relative;
  transition: background-color 0.1s;
  outline: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -68px;
  left: 16px;
  border: 8px solid #18191c;
  background-color: #18191c;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const HeaderTop = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  left: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameTag = styled.div`
  text-rendering: optimizeLegibility;
  pointer-events: all;
  padding: 0;
  border: 0;
  font-style: inherit;
  vertical-align: baseline;
  outline: 0;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  display: block;
  user-select: text;
  white-space: normal;
  word-break: break-word;
  line-height: 24px;
  font-size: 20px;
  margin-top: 76px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-items: start;

  span {
    overflow: hidden;
    display: inline;
    vertical-align: top;
    color: #fff;
    white-space: normal;
  }

  span.discriminator {
    color: #b9bbbe;
  }
`;

export const CustomStatus = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-box-direction: normal;
  pointer-events: all;
  margin: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline;
  outline: 0;
  padding: 16px;
  font-size: 14px;
  line-height: 18px;
  color: #b9bbbe;
  border-top: 1px solid #ffffff0f;
`;

export const BotBadgeEl = styled.div`
  text-transform: uppercase;
  word-break: break-word;
  line-height: 24px;
  font-size: 0.625rem;
  text-transform: uppercase;
  -webkit-box-align: center;
  align-items: center;
  text-indent: 0;
  background: rgb(88, 101, 242);
  color: #fff;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  margin-left: 1ch;
  display: inline-flex;
  position: relative;
  height: 15px;
  padding: 0 4px;
  margin-top: 1px;
  border-radius: 3px;
  user-select: none;
`;
