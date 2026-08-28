import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Search, Plus, Package, MapPin, ClipboardCheck, ArrowUpRight, AlertTriangle, Check, Box, ChevronRight, Sparkles} from 'lucide-react';
import './styles.css';

const materials = [
  {name:'동물원 만들기 세트', area:'쌓기놀이', age:'만 4세', place:'교구실 · 3번 선반 · B-02', count:'12종', tone:'lavender', image:'/assets/concept.png'},
  {name:'우리 동네 역할놀이', area:'역할놀이', age:'만 5세', place:'역할놀이장 · A-01', count:'8종', tone:'mint', image:'/assets/concept.png'},
  {name:'봄꽃 관찰 카드', area:'자연탐구', age:'만 3세', place:'자료실 · C-03', count:'24장', tone:'coral', image:'/assets/concept.png'},
  {name:'감정 표현 보드', area:'언어놀이', age:'만 4세', place:'언어영역 · D-04', count:'16종', tone:'yellow', image:'/assets/concept.png'}
];

function App(){
 const [query,setQuery]=useState(''); const [selected,setSelected]=useState('전체'); const [notice,setNotice]=useState('');
 const filtered=useMemo(()=>materials.filter(m=>(selected==='전체'||m.area===selected)&&`${m.name}${m.area}${m.age}`.includes(query)),[query,selected]);
 const action=(message)=>{setNotice(message); setTimeout(()=>setNotice(''),2200)};
 return <div className="app">
  <aside className="sidebar"><div className="brand"><span className="brand-mark"><Package size={19}/></span><span>교구함</span></div>
   <div className="nav-label">WORKSPACE</div><nav>
    <button className="nav active"><Search size={18}/>교구 찾기</button><button className="nav" onClick={()=>action('교구 등록 화면을 준비 중이에요')}><Plus size={18}/>교구 등록</button><button className="nav" onClick={()=>action('보관 위치 지도를 준비 중이에요')}><MapPin size={18}/>보관 위치</button><button className="nav" onClick={()=>action('대여 현황을 준비 중이에요')}><Box size={18}/>대여 현황</button><button className="nav" onClick={()=>action('점검 기록을 준비 중이에요')}><ClipboardCheck size={18}/>점검 기록</button>
   </nav><div className="sidebar-bottom"><div className="mini-avatar">김</div><div><strong>김보육 선생님</strong><small>햇살어린이집</small></div><ChevronRight size={16}/></div>
  </aside>
  <main><header><div className="mobile-brand">교구함</div><div className="global-search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="교구명, 활동, 구성품으로 검색해보세요"/><kbd>⌘ K</kbd></div><button className="icon-btn"><span className="dot"/></button><div className="avatar">김</div></header>
   <div className="content"><section className="intro"><div><p className="eyebrow">THURSDAY, AUGUST 28</p><h1>안녕하세요, 선생님</h1><p className="sub">오늘 필요한 교구를 빠르게 찾아보세요.</p></div><button className="primary" onClick={()=>action('새 교구 등록을 시작합니다')}><Plus size={17}/> 교구 등록</button></section>
    <section className="summary"><div className="summary-title"><div><h2>오늘의 교구 현황</h2><p>우리 반 교구를 한눈에 관리해요.</p></div><button className="text-button" onClick={()=>action('전체 교구 목록을 열었어요')}>전체 보기 <ArrowUpRight size={15}/></button></div><div className="stats"><div className="stat"><span className="stat-icon purple"><Package size={18}/></span><div><small>전체 교구</small><strong>248 <em>개</em></strong></div><span className="trend">+12 이번 달</span></div><div className="stat"><span className="stat-icon green"><Box size={18}/></span><div><small>대여 중</small><strong>18 <em>개</em></strong></div><span className="muted">6개 반</span></div><div className="stat warning"><span className="stat-icon orange"><AlertTriangle size={18}/></span><div><small>점검 필요</small><strong>7 <em>개</em></strong></div><span className="trend orange-text">확인 필요</span></div></div></section>
    <div className="section-heading"><div><h2>최근 등록한 교구</h2><p>사진으로 등록된 교구를 확인하세요.</p></div><button className="filter-button" onClick={()=>action('정렬 기준을 선택하세요')}>최근 등록순 <ChevronRight size={15}/></button></div>
    <div className="filters"><div className="filter-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="교구를 검색하세요"/></div>{['전체','쌓기놀이','역할놀이','자연탐구','언어놀이'].map(x=><button key={x} onClick={()=>setSelected(x)} className={selected===x?'chip selected':'chip'}>{x}</button>)}</div>
    <div className="material-grid">{filtered.map(m=><article className="material" key={m.name} onClick={()=>action(`${m.name} 상세 정보를 열었어요`)}><div className={`material-image ${m.tone}`}><img src={m.image}/><span className="photo-label"><Sparkles size={12}/> AI 등록</span></div><div className="material-body"><div className="material-top"><h3>{m.name}</h3><span className="more">•••</span></div><div className="tags"><span>{m.age}</span><span>{m.area}</span></div><div className="location"><MapPin size={14}/>{m.place}<b>{m.count}</b></div></div></article>)}</div>
   </div>
  </main><aside className="inspection"><div className="inspection-head"><div><h2>오늘의 점검</h2><p>구성품을 확인해주세요.</p></div><span className="count">3</span></div><div className="progress"><span/></div><div className="check-item"><div className="check-icon red"><AlertTriangle size={16}/></div><div><strong>구성품이 부족해요</strong><p>동물원 만들기 세트 · 울타리 2개</p><button onClick={()=>action('점검 완료로 표시했어요')}>확인하기 <ArrowUpRight size={13}/></button></div></div><div className="check-item"><div className="check-icon amber"><AlertTriangle size={16}/></div><div><strong>점검한 지 오래됐어요</strong><p>미술 재료 바구니 · 18일 전</p><button onClick={()=>action('점검 완료로 표시했어요')}>확인하기 <ArrowUpRight size={13}/></button></div></div><div className="check-item done"><div className="check-icon green"><Check size={16}/></div><div><strong>오늘 점검 완료</strong><p>쌓기놀이 영역 · 14개 교구</p></div></div><button className="all-check" onClick={()=>action('점검 기록을 열었어요')}>점검 기록 전체 보기 <ArrowUpRight size={14}/></button></aside>
  {notice&&<div className="toast">{notice}</div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
