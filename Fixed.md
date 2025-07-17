1. 이미지 삽입 오류
  - 요구사항
    + 이미지/영상 범용 캐러셀 형태의 컨테이너
    + 영상 : 썸네일이나 플레이어바 크기 조정
  - 이미지 크기 오류 -> 이미지 로딩 후 레이아웃 리렌더링 (사파리)
  - 영상 썸네일 미할당 -> 썸네일 추가 및 기본값 (images/block.jpg) 설정
    필요하다면 썸네일을 영상에 맞게 만들고 video 태그에 poster 속성으로 넣어서 사용
      (ex. <video src="/images/posts/250702 roka/roka3.mp4" poster="/images/block.jpg" controls playsinline preload="metadata" class="my-carousel-img"></video>)

2. 푸터 위치 오류
  - 요구사항
    + 푸터 위치 수정
  - </div> 누락 -> <div> ... </div> 의 짝을 잘 맞춰야 함

3. 웹폰트 / 자간&행간 점검
  - 요구사항
    + 폰트,자간,행간이 됐다 안됐다 함
  - 폰트 미적용 및 tailwind 덮어씀 -> 폰트 적용 & tailwind fontFamily 수정
  - 자간,행간,두께 등 커스터마이징 -> styles/global.css (line 67~) 에서 원하는 태그의 값 수정

4. 기타 추천사항
  - 현재 보여주는 이미지나 영상의 크기는 작은데 원본 크기는 너무 커서
    사진은 WebP, 영상은 MP4로 변환해서 사용하길 추천