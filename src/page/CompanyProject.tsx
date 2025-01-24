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
        <VioletBox className='hello' text='HELLO' link='https://www.google.com'>
          <img src={lgdms} alt='lgdms' />
          <p>설명~~</p>
        </VioletBox>
        <VioletBox className='hello' text='HELLO' link='https://www.google.com'>
          <img src={highlearning} alt='highlearning' />
          <p>설명~~</p>
        </VioletBox>
        <VioletBox className='hello' text='HELLO' link='https://www.google.com'>
          <img src={highlearning} alt='highlearning' />
          <p>설명~~</p>
        </VioletBox>
      </div>
    </Wrap>
  );
}
