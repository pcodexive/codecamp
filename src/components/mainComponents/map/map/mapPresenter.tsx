import {
  Container,
  DetailWrapper,
  FlexWrapper,
  FlexColumnWrapper,
  Icon,
  Info,
  InfoSub,
  MainBackground,
  Map,
  MapInfoWrapper,
  MapWrapper,
  Name,
} from './mapStyles';
import Head from 'next/head';

const MapPresenter: React.FC = () => {
  return (
    <Container>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cb7fbb517422329066a684821bffb14c&autoload=false"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                var container = document.getElementById('map');
                var options = {
                  center: new kakao.maps.LatLng(37.48534283502681, 126.89509534007323),
                  level: 3
                };
                var map = new kakao.maps.Map(container, options);

                var markerPosition  = new kakao.maps.LatLng(37.48534283502681, 126.89509534007323); 
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
              `,
          }}
        ></script>
      </Head>
      <MainBackground />
      <MapWrapper>
        <Map id="map" />
        <DetailWrapper>
          <MapInfoWrapper>
            <FlexWrapper>
              <Icon src="/images/map/location.png" />
              <Name>주　소</Name>
            </FlexWrapper>
            <FlexColumnWrapper>
              <Info>서울 구로구 디지털로31길 12, 태평양물산 빌딩 2층 넥스트데이</Info>
              <InfoSub>(구로역 3번 출구에서 도보 3분거리)</InfoSub>
            </FlexColumnWrapper>
          </MapInfoWrapper>
          <MapInfoWrapper>
            <FlexWrapper>
              <Icon src="/images/map/tell.png" />
              <Name>연락처</Name>
            </FlexWrapper>
            <Info>02-6953-0120</Info>
          </MapInfoWrapper>
        </DetailWrapper>
      </MapWrapper>
    </Container>
  );
};

export default MapPresenter;
