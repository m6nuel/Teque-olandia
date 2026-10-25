import { useState } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/tequenolandia.arg/'
// Reemplazá este número por el WhatsApp comercial en formato internacional, sin + ni espacios.
const WHATSAPP_URL = 'https://wa.me/5491127407530?text=Hola%2C%20quiero%20consultar%20por%20teque%C3%B1os'

const products = [
  {
    name: 'Tequeños de queso',
    description: 'Masa dorada y crujiente, con un relleno suave de queso fundido.',
    price: '$5.000',
    tag: 'Favorito',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Jamón y queso',
    description: 'Una combinación clásica, sabrosa y perfecta para compartir.',
    price: '$5.500',
    tag: 'Clásico',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Tequeños especiales',
    description: 'Una opción diferente para quienes quieren probar nuevos sabores.',
    price: '$6.000',
    tag: 'Especial',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=85',
  },
]

const benefits = [
  { icon: '✦', title: 'Ingredientes seleccionados', text: 'Priorizamos ingredientes frescos y sabores que se disfrutan en cada bocado.' },
  { icon: '♡', title: 'Hechos con dedicación', text: 'Cada tequeño busca conservar ese toque casero y artesanal.' },
  { icon: '⌁', title: 'Ideales para compartir', text: 'Para reuniones, cumpleaños, picadas o darte un gusto cualquier día.' },
  { icon: '◷', title: 'Fáciles de preparar', text: 'Seguí las instrucciones del envase para disfrutarlos calientes y crocantes.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')

  const addToCart = (name: string) => {
    setCartCount((count) => count + 1)
    setNotice(`${name} se agregó a tu pedido de ejemplo.`)
    window.setTimeout(() => setNotice(''), 2600)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#183b32]">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2" aria-label="Tequñolandia, inicio" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-xl" aria-hidden="true">✦</span>
            <span>
              <span className="block text-lg font-black leading-tight tracking-tight">Tequñolandia</span>
              <span className="block text-[10px] font-medium tracking-widest text-emerald-900/65">UN BOCADO DE TRADICIÓN</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navegación principal">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#nosotros">Nosotros</a>
            <a className="nav-link" href="#productos">Productos</a>
            <a className="nav-link" href="#tequenos">¿Qué son?</a>
            <a className="nav-link" href="#opiniones">Opiniones</a>
            <a className="nav-link" href="#contacto">Contacto</a>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-950/15 px-3 py-2 text-sm font-bold transition hover:bg-emerald-950/5" aria-label="Contactar por WhatsApp">WhatsApp ↗</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-950/15 px-3 py-2 text-sm font-bold transition hover:bg-emerald-950/5" aria-label="Instagram de Tequñolandia">Instagram ↗</a>
            <button className="rounded-full border border-emerald-950/15 px-3 py-2 text-sm font-semibold transition hover:bg-emerald-950/5" onClick={() => setNotice(`Tu pedido de ejemplo tiene ${cartCount} producto(s).`)} aria-label="Ver pedido">Pedido ({cartCount})</button>
            <a href="#productos" className="rounded-full bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-emerald-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300">Ver menú ↗</a>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-950/15 text-xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-emerald-950/10 bg-[#fffaf2] px-5 py-4 lg:hidden" aria-label="Navegación móvil">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {['Inicio', 'Nosotros', 'Productos', '¿Qué son?', 'Opiniones', 'Contacto'].map((item) => {
                const href = item === '¿Qué son?' ? '#tequenos' : `#${item.toLowerCase() === '¿qué son?' ? 'tequenos' : item.toLowerCase()}`
                return <a key={item} className="rounded-lg px-3 py-3 font-semibold hover:bg-amber-100" href={href} onClick={closeMenu}>{item}</a>
              })}
              <a href="#productos" onClick={closeMenu} className="mt-2 rounded-full bg-amber-400 px-5 py-3 text-center font-extrabold text-emerald-950">Ver menú</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-2 rounded-full border border-emerald-950/15 px-5 py-3 text-center font-bold">WhatsApp ↗</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={closeMenu} className="rounded-full border border-emerald-950/15 px-5 py-3 text-center font-bold">Instagram @tequenolandia.arg ↗</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[#173a30]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,35,28,.94)_0%,rgba(10,35,28,.82)_45%,rgba(10,35,28,.18)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1800&q=90')] bg-cover bg-center opacity-45" />
          <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-amber-200">✦ SABOR VENEZOLANO PARA COMPARTIR</span>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">Pequeños bocados, <span className="text-amber-300">grandes momentos.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Descubrí los tequeños: masa dorada y crujiente por fuera, relleno delicioso por dentro. El clásico que convierte cualquier reunión en una celebración.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#productos" className="rounded-full bg-amber-400 px-7 py-3.5 text-center font-extrabold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-amber-300">Explorar productos <span aria-hidden="true">→</span></a>
                <a href="#tequenos" className="rounded-full border border-white/50 px-7 py-3.5 text-center font-bold text-white transition hover:bg-white/10">Conocé los tequeños</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
                <span>✓ Ideales para compartir</span><span>✓ Opciones para distintos gustos</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] border border-amber-200/25 rotate-3" />
              <img className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl" src="https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1100&q=90" alt="Bocados dorados servidos para compartir" />
              <div className="absolute -bottom-5 -left-3 max-w-[230px] rounded-2xl bg-[#fffaf2] p-4 text-emerald-950 shadow-xl sm:-left-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700">El favorito de la mesa</p>
                <p className="mt-1 text-lg font-black">Crujientes por fuera. ¡Inolvidables por dentro!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-emerald-950/10 bg-white py-7">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-4">
            {benefits.map((benefit) => <div key={benefit.title} className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-100 text-xl text-emerald-900">{benefit.icon}</span><div><h2 className="font-extrabold">{benefit.title}</h2><p className="mt-1 text-sm leading-5 text-emerald-950/65">{benefit.text}</p></div></div>)}
          </div>
        </section>

        <section id="productos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-sm font-black uppercase tracking-[.2em] text-amber-700">Nuestro menú</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Encontrá tu favorito</h2><p className="mt-3 max-w-2xl leading-7 text-emerald-950/65">Elegí una opción para tu próxima picada, juntada o momento especial.</p></div>
            <a href="#contacto" className="self-start rounded-full border border-emerald-950/20 px-5 py-3 text-sm font-bold transition hover:bg-emerald-950 hover:text-white sm:self-auto">Consultar menú completo ↗</a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <article key={product.name} className="group overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden"><img src={product.image} alt={product.name} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-[#fffaf2] px-3 py-1.5 text-xs font-extrabold text-emerald-950">{product.tag}</span></div>
              <div className="p-6"><h3 className="text-xl font-black">{product.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-emerald-950/65">{product.description}</p><div className="mt-5 flex items-center justify-between gap-3"><span className="text-xl font-black">{product.price}<span className="ml-1 text-xs font-medium text-emerald-950/50">/ consultar</span></span><button onClick={() => addToCart(product.name)} className="rounded-full bg-emerald-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800">+ Agregar</button></div></div>
            </article>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-emerald-950/50">Precios e imágenes ilustrativos para la maqueta. Reemplazalos por el menú, las fotos y los valores reales de tu negocio.</p>
        </section>

        <section id="tequenos" className="bg-[#f3eadb] py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" alt="Mesa con comida para compartir" loading="lazy" className="aspect-[5/4] w-full object-cover" /></div>
            <div><p className="text-sm font-black uppercase tracking-[.2em] text-amber-700">Un poco de historia</p><h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">¿Qué es un tequeño?</h2><p className="mt-5 leading-7 text-emerald-950/75">El tequeño es un aperitivo muy popular de Venezuela: tradicionalmente consiste en un bastón de queso envuelto en una masa que se cocina hasta quedar dorada y crujiente. Se disfruta en celebraciones, reuniones familiares y encuentros con amigos.</p><p className="mt-4 leading-7 text-emerald-950/75">Aunque el queso es el relleno clásico, hoy existen distintas versiones con otros ingredientes. Se suelen acompañar con salsas y se sirven recién hechos para disfrutar mejor su textura.</p><div className="mt-7 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-white/75 p-4"><span className="text-2xl">🥟</span><h3 className="mt-2 font-extrabold">Masa dorada</h3><p className="mt-1 text-sm text-emerald-950/65">Una textura crocante y tentadora.</p></div><div className="rounded-2xl bg-white/75 p-4"><span className="text-2xl">🧀</span><h3 className="mt-2 font-extrabold">Relleno clásico</h3><p className="mt-1 text-sm text-emerald-950/65">Queso como protagonista.</p></div></div></div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div><p className="text-sm font-black uppercase tracking-[.2em] text-amber-700">Nuestra esencia</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">La tradición se comparte.</h2></div>
          <div><p className="text-lg leading-8 text-emerald-950/75">En Tequñolandia creemos que la comida reúne a las personas. Creamos esta propuesta para acercar un clásico lleno de sabor a tus celebraciones, tus picadas y esos momentos simples que merecen algo rico.</p><p className="mt-4 leading-7 text-emerald-950/65">Queremos que elegir, preparar y compartir tus tequeños sea fácil. Por eso, esta página reúne nuestro menú, información útil y un canal de contacto directo.</p><a href="#contacto" className="mt-7 inline-flex rounded-full bg-emerald-950 px-6 py-3 font-bold text-white transition hover:bg-emerald-800">Hablemos de tu pedido →</a></div>
        </section>

        <section id="opiniones" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-black uppercase tracking-[.2em] text-amber-700">La experiencia</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Los mejores momentos se comparten</h2><p className="mt-4 leading-7 text-emerald-950/65">Esta sección puede mostrar reseñas reales cuando empieces a recibir pedidos.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[{quote:'“Fueron los protagonistas de la picada. ¡Volaron de la mesa!”',name:'Cliente de ejemplo'},{quote:'“Una opción distinta y rica para compartir en una reunión.”',name:'Cliente de ejemplo'},{quote:'“Me encantó la idea de tener un clásico venezolano para una ocasión especial.”',name:'Cliente de ejemplo'}].map((review, index) => <figure key={index} className="rounded-3xl border border-emerald-950/10 bg-[#fffaf2] p-6"><div className="text-lg tracking-widest text-amber-500" aria-label="Cinco estrellas">★★★★★</div><blockquote className="mt-4 leading-7 text-emerald-950/80">{review.quote}</blockquote><figcaption className="mt-5 text-sm font-extrabold">— {review.name}</figcaption></figure>)}</div><p className="mt-4 text-center text-xs text-emerald-950/45">Testimonios de muestra: reemplazar por opiniones auténticas antes de publicar.</p></div>
        </section>

        <section id="contacto" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-emerald-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[.2em] text-amber-300">¿Armamos tu próximo pedido?</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Un buen momento puede empezar con un tequeño.</h2><p className="mt-4 leading-7 text-white/70">Consultá disponibilidad, sabores, tamaños y opciones para tu evento.</p></div><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-amber-400 px-7 py-4 font-extrabold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-amber-300">Consultar por WhatsApp ↗</a></div>
          <p className="mx-auto mt-4 max-w-7xl text-xs text-emerald-950/50">El enlace de WhatsApp usa un número de ejemplo: reemplazalo por el número comercial real antes de publicar.</p>
        </section>
      </main>

      <footer className="bg-[#102d26] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1"><a href="#inicio" className="text-xl font-black">Tequñolandia</a><p className="mt-3 max-w-xs text-sm leading-6 text-white/60">Un bocado de tradición para compartir con quienes más querés.</p></div>
          <div><h2 className="font-extrabold">Explorar</h2><div className="mt-4 flex flex-col gap-3 text-sm text-white/65"><a className="hover:text-amber-300" href="#nosotros">Nosotros</a><a className="hover:text-amber-300" href="#productos">Productos</a><a className="hover:text-amber-300" href="#tequenos">¿Qué son los tequeños?</a></div></div>
          <div><h2 className="font-extrabold">Ayuda</h2><div className="mt-4 flex flex-col gap-3 text-sm text-white/65"><a className="hover:text-amber-300" href="#contacto">Contacto y pedidos</a><a className="hover:text-amber-300" href="#contacto">Preguntas frecuentes</a><a className="hover:text-amber-300" href="#contacto">Entregas y conservación</a></div></div>
          <div><h2 className="font-extrabold">Seguinos</h2><p className="mt-3 text-sm leading-6 text-white/60">Seguinos en Instagram para ver novedades y próximos sabores.</p><div className="mt-4 flex gap-3"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram de Tequñolandia" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10">ig</a><a href="#contacto" aria-label="TikTok (configurar enlace)" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10">♪</a></div></div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Tequñolandia. Todos los derechos reservados.</span><span>Precios, reseñas e imágenes de referencia. WhatsApp pendiente de configurar.</span></div></div>
      </footer>

      {notice && <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl bg-emerald-950 px-5 py-4 text-center text-sm font-semibold text-white shadow-2xl">{notice}</div>}
      <button onClick={() => setNotice(`Tu pedido de ejemplo tiene ${cartCount} producto(s).`)} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-amber-400 px-4 py-3 font-extrabold text-emerald-950 shadow-lg transition hover:scale-105" aria-label="Ver pedido"><span aria-hidden="true">🛒</span><span>Pedido {cartCount}</span></button>
    </div>
  )
}

export default App
