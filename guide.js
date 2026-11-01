(function () {
  var TEXT = {"ko": {"nav_label": "도감 메뉴", "nav_tool": "얼굴 재기", "nav_method": "측정 방법", "nav_about": "소개", "nav_privacy": "개인정보", "nav_contact": "문의", "theme_group": "화면 모드", "theme_light": "화이트", "theme_dark": "다크", "language_group": "언어", "footer": "사진은 이 브라우저 안에서만 처리되고 서버로 전송되지 않습니다. 결과는 얼굴 비율을 동물별 기준과 견준 재미있는 비교이며, 과학적 판별이나 성격 테스트가 아닙니다. 표정, 고개 각도, 안경, 조명에 따라 순위가 달라질 수 있어요.", "try_tool": "이 기준으로 얼굴 재기", "read_method": "열 가지 비율이 어떻게 재는지 보기", "other_animals": "다른 동물 기준", "animal_ratio_heading": "이 동물로 기울어지는 비율", "animal_score_heading": "점수가 가깝다는 뜻", "animal_photo_heading": "사진에서 흔들리는 경우", "name_cat": "고양이상", "name_dog": "강아지상", "name_fox": "여우상", "name_rabbit": "토끼상", "name_owl": "부엉이상", "name_bear": "곰상", "name_lion": "사자상", "name_deer": "사슴상", "name_wolf": "늑대상", "method_title": "측정 방법 — 동물상 도감", "method_meta": "얼굴 가로와 세로, 눈, 코, 입, 턱의 길이 비율을 어떻게 재고 아홉 동물 기준과 비교하는지 설명합니다.", "method_h1": "측정 방법", "method_lead": "이 도감은 머리카락, 귀, 옷차림을 보지 않습니다. 사진 속 얼굴에서 길이를 읽고, 그 길이를 얼굴 크기로 나눈 비율만 비교합니다. 같은 사람이라도 거리가 다르면 픽셀 수는 달라지므로, 픽셀 그 자체를 점수로 쓰지 않습니다.", "method_measure": "분석은 이 브라우저 안에서 이루어집니다. 사진을 서버로 보내지 않습니다. 얼굴이 여러 개면 고른 영역 안에서 가장 크게 보이는 얼굴을 기준으로 합니다. 아래 평균 자리는 이 도감이 정면 사진에서 흔하다고 잡아 둔 출발점이며, 의학적인 정상 범위가 아닙니다.", "method_ratios_heading": "열 가지 비율", "method_r1": "얼굴형. 얼굴 가로를 얼굴 세로로 나눕니다. 수가 크면 가로로 넓은 얼굴이고, 작으면 세로로 긴 얼굴입니다. 이 도감의 평균 자리는 0.82입니다.", "method_r2": "눈 크기. 눈 가로를 얼굴 가로로 나눕니다. 0.20이면 눈 가로가 얼굴 가로의 20%라는 뜻입니다.", "method_r3": "눈매. 눈 세로를 눈 가로로 나눕니다. 크면 둥근 눈이고, 작으면 가늘고 날카로운 눈입니다. 평균 자리는 0.33입니다.", "method_r4": "눈 사이. 두 눈 사이 거리를 얼굴 가로로 나눕니다. 평균 자리는 0.25에 가깝습니다.", "method_r5": "코 너비. 코 가로를 얼굴 가로로 나눕니다. 평균 자리는 0.28에 가깝습니다.", "method_r6": "코 길이. 코 길이를 얼굴 세로로 나눕니다. 평균 자리는 0.30입니다.", "method_r7": "입 너비. 입 가로를 얼굴 가로로 나눕니다. 평균 자리는 0.40에 가깝습니다.", "method_r8": "턱 너비. 턱이 넓은 위치의 가로를 얼굴 가로로 나눕니다. 평균 자리는 0.80입니다.", "method_r9": "턱끝. 턱끝의 가로를 얼굴 가로로 나눕니다. 평균 자리는 0.32입니다.", "method_r10": "중안부. 눈에서 코끝까지의 길이를 얼굴 세로로 나눕니다. 평균 자리는 0.25입니다.", "method_score_heading": "점수가 나오는 방식", "method_score": "열 가지 비율을 평균에서 얼마나 떨어졌는지로 바꾼 뒤, 동물마다 정해 둔 기준과 거리를 잽니다. 눈 크기처럼 인상에 큰 항목은 조금 더 무겁게 보고, 턱끝처럼 사진마다 잘 흔들리는 항목은 가볍게 봅니다. 가장 가까운 동물에 높은 점수를 줍니다. 점수는 최대 94입니다. 100을 주지 않는 이유는, 사진 한 장의 오차를 완전한 일치처럼 보이게 하지 않기 위해서입니다.", "method_photo_heading": "같은 사람도 순위가 달라질 때", "method_photo": "고개를 돌리거나, 눈을 세게 감기, 활짝 웃기, 너무 어두운 조명, 얼굴이 아주 작게 찍힌 사진은 순위가 달라질 수 있습니다. 가능하면 눈이 카메라와 같은 높이인 정면에서, 입을 다문 사진으로 비교해 보세요. 안경 테두리가 눈꼬리를 가리면 눈 길이를 잘못 읽을 수 있습니다. 광각으로 아주 가까이 찍으면 얼굴 가운데가 둥글게 부풀어 보입니다.", "method_animals_heading": "아홉 동물의 기준", "method_animals": "동물마다 어느 비율을 크고 작게 보는지가 다릅니다. 이름을 누르면 그 동물 기준만 따로 읽을 수 있습니다. 같은 문장을 동물 이름만 바꿔 반복하지 않았습니다.", "about_title": "소개 — 동물상 도감", "about_meta": "동물상 도감이 무엇을 비교하고, 사진을 어디에 두는지, 결과를 어떻게 읽어야 하는지 적습니다.", "about_h1": "이 도감에 대하여", "about_p1": "동물상 도감은 얼굴 사진의 길이 비율을 고양이, 강아지, 여우, 토끼, 부엉이, 곰, 사자, 사슴, 늑대 기준과 비교하는 브라우저 프로그램입니다. 방문자에게 약속하는 일은 하나입니다. 고른 얼굴 영역의 비율을 재고, 아홉 기준 중 어디와 가까운지 보여 주는 일입니다.", "about_p2": "사진 파일은 이 브라우저 안에서만 읽고, 분석 서버로 올리지 않습니다. 페이지를 닫으면 그 사진도 함께 사라집니다. 이 기기에 남는 것은 고른 언어와 화이트·다크 화면 모드뿐입니다.", "about_p3": "결과는 재미있는 비교입니다. 성격을 알려 주거나, 의학·유전·신원 확인에 쓰라고 만든 도구가 아닙니다. 운영, 오류, 개인정보에 대한 연락은 문의 페이지로 받습니다.", "privacy_title": "개인정보 — 동물상 도감", "privacy_meta": "얼굴 사진, 언어 설정, 광고, 댓글, 문의 폼이 각각 어떤 정보를 다루는지 적습니다.", "privacy_h1": "개인정보", "privacy_photo_heading": "얼굴 사진", "privacy_photo": "카메라로 찍거나 올린 얼굴 사진은 분석을 위해 이 브라우저의 메모리에서만 다룹니다. 동물상 도감의 서버로 전송하지 않고, 계정에 저장하지도 않습니다. 페이지를 닫거나 다른 사진으로 바꾸면 이전 사진은 남지 않습니다.", "privacy_store_heading": "이 기기에 남는 설정", "privacy_store": "고른 언어는 language_code라는 이름으로, 화이트 또는 다크 모드는 theme_mode라는 이름으로 이 브라우저의 로컬 저장소에 남습니다. 이 값은 다음 방문에 같은 화면을 보여 주기 위한 것이며, 얼굴 사진과 함께 보내지지 않습니다.", "privacy_ads_heading": "광고", "privacy_ads": "이 사이트는 구글 애드센스 자동 광고를 사용합니다. 광고가 표시되면 구글이 쿠키와 비슷한 식별 값을 사용해 광고를 고르고 측정할 수 있습니다. 광고가 쓰는 정보에 대한 구글의 설명은 https://policies.google.com/technologies/ads 에서 볼 수 있습니다. 사이트 소유 확인을 위해 페이지 머리의 메타 태그와 루트의 ads.txt에 게시자 번호 ca-pub-8803401825336300 을 적어 두었습니다.", "privacy_disqus_heading": "댓글", "privacy_disqus": "댓글은 얼굴 재기 페이지 아래에만 있으며 Disqus가 처리합니다. 댓글을 쓰려면 Disqus 쪽의 로그인이나 가입이 필요하고, Disqus가 자체 쿠키를 사용할 수 있습니다. 댓글 내용은 얼굴 사진과 따로 저장됩니다. Disqus의 개인정보 안내는 https://help.disqus.com/en/articles/1717103-disqus-privacy-policy 에 있습니다.", "privacy_form_heading": "문의 폼", "privacy_form": "문의 페이지에서 보내기를 누를 때만 이름, 회사 또는 브랜드, 답장 받을 이메일, 문의 내용이 Formspree(https://formspree.io)로 전달됩니다. 얼굴 사진은 이 항목에 포함되지 않습니다. 보내지 않으면 폼에 적던 글도 저장되지 않습니다.", "privacy_font_heading": "글꼴", "privacy_font": "화면 글꼴은 Google Fonts에서 불러옵니다. 페이지를 열 때 브라우저가 fonts.googleapis.com 과 fonts.gstatic.com 에 글꼴 파일을 요청합니다. 그 요청에는 보통 접속 중인 주소와 브라우저 정보가 포함될 수 있습니다.", "privacy_ask_heading": "질문", "privacy_ask": "이 안내에서 빠졌거나 잘못된 부분이 있으면 문의 페이지로 알려 주세요. 얼굴 사진은 서버에 없어 되돌려 드릴 파일이 없습니다. 댓글 삭제는 Disqus에서, 이미 보낸 문의 메일의 삭제는 받은 쪽과 문의 페이지를 통해 요청할 수 있습니다.", "contact_title": "문의 — 동물상 도감", "contact_meta": "동물상 도감의 제휴, 오류, 개인정보 질문을 받는 문의 페이지입니다.", "contact_h1": "문의", "contact_help": "제휴, 오류, 개인정보 질문을 남겨 주세요. 얼굴 사진은 이 폼에 붙지 않습니다. 답변은 적어 주신 이메일로 갑니다.", "contact_name": "이름", "contact_company": "회사 또는 브랜드", "contact_email": "답장 받을 이메일", "contact_message": "문의 내용", "contact_send": "문의 보내기", "contact_subject": "동물상 도감 문의", "contact_invalid": "이름, 답장 받을 이메일, 문의 내용을 입력한 뒤 다시 보내 주세요.", "contact_sending": "문의를 보내는 중이에요.", "contact_sent": "문의가 전달됐어요. 남겨 주신 메일로 답변드릴게요.", "contact_fail": "문의를 보내지 못했어요. 잠시 후 다시 시도해 주세요.", "contact_network": "문의를 보내지 못했어요. 인터넷 연결을 확인한 뒤 다시 시도해 주세요.", "contact_teaser_title": "문의", "contact_teaser": "제휴, 오류, 개인정보와 관련된 질문은 문의 페이지에 남겨 주세요. 답변은 적어 주신 이메일로 갑니다. 얼굴 사진은 문의에 포함되지 않습니다.", "atlas_help": "동물 이름을 누르면 그 기준을 글로 읽을 수 있습니다. 얼굴 사진 없이도 도감을 볼 수 있어요.", "lead": "사진을 올린 뒤 휠로 확대하고, 드래그로 분석할 얼굴을 지정합니다. 왼쪽 버튼을 잠시 누르고 있으면 사진이 움직이고, 여러 명이면 그 부분만 잘라 원본 아래에 펼칩니다. 비교에 쓰는 값은 머리카락이나 귀가 아니라 얼굴 가로·세로와 눈, 코, 입, 턱의 길이 비율입니다. 점수는 아홉 동물 기준과의 거리이며, 성격 테스트나 과학적 판별이 아닙니다.", "cat_title": "고양이상 — 동물상 도감", "cat_meta": "눈이 크고 코와 입이 작아, 이목구비가 얼굴 가운데로 모여 보이는 기준입니다.", "cat_h1": "고양이상", "cat_p1": "고양이상은 눈과 코, 입이 얼굴 한가운데로 모여 보이는 인상입니다. 도감의 고양이 기준은 얼굴이 조금 둥글고, 눈이 크며, 코와 입이 평균보다 작을 때 가까워집니다.", "cat_p2": "얼굴 가로가 세로에 비해 넉넉하고, 눈 가로가 얼굴에서 차지하는 비율이 큽니다. 코 가로, 코 길이, 입 가로는 평균보다 작은 쪽을 고양이 쪽으로 봅니다. 눈에서 코끝까지의 중안부도 짧은 편입니다.", "cat_p3": "점수가 높다는 것은 이 열 가지를 함께 봤을 때 고양이 기준과의 거리가 가장 짧다는 뜻입니다. 눈만 크다고 고양이상이 되지는 않습니다. 코와 입이 넓으면 곰이나 사자 기준이 더 가까울 수 있습니다.", "cat_p4": "웃으면 입이 넓어져 강아지나 사자 쪽으로 기울 수 있습니다. 고개를 옆으로 돌리면 눈 크기가 실제보다 작아 보입니다. 정면에서 입을 다문 사진이 이 기준과 비교하기 좋습니다.", "dog_title": "강아지상 — 동물상 도감", "dog_meta": "눈이 둥글고 입이 넓어, 표정이 순하고 친근해 보이는 기준입니다.", "dog_h1": "강아지상", "dog_p1": "강아지상은 눈이 둥글고 입이 넓어 표정이 순해 보이는 인상입니다. 코는 평균 근처에 두고, 얼굴 전체는 약간 둥근 쪽을 강아지 기준에 가깝다고 봅니다.", "dog_p2": "눈매, 곧 눈 세로를 눈 가로로 나눈 값이 둥근 편이고 입 가로가 얼굴에서 넓을 때 강아지 기준에 가깝습니다. 눈 사이도 약간 넓은 쪽을 함께 봅니다.", "dog_p3": "입이 넓다고 바로 강아지상은 아닙니다. 코와 턱까지 넓으면 사자나 곰이 더 가깝고, 눈매가 가늘면 여우나 늑대 쪽으로 갑니다.", "dog_p4": "활짝 웃는 사진은 입 비율이 커집니다. 평소 인상이 알고 싶다면 입을 다문 사진도 한 장 같이 재 보세요.", "fox_title": "여우상 — 동물상 도감", "fox_meta": "얼굴 선이 길고 턱끝이 가늘며 눈매가 날렵한 기준입니다.", "fox_h1": "여우상", "fox_p1": "여우상은 얼굴 선이 길고 턱끝이 가늘며 눈매가 날렵한 인상입니다. 사슴처럼 눈만 큰 긴 얼굴과는 눈의 모양으로 갈라집니다.", "fox_p2": "얼굴 세로가 가로보다 길고, 눈매가 가늘며, 턱끝 가로가 좁을 때 여우 기준에 가깝습니다. 코는 가로가 좁고 길이는 긴 쪽, 눈 사이는 약간 가까운 쪽입니다.", "fox_p3": "사슴상도 얼굴이 길고 턱이 가늘지만, 사슴은 눈이 큰 쪽을 보고 여우는 눈매가 가늘고 날카로운 쪽을 봅니다. 둘의 점수가 비슷하면 눈 모양을 같이 보세요.", "fox_p4": "옆얼굴은 턱끝이 더 가늘어 보입니다. 머리카락으로 턱을 가리면 턱끝 비율을 읽지 못합니다. 턱선이 보이는 정면 사진이 맞습니다.", "rabbit_title": "토끼상 — 동물상 도감", "rabbit_meta": "눈이 크고 코와 입이 작아, 인상이 둥글고 부드러운 기준입니다.", "rabbit_h1": "토끼상", "rabbit_p1": "토끼상은 눈이 크고 코와 입이 작아 인상이 둥글고 부드러운 쪽입니다. 이 도감에서 눈 크기를 크게 보는 기준 가운데 하나입니다.", "rabbit_p2": "얼굴은 둥글고, 눈 가로와 눈매의 둥글기가 크며, 눈 사이도 약간 넓습니다. 코 가로와 코 길이, 입 가로는 작고, 중안부는 짧습니다.", "rabbit_p3": "부엉이상도 눈이 크고 얼굴이 둥급니다. 부엉이는 눈 사이가 더 넓고 얼굴 윤곽이 더 원형인 쪽이고, 토끼는 코와 입이 작으면서 눈이 큰 쪽입니다.", "rabbit_p4": "눈을 크게 뜨면 눈 세로가 늘어 토끼나 부엉이 쪽으로 움직일 수 있습니다. 평소 크기라면 자연스럽게 뜬 사진이 맞습니다.", "owl_title": "부엉이상 — 동물상 도감", "owl_meta": "얼굴이 아주 둥글고 눈이 크며 눈 사이가 넓은 기준입니다.", "owl_h1": "부엉이상", "owl_p1": "부엉이상은 얼굴이 아주 둥글고 눈이 커서 이목구비가 동그랗게 띄는 인상입니다. 아홉 기준 가운데 얼굴 둥글기를 가장 크게 봅니다.", "owl_p2": "얼굴 둥글기, 눈 크기, 눈매의 둥글기, 눈 사이 간격을 모두 큰 쪽으로 봅니다. 코와 입은 작고 짧으며, 턱끝은 부드러운 넓은 쪽입니다. 중안부는 짧습니다.", "owl_p3": "토끼와 점수가 겹치기 쉽습니다. 눈 사이가 넓고 얼굴 윤곽이 원에 가까우면 부엉이 쪽입니다. 코와 입만 작고 얼굴 길이가 남아 있으면 토끼나 고양이를 같이 봅니다.", "owl_p4": "광각 렌즈로 아주 가까이 찍으면 얼굴 가운데가 둥글게 왜곡됩니다. 팔을 편 거리 이상에서 찍으면 윤곽이 덜 부풀습니다.", "bear_title": "곰상 — 동물상 도감", "bear_meta": "얼굴과 코, 턱이 넓고 눈은 작은 기준입니다.", "bear_h1": "곰상", "bear_p1": "곰상은 얼굴과 코, 턱이 넓고 눈은 작아 든든하고 너그러워 보이는 인상입니다. 눈의 크기보다 얼굴의 폭을 더 봅니다.", "bear_p2": "코 가로, 턱 가로, 턱끝이 평균보다 넓고 눈 크기는 작은 쪽입니다. 입도 약간 넓습니다. 중안부는 평균 근처에 둡니다.", "bear_p3": "사자상도 코와 턱이 넓습니다. 사자는 입과 턱의 존재감이 더 크고, 눈이 아주 작을 필요는 없습니다. 눈이 작고 얼굴 폭이 전체적으로 넓으면 곰에 더 가깝습니다.", "bear_p4": "수염이나 마스크, 손은 코와 턱의 경계를 가립니다. 코끝과 턱선이 보이게 찍어 주세요.", "lion_title": "사자상 — 동물상 도감", "lion_meta": "코와 입, 턱이 넓어 이목구비의 폭이 큰 기준입니다.", "lion_h1": "사자상", "lion_p1": "사자상은 코와 입, 턱이 넓어 이목구비가 진하고 존재감이 커 보이는 인상입니다. 눈의 크기나 얼굴의 길이보다 아래쪽 폭을 봅니다.", "lion_p2": "코 가로, 입 가로, 턱 가로를 넓은 쪽으로 봅니다. 눈 크기는 평균보다 약간 작고, 얼굴 전체의 둥글기는 평균에서 크게 벗어나지 않습니다.", "lion_p3": "강아지상도 입이 넓지만 눈매가 둥글고 친근한 쪽입니다. 사자상은 눈보다 코, 입, 턱의 폭이 점수를 끌어갑니다.", "lion_p4": "웃거나 말을 하는 순간은 입이 더 넓어집니다. 입을 다문 사진과 비교하면 표정이 만든 차이인지 알 수 있습니다.", "deer_title": "사슴상 — 동물상 도감", "deer_meta": "얼굴이 길고 눈은 크며 턱과 턱끝이 가는 기준입니다.", "deer_h1": "사슴상", "deer_p1": "사슴상은 얼굴이 길고 눈은 크며 턱이 가늘어 선이 가늘고 순해 보이는 인상입니다. 긴 얼굴 가운데서 눈이 큰 쪽을 사슴으로 봅니다.", "deer_p2": "얼굴 세로는 길고, 눈은 크며, 코는 좁고, 턱과 턱끝은 가늘고, 중안부는 긴 쪽입니다. 눈매 자체는 여우처럼 가늘지 않아도 됩니다.", "deer_p3": "여우와 늑대도 긴 얼굴입니다. 사슴은 눈이 크고 턱이 가는 조합이고, 늑대는 눈이 가늘고 중안부가 긴 조합입니다.", "deer_p4": "위에서 내려다보는 각도는 턱을 짧게 만듭니다. 카메라와 눈이 같은 높이일 때 얼굴 세로가 덜 왜곡됩니다.", "wolf_title": "늑대상 — 동물상 도감", "wolf_meta": "눈매가 가늘고 중안부와 코 길이가 긴 기준입니다.", "wolf_h1": "늑대상", "wolf_p1": "늑대상은 눈매가 가늘고 중안부가 길어 얼굴선이 날카로워 보이는 인상입니다. 입은 평균 근처에 두고, 눈과 코의 거리로 긴 얼굴을 읽습니다.", "wolf_p2": "눈 세로가 짧고, 눈 사이는 가까우며, 코 길이와 눈에서 코끝까지의 거리가 깁니다. 얼굴도 긴 편이고 턱끝은 가늘게 봅니다.", "wolf_p3": "여우상과 자주 이웃합니다. 여우는 턱끝이 더 가늘고 코 가로가 더 좁은 쪽이고, 늑대는 눈매와 중안부의 길이 비중이 더 큽니다.", "wolf_p4": "눈을 가늘게 뜨면 눈매 비율만으로 늑대 쪽이 올라갈 수 있습니다. 평소 뜨는 정도로 찍어 주세요."}, "en": {"nav_label": "Guide menu", "nav_tool": "Measure a face", "nav_method": "How measuring works", "nav_about": "About", "nav_privacy": "Privacy", "nav_contact": "Contact", "theme_group": "Theme", "theme_light": "Light", "theme_dark": "Dark", "language_group": "Language", "footer": "Photos are processed only in this browser and are not uploaded. The result is a playful comparison of face proportions, not a scientific or personality test. Expression, angle, glasses, and lighting can change the ranking.", "try_tool": "Measure a face with this guide", "read_method": "Read how the ten ratios are measured", "other_animals": "Other animal profiles", "animal_ratio_heading": "Ratios that lean this way", "animal_score_heading": "What a close score means", "animal_photo_heading": "When the photo moves the rank", "name_cat": "Cat face", "name_dog": "Puppy face", "name_fox": "Fox face", "name_rabbit": "Rabbit face", "name_owl": "Owl face", "name_bear": "Bear face", "name_lion": "Lion face", "name_deer": "Deer face", "name_wolf": "Wolf face", "method_title": "How measuring works — Animal Face Field Guide", "method_meta": "Explains how face, eye, nose, mouth, and jaw length ratios are measured and compared with nine animal profiles.", "method_h1": "How measuring works", "method_lead": "This guide does not look at hair, ears, or clothes. It reads lengths on the face in the photo and compares only those lengths divided by the size of the face. Pixel counts change with distance, so the raw pixel count is not the score.", "method_measure": "The analysis runs in this browser. The photo is not sent to a server. If several faces are in the area you chose, the largest one is used. The averages below are this guide's starting point for a front-facing photo. They are not a medical normal range.", "method_ratios_heading": "The ten ratios", "method_r1": "Face shape. Face width divided by face height. A larger number is a wider face, and a smaller number is a longer face. This guide's average is 0.82.", "method_r2": "Eye size. Eye width divided by face width. 0.20 means the eye width is 20% of the face width.", "method_r3": "Eye shape. Eye height divided by eye width. Larger is rounder, smaller is narrower and sharper. The average here is 0.33.", "method_r4": "Eye gap. The distance between the eyes divided by face width. The average is near 0.25.", "method_r5": "Nose width. Nose width divided by face width. The average is near 0.28.", "method_r6": "Nose length. Nose length divided by face height. The average is 0.30.", "method_r7": "Mouth width. Mouth width divided by face width. The average is near 0.40.", "method_r8": "Jaw width. The wider part of the jaw divided by face width. The average is 0.80.", "method_r9": "Chin. Chin width divided by face width. The average is 0.32.", "method_r10": "Midface. The length from the eyes to the tip of the nose divided by face height. The average is 0.25.", "method_score_heading": "How the score is made", "method_score": "Each ratio is turned into a distance from the average, then compared with the profile set for each animal. Features that shape the impression, such as eye size, count a little more. Features that shift easily from photo to photo, such as the chin tip, count less. The closest animal gets the higher score. The score stops at 94. It never shows 100, so one photo's error is not presented as a perfect match.", "method_photo_heading": "When the same person gets another rank", "method_photo": "Turning the head, squeezing the eyes, a wide smile, very dim light, or a tiny face in the frame can change the rank. A front-facing photo, with the eyes level with the camera and the mouth closed, is easier to compare. Glasses frames that cover the outer eye can make the eye length wrong. A very close wide-angle shot makes the middle of the face look rounder.", "method_animals_heading": "The nine animal profiles", "method_animals": "Each animal looks for a different mix of larger and smaller ratios. Select a name to read that profile on its own. The pages do not repeat one paragraph with only the animal name changed.", "about_title": "About — Animal Face Field Guide", "about_meta": "What Animal Face Field Guide compares, where the photo stays, and how to read the result.", "about_h1": "About this guide", "about_p1": "Animal Face Field Guide is a browser program that compares length ratios in a face photo with profiles for a cat, puppy, fox, rabbit, owl, bear, lion, deer, and wolf. It promises one thing: measure the ratios in the area you choose, and show which of the nine profiles is closest.", "about_p2": "The photo file is read only in this browser and is not uploaded to an analysis server. When you close the page, the photo goes with it. The only things kept on this device are the language you chose and the light or dark theme.", "about_p3": "The result is a playful comparison. The tool was not built to describe personality, or for medicine, genetics, or identity checks. Questions about the site, errors, or privacy go to the contact page.", "privacy_title": "Privacy — Animal Face Field Guide", "privacy_meta": "How face photos, language settings, ads, comments, and the contact form each handle information.", "privacy_h1": "Privacy", "privacy_photo_heading": "Face photos", "privacy_photo": "A face photo taken with the camera or uploaded for analysis is handled only in this browser's memory. It is not sent to an Animal Face Field Guide server and it is not saved to an account. When you close the page or choose another photo, the previous photo is not kept.", "privacy_store_heading": "Settings kept on this device", "privacy_store": "The chosen language is stored in this browser under the name language_code, and the light or dark theme under theme_mode. Those values only restore the same view on the next visit. They are not sent with the face photo.", "privacy_ads_heading": "Advertising", "privacy_ads": "This site uses Google AdSense auto ads. When an ad is shown, Google can use cookies or similar identifiers to choose and measure ads. Google's description of information used for ads is at https://policies.google.com/technologies/ads . For site ownership, the publisher id ca-pub-8803401825336300 is in a meta tag in the page head and in ads.txt at the site root.", "privacy_disqus_heading": "Comments", "privacy_disqus": "Comments appear only at the bottom of the measure page and are handled by Disqus. Writing a comment needs a Disqus login or signup, and Disqus can use its own cookies. Comment text is stored apart from face photos. Disqus describes its privacy practices at https://help.disqus.com/en/articles/1717103-disqus-privacy-policy .", "privacy_form_heading": "Contact form", "privacy_form": "Only when you press send on the contact page are your name, company or brand, reply email, and message delivered to Formspree (https://formspree.io). The face photo is not part of those fields. If you do not send the form, the text you were typing is not stored.", "privacy_font_heading": "Fonts", "privacy_font": "The typefaces are loaded from Google Fonts. When the page opens, the browser requests font files from fonts.googleapis.com and fonts.gstatic.com. That request can include the page address and usual browser information.", "privacy_ask_heading": "Questions", "privacy_ask": "If something here is missing or wrong, tell us on the contact page. Face photos are not on a server, so there is no file to return. Comment removal is handled in Disqus. A request to delete an inquiry you already sent can be made through the contact page and the inbox that received it.", "contact_title": "Contact — Animal Face Field Guide", "contact_meta": "Contact page for partnership, error, and privacy questions about Animal Face Field Guide.", "contact_h1": "Contact", "contact_help": "Leave a partnership, error, or privacy question. The face photo is not attached to this form. The reply goes to the email you enter.", "contact_name": "Name", "contact_company": "Company or brand", "contact_email": "Email for the reply", "contact_message": "Message", "contact_send": "Send message", "contact_subject": "Animal Face Field Guide inquiry", "contact_invalid": "Enter your name, reply email, and message, then send again.", "contact_sending": "Sending your message.", "contact_sent": "Your message was sent. We will reply to the email you entered.", "contact_fail": "The message could not be sent. Please try again in a moment.", "contact_network": "The message could not be sent. Check your connection and try again.", "contact_teaser_title": "Contact", "contact_teaser": "Questions about partnerships, errors, or privacy go on the contact page. The reply is sent to the email you enter. Face photos are not included in the message.", "atlas_help": "Select an animal name to read its profile. You can browse the guide without a face photo.", "lead": "Upload a photo, zoom with the wheel, and drag to choose a face. Hold the left button briefly to move the photo. If there are several people, each chosen area is cropped below the original. The comparison uses length ratios of the face, eyes, nose, mouth, and jaw, not hair or ears. The score is the distance from nine animal profiles. It is not a personality test or a scientific classification.", "cat_title": "Cat face — Animal Face Field Guide", "cat_meta": "A profile for large eyes with a small nose and mouth, so the features look gathered toward the center.", "cat_h1": "Cat face", "cat_p1": "A cat face is the impression that the eyes, nose, and mouth sit toward the middle of the face. This guide's cat profile gets closer when the face is a little round, the eyes are large, and the nose and mouth are smaller than average.", "cat_p2": "Face width is generous compared with face height, and the eyes take up more of the face width. A narrower and shorter nose, and a smaller mouth, lean toward the cat. The midface, from the eyes to the nose tip, is on the short side.", "cat_p3": "A high score means that, taken together, the ten ratios are closest to the cat profile. Large eyes alone do not make a cat face. A wide nose and mouth can sit closer to the bear or lion profile.", "cat_p4": "A smile widens the mouth and can lean the result toward the puppy or lion. Turning the head makes the eyes look smaller than they are. A front-facing photo with the mouth closed is the easier comparison for this profile.", "dog_title": "Puppy face — Animal Face Field Guide", "dog_meta": "A profile for round eyes and a wide mouth, the look this guide treats as gentle and friendly.", "dog_h1": "Puppy face", "dog_p1": "A puppy face is the impression of round eyes and a wide mouth, so the expression looks gentle. The nose stays near average, and a slightly round face sits closer to the puppy profile.", "dog_p2": "The puppy profile is closer when the eye shape, eye height divided by eye width, is round and the mouth is wide on the face. A slightly wider gap between the eyes is part of the same reading.", "dog_p3": "A wide mouth by itself is not a puppy face. If the nose and jaw are wide as well, the lion or bear can be closer. Narrow eyes move the result toward the fox or wolf.", "dog_p4": "A big smile increases the mouth ratio. If you want the everyday impression, measure a photo with the mouth closed as well.", "fox_title": "Fox face — Animal Face Field Guide", "fox_meta": "A profile for a long face, a narrow chin, and sharp eyes.", "fox_h1": "Fox face", "fox_p1": "A fox face is a long outline, a narrow chin, and sharp eyes. It separates from a long face with large eyes, such as the deer, by the shape of the eyes.", "fox_p2": "The fox profile is closer when face height exceeds face width, the eyes are narrow, and the chin tip is slim. The nose is narrow but long, and the eyes sit a little closer together.", "fox_p3": "The deer profile is also a long face with a narrow jaw, but the deer looks for larger eyes and the fox looks for narrow, sharp eyes. If the two scores are close, read the eye shape with them.", "fox_p4": "A side view makes the chin look even narrower. Hair that covers the chin hides the chin ratio. A front-facing photo with the jawline visible is the one to use.", "rabbit_title": "Rabbit face — Animal Face Field Guide", "rabbit_meta": "A profile for large eyes and a small nose and mouth, read here as a round, soft impression.", "rabbit_h1": "Rabbit face", "rabbit_p1": "A rabbit face has large eyes and a small nose and mouth, so the impression is round and soft. It is one of the profiles in this guide that looks hardest at eye size.", "rabbit_p2": "The face is round, the eyes are wide, the eye shape is round, and the gap between the eyes is a little wide. Nose width, nose length, and mouth width are small, and the midface is short.", "rabbit_p3": "The owl profile also has large eyes and a round face. The owl leans further toward a wide eye gap and a more circular outline. The rabbit leans toward large eyes with a small nose and mouth.", "rabbit_p4": "Opening the eyes very wide increases eye height and can move the result toward the rabbit or owl. For an everyday size, a photo with the eyes open naturally is the better one.", "owl_title": "Owl face — Animal Face Field Guide", "owl_meta": "A profile for a very round face, large eyes, and a wide gap between the eyes.", "owl_h1": "Owl face", "owl_p1": "An owl face is a very round face with large eyes, so the features read as circular. Among the nine profiles, this one gives face roundness the strongest pull.", "owl_p2": "Face roundness, eye size, round eye shape, and the gap between the eyes are all read on the large side. The nose and mouth are small and short, the chin tip is softly wide, and the midface is short.", "owl_p3": "The score often sits near the rabbit. A wide eye gap and an outline close to a circle lean owl. If only the nose and mouth are small and some face length remains, read the rabbit and cat alongside it.", "owl_p4": "A very close wide-angle shot distorts the middle of the face into a rounder shape. From at least an arm's length, the outline inflates less.", "bear_title": "Bear face — Animal Face Field Guide", "bear_meta": "A profile for a wide face, nose, and jaw with smaller eyes.", "bear_h1": "Bear face", "bear_p1": "A bear face is a wide face, nose, and jaw with smaller eyes, the impression this guide reads as solid and easygoing. It looks more at the width of the face than at eye size.", "bear_p2": "Nose width, jaw width, and the chin are wider than average, and eye size is on the small side. The mouth is a little wide. The midface stays near the average.", "bear_p3": "The lion profile also has a wide nose and jaw. The lion puts more weight on the mouth and jaw, and the eyes do not need to be very small. Small eyes with width across the whole face sit closer to the bear.", "bear_p4": "A beard, a mask, or a hand hides the edge of the nose and jaw. Take the photo so the nose tip and jawline are visible.", "lion_title": "Lion face — Animal Face Field Guide", "lion_meta": "A profile for a wide nose, mouth, and jaw, so the features read as broad.", "lion_h1": "Lion face", "lion_p1": "A lion face has a wide nose, mouth, and jaw, so the features look strong. This profile looks at the width of the lower face more than at eye size or face length.", "lion_p2": "Nose width, mouth width, and jaw width are read on the wide side. Eye size is a little smaller than average, and the roundness of the whole face does not leave the average by much.", "lion_p3": "The puppy profile also has a wide mouth, but with round, friendly eyes. The lion score is pulled by the width of the nose, mouth, and jaw more than by the eyes.", "lion_p4": "Smiling or speaking makes the mouth wider. Compare it with a closed-mouth photo to see whether the expression created the difference.", "deer_title": "Deer face — Animal Face Field Guide", "deer_meta": "A profile for a long face, large eyes, and a narrow jaw and chin.", "deer_h1": "Deer face", "deer_p1": "A deer face is a long face with large eyes and a narrow jaw, a fine and gentle line in this guide. Among long faces, the one with larger eyes is read as the deer.", "deer_p2": "Face height is long, the eyes are large, the nose is narrow, the jaw and chin tip are slim, and the midface is long. The eye shape does not have to be as narrow as the fox.", "deer_p3": "The fox and the wolf are long faces too. The deer is the combination of large eyes and a slim jaw. The wolf is the combination of narrow eyes and a long midface.", "deer_p4": "A camera looking down shortens the jaw. When the camera is level with the eyes, face height is distorted less.", "wolf_title": "Wolf face — Animal Face Field Guide", "wolf_meta": "A profile for narrow eyes and a long midface and nose.", "wolf_h1": "Wolf face", "wolf_p1": "A wolf face has narrow eyes and a long midface, so the outline looks sharp. The mouth stays near average, and the long face is read from the distance between the eyes and the nose.", "wolf_p2": "Eye height is short, the eyes sit closer together, and both the nose and the span from the eyes to the nose tip are long. The face is on the long side, and the chin tip is read as narrow.", "wolf_p3": "The fox profile is often the neighbor. The fox puts more weight on a slimmer chin tip and a narrower nose. The wolf puts more weight on narrow eyes and midface length.", "wolf_p4": "Squinting can raise the wolf side from the eye-shape ratio alone. Take the photo with the eyes open as they usually are."}, "ja": {"nav_label": "図鑑メニュー", "nav_tool": "顔を測る", "nav_method": "測り方", "nav_about": "紹介", "nav_privacy": "個人情報", "nav_contact": "問い合わせ", "theme_group": "画面モード", "theme_light": "ライト", "theme_dark": "ダーク", "language_group": "言語", "footer": "写真はこのブラウザの中だけで処理され、サーバーには送られません。結果は顔の比率を動物の基準と比べた遊びであり、科学的な判定や性格テストではありません。表情、角度、眼鏡、照明で順位は変わることがあります。", "try_tool": "この基準で顔を測る", "read_method": "10個の比率の測り方を読む", "other_animals": "ほかの動物の基準", "animal_ratio_heading": "この動物に傾く比率", "animal_score_heading": "点数が高いという意味", "animal_photo_heading": "写真で順位が揺れるとき", "name_cat": "猫顔", "name_dog": "犬顔", "name_fox": "狐顔", "name_rabbit": "兎顔", "name_owl": "フクロウ顔", "name_bear": "熊顔", "name_lion": "ライオン顔", "name_deer": "鹿顔", "name_wolf": "狼顔", "method_title": "測り方 — 動物顔図鑑", "method_meta": "顔の縦横、目、鼻、口、顎の長さの比率をどう測り、9種の動物基準と比べるかを説明します。", "method_h1": "測り方", "method_lead": "この図鑑は髪、耳、服装を見ません。写真の顔から長さを読み、その長さを顔の大きさで割った比率だけを比べます。同じ人でも距離が変わると画素数は変わるので、画素そのものは点数にしません。", "method_measure": "分析はこのブラウザの中で行われ、写真はサーバーへ送りません。選んだ範囲に顔が複数あれば、いちばん大きく見える顔を基準にします。下の平均は、正面写真でよくある出発点としてこの図鑑が置いた値であり、医学的な正常範囲ではありません。", "method_ratios_heading": "10個の比率", "method_r1": "顔の形。顔の横幅を縦の長さで割ります。数が大きいと横に広い顔、小さいと縦に長い顔です。この図鑑の平均は0.82です。", "method_r2": "目の大きさ。目の横幅を顔の横幅で割ります。0.20は、目の横幅が顔の横幅の20%という意味です。", "method_r3": "目つき。目の縦を横で割ります。大きいと丸い目、小さいと細く鋭い目です。平均は0.33です。", "method_r4": "目と目の間。両目の間の距離を顔の横幅で割ります。平均は0.25に近いです。", "method_r5": "鼻の幅。鼻の横幅を顔の横幅で割ります。平均は0.28に近いです。", "method_r6": "鼻の長さ。鼻の長さを顔の縦で割ります。平均は0.30です。", "method_r7": "口の幅。口の横幅を顔の横幅で割ります。平均は0.40に近いです。", "method_r8": "顎の幅。顎の広い位置の横幅を顔の横幅で割ります。平均は0.80です。", "method_r9": "あご先。あご先の横幅を顔の横幅で割ります。平均は0.32です。", "method_r10": "中顔面。目から鼻先までの長さを顔の縦で割ります。平均は0.25です。", "method_score_heading": "点数の出方", "method_score": "10個の比率を平均からの距離に変えて、動物ごとに決めた基準との距離を測ります。目の大きさのように印象を左右する項目は少し重く、あご先のように写真ごとに揺れやすい項目は軽く見ます。いちばん近い動物に高い点数を出します。点数の上限は94です。100にしないのは、写真1枚の誤差を完全な一致のように見せないためです。", "method_photo_heading": "同じ人でも順位が変わるとき", "method_photo": "顔を横に向ける、目を細める、大きく笑う、暗すぎる照明、顔がとても小さく写った写真では順位が変わることがあります。できれば目がカメラと同じ高さの正面で、口を閉じた写真と比べてください。眼鏡の縁が目尻を隠すと、目の長さを読み間違えることがあります。広角でごく近くから撮ると、顔の中央が丸く膨らんで見えます。", "method_animals_heading": "9種の動物の基準", "method_animals": "動物ごとに、どの比率を大きく、または小さく見るかが違います。名前を押すと、その動物の基準だけを読めます。同じ文の動物名だけを入れ替えたページにはしていません。", "about_title": "紹介 — 動物顔図鑑", "about_meta": "動物顔図鑑が何を比べ、写真をどこに置くか、結果をどう読むかを書きます。", "about_h1": "この図鑑について", "about_p1": "動物顔図鑑は、顔写真の長さの比率を猫、犬、狐、兎、フクロウ、熊、ライオン、鹿、狼の基準と比べるブラウザのプログラムです。訪れた人に約束することは一つです。選んだ顔の範囲の比率を測り、9つの基準のどこに近いかを見せることです。", "about_p2": "写真ファイルはこのブラウザの中だけで読み、分析サーバーには上げません。ページを閉じると、その写真も一緒に消えます。この機器に残るのは、選んだ言語とライト・ダークの画面モードだけです。", "about_p3": "結果は遊びとしての比較です。性格を教えたり、医学、遺伝、本人確認に使うために作った道具ではありません。運営、不具合、個人情報についての連絡は問い合わせページで受けます。", "privacy_title": "個人情報 — 動物顔図鑑", "privacy_meta": "顔写真、言語設定、広告、コメント、問い合わせフォームがそれぞれどの情報を扱うかを書きます。", "privacy_h1": "個人情報", "privacy_photo_heading": "顔写真", "privacy_photo": "カメラで撮った、または読み込んだ顔写真は、分析のためにこのブラウザのメモリの中だけで扱います。動物顔図鑑のサーバーへは送らず、アカウントにも保存しません。ページを閉じるか別の写真に替えると、前の写真は残りません。", "privacy_store_heading": "この機器に残る設定", "privacy_store": "選んだ言語は language_code という名前で、ライトまたはダークは theme_mode という名前で、このブラウザのローカルストレージに残ります。これは次の訪問で同じ画面を出すための値であり、顔写真と一緒には送りません。", "privacy_ads_heading": "広告", "privacy_ads": "このサイトは Google アドセンスの自動広告を使います。広告が表示されると、Google はクッキーに似た識別値を使って広告を選び、測定することがあります。広告に使う情報についての Google の説明は https://policies.google.com/technologies/ads にあります。サイトの所有者確認のため、ページ先頭のメタタグとルートの ads.txt にパブリッシャー番号 ca-pub-8803401825336300 を書いてあります。", "privacy_disqus_heading": "コメント", "privacy_disqus": "コメントは顔を測るページの下だけにあり、Disqus が処理します。コメントを書くには Disqus 側のログインまたは登録が必要で、Disqus が独自のクッキーを使うことがあります。コメントの内容は顔写真とは別に保存されます。Disqus の個人情報の案内は https://help.disqus.com/en/articles/1717103-disqus-privacy-policy にあります。", "privacy_form_heading": "問い合わせフォーム", "privacy_form": "問い合わせページで送信を押したときだけ、名前、会社またはブランド、返信先メール、内容が Formspree（https://formspree.io）へ届きます。顔写真はこの項目に含まれません。送らなければ、フォームに書いていた文も保存されません。", "privacy_font_heading": "フォント", "privacy_font": "画面のフォントは Google Fonts から読み込みます。ページを開くとき、ブラウザは fonts.googleapis.com と fonts.gstatic.com にフォントファイルを要求します。その要求には、通常、見ているアドレスとブラウザの情報が含まれることがあります。", "privacy_ask_heading": "質問", "privacy_ask": "この案内に抜けや誤りがあれば、問い合わせページで知らせてください。顔写真はサーバーにないので、返すファイルはありません。コメントの削除は Disqus で、すでに送った問い合わせメールの削除は、受け取った側と問い合わせページから依頼できます。", "contact_title": "問い合わせ — 動物顔図鑑", "contact_meta": "動物顔図鑑の提携、不具合、個人情報についての質問を受ける問い合わせページです。", "contact_h1": "問い合わせ", "contact_help": "提携、不具合、個人情報についての質問を残してください。顔写真はこのフォームには付きません。返信は記入したメールへ届きます。", "contact_name": "名前", "contact_company": "会社またはブランド", "contact_email": "返信先メール", "contact_message": "問い合わせ内容", "contact_send": "送信する", "contact_subject": "動物顔図鑑 問い合わせ", "contact_invalid": "名前、返信先メール、内容を入力してからもう一度送ってください。", "contact_sending": "問い合わせを送っています。", "contact_sent": "問い合わせを送りました。記入したメールへ返信します。", "contact_fail": "問い合わせを送れませんでした。しばらくしてからもう一度試してください。", "contact_network": "問い合わせを送れませんでした。通信を確認してからもう一度試してください。", "contact_teaser_title": "問い合わせ", "contact_teaser": "提携、不具合、個人情報についての質問は問い合わせページに残してください。返信は記入したメールへ届きます。顔写真は問い合わせに含まれません。", "atlas_help": "動物の名前を押すと、その基準を文章で読めます。顔写真がなくても図鑑を見られます。", "lead": "写真を読み込み、ホイールで拡大して、ドラッグで顔を指定します。左ボタンを少し押し続けると写真が動きます。複数人なら、選んだ部分だけを元の写真の下に並べます。比べる値は髪や耳ではなく、顔の縦横と目、鼻、口、顎の長さの比率です。点数は9種の動物基準との距離であり、性格テストや科学的な判定ではありません。", "cat_title": "猫顔 — 動物顔図鑑", "cat_meta": "目が大きく鼻と口が小さく、パーツが顔の中央に集まる基準です。", "cat_h1": "猫顔", "cat_p1": "猫顔は、目と鼻と口が顔の中央に集まって見える印象です。この図鑑の猫の基準は、顔が少し丸く、目が大きく、鼻と口が平均より小さいときに近くなります。", "cat_p2": "顔の横幅が縦に比べて余裕があり、目の横幅が顔に占める割合が大きいです。鼻の幅、鼻の長さ、口の幅は平均より小さいほうを猫に寄せます。目から鼻先までの中顔面も短めです。", "cat_p3": "点数が高いのは、10個を一緒に見たとき猫の基準との距離がいちばん短いという意味です。目が大きいだけでは猫顔になりません。鼻と口が広いと、熊やライオンの基準のほうが近いことがあります。", "cat_p4": "笑うと口が広がり、犬やライオンのほうへ傾くことがあります。顔を横に向けると、目の大きさが実際より小さく見えます。正面で口を閉じた写真が、この基準とは比べやすいです。", "dog_title": "犬顔 — 動物顔図鑑", "dog_meta": "目が丸く口が広く、表情が穏やかで親しみやすく見える基準です。", "dog_h1": "犬顔", "dog_p1": "犬顔は、目が丸く口が広く、表情が穏やかに見える印象です。鼻は平均の近くに置き、顔全体が少し丸いほうを犬の基準に近いと見ます。", "dog_p2": "目つき、つまり目の縦を横で割った値が丸めで、口の横幅が顔の中で広いときに犬の基準に近くなります。目と目の間が少し広いほうも一緒に見ます。", "dog_p3": "口が広いだけでは犬顔にはなりません。鼻と顎まで広いとライオンや熊のほうが近く、目つきが細いと狐や狼のほうへ行きます。", "dog_p4": "大きく笑った写真は口の比率が大きくなります。いつもの印象を知りたければ、口を閉じた写真も一枚一緒に測ってください。", "fox_title": "狐顔 — 動物顔図鑑", "fox_meta": "顔の線が長く、あご先が細く、目つきが鋭い基準です。", "fox_h1": "狐顔", "fox_p1": "狐顔は、顔の線が長く、あご先が細く、目つきが鋭い印象です。鹿のように目だけが大きい長い顔とは、目の形で分かれます。", "fox_p2": "顔の縦が横より長く、目つきが細く、あご先の横幅が狭いときに狐の基準に近くなります。鼻は幅が狭く長さは長いほう、目と目の間は少し近いほうです。", "fox_p3": "鹿顔も顔が長く顎が細いですが、鹿は目が大きいほうを見て、狐は目つきが細く鋭いほうを見ます。二つの点数が近いときは、目の形も一緒に見てください。", "fox_p4": "横顔はあご先がさらに細く見えます。髪であごを隠すと、あご先の比率は読めません。顎の線が見える正面の写真が向いています。", "rabbit_title": "兎顔 — 動物顔図鑑", "rabbit_meta": "目が大きく鼻と口が小さく、印象が丸く柔らかい基準です。", "rabbit_h1": "兎顔", "rabbit_p1": "兎顔は、目が大きく鼻と口が小さく、印象が丸く柔らかいほうです。この図鑑で目の大きさを大きく見る基準の一つです。", "rabbit_p2": "顔は丸く、目の横幅と目つきの丸みが大きく、目と目の間も少し広いです。鼻の幅と長さ、口の幅は小さく、中顔面は短いです。", "rabbit_p3": "フクロウ顔も目が大きく顔が丸いです。フクロウは目と目の間がさらに広く、顔の輪郭がより円に近いほうです。兎は鼻と口が小さく、目が大きいほうです。", "rabbit_p4": "目を大きく見開くと目の縦が伸び、兎やフクロウのほうへ動くことがあります。いつもの大きさなら、自然に開いた写真が向いています。", "owl_title": "フクロウ顔 — 動物顔図鑑", "owl_meta": "顔がとても丸く、目が大きく、目と目の間が広い基準です。", "owl_h1": "フクロウ顔", "owl_p1": "フクロウ顔は、顔がとても丸く目が大きく、パーツが丸く目立つ印象です。9つの基準の中で、顔の丸みをいちばん大きく見ます。", "owl_p2": "顔の丸み、目の大きさ、目つきの丸み、目と目の間隔をすべて大きいほうに見ます。鼻と口は小さく短く、あご先は柔らかく広いほうです。中顔面は短いです。", "owl_p3": "兎と点数が重なりやすいです。目と目の間が広く、顔の輪郭が円に近いとフクロウのほうです。鼻と口だけが小さく、顔の長さが残るなら兎や猫も一緒に見てください。", "owl_p4": "広角レンズでごく近くから撮ると、顔の中央が丸く歪みます。腕を伸ばした距離以上から撮ると、輪郭は膨らみにくくなります。", "bear_title": "熊顔 — 動物顔図鑑", "bear_meta": "顔と鼻、顎が広く、目は小さい基準です。", "bear_h1": "熊顔", "bear_p1": "熊顔は、顔と鼻、顎が広く目は小さく、どっしりしておおらかに見える印象です。目の大きさより顔の幅をよく見ます。", "bear_p2": "鼻の幅、顎の幅、あご先が平均より広く、目の大きさは小さいほうです。口も少し広いです。中顔面は平均の近くに置きます。", "bear_p3": "ライオン顔も鼻と顎が広いです。ライオンは口と顎の存在感がより大きく、目がとても小さい必要はありません。目が小さく、顔の幅が全体に広いと熊に近くなります。", "bear_p4": "ひげ、マスク、手は鼻と顎の境目を隠します。鼻先と顎の線が見えるように撮ってください。", "lion_title": "ライオン顔 — 動物顔図鑑", "lion_meta": "鼻と口、顎が広く、パーツの幅が大きい基準です。", "lion_h1": "ライオン顔", "lion_p1": "ライオン顔は、鼻と口、顎が広く、パーツが濃く存在感が大きく見える印象です。目の大きさや顔の長さより、下のほうの幅を見ます。", "lion_p2": "鼻の幅、口の幅、顎の幅を広いほうに見ます。目の大きさは平均より少し小さく、顔全体の丸みは平均から大きく離れません。", "lion_p3": "犬顔も口は広いですが、目つきが丸く親しみやすいほうです。ライオン顔は、目より鼻、口、顎の幅が点数を引き寄せます。", "lion_p4": "笑ったり話したりする瞬間は口がさらに広くなります。口を閉じた写真と比べると、表情が作った差かどうかが分かります。", "deer_title": "鹿顔 — 動物顔図鑑", "deer_meta": "顔が長く、目は大きく、顎とあご先が細い基準です。", "deer_h1": "鹿顔", "deer_p1": "鹿顔は、顔が長く目は大きく顎が細く、線が細く穏やかに見える印象です。長い顔の中で、目が大きいほうを鹿と見ます。", "deer_p2": "顔の縦は長く、目は大きく、鼻は狭く、顎とあご先は細く、中顔面は長いほうです。目つきそのものは、狐のように細くなくてもかまいません。", "deer_p3": "狐と狼も長い顔です。鹿は目が大きく顎が細い組み合わせで、狼は目が細く中顔面が長い組み合わせです。", "deer_p4": "上から見下ろす角度は顎を短くします。カメラと目が同じ高さのとき、顔の縦は歪みにくくなります。", "wolf_title": "狼顔 — 動物顔図鑑", "wolf_meta": "目つきが細く、中顔面と鼻の長さが長い基準です。", "wolf_h1": "狼顔", "wolf_p1": "狼顔は、目つきが細く中顔面が長く、顔の線が鋭く見える印象です。口は平均の近くに置き、目と鼻の距離で長い顔を読みます。", "wolf_p2": "目の縦が短く、目と目の間は近く、鼻の長さと目から鼻先までの距離が長いです。顔も長めで、あご先は細く見ます。", "wolf_p3": "狐顔と隣り合うことが多いです。狐はあご先がさらに細く鼻の幅がさらに狭いほうで、狼は目つきと中顔面の長さの比重がより大きいです。", "wolf_p4": "目を細めると、目つきの比率だけで狼のほうが高くなることがあります。いつもの開き方で撮ってください。"}};
  var FORM_URL = "https://formspree.io/f/xqppylkl";
  var is_sending = false;

  // 저장값과 브라우저 언어에서 지금 쓸 언어를 고른다.
  function current_language() {
    var from_page = document.documentElement.getAttribute("data-language");
    if (from_page === "en" || from_page === "ja" || from_page === "ko") {
      return from_page;
    }
    return "ko";
  }

  // 문구 키를 현재 언어의 문장으로 바꾼다. 없으면 한국어를 쓴다.
  function translate(key) {
    var language_code = current_language();
    var table = TEXT[language_code] || TEXT.ko;
    var template = table[key] || (TEXT.ko && TEXT.ko[key]) || "";
    if (!template) {
      console.error("안내 문구를 찾지 못했습니다.", key);
      return "";
    }
    return template;
  }

  // 화면에 적힌 고정 글을 현재 언어로 다시 채운다.
  function apply_static_text() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var text = translate(node.getAttribute("data-i18n"));
      if (text) {
        node.textContent = text;
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      var text = translate(node.getAttribute("data-i18n-aria"));
      if (text) {
        node.setAttribute("aria-label", text);
      }
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (node) {
      var text = translate(node.getAttribute("data-i18n-content"));
      if (text) {
        node.setAttribute("content", text);
      }
    });
    document.querySelectorAll("[data-i18n-value]").forEach(function (node) {
      var text = translate(node.getAttribute("data-i18n-value"));
      if (text) {
        node.value = text;
      }
    });
    var title_key = document.body.getAttribute("data-title-key");
    if (title_key) {
      var title_text = translate(title_key);
      if (title_text) {
        document.title = title_text;
      }
    }
    ["ko", "en", "ja"].forEach(function (code) {
      var button = document.getElementById("button_language_" + code);
      if (!button) {
        return;
      }
      var is_selected = code === current_language();
      button.classList.toggle("is_selected", is_selected);
      button.setAttribute("aria-pressed", is_selected ? "true" : "false");
    });
  }

  // 언어를 바꾸고 다음 방문에도 남긴다.
  function apply_language(language_code, is_persist) {
    var next_language = language_code === "en" || language_code === "ja" || language_code === "ko" ? language_code : "ko";
    document.documentElement.lang = next_language;
    document.documentElement.setAttribute("data-language", next_language);
    if (is_persist) {
      try {
        localStorage.setItem("language_code", next_language);
      } catch (error) {
        console.error("언어 선택을 저장하지 못했습니다.", error);
      }
    }
    apply_static_text();
  }

  // 화면 색과 모드 버튼 표시를 함께 바꾼다.
  function apply_theme(theme_mode) {
    var is_dark = theme_mode === "dark";
    document.documentElement.setAttribute("data-theme", is_dark ? "dark" : "light");
    var theme_color = document.querySelector('meta[name="theme-color"]');
    if (theme_color) {
      theme_color.setAttribute("content", is_dark ? "#101c16" : "#f4f1ea");
    }
    var light_button = document.getElementById("button_theme_light");
    var dark_button = document.getElementById("button_theme_dark");
    if (light_button && dark_button) {
      light_button.classList.toggle("is_selected", !is_dark);
      dark_button.classList.toggle("is_selected", is_dark);
      light_button.setAttribute("aria-pressed", String(!is_dark));
      dark_button.setAttribute("aria-pressed", String(is_dark));
    }
  }

  // 고른 모드를 바로 적용하고, 다음 방문에도 남도록 저장한다.
  function choose_theme(theme_mode) {
    var next_theme = theme_mode === "dark" ? "dark" : "light";
    try {
      apply_theme(next_theme);
      localStorage.setItem("theme_mode", next_theme);
    } catch (error) {
      console.error("화면 모드를 저장하지 못했습니다.", error);
      apply_theme(next_theme);
    }
  }

  // 문의 상태 문장을 바꾸고, 실패면 붉은색으로 표시한다.
  function set_contact_status(key, is_error) {
    var status = document.getElementById("contact_status");
    if (!status) {
      return;
    }
    status.textContent = translate(key);
    status.classList.toggle("is_error", Boolean(is_error));
  }

  // 입력한 문의를 Formspree로 보내고, 페이지는 그대로 둔다.
  async function submit_contact_form(event) {
    event.preventDefault();
    var form = document.getElementById("contact_form");
    var send_button = document.getElementById("contact_send");
    if (!form || is_sending) {
      return;
    }
    var form_data = new FormData(form);
    if (String(form_data.get("_gotcha") || "").trim()) {
      console.error("자동 입력으로 보이는 문의는 보내지 않았습니다.");
      form.reset();
      set_contact_status("contact_sent", false);
      return;
    }
    var name_value = String(form_data.get("이름") || "").trim();
    var email_value = String(form_data.get("email") || "").trim();
    var message_value = String(form_data.get("문의") || "").trim();
    form_data.set("이름", name_value);
    form_data.set("email", email_value);
    form_data.set("문의", message_value);
    form_data.set("회사", String(form_data.get("회사") || "").trim());
    var subject = translate("contact_subject");
    if (subject) {
      form_data.set("_subject", subject);
    }
    if (!name_value || !email_value || !message_value || !form.checkValidity()) {
      set_contact_status("contact_invalid", true);
      form.reportValidity();
      return;
    }
    is_sending = true;
    if (send_button) {
      send_button.disabled = true;
    }
    set_contact_status("contact_sending", false);
    try {
      var response = await fetch(FORM_URL, {
        method: "POST",
        body: form_data,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) {
        var error_detail = "";
        try {
          error_detail = await response.text();
        } catch (read_error) {
          console.error("문의 오류 내용을 읽지 못했습니다.", read_error);
        }
        console.error("문의를 보내지 못했습니다.", response.status, error_detail);
        set_contact_status("contact_fail", true);
        return;
      }
      form.reset();
      set_contact_status("contact_sent", false);
    } catch (error) {
      console.error("문의 전송 중 네트워크 오류가 났습니다.", error);
      set_contact_status("contact_network", true);
    } finally {
      is_sending = false;
      if (send_button) {
        send_button.disabled = false;
      }
    }
  }

  try {
    apply_theme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    apply_language(current_language(), false);
    var light_button = document.getElementById("button_theme_light");
    var dark_button = document.getElementById("button_theme_dark");
    if (light_button) {
      light_button.addEventListener("click", function () { choose_theme("light"); });
    }
    if (dark_button) {
      dark_button.addEventListener("click", function () { choose_theme("dark"); });
    }
    ["ko", "en", "ja"].forEach(function (code) {
      var button = document.getElementById("button_language_" + code);
      if (!button) {
        return;
      }
      button.addEventListener("click", function () {
        try {
          apply_language(code, true);
        } catch (error) {
          console.error("언어를 바꾸지 못했습니다.", error);
        }
      });
    });
    var contact_form = document.getElementById("contact_form");
    if (contact_form) {
      contact_form.addEventListener("submit", function (event) {
        submit_contact_form(event);
      });
    }
  } catch (error) {
    console.error("안내 페이지를 시작하지 못했습니다.", error);
  }
})();
