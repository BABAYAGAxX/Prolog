'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
} from './styles';
import MaskText from '@/components_old/MaskText';
import { useIsDesktop } from '@/lib/hooks';
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase
} from './constants';

const Cards = () => {
  const isDesktop = useIsDesktop();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {!isDesktop ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>

            </Card>
          ))}
        </CardContainer>
      </Inner>
      {/* <Banner>
        {!isDesktop ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner> */}
    </Wrapper>
  );
};

export default Cards;