'use client'

import { useEffect, useState } from 'react'

const T = {
  en: {
    "nav.about": "About", "nav.expertise": "Expertise", "nav.papers": "Papers",
    "nav.projects": "Projects", "nav.career": "Career", "nav.contact": "Contact",
    "hero.tag": "Physical AI Engineer",
    "hero.name": 'Muhammad Miftah <em>Faridh</em>',
    "hero.subtitle": "Building intelligent systems at the intersection of AI, robotics, and edge computing. From LLM fine-tuning and smart braille printers to autonomous marine vehicles.",
    "hero.affiliation": 'M.S. Electronics Engineering, Kookmin University &mdash; Currently at <a href="https://orinu.ai/" target="_blank" rel="noopener">orinu.ai</a>, Seoul',
    "hero.cta": "Get in Touch", "hero.stat1": "Publications", "hero.stat2": "Int’l Awards",
    "hero.stat3": "Gov. Projects", "hero.stat4": "Open Source",
    "about.tag": "About", "about.title": "Engineer, Researcher<br>&amp; Problem Solver",
    "about.p1": "AI Developer and Robotics Engineer with hands-on experience in LLM fine-tuning (T5, Gemma, LLaMA with LoRA, QLoRA, and RAG) and real-time robotic systems using ROS 2 and NVIDIA Jetson platforms. Proven track record in applied research, publishing papers in IEEE Access and MDPI Sensors, and building intelligent systems across industries.",
    "about.p2": "From autonomous marine vehicles at University of Indonesia’s Robotics Team to 5G-connected drones at XL Axiata, from Optical Camera Communication research at Kookmin University to Smart Braille Printers at orinu.ai — I bridge AI and robotics to solve real-world problems.",
    "about.card1.title": "M.S. EE, Kookmin University", "about.card1.desc": "Seoul, South Korea (2022–2024)",
    "about.card2.title": "B.S. Computer Engineering", "about.card2.desc": "University of Indonesia (2018–2022)",
    "about.card3.title": "Physical AI Engineer",
    "about.card3.desc": '<a href="https://orinu.ai/" target="_blank" rel="noopener" style="color: var(--accent);">orinu.ai</a> — Hwaseong, KR',
    "about.card4.title": "Based in Seoul", "about.card4.desc": "Open to global opportunities",
    "expertise.tag": "Expertise", "expertise.title": "Core Competencies",
    "expertise.desc": "Bridging AI research and engineering across robotics, edge computing, communications, and intelligent systems.",
    "expertise.c1.title": "LLM & Generative AI",
    "expertise.c1.desc": "Fine-tuning large language models (T5, Gemma, LLaMA) with LoRA, QLoRA, and RAG pipelines. Building translation engines and conversational AI for production deployment.",
    "expertise.c2.title": "Robotics & ROS 2",
    "expertise.c2.desc": "Real-time robotic systems on Jetson platforms. Robotic arms, autonomous marine vehicles (USV/AUV), and drone systems with integrated computer vision pipelines.",
    "expertise.c3.title": "Edge AI & Deployment",
    "expertise.c3.desc": "8+ production Edge AI systems on NVIDIA Jetson. TensorRT INT8/FP16 optimization achieving 67% model compression. Full-stack: FastAPI + React + WebSocket streaming.",
    "expertise.c4.title": "Deep Learning",
    "expertise.c4.desc": "CNN, LSTM, GCN, and hybrid architectures for signal processing, image recognition, and time-series forecasting. Published research on solar energy prediction and OCC systems.",
    "expertise.c5.title": "Optical Camera Comm.",
    "expertise.c5.desc": "2D MIMO OCC systems, CSMA/CA MAC protocol design for optical communication, and ultra-high-rate OCC with precision localization. Published in IEEE Access.",
    "expertise.c6.title": "IoT & Energy Systems",
    "expertise.c6.desc": "Intelligent IoE platforms, sensor integration with LoRa mesh networks, solar energy forecasting with GCN-BiLSTM models, VPP ESS platforms, and V2X communication.",
    "pub.tag": "Publications", "pub.title": "Research Papers",
    "pub.desc": "Peer-reviewed publications in international journals, conferences, and technical competitions.",
    "proj.tag": "Portfolio", "proj.title": "Projects & Open Source",
    "proj.desc": "AI/ML research, Edge AI deployments on Jetson, IoT systems, and full-stack applications.",
    "proj.github": "View on GitHub",
    "proj.cat1": "AI & Deep Learning Research", "proj.cat1_count": "2 projects",
    "proj.cat2": "Edge AI on NVIDIA Jetson", "proj.cat2_count": "8 projects",
    "proj.cat3": "IoT & Security Systems", "proj.cat3_count": "2 projects",
    "proj.cat4": "Web Applications", "proj.cat4_count": "4 projects",
    "proj.pv.title": "PV Solar Power Forecasting API",
    "proj.pv.desc": "Next-day photovoltaic solar power prediction across 10 South Korean sites. Flask REST API with 6 deep learning architectures trained on Korea Meteorological Administration weather data.",
    "proj.pv.detail": "<strong>Models:</strong> BiLSTM, Stacked BiLSTM, LSTM, ConvLSTM, RNN — trained on 12 weather features with 24-hour sliding window. Published in Sensors 2023 (MDPI) and ICUFN 2023.",
    "proj.pv.m1": "Solar sites", "proj.pv.m2": "DL models", "proj.pv.m3": "Features",
    "proj.energy.title": "Smart Home Energy Forecasting",
    "proj.energy.desc": "Comparative study: ARIMA/SARIMA/SARIMAX vs LSTM/BiLSTM/GRU/RNN on 503,910 smart meter records with weather features.",
    "proj.energy.detail": "<strong>Key finding:</strong> LSTM Multivariate achieves MSE=0.022, MAE=0.110 — significantly outperforming classical methods. BiLSTM R²=0.9549 on Busan data.",
    "proj.langgraph.title": "LangGraph Chatbot Playground",
    "proj.langgraph.desc": "Experimental conversational AI with LangGraph — stateful multi-turn dialogue, agent workflows, and LLM orchestration using OpenAI/Anthropic/OpenRouter APIs.",
    "proj.deploy.title": "Edge AI Deployment Platform",
    "proj.deploy.desc": "Central deployment hub for all 8 edge AI projects. TensorRT INT8/FP16 model compression achieving 67% total size reduction (482 MB to 152 MB).",
    "proj.deploy.m1": "Compression", "proj.deploy.m2": "Total size", "proj.deploy.m3": "AI projects",
    "proj.objdet.title": "Object Detection",
    "proj.objdet.desc": "Real-time 80-class COCO detection. Full stack: FastAPI backend, React/TypeScript frontend, WebSocket streaming. TensorRT FP16 on Jetson Nano.",
    "proj.attend.title": "Face Recognition Attendance",
    "proj.attend.desc": "InsightFace buffalo_s with RetinaFace + ArcFace + MiniFASNet anti-spoofing. INT8 compressed: 158 MB to 40 MB. 15–20 FPS.",
    "proj.ppe.title": "PPE Detection",
    "proj.ppe.desc": "Multi-PPE detection (Hardhat, Vest, Glasses, Gloves, Mask) with zone-based compliance. YOLOv8n with TensorRT INT8 (3.4 MB model).",
    "proj.alpr.title": "License Plate Recognition",
    "proj.alpr.desc": "YOLOv8 plate detection + EasyOCR/PaddleOCR. SORT vehicle tracking. Indonesian plate format validation.",
    "proj.security.title": "Security Analytics",
    "proj.security.desc": "Motion detection (MOG2/KNN), polygon zone-based intrusion detection, and loitering detection. YOLOv8n + DeepSort tracking.",
    "proj.analytics.title": "People Analytics",
    "proj.analytics.desc": "Line crossing counter, zone occupancy monitoring, traffic flow analysis. HOG fallback. 25–30 FPS with TensorRT on Jetson.",
    "proj.gesture.title": "Hand Gesture Recognition",
    "proj.gesture.desc": "MediaPipe 21-landmark hand tracking with 9 gesture classes. Custom ML classifier training pipeline. 15–20 FPS on Jetson.",
    "proj.fitness.title": "Exercise Tracker",
    "proj.fitness.desc": "Push-up, squat, plank tracking using MediaPipe/YOLOv8-pose/MoveNet. Rep counting via joint angle calculation.",
    "proj.server.title": "Server Room Monitoring",
    "proj.server.desc": "Multi-sensor IoT: Arduino nodes with DHT22, dust, vibration, sound. LoRa wireless mesh. Python + MariaDB + Telegram bot alerts.",
    "proj.intruder.title": "Intruder Detection",
    "proj.intruder.desc": "Real-time face detection using OpenCV DNN (Caffe SSD) with automatic Telegram photo alerts.",
    "proj.vtt.title": "VTT — Voice-to-Text",
    "proj.vtt.desc": "Indonesian speech-to-text using Google Cloud Speech-to-Text API. FLAC audio via FFmpeg. Laravel backend.",
    "proj.tweet.title": "TweetBullyingDetector",
    "proj.tweet.desc": "Cyberbullying detection and reporting platform for Twitter/X. Keyword-based tweet search + community reporting.",
    "proj.vetracker.title": "VeTracker — Vehicle Manager",
    "proj.vetracker.desc": "Vehicle inventory management with CRUD, image upload, multi-user team support with Jetstream 2FA.",
    "proj.brocket.title": "Brocket — Bracket Manager",
    "proj.brocket.desc": "Tournament management with auto-generated randomized brackets, podium tracking, public bracket sharing.",
    "awards.tag": "Honors", "awards.title": "Awards & Competitions",
    "awards.desc": "Recognized in international and national robotics competitions representing Indonesia.",
    "awards.a1.place": "1st Place", "awards.a1.desc": "International underwater robotics competition",
    "awards.a2.place": "3rd Place", "awards.a3.place": "3rd Place — Sensor Optimization",
    "awards.a4.place": "3rd Place", "awards.a4.desc": "Kontes Kapal Cepat Tak Berawak Nasional, Indonesia",
    "awards.a5.place": "Best Poster", "awards.a5.desc": "Kontes Kapal Cepat Tak Berawak Nasional, Indonesia",
    "research.tag": "Research", "research.title": "Government-Funded Projects",
    "research.desc": "Contributed to major national research projects at Kookmin University, funded by Korean government ministries.",
    "research.r1": "Renewable Energy Grid Stabilization",
    "research.r2": "5G Multi-Band Industrial Small Cell Development",
    "research.r3": "Intelligent IoE Data Research Platform",
    "research.r4": "V2X Quantum AI Triple Sensor OCC System",
    "research.r5": "VPP ESS Service Platform Development",
    "research.r6": "Ultra High Rate OCC & Precision Localization",
    "exp.tag": "Career", "exp.title": "Professional Journey",
    "exp.e1.date": "Oct 2025 — Present", "exp.e1.role": "Physical AI Engineer",
    "exp.e1.l1": "LLM fine-tuning for translation & Retrieval-Augmented Generation (RAG) projects",
    "exp.e1.l2": "Smart Braille Printer development using robotic systems",
    "exp.e1.l3": "Robotic arm development with ROS 2 on Jetson platforms",
    "exp.e2.role": "AI & IoT Researcher",
    "exp.e2.l1": "Engineered LED detection and tracking systems for adverse weather conditions",
    "exp.e2.l2": "Built time-series forecasting models to predict PV power generation using weather data",
    "exp.e2.l3": "Published 2 international journals and 2 conference papers within 2 years",
    "exp.e2.l4": "Contributed to 8 government-funded research projects (MOTIE, MSIT, MSS)",
    "exp.e3.role": "Internet of Things Intern",
    "exp.e3.l1": "Drone project development with 5G connectivity",
    "exp.e3.l2": "Implemented computer vision on drones with 100% success rate",
    "exp.e4.role": "IT Business Analyst",
    "exp.e4.l1": "Analyzed and developed CRM solutions for startups and state-owned companies",
    "exp.e4.l2": "Led NLP-based Audio Transcriber project for quality assurance using GCP",
    "exp.e5.role": "Vice Head of Programmer / AI Engineer",
    "exp.e5.org": "AMV UI & Tim Robotika — University of Indonesia",
    "exp.e5.l1": "Managed 6 AI Division members developing autonomous control algorithms for USV and AUV robots",
    "exp.e5.l2": "Competed in international competitions: AUVSI Roboboat (USA), ASEAN MATE ROV, KKCTBN",
    "exp.e5.l3": "Built automation and control systems using ROS, Arduino, and computer vision",
    "edu.tag": "Education", "edu.title": "Academic Background",
    "edu.e1.degree": "Master’s Degree", "edu.e1.field": "Electrical & Electronics Engineering",
    "edu.e2.degree": "Bachelor’s Degree", "edu.e2.school": "University of Indonesia",
    "edu.e2.field": "Computer Engineering · GPA 3.43",
    "skills.tag": "Stack", "skills.title": "Technical Toolbox",
    "skills.desc": "Technologies and tools across engineering, research, and development.",
    "skills.g1": "Programming Languages", "skills.g2": "AI & Machine Learning",
    "skills.g3": "Robotics & Hardware", "skills.g4": "Tools & Platforms",
    "contact.tag": "Contact", "contact.title": "Let’s build something together.",
    "contact.subtitle": "Available for AI/robotics engineering roles, research collaborations, and consulting projects. Currently based in Seoul, South Korea.",
  },
  ko: {
    "nav.about": "소개", "nav.expertise": "전문분야", "nav.papers": "논문",
    "nav.projects": "프로젝트", "nav.career": "경력", "nav.contact": "연락처",
    "hero.tag": "피지컴 AI 엔지니어",
    "hero.name": 'Muhammad Miftah <em>Faridh</em>',
    "hero.subtitle": "AI, 로보틱스, 엣지 컴퓨팅의 교차점에서 지능형 시스템을 구축합니다.",
    "hero.affiliation": '전자공학 석사, 국민대학교 &mdash; 현재 <a href="https://orinu.ai/" target="_blank" rel="noopener">orinu.ai</a>, 서울',
    "hero.cta": "연락하기", "hero.stat1": "논문", "hero.stat2": "국제 수상",
    "hero.stat3": "정부 프로젝트", "hero.stat4": "오픈소스",
    "about.tag": "소개", "about.title": "엔지니어, 연구자<br>&amp; 문제 해결사",
    "about.p1": "LLM 파인튀닝(T5, Gemma, LLaMA with LoRA, QLoRA, RAG)과 ROS 2 및 NVIDIA Jetson 플랫폼을 활용한 실시간 로보틱스 시스템에 실무 경험을 가진 AI 개발자 및 로보틱스 엔지니어입니다.",
    "about.p2": "인도네시아 대학교 로보틱스팀의 자율 수상 선박부터 XL Axiata의 5G 드론, 국민대학교의 OCC 연구부터 orinu.ai의 스마트 점자 프린터까지.",
    "about.card1.title": "전자공학 석사, 국민대학교", "about.card1.desc": "서울, 대한민국 (2022–2024)",
    "about.card2.title": "컴퓨터공학 학사", "about.card2.desc": "인도네시아 대학교 (2018–2022)",
    "about.card3.title": "피지컴 AI 엔지니어",
    "about.card3.desc": '<a href="https://orinu.ai/" target="_blank" rel="noopener" style="color: var(--accent);">orinu.ai</a> — 화성, 대한민국',
    "about.card4.title": "서울 거주", "about.card4.desc": "글로벌 기회 열림",
    "expertise.tag": "전문분야", "expertise.title": "핸심 역량",
    "expertise.desc": "로보틱스, 엣지 컴퓨팅, 통신, 지능형 시스템 전반에 걸친 AI 연구와 엔지니어링의 연결.",
    "expertise.c1.title": "LLM & 생성형 AI",
    "expertise.c1.desc": "대규모 언어 모델(T5, Gemma, LLaMA) LoRA, QLoRA, RAG 파이프라인으로 파인튀닝.",
    "expertise.c2.title": "로보틱스 & ROS 2",
    "expertise.c2.desc": "Jetson 플랫폼 기반 실시간 로보틱스 시스템. 로보틱 암, USV/AUV, 드론.",
    "expertise.c3.title": "엣지 AI & 배포",
    "expertise.c3.desc": "NVIDIA Jetson에 8개 이상의 프로덕션 Edge AI 시스템. TensorRT INT8/FP16 최적화로 67% 모델 압축.",
    "expertise.c4.title": "딥러닝",
    "expertise.c4.desc": "신호 처리, 이미지 인식, 시계열 예측을 위한 CNN, LSTM, GCN 및 하이브리드 아키텍처.",
    "expertise.c5.title": "광학 카메라 통신",
    "expertise.c5.desc": "2D MIMO OCC 시스템, CSMA/CA MAC 프로토콜 설계, 초고속 OCC. IEEE Access 발표.",
    "expertise.c6.title": "IoT & 에너지 시스템",
    "expertise.c6.desc": "지능형 IoE 플랫폼, LoRa 메시 네트워크, GCN-BiLSTM 태양광 에너지 예측, VPP ESS.",
    "pub.tag": "논문", "pub.title": "연구 논문",
    "pub.desc": "국제 저널, 학회 및 기술 대회의 피어 리뷰 논문.",
    "proj.tag": "포트폴리오", "proj.title": "프로젝트 & 오픈소스",
    "proj.desc": "AI/ML 연구, Jetson Edge AI 배포, IoT 시스템 및 풀스택 애플리케이션.",
    "proj.github": "GitHub에서 보기",
    "proj.cat1": "AI & 딥러닝 연구", "proj.cat1_count": "2개 프로젝트",
    "proj.cat2": "NVIDIA Jetson Edge AI", "proj.cat2_count": "8개 프로젝트",
    "proj.cat3": "IoT & 보안 시스템", "proj.cat3_count": "2개 프로젝트",
    "proj.cat4": "웹 애플리케이션", "proj.cat4_count": "4개 프로젝트",
    "proj.pv.title": "PV 태양광 발전량 예측 API",
    "proj.pv.desc": "한국 10개 태양광 발전소의 익일 발전량 예측. 6개 딥러닝 아키텍처의 Flask REST API.",
    "proj.pv.detail": "<strong>모델:</strong> BiLSTM, Stacked BiLSTM, LSTM, ConvLSTM, RNN. Sensors 2023 (MDPI) 및 ICUFN 2023 발표.",
    "proj.pv.m1": "태양광 사이트", "proj.pv.m2": "DL 모델", "proj.pv.m3": "피캘",
    "proj.energy.title": "스마트홈 에너지 소비 예측",
    "proj.energy.desc": "비교 연구: ARIMA/SARIMA vs LSTM/BiLSTM/GRU/RNN, 503,910개 스마트 미터 레코드.",
    "proj.energy.detail": "<strong>핵심 발견:</strong> LSTM 다변량이 MSE=0.022, MAE=0.110 달성. BiLSTM R²=0.9549.",
    "proj.langgraph.title": "LangGraph 챗봇 플레이그라운드",
    "proj.langgraph.desc": "LangGraph를 활용한 실험적 대화형 AI.",
    "proj.deploy.title": "Edge AI 배포 플랫폼",
    "proj.deploy.desc": "8개 Edge AI 프로젝트의 중앙 배포 허브. TensorRT INT8/FP16 모델 압축으로 67% 크기 감소.",
    "proj.deploy.m1": "압축률", "proj.deploy.m2": "전체 용량", "proj.deploy.m3": "AI 프로젝트",
    "proj.objdet.title": "객체 검출", "proj.objdet.desc": "실시간 80클래스 COCO 검출. FastAPI + React + WebSocket.",
    "proj.attend.title": "얼굴인식 출석", "proj.attend.desc": "InsightFace + ArcFace + MiniFASNet. INT8: 158MB→40MB.",
    "proj.ppe.title": "PPE 감지", "proj.ppe.desc": "다중 PPE 감지 및 구역별 준수 확인.",
    "proj.alpr.title": "번호판 인식", "proj.alpr.desc": "YOLOv8 + EasyOCR. 인도네시아 번호판 형식 검증.",
    "proj.security.title": "보안 분석", "proj.security.desc": "모션 감지, 침입 감지, 배회 감지.",
    "proj.analytics.title": "인원 분석", "proj.analytics.desc": "라인 크로싱 카운터, 구역 점유율, 교통 흐름 분석.",
    "proj.gesture.title": "손 제스처 인식", "proj.gesture.desc": "MediaPipe 21개 랜드마크, 9개 제스처 클래스.",
    "proj.fitness.title": "운동 트래커", "proj.fitness.desc": "푸쉬업, 스쿼트, 플랑크 추적.",
    "proj.server.title": "서버실 모니터링", "proj.server.desc": "다중 센서 IoT, LoRa, MariaDB, Telegram 봇.",
    "proj.intruder.title": "침입자 감지", "proj.intruder.desc": "OpenCV DNN + Telegram 자동 알림.",
    "proj.vtt.title": "VTT — 음성-텍스트 변환", "proj.vtt.desc": "Google Cloud Speech-to-Text API, 인도네시아어.",
    "proj.tweet.title": "TweetBullyingDetector", "proj.tweet.desc": "Twitter/X 사이버불링 감지 플랫폼.",
    "proj.vetracker.title": "VeTracker — 차량 관리", "proj.vetracker.desc": "CRUD, 이미지 업로드, Jetstream 2FA.",
    "proj.brocket.title": "Brocket — 대진표 관리", "proj.brocket.desc": "자동 랜덤 대진표, 시상대 추적.",
    "awards.tag": "수상", "awards.title": "수상 & 대회",
    "awards.desc": "인도네시아를 대표하여 국제 및 국내 로보틱스 대회에서 수상.",
    "awards.a1.place": "1위", "awards.a1.desc": "국제 수중 로보틱스 대회",
    "awards.a2.place": "3위", "awards.a3.place": "3위 — 센서 최적화",
    "awards.a4.place": "3위", "awards.a4.desc": "전국 무인 고속정 대회",
    "awards.a5.place": "최우수 포스터", "awards.a5.desc": "전국 무인 고속정 대회",
    "research.tag": "연구", "research.title": "정부 지원 프로젝트",
    "research.desc": "한국 정부 부처가 지원하는 국민대학교 주요 국책 연구 프로젝트 참여.",
    "research.r1": "재생에너지 그리드 안정화",
    "research.r2": "5G 다중대역 산업용 스몸셀 개발",
    "research.r3": "지능형 IoE 데이터 연구 플랫폼",
    "research.r4": "V2X 양자 AI 트리플 센서 OCC 시스템",
    "research.r5": "VPP ESS 서비스 플랫폼 개발",
    "research.r6": "초고속 OCC 및 정밀 위치 추정",
    "exp.tag": "경력", "exp.title": "전문 경력",
    "exp.e1.date": "2025년 10월 — 현재", "exp.e1.role": "피지컴 AI 엔지니어",
    "exp.e1.l1": "번역 및 RAG 프로젝트를 위한 LLM 파인튀닝",
    "exp.e1.l2": "로보틱스 시스템을 활용한 스마트 점자 프린터 개발",
    "exp.e1.l3": "Jetson 플랫폼에서 ROS 2 기반 로보틱 암 개발",
    "exp.e2.role": "AI & IoT 연구원",
    "exp.e2.l1": "악조건 환경에서의 LED 감지 및 추적 시스템 개발",
    "exp.e2.l2": "기상 데이터 기반 PV 발전량 예측 모델 구축",
    "exp.e2.l3": "2년 내 국제 저널 2편, 학회 논문 2편 발표",
    "exp.e2.l4": "8개 정부 지원 연구 프로젝트 참여 (MOTIE, MSIT, MSS)",
    "exp.e3.role": "IoT 인턴",
    "exp.e3.l1": "5G 연결 드론 프로젝트 개발",
    "exp.e3.l2": "드론에 컴퓨터 비전 구현, 100% 성공률",
    "exp.e4.role": "IT 비즈니스 분석가",
    "exp.e4.l1": "스타트업 및 공기업 CRM 솔루션 분석 및 개발",
    "exp.e4.l2": "GCP 기반 NLP 오디오 트랜스크라이버 프로젝트 리드",
    "exp.e5.role": "프로그래머 부장 / AI 엔지니어",
    "exp.e5.org": "AMV UI & 로보틱스팀 — 인도네시아 대학교",
    "exp.e5.l1": "USV/AUV 자율 제어 AI 부서 6명 관리",
    "exp.e5.l2": "국제 대회: AUVSI Roboboat(미국), ASEAN MATE ROV, KKCTBN",
    "exp.e5.l3": "ROS, Arduino, 컴퓨터 비전 제어 시스템",
    "edu.tag": "학력", "edu.title": "학술 배경",
    "edu.e1.degree": "석사 학위", "edu.e1.field": "전기전자공학",
    "edu.e2.degree": "학사 학위", "edu.e2.school": "인도네시아 대학교",
    "edu.e2.field": "컴퓨터공학 · GPA 3.43",
    "skills.tag": "기술 스택", "skills.title": "기술 도구",
    "skills.desc": "엔지니어링, 연구, 개발 전반의 기술과 도구.",
    "skills.g1": "프로그래밍 언어", "skills.g2": "AI & 머신러닝",
    "skills.g3": "로보틱스 & 하드웨어", "skills.g4": "도구 & 플랫폼",
    "contact.tag": "연락처", "contact.title": "함께 만들어 봅시다.",
    "contact.subtitle": "AI/로보틱스 엔지니어링, 연구 협업, 콘설팅 프로젝트 가능합니다. 현재 대한민국 서울 거주.",
  },
  id: {
    "nav.about": "Tentang", "nav.expertise": "Keahlian", "nav.papers": "Publikasi",
    "nav.projects": "Proyek", "nav.career": "Karir", "nav.contact": "Kontak",
    "hero.tag": "Physical AI Engineer",
    "hero.name": 'Muhammad Miftah <em>Faridh</em>',
    "hero.subtitle": "Membangun sistem cerdas di persimpangan AI, robotika, dan edge computing. Dari fine-tuning LLM dan smart braille printer hingga kendaraan laut otonom.",
    "hero.affiliation": 'M.S. Teknik Elektronika, Kookmin University &mdash; Saat ini di <a href="https://orinu.ai/" target="_blank" rel="noopener">orinu.ai</a>, Seoul',
    "hero.cta": "Hubungi Saya", "hero.stat1": "Publikasi", "hero.stat2": "Penghargaan Int'l",
    "hero.stat3": "Proyek Pemerintah", "hero.stat4": "Open Source",
    "about.tag": "Tentang", "about.title": "Engineer, Peneliti<br>&amp; Problem Solver",
    "about.p1": "AI Developer dan Robotics Engineer dengan pengalaman langsung di LLM fine-tuning (T5, Gemma, LLaMA dengan LoRA, QLoRA, dan RAG) serta sistem robotik real-time menggunakan ROS 2 dan platform NVIDIA Jetson.",
    "about.p2": "Dari kendaraan laut otonom di Tim Robotika Universitas Indonesia hingga drone terkoneksi 5G di XL Axiata, dari OCC di Kookmin University hingga Smart Braille Printer di orinu.ai — saya menjembatani AI dan robotika.",
    "about.card1.title": "M.S. EE, Kookmin University", "about.card1.desc": "Seoul, Korea Selatan (2022–2024)",
    "about.card2.title": "S1 Teknik Komputer", "about.card2.desc": "Universitas Indonesia (2018–2022)",
    "about.card3.title": "Physical AI Engineer",
    "about.card3.desc": '<a href="https://orinu.ai/" target="_blank" rel="noopener" style="color: var(--accent);">orinu.ai</a> — Hwaseong, KR',
    "about.card4.title": "Berbasis di Seoul", "about.card4.desc": "Terbuka untuk peluang global",
    "expertise.tag": "Keahlian", "expertise.title": "Kompetensi Inti",
    "expertise.desc": "Menjembatani riset AI dan engineering di bidang robotika, edge computing, komunikasi, dan sistem cerdas.",
    "expertise.c1.title": "LLM & AI Generatif",
    "expertise.c1.desc": "Fine-tuning model bahasa besar (T5, Gemma, LLaMA) dengan LoRA, QLoRA, dan pipeline RAG.",
    "expertise.c2.title": "Robotika & ROS 2",
    "expertise.c2.desc": "Sistem robotik real-time pada platform Jetson. Lengan robot, USV/AUV, drone dengan computer vision.",
    "expertise.c3.title": "Edge AI & Deployment",
    "expertise.c3.desc": "8+ sistem Edge AI produksi di NVIDIA Jetson. TensorRT INT8/FP16 kompresi model 67%.",
    "expertise.c4.title": "Deep Learning",
    "expertise.c4.desc": "Arsitektur CNN, LSTM, GCN untuk pemrosesan sinyal, pengenalan gambar, peramalan deret waktu.",
    "expertise.c5.title": "Optical Camera Comm.",
    "expertise.c5.desc": "Sistem 2D MIMO OCC, desain protokol MAC CSMA/CA, OCC ultra-high-rate. Dipublikasi di IEEE Access.",
    "expertise.c6.title": "IoT & Sistem Energi",
    "expertise.c6.desc": "Platform IoE cerdas, jaringan mesh LoRa, peramalan energi surya GCN-BiLSTM, platform VPP ESS.",
    "pub.tag": "Publikasi", "pub.title": "Paper Penelitian",
    "pub.desc": "Publikasi peer-reviewed di jurnal internasional, konferensi, dan kompetisi teknis.",
    "proj.tag": "Portofolio", "proj.title": "Proyek & Open Source",
    "proj.desc": "Riset AI/ML, deployment Edge AI di Jetson, sistem IoT, dan aplikasi full-stack.",
    "proj.github": "Lihat di GitHub",
    "proj.cat1": "Riset AI & Deep Learning", "proj.cat1_count": "2 proyek",
    "proj.cat2": "Edge AI di NVIDIA Jetson", "proj.cat2_count": "8 proyek",
    "proj.cat3": "Sistem IoT & Keamanan", "proj.cat3_count": "2 proyek",
    "proj.cat4": "Aplikasi Web", "proj.cat4_count": "4 proyek",
    "proj.pv.title": "API Peramalan Daya PV Surya",
    "proj.pv.desc": "Prediksi pembangkitan listrik hari berikutnya di 10 lokasi Korea Selatan. Flask REST API dengan 6 arsitektur deep learning.",
    "proj.pv.detail": "<strong>Model:</strong> BiLSTM, Stacked BiLSTM, LSTM, ConvLSTM, RNN. Dipublikasi di Sensors 2023 (MDPI) dan ICUFN 2023.",
    "proj.pv.m1": "Lokasi surya", "proj.pv.m2": "Model DL", "proj.pv.m3": "Fitur",
    "proj.energy.title": "Peramalan Energi Rumah Pintar",
    "proj.energy.desc": "Studi komparatif: ARIMA/SARIMA vs LSTM/BiLSTM/GRU/RNN pada 503.910 catatan smart meter.",
    "proj.energy.detail": "<strong>Temuan utama:</strong> LSTM Multivariat MSE=0,022, MAE=0,110. BiLSTM R²=0,9549 pada data Busan.",
    "proj.langgraph.title": "LangGraph Chatbot Playground",
    "proj.langgraph.desc": "AI percakapan eksperimental dengan LangGraph — dialog multi-turn stateful, alur kerja agen.",
    "proj.deploy.title": "Platform Deployment Edge AI",
    "proj.deploy.desc": "Hub deployment pusat untuk 8 proyek edge AI. Kompresi TensorRT INT8/FP16 mencapai 67% (482 MB → 152 MB).",
    "proj.deploy.m1": "Kompresi", "proj.deploy.m2": "Total ukuran", "proj.deploy.m3": "Proyek AI",
    "proj.objdet.title": "Deteksi Objek", "proj.objdet.desc": "Deteksi COCO 80 kelas real-time. FastAPI + React + WebSocket.",
    "proj.attend.title": "Absensi Pengenalan Wajah", "proj.attend.desc": "InsightFace + ArcFace + MiniFASNet. INT8: 158MB → 40MB.",
    "proj.ppe.title": "Deteksi APD", "proj.ppe.desc": "Deteksi multi-APD dengan kepatuhan berbasis zona.",
    "proj.alpr.title": "Pengenalan Plat Nomor", "proj.alpr.desc": "YOLOv8 + EasyOCR. Validasi format plat Indonesia.",
    "proj.security.title": "Analitik Keamanan", "proj.security.desc": "Deteksi gerakan, intrusi, dan berkeliaran.",
    "proj.analytics.title": "Analitik Orang", "proj.analytics.desc": "Penghitung penyeberangan garis, okupansi zona, arus lalu lintas.",
    "proj.gesture.title": "Pengenalan Gestur Tangan", "proj.gesture.desc": "MediaPipe 21-landmark, 9 kelas gestur.",
    "proj.fitness.title": "Pelacak Olahraga", "proj.fitness.desc": "Push-up, squat, plank tracking dengan analisis bentuk real-time.",
    "proj.server.title": "Pemantauan Ruang Server", "proj.server.desc": "IoT multi-sensor, LoRa, MariaDB, Telegram bot.",
    "proj.intruder.title": "Deteksi Penyusup", "proj.intruder.desc": "OpenCV DNN + peringatan foto Telegram otomatis.",
    "proj.vtt.title": "VTT — Voice-to-Text", "proj.vtt.desc": "Speech-to-text Bahasa Indonesia via Google Cloud.",
    "proj.tweet.title": "TweetBullyingDetector", "proj.tweet.desc": "Platform deteksi cyberbullying untuk Twitter/X.",
    "proj.vetracker.title": "VeTracker — Manajemen Kendaraan", "proj.vetracker.desc": "Manajemen inventaris kendaraan dengan Livewire.",
    "proj.brocket.title": "Brocket — Manajer Bracket", "proj.brocket.desc": "Manajemen turnamen dengan bracket acak otomatis.",
    "awards.tag": "Penghargaan", "awards.title": "Penghargaan & Kompetisi",
    "awards.desc": "Diakui dalam kompetisi robotika internasional dan nasional mewakili Indonesia.",
    "awards.a1.place": "Juara 1", "awards.a1.desc": "Kompetisi robotika bawah air internasional",
    "awards.a2.place": "Juara 3", "awards.a3.place": "Juara 3 — Optimasi Sensor",
    "awards.a4.place": "Juara 3", "awards.a4.desc": "Kontes Kapal Cepat Tak Berawak Nasional, Indonesia",
    "awards.a5.place": "Poster Terbaik", "awards.a5.desc": "Kontes Kapal Cepat Tak Berawak Nasional, Indonesia",
    "research.tag": "Riset", "research.title": "Proyek Dana Pemerintah",
    "research.desc": "Berkontribusi pada proyek riset nasional utama di Kookmin University, didanai kementerian Korea.",
    "research.r1": "Stabilisasi Grid Energi Terbarukan",
    "research.r2": "Pengembangan Small Cell Industri 5G Multi-Band",
    "research.r3": "Platform Riset Data IoE Cerdas",
    "research.r4": "Sistem OCC Sensor Triple AI Kuantum V2X",
    "research.r5": "Pengembangan Platform Layanan VPP ESS",
    "research.r6": "OCC Ultra High Rate & Lokalisasi Presisi",
    "exp.tag": "Karir", "exp.title": "Perjalanan Profesional",
    "exp.e1.date": "Okt 2025 — Sekarang", "exp.e1.role": "Physical AI Engineer",
    "exp.e1.l1": "Fine-tuning LLM untuk terjemahan & RAG",
    "exp.e1.l2": "Pengembangan Smart Braille Printer menggunakan sistem robotik",
    "exp.e1.l3": "Pengembangan lengan robot dengan ROS 2 pada platform Jetson",
    "exp.e2.role": "Peneliti AI & IoT",
    "exp.e2.l1": "Merancang sistem deteksi dan pelacakan LED untuk cuaca buruk",
    "exp.e2.l2": "Membangun model peramalan deret waktu untuk PV power generation",
    "exp.e2.l3": "Mempublikasikan 2 jurnal internasional dan 2 paper konferensi dalam 2 tahun",
    "exp.e2.l4": "Berkontribusi pada 8 proyek riset dana pemerintah (MOTIE, MSIT, MSS)",
    "exp.e3.role": "Magang Internet of Things",
    "exp.e3.l1": "Pengembangan proyek drone dengan konektivitas 5G",
    "exp.e3.l2": "Implementasi computer vision pada drone dengan tingkat keberhasilan 100%",
    "exp.e4.role": "IT Business Analyst",
    "exp.e4.l1": "Menganalisis dan mengembangkan solusi CRM untuk startup dan BUMN",
    "exp.e4.l2": "Memimpin proyek Audio Transcriber berbasis NLP untuk QA menggunakan GCP",
    "exp.e5.role": "Wakil Kepala Programmer / AI Engineer",
    "exp.e5.org": "AMV UI & Tim Robotika — Universitas Indonesia",
    "exp.e5.l1": "Mengelola 6 anggota Divisi AI untuk robot USV dan AUV",
    "exp.e5.l2": "Berkompetisi: AUVSI Roboboat (AS), ASEAN MATE ROV, KKCTBN",
    "exp.e5.l3": "Membangun sistem otomasi menggunakan ROS, Arduino, computer vision",
    "edu.tag": "Pendidikan", "edu.title": "Latar Belakang Akademik",
    "edu.e1.degree": "Gelar Master", "edu.e1.field": "Teknik Elektro & Elektronika",
    "edu.e2.degree": "Gelar Sarjana", "edu.e2.school": "Universitas Indonesia",
    "edu.e2.field": "Teknik Komputer · IPK 3,43",
    "skills.tag": "Stack", "skills.title": "Kotak Peralatan Teknis",
    "skills.desc": "Teknologi dan alat di bidang engineering, riset, dan pengembangan.",
    "skills.g1": "Bahasa Pemrograman", "skills.g2": "AI & Machine Learning",
    "skills.g3": "Robotika & Hardware", "skills.g4": "Alat & Platform",
    "contact.tag": "Kontak", "contact.title": "Mari membangun sesuatu bersama.",
    "contact.subtitle": "Tersedia untuk peran engineering AI/robotika, kolaborasi riset, dan konsultasi. Saat ini di Seoul, Korea Selatan.",
  }
} as const

type Lang = 'en' | 'ko' | 'id'
type TKey = keyof typeof T.en

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: 14, height: 14 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
)

export default function Home() {
  const [lang, setLangState] = useState<Lang>('en')
  const [navOpen, setNavOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  const t = (key: TKey): string => (T[lang] as Record<string, string>)[key] ?? (T.en as Record<string, string>)[key] ?? key
  const th = (key: TKey) => ({ __html: (T[lang] as Record<string, string>)[key] ?? (T.en as Record<string, string>)[key] ?? key })

  const changeLang = (l: Lang) => {
    setLangState(l)
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', l)
    document.documentElement.lang = l
    setNavOpen(false)
  }

  useEffect(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') as Lang | null : null
    if (stored && ['en', 'ko', 'id'].includes(stored)) {
      setLangState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav id="navbar" className={navScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mf-logo-blue-transparent.svg" alt="MF" style={{ height: '36px', width: 'auto' }} />
          </a>
          <ul className={`nav-links${navOpen ? ' open' : ''}`} id="navLinks">
            <li><a href="#about" onClick={() => setNavOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#expertise" onClick={() => setNavOpen(false)}>{t('nav.expertise')}</a></li>
            <li><a href="#publications" onClick={() => setNavOpen(false)}>{t('nav.papers')}</a></li>
            <li><a href="#projects" onClick={() => setNavOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#experience" onClick={() => setNavOpen(false)}>{t('nav.career')}</a></li>
            <li><a href="#contact" onClick={() => setNavOpen(false)}>{t('nav.contact')}</a></li>
          </ul>
          <div className="nav-right">
            <div className="lang-switcher">
              <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => changeLang('en')}>EN</button>
              <button className={`lang-btn${lang === 'ko' ? ' active' : ''}`} onClick={() => changeLang('ko')}>KO</button>
              <button className={`lang-btn${lang === 'id' ? ' active' : ''}`} onClick={() => changeLang('id')}>ID</button>
            </div>
            <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">{t('hero.tag')}</div>
            <h1 dangerouslySetInnerHTML={th('hero.name')} />
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <p className="hero-affiliation" dangerouslySetInnerHTML={th('hero.affiliation')} />
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{t('hero.cta')}</a>
              <a href="https://scholar.google.com/citations?user=okg9J80AAAAJ" className="btn btn-outline" target="_blank" rel="noopener">Google Scholar</a>
            </div>
            <div className="hero-stats-strip">
              <div><div className="hero-stat-num">7+</div><div className="hero-stat-label">{t('hero.stat1')}</div></div>
              <div><div className="hero-stat-num">5</div><div className="hero-stat-label">{t('hero.stat2')}</div></div>
              <div><div className="hero-stat-num">8</div><div className="hero-stat-label">{t('hero.stat3')}</div></div>
              <div><div className="hero-stat-num">20+</div><div className="hero-stat-label">{t('hero.stat4')}</div></div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/asset/photo-web.jpg" alt="Muhammad Miftah Faridh" width={380} height={507} loading="eager" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <div className="section-header">
                <div className="section-tag">{t('about.tag')}</div>
                <h2 className="section-title" dangerouslySetInnerHTML={th('about.title')} />
              </div>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="about-cards reveal reveal-delay-1">
              <div className="about-card"><div className="about-card-icon">🎓</div><h4>{t('about.card1.title')}</h4><p>{t('about.card1.desc')}</p></div>
              <div className="about-card"><div className="about-card-icon">🎓</div><h4>{t('about.card2.title')}</h4><p>{t('about.card2.desc')}</p></div>
              <div className="about-card"><div className="about-card-icon">⚙️</div><h4>{t('about.card3.title')}</h4><p dangerouslySetInnerHTML={th('about.card3.desc')} /></div>
              <div className="about-card"><div className="about-card-icon">📍</div><h4>{t('about.card4.title')}</h4><p>{t('about.card4.desc')}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('expertise.tag')}</div>
            <h2 className="section-title">{t('expertise.title')}</h2>
            <p className="section-desc">{t('expertise.desc')}</p>
          </div>
          <div className="expertise-grid">
            {([1,2,3,4,5,6] as const).map((n, i) => (
              <div key={n} className={`exp-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}>
                <div className="exp-card-num">0{n}</div>
                <h3>{t(`expertise.c${n}.title` as TKey)}</h3>
                <p>{t(`expertise.c${n}.desc` as TKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('pub.tag')}</div>
            <h2 className="section-title">{t('pub.title')}</h2>
            <p className="section-desc">{t('pub.desc')}</p>
          </div>
          <div className="pub-list">
            {[
              { year: '2025', venue: 'IEEE Access', title: 'Implementation of CSMA/CA-Based MAC Protocol for Optical Camera Communication', authors: 'M. M. Faridh et al.' },
              { year: '2023', venue: 'Sensors (MDPI)', title: 'Intelligent IoT Platform for Multiple PV Plant Monitoring', authors: 'M. M. Faridh et al.' },
              { year: '2023', venue: 'Sensors (MDPI)', title: 'Design and Implementation of a 2D MIMO OCC System Based on Deep Learning', authors: 'M. M. Faridh et al.' },
              { year: '2023', venue: 'ICUFN', title: 'Intelligent IoT Platform for PV Power Plant Monitoring and Control', authors: 'M. M. Faridh et al.' },
              { year: '2023', venue: 'ICAIIC', title: 'Forecasting Solar Energy Production using a Hybrid GCN-BiLSTM Model', authors: 'M. M. Faridh et al.' },
              { year: '2021', venue: 'RoboNation', title: 'MAKARA MH4 XX — Autonomous Surface Vehicle', authors: 'AMV UI Team' },
              { year: '2019', venue: 'RoboNation', title: 'Makara 09 Mark II — Autonomous Surface Vehicle', authors: 'AMV UI Team' },
            ].map((p) => (
              <a key={p.title} href="https://scholar.google.com/citations?user=okg9J80AAAAJ" className="pub-item reveal" target="_blank" rel="noopener">
                <span className="pub-year">{p.year}</span>
                <div>
                  <div className="pub-venue-tag">{p.venue}</div>
                  <h3 className="pub-title">{p.title}</h3>
                  <p className="pub-authors"><strong>{p.authors.split(' et')[0]}</strong>{p.authors.includes(' et') ? ' et al.' : ''}</p>
                </div>
                <span className="pub-arrow">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('proj.tag')}</div>
            <h2 className="section-title">{t('proj.title')}</h2>
            <p className="section-desc">{t('proj.desc')}</p>
          </div>

          <div className="projects-category">
            <div className="category-header reveal">
              <span className="category-dot red"></span>
              <span className="category-title">{t('proj.cat1')}</span>
              <span className="category-count">{t('proj.cat1_count')}</span>
            </div>
            <div className="bento-grid">
              <div className="bento-card featured reveal">
                <div className="bento-card-type">Deep Learning / Energy Forecasting / Published</div>
                <h3>{t('proj.pv.title')}</h3>
                <p>{t('proj.pv.desc')}</p>
                <div className="bento-card-detail" dangerouslySetInnerHTML={th('proj.pv.detail')} />
                <div className="bento-tags">{['TensorFlow','Flask','BiLSTM','ConvLSTM','MariaDB'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <div className="bento-metrics">
                  <div className="bento-metric"><strong>10</strong><span>{t('proj.pv.m1')}</span></div>
                  <div className="bento-metric"><strong>6</strong><span>{t('proj.pv.m2')}</span></div>
                  <div className="bento-metric"><strong>12</strong><span>{t('proj.pv.m3')}</span></div>
                </div>
                <a href="https://github.com/miftahfaridhh/pv-power-api" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
              <div className="bento-card reveal">
                <div className="bento-card-type">Deep Learning / Time-Series</div>
                <h3>{t('proj.energy.title')}</h3>
                <p>{t('proj.energy.desc')}</p>
                <div className="bento-card-detail" dangerouslySetInnerHTML={th('proj.energy.detail')} />
                <div className="bento-tags">{['TensorFlow','BiLSTM','GRU','ARIMA','Jupyter'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <a href="https://github.com/miftahfaridhh/smart-home-energy-consumption-forecast" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
              <div className="bento-card reveal">
                <div className="bento-card-type">LLM / Agents</div>
                <h3>{t('proj.langgraph.title')}</h3>
                <p>{t('proj.langgraph.desc')}</p>
                <div className="bento-tags">{['Python','LangGraph','LangChain','LLM'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <a href="https://github.com/miftahfaridhh/langgraph-chatbot-playground" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="projects-category">
            <div className="category-header reveal">
              <span className="category-dot green"></span>
              <span className="category-title">{t('proj.cat2')}</span>
              <span className="category-count">{t('proj.cat2_count')}</span>
            </div>
            <div className="bento-grid">
              <div className="bento-card wide reveal">
                <div className="bento-card-type">Edge AI / Deployment Hub</div>
                <h3>{t('proj.deploy.title')}</h3>
                <p>{t('proj.deploy.desc')}</p>
                <div className="bento-tags">{['TensorRT','Docker','Jetson Nano','FastAPI','React','WebSocket','CUDA'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <div className="bento-metrics">
                  <div className="bento-metric"><strong>67%</strong><span>{t('proj.deploy.m1')}</span></div>
                  <div className="bento-metric"><strong>152MB</strong><span>{t('proj.deploy.m2')}</span></div>
                  <div className="bento-metric"><strong>8</strong><span>{t('proj.deploy.m3')}</span></div>
                </div>
                <a href="https://github.com/miftahfaridhh/edge-ai-deployment" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
              {([
                { type: 'Computer Vision / 80 Classes', key: 'objdet', tags: ['YOLOv8','TensorRT','FastAPI','React'], href: 'edge-ai-object-detection' },
                { type: 'Biometrics / Anti-Spoofing', key: 'attend', tags: ['InsightFace','ArcFace','PostgreSQL','FastAPI'], href: 'edge-ai-attendance' },
                { type: 'Safety / Zone Compliance', key: 'ppe', tags: ['YOLOv8','TensorRT INT8','Zone Detection'], href: 'edge-ai-ppe' },
                { type: 'OCR / Vehicle Tracking', key: 'alpr', tags: ['YOLOv8','EasyOCR','SORT','React'], href: 'edge-ai-alpr' },
                { type: 'Surveillance / Anomaly', key: 'security', tags: ['YOLOv8','DeepSort','MOG2/KNN'], href: 'edge-ai-security' },
                { type: 'People Counting / Traffic', key: 'analytics', tags: ['YOLOv8','HOG','Line Crossing'], href: 'edge-ai-analytics' },
                { type: 'Gesture / HRI', key: 'gesture', tags: ['MediaPipe','Custom ML','OpenCV'], href: 'edge-ai-gesture' },
                { type: 'Pose Estimation / Fitness', key: 'fitness', tags: ['MediaPipe','YOLOv8-pose','MoveNet'], href: 'edge-ai-fitness' },
              ] as const).map((p) => (
                <div key={p.key} className="bento-card reveal">
                  <div className="bento-card-type">{p.type}</div>
                  <h3>{t(`proj.${p.key}.title` as TKey)}</h3>
                  <p>{t(`proj.${p.key}.desc` as TKey)}</p>
                  <div className="bento-tags">{(p.tags as readonly string[]).map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                  <a href={`https://github.com/miftahfaridhh/${p.href}`} className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-category">
            <div className="category-header reveal">
              <span className="category-dot blue"></span>
              <span className="category-title">{t('proj.cat3')}</span>
              <span className="category-count">{t('proj.cat3_count')}</span>
            </div>
            <div className="bento-grid">
              <div className="bento-card reveal">
                <div className="bento-card-type">IoT / LoRa Mesh / Monitoring</div>
                <h3>{t('proj.server.title')}</h3>
                <p>{t('proj.server.desc')}</p>
                <div className="bento-tags">{['Arduino','LoRa','MariaDB','Telegram'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <a href="https://github.com/miftahfaridhh/server-room-monitoring" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
              <div className="bento-card reveal">
                <div className="bento-card-type">Computer Vision / Alerts</div>
                <h3>{t('proj.intruder.title')}</h3>
                <p>{t('proj.intruder.desc')}</p>
                <div className="bento-tags">{['OpenCV DNN','Caffe SSD','Telegram Bot','asyncio'].map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                <a href="https://github.com/miftahfaridhh/intruder-detection" className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="projects-category">
            <div className="category-header reveal">
              <span className="category-dot purple"></span>
              <span className="category-title">{t('proj.cat4')}</span>
              <span className="category-count">{t('proj.cat4_count')}</span>
            </div>
            <div className="bento-grid">
              {([
                { key: 'vtt', type: 'Speech-to-Text / Google Cloud', tags: ['Laravel 5.6','Google Cloud','Vue.js','FFmpeg'], href: 'vtt' },
                { key: 'tweet', type: 'NLP / Social Platform', tags: ['Laravel 7','Twitter API','PHP','MySQL'], href: 'tweetbullyingdetector' },
                { key: 'vetracker', type: 'Management / Livewire', tags: ['Laravel 8','Livewire','Tailwind CSS'], href: 'vetracker' },
                { key: 'brocket', type: 'Tournament / Events', tags: ['Laravel 8','Livewire','Tailwind CSS'], href: 'brocket' },
              ] as const).map((p) => (
                <div key={p.key} className="bento-card reveal">
                  <div className="bento-card-type">{p.type}</div>
                  <h3>{t(`proj.${p.key}.title` as TKey)}</h3>
                  <p>{t(`proj.${p.key}.desc` as TKey)}</p>
                  <div className="bento-tags">{(p.tags as readonly string[]).map(tag => <span key={tag} className="bento-tag">{tag}</span>)}</div>
                  <a href={`https://github.com/miftahfaridhh/${p.href}`} className="bento-link" target="_blank" rel="noopener"><span>{t('proj.github')}</span> <Arrow /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('awards.tag')}</div>
            <h2 className="section-title">{t('awards.title')}</h2>
            <p className="section-desc">{t('awards.desc')}</p>
          </div>
          <div className="awards-grid">
            <div className="award-card reveal">
              <div className="award-badge gold">🥇</div>
              <div><div className="award-place">{t('awards.a1.place')}</div><h3>ASEAN MATE ROV &mdash; Explorer Category</h3><p className="award-desc">{t('awards.a1.desc')}</p></div>
            </div>
            <div className="award-card reveal">
              <div className="award-badge bronze">🥉</div>
              <div><div className="award-place">{t('awards.a2.place')}</div><h3>12th AUVSI International Roboboat</h3><p className="award-desc">Miami, FL, USA &middot; 2019</p></div>
            </div>
            <div className="award-card reveal">
              <div className="award-badge bronze">🥉</div>
              <div><div className="award-place">{t('awards.a3.place')}</div><h3>14th AUVSI International Roboboat</h3><p className="award-desc">2021</p></div>
            </div>
            <div className="award-card reveal">
              <div className="award-badge bronze">🥉</div>
              <div><div className="award-place">{t('awards.a4.place')}</div><h3>KKCTBN 2019</h3><p className="award-desc">{t('awards.a4.desc')}</p></div>
            </div>
            <div className="award-card reveal">
              <div className="award-badge special">🏆</div>
              <div><div className="award-place">{t('awards.a5.place')}</div><h3>KKCTBN 2019</h3><p className="award-desc">{t('awards.a5.desc')}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* GOV RESEARCH */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('research.tag')}</div>
            <h2 className="section-title">{t('research.title')}</h2>
            <p className="section-desc">{t('research.desc')}</p>
          </div>
          <div className="research-grid">
            {([
              { funder: 'MOTIE', key: 'r1', period: '2022–2024' },
              { funder: 'MSIT',  key: 'r2', period: '2022–2024' },
              { funder: 'MSIT',  key: 'r3', period: '2022–2024' },
              { funder: 'MSIT',  key: 'r4', period: '2022–2024' },
              { funder: 'MSS',   key: 'r5', period: '2022–2024' },
              { funder: 'MSIT',  key: 'r6', period: '2022–2024' },
            ] as const).map((r) => (
              <div key={r.key} className="research-card reveal">
                <div className="research-funder">{r.funder}</div>
                <h3>{t(`research.${r.key}` as TKey)}</h3>
                <p className="research-period">{r.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('exp.tag')}</div>
            <h2 className="section-title">{t('exp.title')}</h2>
          </div>
          <div className="exp-timeline">
            <div className="exp-item reveal">
              <div className="exp-date">{t('exp.e1.date')}</div>
              <div className="exp-content">
                <h3>{t('exp.e1.role')}</h3>
                <h4><a href="https://orinu.ai/" target="_blank" rel="noopener">orinu.ai</a> &middot; Hwaseong, South Korea</h4>
                <ul><li>{t('exp.e1.l1')}</li><li>{t('exp.e1.l2')}</li><li>{t('exp.e1.l3')}</li></ul>
              </div>
            </div>
            <div className="exp-item reveal">
              <div className="exp-date">Sep 2022 &mdash; Aug 2024</div>
              <div className="exp-content">
                <h3>{t('exp.e2.role')}</h3>
                <h4>Kookmin University &middot; Prof. Jang Yeong Min&apos;s Lab, Seoul</h4>
                <ul><li>{t('exp.e2.l1')}</li><li>{t('exp.e2.l2')}</li><li>{t('exp.e2.l3')}</li><li>{t('exp.e2.l4')}</li></ul>
              </div>
            </div>
            <div className="exp-item reveal">
              <div className="exp-date">Feb 2022 &mdash; Jun 2022</div>
              <div className="exp-content">
                <h3>{t('exp.e3.role')}</h3>
                <h4>PT. XL Axiata Tbk &middot; Jakarta, Indonesia</h4>
                <ul><li>{t('exp.e3.l1')}</li><li>{t('exp.e3.l2')}</li></ul>
              </div>
            </div>
            <div className="exp-item reveal">
              <div className="exp-date">Sep 2021 &mdash; Feb 2022</div>
              <div className="exp-content">
                <h3>{t('exp.e4.role')}</h3>
                <h4>PT. Infomedia Nusantara &middot; Jakarta, Indonesia</h4>
                <ul><li>{t('exp.e4.l1')}</li><li>{t('exp.e4.l2')}</li></ul>
              </div>
            </div>
            <div className="exp-item reveal">
              <div className="exp-date">Nov 2018 &mdash; Jul 2021</div>
              <div className="exp-content">
                <h3>{t('exp.e5.role')}</h3>
                <h4>{t('exp.e5.org')}</h4>
                <ul><li>{t('exp.e5.l1')}</li><li>{t('exp.e5.l2')}</li><li>{t('exp.e5.l3')}</li></ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <div className="section-header reveal">
              <div className="section-tag">{t('edu.tag')}</div>
              <h2 className="section-title">{t('edu.title')}</h2>
            </div>
            <div className="edu-grid">
              <div className="edu-card reveal">
                <div className="edu-badge">{t('edu.e1.degree')}</div>
                <h3>Kookmin University</h3>
                <p className="edu-field">{t('edu.e1.field')}</p>
                <p className="edu-period">Sep 2022 &ndash; Aug 2024 &middot; Seoul, South Korea</p>
              </div>
              <div className="edu-card reveal">
                <div className="edu-badge">{t('edu.e2.degree')}</div>
                <h3>{t('edu.e2.school')}</h3>
                <p className="edu-field">{t('edu.e2.field')}</p>
                <p className="edu-period">Aug 2018 &ndash; Sep 2022 &middot; Depok, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">{t('skills.tag')}</div>
            <h2 className="section-title">{t('skills.title')}</h2>
            <p className="section-desc">{t('skills.desc')}</p>
          </div>
          <div className="skills-grid reveal">
            <div className="skill-group">
              <h3>{t('skills.g1')}</h3>
              <div className="skill-items">
                {['Python','C/C++','Java','C#','MATLAB','JavaScript','TypeScript','PHP'].map(s => <span key={s} className="skill-item">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>{t('skills.g2')}</h3>
              <div className="skill-items">
                {['TensorFlow','PyTorch','LLM Fine-Tuning','LoRA / QLoRA','RAG','Computer Vision','NLP','TensorRT','ONNX','Scikit-learn'].map(s => <span key={s} className="skill-item">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>{t('skills.g3')}</h3>
              <div className="skill-items">
                {['ROS 2','NVIDIA Jetson','Arduino','LoRa','Embedded Systems','Sensor Integration'].map(s => <span key={s} className="skill-item">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>{t('skills.g4')}</h3>
              <div className="skill-items">
                {['Docker','Linux','Git','GCP','AWS','FastAPI','React','Laravel','PostgreSQL'].map(s => <span key={s} className="skill-item">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div className="reveal">
              <div className="section-tag">{t('contact.tag')}</div>
              <h2 className="contact-title">{t('contact.title')}</h2>
              <p className="contact-subtitle">{t('contact.subtitle')}</p>
              <a href="mailto:muhammadmiftahfaridh@gmail.com" className="contact-email-display">muhammadmiftahfaridh@gmail.com</a>
            </div>
            <div className="contact-links-grid reveal reveal-delay-1">
              <a href="https://www.linkedin.com/in/muhammadmiftahfaridh/" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/miftahfaridhh" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a href="https://scholar.google.com/citations?user=okg9J80AAAAJ" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>
                Google Scholar
              </a>
              <a href="https://orcid.org/0009-0009-5760-6859" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-3.919-3.722h-2.4z"/></svg>
                ORCID
              </a>
              <a href="https://www.researchgate.net/profile/Muhammad-Miftah-Faridh" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.046.582c-.01.2-.013.373-.013.528 0 .845.088 1.56.259 2.148.17.588.406 1.07.702 1.444.296.375.644.648 1.043.821.4.174.832.26 1.298.26.468 0 .885-.09 1.252-.27.367-.18.676-.432.924-.753.249-.32.43-.695.546-1.126.115-.43.173-.902.173-1.413 0-.51-.06-.98-.18-1.414a3.37 3.37 0 00-.532-1.13 2.608 2.608 0 00-.872-.76C20.29.089 19.78 0 19.586 0zm-8.09 5.356c-.453 0-.867.074-1.238.22a2.726 2.726 0 00-.96.627 2.845 2.845 0 00-.622.96c-.149.37-.222.78-.222 1.234 0 .47.078.892.233 1.267.156.376.37.699.644.968.274.27.6.478.977.628.376.148.786.223 1.228.223.412 0 .792-.06 1.14-.181.347-.121.652-.29.912-.506.26-.216.47-.472.627-.767a2.08 2.08 0 00.238-.989c0-.454-.072-.87-.218-1.247a2.819 2.819 0 00-.622-.978 2.844 2.844 0 00-.96-.642 3.127 3.127 0 00-1.237-.237zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"/></svg>
                ResearchGate
              </a>
              <a href="https://orinu.ai/" className="contact-link-item" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-4.07a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" /></svg>
                orinu.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Muhammad Miftah Faridh</p>
      </footer>
    </>
  )
}
