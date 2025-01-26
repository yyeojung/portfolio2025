import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import styled from 'styled-components';
import VioletBox from 'components/VioletBox';
import lgdms from '../assets/image/lgdms.png';
import highlearning from '../assets/image/highlearning.png';

const Wrap = styled.div`
  .box_wrap {
    display: flex;
    margin-top: 10rem;
    gap: 4rem;

    .violet_box {
      width: calc((100% - 8rem) / 3);
    }
  }
`;

export default function CompanyProject() {
  return (
    <Wrap>
      <div className='title'>
        <Tag className='red ml_20' text='LEVEL 2' />
        <SubTitle className='sub' text='COMPANY PROJECT' />
      </div>
      <div className='box_wrap'>
        <VioletBox text='LGU+ DMS, CAS BO' link='https://www.google.com'>
          <img src={lgdms} alt='lgdms' />
          <div className='mt_10 skill'>
            <span>vue.js</span>
            <span>bootstrap</span>
            <span>tagify</span>
            <span>v-calendar</span>
          </div>
          <p className='mt_10'>
            - 신규 프로젝트 vue.js 최초 도입
            <br />
            - 공통 스타일 가이드 제작 및 구조 문서화
            <br />- 반복적으로 사용되는 기능을 커스텀 훅으로 모듈화
          </p>
        </VioletBox>
        <VioletBox text='HIGHLEARNING' link='https://www.google.com'>
          <img src={highlearning} alt='highlearning' />
          <div className='mt_10 skill'>
            <span>html</span>
            <span>css</span>
            <span>jquery</span>
            <span>chart.js</span>
          </div>
          <p className='mt_10'>
            - 유지보수 및 고도화
            <br />
            - 학습 내용과 결과를 알 수 있는 리포트의 차트 디자인, 기능 전반적인
            변경
            <br />- 고도화시 추가되는 신규 기능 구현 및 설명
          </p>
        </VioletBox>
        <VioletBox text='HELLO' link='https://www.google.com'>
          <img src={highlearning} alt='highlearning' />
          <p>설명~~</p>
        </VioletBox>
      </div>
    </Wrap>
  );
}
