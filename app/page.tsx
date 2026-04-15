"use client";

import { motion } from "motion/react";
import {
  MessageCircle,
  BookOpen,
  Heart,
  Sparkles,
  Users,
  ArrowRight,
  Smartphone,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    icon: Users,
    title: "순모임 도우미",
    description:
      "말씀 나눔 질문 추천부터 순모임 진행 팁까지, 순모임이 더 풍성해지도록 함께해요.",
  },
  {
    icon: BookOpen,
    title: "신앙 고민 상담",
    description:
      "기도가 어렵게 느껴질 때, 말씀이 와닿지 않을 때, 성경 말씀으로 함께 답을 찾아가요.",
  },
  {
    icon: Heart,
    title: "개인 고민 상담",
    description:
      "진로, 관계, 학업... 혼자 안고 있던 고민을 편하게 나눠 보세요. 판단 없이 들어주고, 함께 기도해요.",
  },
  {
    icon: MessageCircle,
    title: "언제나 열린 대화",
    description:
      "새벽이든 시험 기간이든, 이야기하고 싶을 때 언제든 찾아와 주세요. 씨앗 순장은 항상 여기 있어요.",
  },
];

const HIGHLIGHTS = [
  {
    icon: Smartphone,
    title: "쉬운 접근",
    description: "별도 앱 설치 없이 웹으로 바로 사용",
  },
  {
    icon: Shield,
    title: "안전한 대화",
    description: "개인 정보 보호와 성경 기반 답변",
  },
  {
    icon: Clock,
    title: "24시간 상담",
    description: "시간 제약 없이 언제든 대화 가능",
  },
];

export default function AiInfoPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-yellow-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-yellow-200 to-amber-100">
              <Image
                src="/씨앗ai.png"
                alt="씨앗 순장"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-base font-bold text-gray-800">
              씨앗 순장
            </span>
          </div>
          <a
            href="https://ai.busanccc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-yellow-600"
          >
            시작하기
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
          <div className="absolute -top-10 -right-20 h-60 w-60 rounded-full bg-amber-200/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-yellow-200 to-amber-100 shadow-lg shadow-yellow-200/60 flex items-center justify-center overflow-hidden">
            <Image
              src="/씨앗ai.png"
              alt="씨앗 순장 캐릭터"
              width={180}
              height={180}
              className="object-cover scale-110"
              priority
            />
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 shadow-md"
          >
            <Sparkles className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
        >
          CCC 씨앗 순장
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-lg font-semibold text-yellow-600"
        >
          AI가 함께하는 새로운 순장 경험
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-gray-600"
        >
          순모임이 고민될 때, 신앙이 흔들릴 때, 삶이 복잡할 때
          <br />
          <span className="font-semibold text-gray-800">
            언제든 편하게 찾아올 수 있는 당신의 순장
          </span>
          이에요.
        </motion.p>

        <motion.a
          href="https://ai.busanccc.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-yellow-500/30 transition-all hover:bg-yellow-600 hover:shadow-xl hover:shadow-yellow-500/40 active:scale-95"
        >
          씨앗 순장 만나러 가기
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </section>

      {/* Mockup Section */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-sm"
        >
          <div className="relative mx-auto w-[280px] sm:w-[320px]">
            {/* Phone frame */}
            <div className="rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 shadow-2xl shadow-gray-900/30 overflow-hidden">
            
              {/* Screen */}
              <div className="relative aspect-[9/19] w-full overflow-hidden bg-white">
                <Image
                  src="/mockup-chat.png"
                  alt="씨앗 순장 AI 채팅 화면"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Reflection glow */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-b from-yellow-200/40 to-amber-100/20 blur-2xl" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-center text-sm text-gray-500"
          >
            실제 대화 화면 미리보기
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto max-w-lg rounded-2xl bg-white/80 backdrop-blur-sm p-7 shadow-sm ring-1 ring-yellow-100"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            씨앗 순장은 어떤 서비스인가요?
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-yellow-600">씨앗 순장</span>은 작은
            씨앗이 자라나 큰 나무가 되듯, 여러분의 믿음이 건강하게 성장하도록
            옆에서 함께 걷는 AI 순장이에요. 처음 믿음의 길을 걷는 분도, 오래
            걸어온 분도 누구나 환영해요.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            완벽한 답을 주는 건 아니지만, 성경 말씀 위에 서서 진심으로 이야기를
            나눠요. 사람 순장을 대신하는 게 아니라, 순장과 순원 사이의 따뜻한
            연결을 더 풍성하게 돕는 역할을 해요.
          </p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center rounded-2xl bg-white/70 backdrop-blur-sm p-4 text-center shadow-sm ring-1 ring-yellow-100"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <item.icon className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-xs font-bold text-gray-800">{item.title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mb-6 text-center text-xl font-bold text-gray-800"
        >
          이런 것들을 도와줘요
        </motion.h2>
        <div className="mx-auto grid max-w-lg gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.12, duration: 0.5 }}
              className="flex gap-4 rounded-xl bg-white/70 backdrop-blur-sm p-5 shadow-sm ring-1 ring-yellow-100"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                <feature.icon className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mx-auto max-w-lg rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 p-8 text-center shadow-lg"
        >
          <h2 className="text-xl font-bold text-white">
            지금 바로 씨앗 순장을 만나보세요
          </h2>
          <p className="mt-2 text-sm text-yellow-50">
            로그인하면 더 맞춤화된 상담을 받을 수 있어요
          </p>
          <a
            href="https://ai.busanccc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-yellow-600 shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            대화 시작하기
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-100 bg-white/60 px-6 py-10">
        <div className="mx-auto max-w-lg">
          <p className="text-center text-xs text-gray-400">
            씨앗 순장은 AI 기반 대화 서비스이며, 사람 순장의 돌봄을 보완하는
            역할을 합니다.
            <br />
            중요한 결정이나 긴급한 상황에서는 반드시 주변의 순장, 간사님께
            연락해 주세요.
          </p>

          <hr className="my-6 border-gray-200" />

          <div className="space-y-1 text-center text-[11px] leading-relaxed text-gray-400">
            <p className="font-semibold text-gray-500">
              좋은공간 미디어 | 대표 : 윤성현
            </p>
            <p>
              부산광역시 북구 낙동북로 772번가길 28, 지하 1층(구포동)
            </p>
            <p>
              사업자 등록번호 : 621-14-25692{" "}
              <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6211425692"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline"
              >
                [사업자 번호 조회]
              </a>
            </p>
            <p>통신판매번호 : 2018-부산북구-0094</p>
            <p>
              이메일 문의 :{" "}
              <a
                href="mailto:ccc9020@hanmail.net"
                className="text-yellow-600 hover:underline"
              >
                ccc9020@hanmail.net
              </a>
            </p>
          </div>

          <p className="mt-6 text-center text-[10px] text-gray-300">
            &copy; {new Date().getFullYear()} 좋은공간 미디어. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
