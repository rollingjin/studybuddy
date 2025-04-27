'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const defaultText = `1. 만주와 한반도에서 선사 문화가 발달하다

구석기 시대
- 약 70만 년 전, 만주와 한반도에서 인류 거주 시작.
- 빙하기와 간빙기 반복.
- 사냥과 채집으로 식량 확보.
- 무리 지어 이동 생활, 동굴이나 강가 막집 거주.
- 뗀석기 사용 (찍개, 주먹도끼 등), 후기에는 슴베찌르개, 돌날 제작.
- 매장 풍습 존재.
- 동물 뼈와 뿔을 이용한 예술품 제작.

연천 전곡리 주먹도끼 발견
- 1978년, 연천 전곡리에서 아슐리안 계열 주먹도끼 발견.
- 동아시아 구석기 문화 수준 입증.

신석기 시대
- 약 1만 년 전 시작.
- 기후 온난화로 사슴, 멧돼지 등 증가.
- 사냥, 채집, 농경, 목축 시작.
- 움집을 짓고 정착 생활.
- 간석기 사용 (돌낫, 돌보습), 갈돌, 갈판으로 곡식 가공.
- 빗살무늬 토기, 덧무늬 토기 제작.
- 가락바퀴, 뼈바늘로 옷과 그물 제작.
- 태양, 동물 숭배 예술품 제작.

2. 만주와 한반도에 청동기 시대가 열리다

- 기원전 2000~1500년경 청동기 보급.
- 청동기: 지배층의 무기, 장신구, 제사용 도구 제작.
- 농경 발전: 조, 피, 보리 재배, 일부 지역 벼농사 시작.
- 반달돌칼, 민무늬 토기 사용.
- 사유 재산 개념 등장, 빈부 격차, 계급 사회 발생.
- 군장 중심 제정일치 사회 형성.
- 고인돌 제작 (지배층 무덤).

3. 우리 역사상 최초의 국가, 고조선이 성립하다

- 기원전 2333년 단군왕검에 의해 고조선 건국.
- 랴오닝 지방 중심 청동기 문화 발전.
- 기원전 5세기 철기 문화 수용, 기원전 4세기 '왕' 칭호 사용.
- 위만 집권 후 철기 본격 수용, 중계 무역 발달.
- 8조법 금제: 살인, 상해, 절도 규정.
- 기원전 108년 한 무제 침입으로 멸망.

고조선 건국 이야기
- 환웅이 풍백, 우사, 운사와 인간 세계 다스림.
- 곰과 호랑이 중 곰이 웅녀가 되어 단군왕검 출생.

4. 철기가 보급되어 사회에 변화가 나타나다

- 기원전 5세기경 철기 만주·한반도에 보급.
- 철제 농기구 사용 → 농업 생산량 증가.
- 철제 무기 사용 → 전쟁 활발.
- 명도전, 붓 출토 → 중국과 교류 증거.
- 다호리 유적 (경남 창원)에서 철기, 붓, 동전 출토.

5. 철기 문화를 바탕으로 여러 나라가 성장하다

부여
- 쑹화강 유역 연맹 왕국.
- 영고(제천 행사) 개최, 순장 풍습.
- 왕권 약함, 중국과 교류.

고구려
- 기원전 37년 졸본에 건국.
- 다섯 부족 연맹, 제가회의 운영.
- 활쏘기, 말타기 중시.
- 서옥제(혼인 풍습), 동맹(제천 행사).

옥저와 동예
- 강원, 함경 해안 지역.
- 읍군·삼로가 지역 통치.
- 옥저: 민며느리제, 공동 무덤.
- 동예: 책화(경계 침범 시 보상), 무천(제천 행사).

삼한 (마한, 진한, 변한)
- 벼농사 발달, 저수지 축조.
- 덩이쇠(철 화폐) 사용.
- 소도(제사 구역) 설치 → 정치와 제사 분리.
- 신지, 읍차 등이 통치.

6. 삼국이 성립하고 발전하다

고구려
- 국내성 천도 (1세기 초).
- 태조왕: 동해안, 요동 진출.
- 고국천왕: 진대법 실시, 5부 체제 정비.
- 소수림왕: 불교 수용, 태학 설립, 율령 반포.
- 광개토 대왕: 한강 이북, 만주, 요동 정복.
- 장수왕: 평양 천도, 한성 함락, 남진 정책.

백제
- 마한 소국에서 성장.
- 고이왕: 관등·관복 제도 정비.
- 근초고왕: 남해 진출, 왜 교류, 고구려 공격.
- 무령왕: 22담로 설치, 지방 통제 강화.
- 성왕: 사비 천도, 중앙·지방 체제 재정비.

신라
- 사로국에서 시작.
- 내물왕: 김씨 왕위 세습.
- 지증왕: '신라' 국호 사용, 농업 장려.
- 법흥왕: 율령 반포, 불교 공인, 금관가야 정복.
- 진흥왕: 한강 확보, 가야 정복, 화랑도 조직.

가야
- 변한 지역에서 형성.
- 금관가야: 철 생산, 낙랑·왜와 교류.
- 대가야: 가야 연맹 주도.
- 6세기 신라에 병합.
`;

interface StudyPackProps {
  data: any;
}

export default function StudyPack({ data }: StudyPackProps) {
  const filledData = {
    summary: data?.summary || defaultText,
    quizzes: data?.quizzes || [
      {
        question: "구석기 시대 사람들은 주로 이동 생활을 하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "구석기 시대에는 주거 형태로 주로 동굴이나 막집을 이용하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "구석기 시대에 사용된 주요 도구는 무엇이었나?",
        options: ["뗀석기", "간석기", "철기", "청동기"],
        answer: "뗀석기",
      },
      {
        question: "구석기 시대 후기에 등장한 작은 날카로운 석기는 무엇인가?",
        options: ["주먹도끼", "찍개", "슴베찌르개", "갈돌"],
        answer: "슴베찌르개",
      },
      {
        question: "연천 전곡리에서 발견된 주먹도끼는 동아시아 구석기 수준을 입증하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "신석기 시대 사람들은 농경과 목축을 시작하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "신석기 시대 대표적인 토기는 무엇인가?",
        options: ["민무늬 토기", "덧무늬 토기", "빗살무늬 토기", "청자"],
        answer: "빗살무늬 토기",
      },
      {
        question: "신석기 시대에 움집을 짓고 정착 생활을 시작하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "신석기 시대 사람들이 사용한 옷과 그물 제작 도구는 무엇인가?",
        options: ["가락바퀴와 뼈바늘", "철기", "돌도끼", "주먹도끼"],
        answer: "가락바퀴와 뼈바늘",
      },
      {
        question: "청동기 시대는 주로 어떤 금속을 사용하여 무기와 장신구를 제작했는가?",
        options: ["청동", "철", "은", "금"],
        answer: "청동",
      },
      {
        question: "청동기 시대에 농업 발달로 생긴 사회적 변화는 무엇인가?",
        options: ["평등 사회", "계급 사회", "노예제 사회", "민주 사회"],
        answer: "계급 사회",
      },
      {
        question: "청동기가 농기구로 널리 사용되었다. (O/X)",
        options: ["O", "X"],
        answer: "X",
      },
      {
        question: "청동기 시대에 널리 제작된 지배층 무덤은 무엇인가?",
        options: ["석굴암", "돌무지무덤", "고인돌", "굴식돌방무덤"],
        answer: "고인돌",
      },
      {
        question: "청동기 시대 사람들은 어떤 곡물을 주로 재배했는가?",
        options: ["밀", "조", "옥수수", "감자"],
        answer: "조",
      },
      {
        question: "고인돌은 청동기 시대의 평민 무덤이다. (O/X)",
        options: ["O", "X"],
        answer: "X",
      },
      {
        question: "청동기 시대에 제정일치 사회가 형성되었다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "청동기 시대에는 농경과 목축이 발달하였다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "청동기는 주로 지배층의 무기, 장신구, 제사용 도구로 사용되었다. (O/X)",
        options: ["O", "X"],
        answer: "O",
      },
      {
        question: "청동기 시대에 등장한 대표적인 토기는 무엇인가?",
        options: ["빗살무늬 토기", "민무늬 토기", "덧무늬 토기", "청자"],
        answer: "민무늬 토기",
      },
      // 추가 2단원 퀴즈 시작
      {
        question: "청동기 시대에 청동은 주로 어떤 용도로 사용되었는가?",
        options: ["농기구 제작", "생활용품 제작", "무기와 제사용 도구 제작", "장난감 제작"],
        answer: "무기와 제사용 도구 제작",
      },
      {
        question: "청동기 시대의 일반 농기구는 청동으로 만들었다. (O/X)",
        options: ["O", "X"],
        answer: "X",
      },
      {
        question: "청동기 시대에 농업 발달로 나타난 사회적 변화는?",
        options: ["계급 사회 형성", "공동 생산 체제 유지", "평등 사회 유지", "모든 재산 공유"],
        answer: "계급 사회 형성",
      },
      {
        question: "청동기 시대를 대표하는 무덤 양식은 무엇인가?",
        options: ["돌무지무덤", "고인돌", "굴식돌방무덤", "적석총"],
        answer: "고인돌",
      },
      {
        question: "청동기 시대의 주요 곡물은 무엇인가?",
        options: ["조, 피, 보리", "밀, 감자", "옥수수, 콩", "벼, 고구마"],
        answer: "조, 피, 보리",
      },
      {
        question: "청동기 시대에 만들어진 토기의 대표적인 유형은 무엇인가?",
        options: ["빗살무늬 토기", "덧무늬 토기", "민무늬 토기", "청자"],
        answer: "민무늬 토기",
      },
      {
        question: "청동기 시대에 군장이 가진 권력은 어떤 특징이 있었나?",
        options: ["농업에만 한정", "종교적 제사권과 정치적 권력을 겸함", "전쟁 수행권만 가짐", "단순 생산 활동 지도"],
        answer: "종교적 제사권과 정치적 권력을 겸함",
      },
      {
        question: "청동기 시대의 고인돌은 무엇을 상징하는가?",
        options: ["단순 주거지", "생산물 저장 창고", "지배자의 권력과 부", "신분 평등"],
        answer: "지배자의 권력과 부",
      },
      {
        question: "청동기 시대 마을은 어떤 지형에 주로 형성되었는가?",
        options: ["깊은 산속", "강 하류 저지대", "바닷가", "나지막한 언덕 위"],
        answer: "나지막한 언덕 위",
      },
      {
        question: "청동기 시대에 부족 간에 전쟁이 벌어졌던 주된 이유는 무엇인가?",
        options: ["종교적 이유", "식량 약탈과 땅 확보", "문화 교류", "기후 변화 대응"],
        answer: "식량 약탈과 땅 확보",
      },
      // 추가 2단원 퀴즈 끝
      // New Unit 3 quizzes added below
      {
        question: "단군왕검이 고조선을 건국한 연도는?",
        options: ["기원전 3000년", "기원전 2333년", "기원전 108년", "기원전 5세기"],
        answer: "기원전 2333년",
      },
      {
        question: "고조선 건국 신화에서 웅녀는 무엇을 먹고 사람이 되었나?",
        options: ["인삼과 꿀", "쑥과 마늘", "곡물과 물고기", "버섯과 벌꿀"],
        answer: "쑥과 마늘",
      },
      {
        question: "고조선이 본격적으로 철기 문화를 수용한 시기는?",
        options: ["기원전 5세기", "기원전 2세기", "기원전 4세기", "기원전 1세기"],
        answer: "기원전 2세기",
      },
      {
        question: "고조선의 8조법 금제 중 맞지 않는 것은?",
        options: [
          "살인자는 사형에 처한다",
          "상해를 입히면 죽여야 한다",
          "절도범은 노비로 삼을 수 있다",
          "절도범이 벌금을 내면 노비가 되지 않는다",
        ],
        answer: "상해를 입히면 죽여야 한다",
      },
      {
        question: "고조선의 중심지는 어디였는가?",
        options: ["랴오닝 지방", "한반도 남부", "만주 북부", "낙랑 지역"],
        answer: "랴오닝 지방",
      },
      {
        question: "고조선이 성장하면서 사용한 칭호는 무엇인가?",
        options: ["제후", "왕", "대군장", "신지"],
        answer: "왕",
      },
      {
        question: "위만이 고조선을 집권한 시기의 변화로 옳지 않은 것은?",
        options: [
          "본격적 철기 문화 수용",
          "농업 발전",
          "무역로 장악",
          "수도를 남쪽으로 이전",
        ],
        answer: "수도를 남쪽으로 이전",
      },
      {
        question: "고조선 멸망의 원인은?",
        options: ["백제의 침략", "고구려의 공격", "한나라 무제의 침략", "왜의 침입"],
        answer: "한나라 무제의 침략",
      },
      {
        question: "단군 신화에서 환웅이 다스렸다고 하는 인간 세상은 무엇을 주관했는가?",
        options: ["군사와 정치", "질병과 형벌", "수렵과 농업", "어로와 목축"],
        answer: "질병과 형벌",
      },
      {
        question: "고조선의 법 제도 중 '절도범은 노비가 된다'는 규정은 무엇을 의미하는가?",
        options: [
          "사유 재산 보호 강화",
          "신분제도 철폐",
          "사냥 권리 보장",
          "농업 장려 정책",
        ],
        answer: "사유 재산 보호 강화",
      },
      // 4단원 "철기가 보급되어 사회에 변화가 나타나다" 퀴즈 시작
      {
        question: "철기의 사용은 농업 생산량을 어떻게 변화시켰는가?",
        options: ["감소시켰다", "증가시켰다", "변화가 없었다", "오히려 농업을 쇠퇴시켰다"],
        answer: "증가시켰다",
      },
      {
        question: "철제 농기구의 특징은 무엇인가?",
        options: ["약하고 부드럽다", "단단하고 날카롭다", "무겁고 사용이 불편하다", "청동기로 대체되었다"],
        answer: "단단하고 날카롭다",
      },
      {
        question: "철기 시대에는 청동기가 주로 어떤 용도로 사용되었나?",
        options: ["농기구 제작", "장난감 제작", "의식용 도구와 장신구 제작", "건축 재료 제작"],
        answer: "의식용 도구와 장신구 제작",
      },
      {
        question: "철기 보급 시기는 언제인가?",
        options: ["기원전 5세기", "기원전 1세기", "기원전 10세기", "기원후 1세기"],
        answer: "기원전 5세기",
      },
      {
        question: "철기 보급으로 인해 발생한 사회 변화는?",
        options: ["부족 단위의 평화 유지", "부족 간 전쟁 증가", "무역 감소", "농업 포기"],
        answer: "부족 간 전쟁 증가",
      },
      {
        question: "초기 철기 시대 유적지 중 하나로, 다양한 철기와 붓이 발견된 곳은?",
        options: ["고창 고인돌", "다호리 유적", "부여 나성", "강화도 유적"],
        answer: "다호리 유적",
      },
      {
        question: "다호리 유적에서 발견된 붓은 무엇을 의미하는가?",
        options: ["농기구 사용", "한자의 전래", "금속 공예 발달", "종교의식"],
        answer: "한자의 전래",
      },
      {
        question: "철기 시대에 중국과의 교류를 증명하는 유물은?",
        options: ["빗살무늬 토기", "명도전", "거문고", "고인돌"],
        answer: "명도전",
      },
      {
        question: "철제 무기의 사용은 어떤 결과를 가져왔는가?",
        options: ["평화로운 사회 유지", "전쟁의 활성화", "군사 활동 감소", "청동기의 부활"],
        answer: "전쟁의 활성화",
      },
      {
        question: "철기 보급이 사회에 미친 가장 큰 영향은 무엇인가?",
        options: ["평등 사회 구축", "생산력 증대와 영토 확장", "농업 감소", "문화 쇠퇴"],
        answer: "생산력 증대와 영토 확장",
      },
      // 4단원 퀴즈 끝
      // 추가 6단원 퀴즈 시작
      {
        question: "고구려의 태조왕은 어떤 업적을 남겼는가?",
        options: ["동해안 진출", "진대법 실시", "율령 반포", "불교 수용"],
        answer: "동해안 진출",
      },
      {
        question: "고구려 고국천왕의 정책 중 하나는?",
        options: ["진대법 실시", "율령 반포", "불교 공인", "화랑도 조직"],
        answer: "진대법 실시",
      },
      {
        question: "고구려 소수림왕이 한 일은?",
        options: ["불교 수용과 태학 설립", "한강 확보", "가야 정복", "남해 진출"],
        answer: "불교 수용과 태학 설립",
      },
      {
        question: "백제 근초고왕의 업적은?",
        options: ["남해 진출과 왜 교류", "사비 천도", "한강 이북 장악", "율령 반포"],
        answer: "남해 진출과 왜 교류",
      },
      {
        question: "신라 지증왕이 사용한 국호는?",
        options: ["사로국", "신라", "가야", "백제"],
        answer: "신라",
      },
      {
        question: "신라 법흥왕의 업적은?",
        options: ["율령 반포와 불교 공인", "금관가야 건국", "평양 천도", "고구려 공격"],
        answer: "율령 반포와 불교 공인",
      },
      {
        question: "진흥왕이 확보한 지역은?",
        options: ["만주", "한강 유역", "요동", "남해안"],
        answer: "한강 유역",
      },
      {
        question: "가야 중 철 생산이 유명했던 곳은?",
        options: ["대가야", "변한", "금관가야", "마한"],
        answer: "금관가야",
      },
      {
        question: "6세기에 가야는 어떤 결과를 맞았는가?",
        options: ["백제에 병합", "고구려에 복속", "신라에 병합", "왜에 점령"],
        answer: "신라에 병합",
      },
      {
        question: "백제 성왕이 추진한 주요 정책은?",
        options: ["사비 천도와 중앙 체제 재정비", "고구려 남진", "철기 문화 전파", "한강 이북 진출"],
        answer: "사비 천도와 중앙 체제 재정비",
      },
      // 추가 6단원 퀴즈 끝
    ],
  };

  const hasContent =
    (filledData.summary && filledData.summary.trim()) ||
    (filledData.quizzes && filledData.quizzes.length > 0);
  if (!hasContent) return null;

  // Parse summary into chapters by lines starting with number and dot (e.g. "1.", "2.", ...)
  const chapters: { title: string; contentLines: string[] }[] = [];
  if (filledData.summary) {
    const lines = filledData.summary.split('\n');
    let currentChapter: { title: string; contentLines: string[] } | null = null;
    const chapterTitleRegex = /^\d+\.\s/;

    lines.forEach((line) => {
      if (chapterTitleRegex.test(line)) {
        // Start new chapter
        if (currentChapter) {
          chapters.push(currentChapter);
        }
        currentChapter = { title: line.trim(), contentLines: [] };
      } else {
        if (currentChapter) {
          currentChapter.contentLines.push(line);
        }
      }
    });
    if (currentChapter) {
      chapters.push(currentChapter);
    }
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(filledData.quizzes.length).fill(null));
  // Track wrong answers: array of quiz indices
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  // To avoid hydration mismatches, initialize with quizzes (no shuffledOptions) on server,
  // then shuffle on client after mount.
  const [shuffledQuizzes, setShuffledQuizzes] = useState(filledData.quizzes);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only shuffle quizzes on client side, after mount
      if (filledData?.quizzes && filledData.quizzes.length > 0) {
        const shuffled = filledData.quizzes.map((quiz) => ({
          ...quiz,
          shuffledOptions: [...quiz.options].sort(() => Math.random() - 0.5),
        }));
        setShuffledQuizzes(shuffled);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle answer selection, track wrong answers
  const handleAnswerSelection = (quizIndex: number, option: string) => {
    if (selectedAnswers[quizIndex] == null) {
      const newAnswers = [...selectedAnswers];
      newAnswers[quizIndex] = option;
      setSelectedAnswers(newAnswers);
      // Check if wrong
      if (option !== shuffledQuizzes[quizIndex].answer) {
        setWrongAnswers((prev) => prev.includes(quizIndex) ? prev : [...prev, quizIndex]);
      } else {
        // If correct and was previously marked wrong, remove from wrongAnswers
        setWrongAnswers((prev) => prev.filter((idx) => idx !== quizIndex));
      }
    }
  };

  // Retry wrong answer: reset selected answer for that quiz
  const handleRetryWrongAnswer = (quizIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[quizIndex] = null;
    setSelectedAnswers(newAnswers);
    setWrongAnswers((prev) => prev.filter((idx) => idx !== quizIndex));
  };

  // Split quizzes into six groups: first unit (questions 0-8), second unit (questions 9-18), third unit (questions 19-28), fourth unit (questions 29-38), fifth unit (39-48), sixth unit (49+)
  const firstUnitQuizzes = shuffledQuizzes.slice(0, 9);
  const secondUnitQuizzes = shuffledQuizzes.slice(9, 19);
  const thirdUnitQuizzes = shuffledQuizzes.slice(19, 29);
  const fourthUnitQuizzes = shuffledQuizzes.slice(29, 39);
  const fifthUnitQuizzes = shuffledQuizzes.slice(
    firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length + fourthUnitQuizzes.length,
    firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length + fourthUnitQuizzes.length + 10
  );
  const sixthUnitQuizzes = shuffledQuizzes.slice(
    firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length + fourthUnitQuizzes.length + fifthUnitQuizzes.length
  );
  console.log("전체 퀴즈 개수:", shuffledQuizzes.length);
  console.log("6단원 퀴즈:", sixthUnitQuizzes);

  return (
    <>

      {/* 퀴즈 영역 (흰색 배경) */}
      {firstUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 1. 만주와 한반도에서 선사 문화가 발달하다</h2>
          <div className="space-y-4 sm:space-y-2">
            {firstUnitQuizzes.map((quiz, index) => (
              <div key={index} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                <ul className="space-y-2 sm:space-y-1">
                  {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                  ${selectedAnswers[index] === option 
                    ? option === quiz.answer 
                      ? 'bg-green-100 border-green-400' 
                      : 'bg-red-100 border-red-400' 
                    : 'hover:bg-gray-100 hover:border-gray-400'}
                `}
                      onClick={() => handleAnswerSelection(index, option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                {selectedAnswers[index] != null && (
                  <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                    {selectedAnswers[index] === quiz.answer ? (
                      <span className="text-green-600">✅ 정답입니다! 🐈</span>
                    ) : (
                      <>
                        <span className="text-red-600">
                          ❌ 오답입니다. 정답: {quiz.answer} 🐶
                        </span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                          onClick={() => handleRetryWrongAnswer(index)}
                        >
                          Retry
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Divider between quiz sections */}
      <div className="my-10 sm:my-6 border-t border-gray-400"></div>

      {secondUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 2. 만주와 한반도에 청동기 시대가 열리다</h2>
          <div className="space-y-4 sm:space-y-2">
            {secondUnitQuizzes.map((quiz, index) => {
              // index offset for selectedAnswers is firstUnitQuizzes.length
              const quizIndex = index + firstUnitQuizzes.length;
              return (
                <div key={quizIndex} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                  <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                  ${selectedAnswers[quizIndex] === option 
                    ? option === quiz.answer 
                      ? 'bg-green-100 border-green-400' 
                      : 'bg-red-100 border-red-400' 
                    : 'hover:bg-gray-100 hover:border-gray-400'}
                `}
                        onClick={() => handleAnswerSelection(quizIndex, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[quizIndex] != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selectedAnswers[quizIndex] === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <>
                          <span className="text-red-600">
                            ❌ 오답입니다. 정답: {quiz.answer} 🐶
                          </span>
                          <button
                            className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                            onClick={() => handleRetryWrongAnswer(quizIndex)}
                          >
                            Retry
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Divider between quiz sections */}
      <div className="my-10 sm:my-6 border-t border-gray-400"></div>

      {thirdUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 3. 우리 역사상 최초의 국가, 고조선이 성립하다</h2>
          <div className="space-y-4 sm:space-y-2">
            {thirdUnitQuizzes.map((quiz, index) => {
              const quizIndex = index + firstUnitQuizzes.length + secondUnitQuizzes.length;
              return (
                <div key={quizIndex} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                  <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                  ${selectedAnswers[quizIndex] === option
                    ? option === quiz.answer
                      ? 'bg-green-100 border-green-400'
                      : 'bg-red-100 border-red-400'
                    : 'hover:bg-gray-100 hover:border-gray-400'}
                `}
                        onClick={() => handleAnswerSelection(quizIndex, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[quizIndex] != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selectedAnswers[quizIndex] === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <>
                          <span className="text-red-600">
                            ❌ 오답입니다. 정답: {quiz.answer} 🐶
                          </span>
                          <button
                            className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                            onClick={() => handleRetryWrongAnswer(quizIndex)}
                          >
                            Retry
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Divider between quiz sections */}
      <div className="my-10 sm:my-6 border-t border-gray-400"></div>

      {fourthUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 4. 철기가 보급되어 사회에 변화가 나타나다</h2>
          <div className="space-y-4 sm:space-y-2">
            {fourthUnitQuizzes.map((quiz, index) => {
              const quizIndex = index + firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length;
              return (
                <div key={quizIndex} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                  <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                      ${selectedAnswers[quizIndex] === option 
                        ? option === quiz.answer 
                          ? 'bg-green-100 border-green-400' 
                          : 'bg-red-100 border-red-400' 
                        : 'hover:bg-gray-100 hover:border-gray-400'}
                    `}
                        onClick={() => handleAnswerSelection(quizIndex, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[quizIndex] != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selectedAnswers[quizIndex] === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <>
                          <span className="text-red-600">
                            ❌ 오답입니다. 정답: {quiz.answer} 🐶
                          </span>
                          <button
                            className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                            onClick={() => handleRetryWrongAnswer(quizIndex)}
                          >
                            Retry
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Divider between quiz sections */}
      <div className="my-10 sm:my-6 border-t border-gray-400"></div>

      {fifthUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 5. 철기 문화를 바탕으로 여러 나라가 성장하다</h2>
          <div className="space-y-4 sm:space-y-2">
            {fifthUnitQuizzes.map((quiz, index) => {
              const quizIndex = index + firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length + fourthUnitQuizzes.length;
              return (
                <div key={quizIndex} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                  <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                    ${selectedAnswers[quizIndex] === option 
                      ? option === quiz.answer 
                        ? 'bg-green-100 border-green-400' 
                        : 'bg-red-100 border-red-400' 
                      : 'hover:bg-gray-100 hover:border-gray-400'}
                  `}
                        onClick={() => handleAnswerSelection(quizIndex, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[quizIndex] != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selectedAnswers[quizIndex] === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <>
                          <span className="text-red-600">
                            ❌ 오답입니다. 정답: {quiz.answer} 🐶
                          </span>
                          <button
                            className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                            onClick={() => handleRetryWrongAnswer(quizIndex)}
                          >
                            Retry
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Divider between quiz sections */}
      <div className="my-10 sm:my-6 border-t border-gray-400"></div>

      {sixthUnitQuizzes.length > 0 && (
        <div className="mt-10 sm:mt-6 bg-white p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-lg font-extrabold mb-6 sm:mb-3 text-yellow-600">📝 퀴즈 - 6. 삼국이 성립하고 발전하다</h2>
          <div className="space-y-4 sm:space-y-2">
            {sixthUnitQuizzes.map((quiz, index) => {
              const quizIndex = index + firstUnitQuizzes.length + secondUnitQuizzes.length + thirdUnitQuizzes.length + fourthUnitQuizzes.length + fifthUnitQuizzes.length;
              return (
                <div key={quizIndex} className="border border-gray-300 rounded-lg shadow-md p-4 sm:p-2">
                  <p className="font-semibold text-gray-800 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                  ${selectedAnswers[quizIndex] === option 
                    ? option === quiz.answer 
                      ? 'bg-green-100 border-green-400' 
                      : 'bg-red-100 border-red-400' 
                    : 'hover:bg-gray-100 hover:border-gray-400'}
                `}
                        onClick={() => handleAnswerSelection(quizIndex, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[quizIndex] != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selectedAnswers[quizIndex] === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <>
                          <span className="text-red-600">
                            ❌ 오답입니다. 정답: {quiz.answer} 🐶
                          </span>
                          <button
                            className="ml-2 px-2 py-1 bg-blue-200 hover:bg-blue-400 text-blue-900 rounded text-xs font-bold"
                            onClick={() => handleRetryWrongAnswer(quizIndex)}
                          >
                            Retry
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

      {/* Wrong Answer Section */}
      {wrongAnswers.length > 0 && (
        <div className="mt-12 sm:mt-8 bg-red-50 p-6 sm:p-2 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-lg font-extrabold mb-4 text-red-600">❌ 오답 노트 & 재도전</h2>
          <p className="mb-4 text-gray-700 sm:text-sm">아래는 틀린 문제들입니다. 다시 선택해 보세요!</p>
          <div className="space-y-4 sm:space-y-2">
            {wrongAnswers.map((quizIndex) => {
              const quiz = shuffledQuizzes[quizIndex];
              const selected = selectedAnswers[quizIndex];
              return (
                <div key={quizIndex} className="border border-red-300 rounded-lg shadow-md p-4 sm:p-2 bg-white">
                  <p className="font-semibold text-red-700 mb-2 sm:text-base">{quiz.question}</p>
                  <ul className="space-y-2 sm:space-y-1">
                    {(quiz.shuffledOptions ?? []).map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`cursor-pointer px-4 py-2 sm:px-2 sm:py-1 rounded-lg border text-gray-700 text-sm sm:text-xs transition-all
                          ${selected === option ? (option === quiz.answer ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400') : 'hover:bg-gray-100 hover:border-gray-400'}
                        `}
                        onClick={() => {
                          // Allow answer modification: always allow selecting a new answer
                          const newAnswers = [...selectedAnswers];
                          newAnswers[quizIndex] = option;
                          setSelectedAnswers(newAnswers);
                          // Dynamically update wrongAnswers based on the new selection
                          if (option !== quiz.answer) {
                            setWrongAnswers((prev) => prev.includes(quizIndex) ? prev : [...prev, quizIndex]);
                          } else {
                            setWrongAnswers((prev) => prev.filter((idx) => idx !== quizIndex));
                          }
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  {selected != null && (
                    <div className="mt-2 font-semibold sm:text-sm flex items-center gap-2">
                      {selected === quiz.answer ? (
                        <span className="text-green-600">✅ 정답입니다! 🐈</span>
                      ) : (
                        <span className="text-red-600">❌ 오답입니다. 🐶</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
          </div>
        </div>
      )}
    </>
  );
}