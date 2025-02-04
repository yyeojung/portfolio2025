import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import styled from 'styled-components';
import VioletBox from 'components/VioletBox';
import lgdms from '../assets/image/lgdms.png';
import highlearning from '../assets/image/highlearning.png';
import tugboat from '../assets/image/tugboat.png';
import { Link } from 'react-router-dom';
import { breakTablet } from 'assets/style/common';

export const ProjectWrap = styled.div`
  .box_wrap {
    display: flex;
    margin-top: 10rem;
    gap: 4rem;

    .violet_box {
      width: calc((100% - 8rem) / 3);

      a {
        height: 100%;
      }
    }
  }

  .title {
    display: flex;
  }
  @media (max-width: ${breakTablet}) {
    .box_wrap {
      flex-direction: column;
      gap: 6rem;
      margin-bottom: 4rem;
      .violet_box {
        width: 100%;
      }
    }
    .title {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
      align-items: center;
    }
  }
`;

export default function CompanyProject() {
  return (
    <ProjectWrap>
      <Link className='next_link' to='/toy-project'></Link>
      <div className='title'>
        <Tag className='red ml_20' text='LEVEL 2' />
        <SubTitle text='PROJECT' />
      </div>
      <div className='box_wrap'>
        <VioletBox
          text='LGU+ DMS BO'
          link='https://distinct-feels-7f8.notion.site/LG-14612ba7456480ea9e99e8122b5d78ec?pvs=74'
        >
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
        <VioletBox
          text='HIGHLEARNING'
          link='https://distinct-feels-7f8.notion.site/627afaf21bba42b0bbd7847b10e847dc?pvs=74'
        >
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
        <VioletBox
          text='tugboat'
          link='https://distinct-feels-7f8.notion.site/be734e06eca44b0bac77d84ed8cff61d'
        >
          <img src={tugboat} alt='tugboat' />
          <div className='mt_10 skill'>
            <span>html</span>
            <span>css</span>
            <span>jquery</span>
            <span>chart.js</span>
          </div>
          <p className='mt_10'>
            - 신규 프로젝트
            <br />- chart.js로 다양한 데이터 가시화
            <br /> - 라이트모드, 다크모드 생성
          </p>
        </VioletBox>
      </div>
    </ProjectWrap>
  );
}
