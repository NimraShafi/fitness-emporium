'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  Camera,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const business = {
  name: 'Fitness Emporium',
  phone: '0339-2120444',
  phoneHref: 'tel:+923392120444',
  whatsappHref: 'https://wa.me/923392120444',
  address: 'B-12, Block 1, Gulshan-e-Iqbal, Karachi, Pakistan',
  landmark: 'Adjacent to Practical Centre',
  trainers: [
    {
      name: 'Usman Siddiqui',
      role: 'Personal Trainer',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4UUh0Ac02wFuFvjX1gBtLyAf42WsOu.png',
      expertise: ['Strength Training', 'Functional Training', 'Circuit Training', 'Injury Rehabilitation', 'Weight Management', 'Group Fitness'],
    },
    {
      name: 'Hasan Raza',
      role: 'Certified Fitness Trainer',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cU1CI0VfbFpKjYM1SLU1aPGkWx6XjX.png',
      expertise: ['Fat Loss Specialist', 'Circuit Training', 'HIIT Training'],
    },
    {
      name: 'Talha Ghouri',
      role: 'Personal Trainer',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MX2zrJYKUrgfLtFqbhMbe9qaUtpOWb.png',
      expertise: ['Strength Training', 'Boxing', 'CrossFit Training', 'Cardio Training', 'Weight Loss', 'HIIT Training'],
    },
  ],
}

const programs = [
  { number: '01', title: 'Gym', description: 'A focused training environment for building a consistent fitness routine.', icon: Dumbbell },
  { number: '02', title: 'Cardio', description: 'Keep moving with cardio-focused training at your own pace.', icon: Zap },
  { number: '03', title: 'Group Training', description: 'Train alongside others with an energizing group fitness experience.', icon: Sparkles },
  { number: '04', title: 'Ladies Fitness', description: 'Explore ladies-focused fitness offerings in a supportive environment.', icon: ArrowDownRight },
  { number: '05', title: 'Female Yoga', description: 'Female yoga classes designed around movement, balance and consistency.', icon: Sparkles },
  { number: '06', title: 'Personal Training', description: 'Enquire about working one-to-one with a Fitness Emporium trainer.', icon: Dumbbell },
]

const hours = [
  ['Monday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Tuesday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Wednesday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Thursday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Friday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Saturday', '6:30 AM – 10:00 AM', '2:30 PM – 1:00 AM'],
  ['Sunday', 'Contact for current hours', ''],
]

const faq = [
  ['What services does Fitness Emporium offer?', 'Fitness Emporium offers gym, cardio, group training, ladies fitness, female yoga classes and personal training options.'],
  ['Do you offer personal training?', 'Yes. Enquire about personal training with Usman Siddiqui, Hasan Raza or Talha Ghouri.'],
  ['Do you offer ladies fitness and female yoga?', 'Ladies fitness and female yoga classes are publicly advertised. Contact the gym for current details and schedules.'],
  ['What are the current membership prices?', 'Please contact Fitness Emporium for the latest membership plans and pricing.'],
  ['What are the gym timings?', 'Monday through Saturday: 6:30 AM–10:00 AM and 2:30 PM–1:00 AM. Sunday: contact for current hours.'],
  ['Where is Fitness Emporium located?', 'B-12, Block 1, Gulshan-e-Iqbal, Karachi, Pakistan, adjacent to Practical Centre.'],
]

const enquiryHref = `${business.whatsappHref}?text=${encodeURIComponent('Hi Fitness Emporium, I would like to know more about personal training and membership options.')}`

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="Fitness Emporium home">
      <span className="brand-mark"><Zap size={compact ? 19 : 22} fill="currentColor" strokeWidth={3} /></span>
      <span className="brand-copy"><strong>FITNESS</strong><span>EMPORIUM</span></span>
    </a>
  )
}

function SectionIntro({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' }) {
  return <div className={`section-intro ${align === 'center' ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo compact />
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {['About', 'Programs', 'Trainers', 'Membership', 'Ladies Fitness', 'Gallery', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu}>{item}</a>)}
            <a className="nav-cta" href={enquiryHref} target="_blank" rel="noreferrer">Join now <ArrowRight size={16} /></a>
          </nav>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span /> Gulshan-e-Iqbal, Karachi</div>
            <h1>Get ready<br /><em>to get fit.</em></h1>
            <p>Train with purpose at Fitness Emporium. A focused space for gym, cardio, group training and more.</p>
            <div className="hero-actions"><a className="button button-red" href={enquiryHref} target="_blank" rel="noreferrer">Join now <ArrowRight size={18} /></a><a className="button button-ghost" href={business.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div>
            <div className="hero-proof"><span><Check size={15} /> Gym</span><span><Check size={15} /> Group training</span><span><Check size={15} /> Ladies fitness</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rNCIUwUKggdyzCivm2nEbADW4F3NT6.png" alt="Fitness Emporium kettlebell lightning logo" /></div>
            <div className="hero-stamp"><span>FE</span><small>TRAIN<br />WITH<br />PURPOSE</small></div>
            <div className="hero-vertical">STRENGTH <span>×</span> CONSISTENCY</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={18} /></a>
      </section>

      <section id="about" className="about-section section-light"><div className="container about-grid"><div><SectionIntro eyebrow="01 / The place" title="Built for the work." copy="Fitness Emporium is a fitness facility based in Gulshan-e-Iqbal, Karachi, offering gym training and fitness-focused programs." /><a className="text-link" href="#programs">Explore our programs <ArrowRight size={17} /></a></div><div className="about-panel"><div className="panel-number">EST. / <strong>FE</strong></div><p>Show up with intent. Find a rhythm that works for you. Keep building.</p><div className="panel-line" /><span>Gulshan-e-Iqbal, Karachi</span></div></div></section>

      <section id="programs" className="program-section section-dark"><div className="container"><SectionIntro eyebrow="02 / What we offer" title="Find your focus." copy="Start where you are. Enquire about the right option for your goals and routine." /><div className="program-grid">{programs.map(({ number, title, description, icon: Icon }) => <article className="program-card" key={title}><div className="card-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Enquire about ${title}`}>Enquire now <ArrowUpRightIcon /></a></article>)}</div></div></section>

      <section id="trainers" className="trainers-section section-light"><div className="container"><SectionIntro eyebrow="03 / The coaches" title="Meet your trainers." copy="Real people. Real expertise. Enquire directly about personal training options." /><div className="trainer-grid">{business.trainers.map((trainer) => <article className="trainer-card" key={trainer.name}><div className="trainer-image"><img src={trainer.image} alt={`${trainer.name} promotional graphic`} loading="lazy" /><div className="trainer-overlay"><a href={enquiryHref} target="_blank" rel="noreferrer">Enquire now <ArrowRight size={16} /></a></div></div><div className="trainer-info"><div><span className="eyebrow">{trainer.role}</span><h3>{trainer.name}</h3></div><div className="tag-list">{trainer.expertise.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

      <section className="purpose-section section-red"><div className="container purpose-grid"><div><span className="eyebrow dark-eyebrow">Personal training</span><h2>Train with<br /><span>purpose.</span></h2></div><div><p>Want more direction in your training? Get in touch to learn more about personal training and membership options at Fitness Emporium.</p><a className="button button-white" href={enquiryHref} target="_blank" rel="noreferrer">Join now <ArrowRight size={18} /></a></div></div></section>

      <section id="membership" className="membership-section section-light"><div className="container membership-grid"><SectionIntro eyebrow="04 / Membership" title="Make your move." copy="Contact Fitness Emporium for the latest membership plans and pricing." /><div className="membership-card"><div className="membership-icon"><Phone size={22} /></div><h3>Current membership plans</h3><p>Pricing and plan details are best confirmed directly with the gym.</p><a className="button button-red" href={business.whatsappHref} target="_blank" rel="noreferrer">Get membership details <ArrowRight size={17} /></a></div></div></section>

      <section id="ladies-fitness" className="ladies-section section-dark"><div className="container ladies-grid"><div className="ladies-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MX2zrJYKUrgfLtFqbhMbe9qaUtpOWb.png" alt="Trainer at Fitness Emporium" loading="lazy" /><div className="image-caption">Fitness Emporium / Training</div></div><div><SectionIntro eyebrow="05 / Ladies fitness" title="A space to feel strong." copy="Explore ladies fitness and female yoga classes at Fitness Emporium. Contact us for current schedules and details." /><a className="button button-red" href={business.whatsappHref} target="_blank" rel="noreferrer">Ask about ladies fitness <ArrowRight size={17} /></a></div></div></section>

      <section id="gallery" className="gallery-section section-light"><div className="container"><SectionIntro eyebrow="06 / Gallery" title="See the energy." copy="Authentic Fitness Emporium promotional imagery. Official gym photography can be added as it becomes available." /><div className="gallery-grid"><div className="gallery-tile tile-wide"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4UUh0Ac02wFuFvjX1gBtLyAf42WsOu.png" alt="Usman Siddiqui personal trainer promotional graphic" loading="lazy" /><span>Trainers</span></div><div className="gallery-tile"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cU1CI0VfbFpKjYM1SLU1aPGkWx6XjX.png" alt="Hasan Raza fitness trainer promotional graphic" loading="lazy" /><span>Training</span></div><div className="gallery-tile gallery-note"><span className="eyebrow">Gallery note</span><p>Official Fitness Emporium photos coming soon.</p><a href={business.whatsappHref} target="_blank" rel="noreferrer">Share your photos <ArrowUpRightIcon /></a></div></div></div></section>

      <section id="faq" className="faq-section section-dark"><div className="container faq-grid"><SectionIntro eyebrow="07 / FAQ" title="Good to know." copy="Have a question we haven’t answered? Call or WhatsApp the gym for current information." /><div className="faq-list">{faq.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section id="contact" className="contact-section section-light"><div className="container contact-grid"><div><SectionIntro eyebrow="08 / Find us" title="Your next session starts here." copy="Drop in, call or message us to get the latest details." /><div className="contact-actions"><a className="button button-red" href={business.phoneHref}><Phone size={18} /> Call now</a><a className="button button-dark" href={business.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div></div><div className="contact-card"><div className="contact-row"><MapPin size={22} /><div><strong>Visit us</strong><p>{business.address}<br /><span>{business.landmark}</span></p><a href="https://maps.google.com/?q=Fitness+Emporium+Gulshan-e-Iqbal+Karachi" target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a></div></div><div className="contact-row"><Clock3 size={22} /><div><strong>Hours</strong><div className="hours-list">{hours.map(([day, morning, evening]) => <div key={day}><span>{day}</span><small>{morning}{evening && <><br />{evening}</>}</small></div>)}</div></div></div></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><Logo /><div className="footer-links"><a href="#about">About</a><a href="#programs">Programs</a><a href="#trainers">Trainers</a><a href="#contact">Contact</a></div><a className="instagram-link" href="#top" aria-label="Instagram"><Camera size={18} /></a></div><div className="container footer-bottom"><p>Website concept prepared for Fitness Emporium. Business information, imagery and content require final owner approval before publication.</p><span>© {new Date().getFullYear()} Fitness Emporium</span></div></footer>

      <div className="mobile-cta"><a href={business.phoneHref}><Phone size={17} /> Call</a><a href={business.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><a href="https://maps.google.com/?q=Fitness+Emporium+Gulshan-e-Iqbal+Karachi" target="_blank" rel="noreferrer"><MapPin size={17} /> Directions</a></div>
    </main>
  )
}

function ArrowUpRightIcon() { return <ArrowUpRight size={16} /> }

function ArrowUpRight({ size }: { size: number }) { return <ArrowRight size={size} className="arrow-up-right" /> }

function ArrowUpRightIconOld() { return <Play size={16} /> }

void ArrowUpRightIconOld
