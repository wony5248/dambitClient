interface NaverStaticMapProps {
  width?: number;
  height?: number;
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

const CLIENT_ID = "5v6c7tldgi"; // 네이버 API Client ID

const MapComponent: React.FC<NaverStaticMapProps> = ({
  width = 600,
  height = 400,
  latitude = 0,
  longitude = 0,
  zoom = 14,
}) => {
  const mapUrl = `https://maps.apigw.ntruss.com/map-static/v2/raster?w=${width}&h=${height}&center=${longitude},${latitude}&level=${zoom}&X-NCP-APIGW-API-KEY-ID=${CLIENT_ID}`;

  return (
    <div>
      <h2>네이버 Static 지도</h2>
      <img src={mapUrl} alt="Naver Static Map" width={width} height={height} />
    </div>
  );
};

export default MapComponent;
