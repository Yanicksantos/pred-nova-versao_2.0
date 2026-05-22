<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col">
          <NuxtLink to="/" class="site-logo">
            <span class="site-logo-mark">P</span>
            <span>PRED · ENGENHARIA</span>
          </NuxtLink>
          <p class="footer-tag">
            Engenharia industrial com método MCI® próprio, serviços técnicos, tecnologia e automação para gestão de ativos desde 1993.
          </p>
          <div :style="{ display: 'flex', gap: '10px', marginTop: '24px' }">
            <a
              v-for="s in ['IN','FB','IG','YT']"
              :key="s"
              :style="{ width:'36px', height:'36px', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'4px', fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.08em' }"
            >{{ s }}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Serviços</h4>
          <NuxtLink to="/servicos/engenharia-manutencao-e-confiabilidade">Engenharia de Manutenção</NuxtLink>
          <NuxtLink to="/servicos/inspecoes">Serviços Técnicos</NuxtLink>
          <NuxtLink to="/servicos/s3i">Apps S2i® / Perigômetro®</NuxtLink>
          <NuxtLink to="/mci">Metodologia MCI®</NuxtLink>
        </div>

        <div class="footer-col">
          <h4>Empresa</h4>
          <NuxtLink to="/institucional">Sobre Nós</NuxtLink>
          <NuxtLink to="/trabalhe-conosco">Carreiras</NuxtLink>
          <a href="#contact">Contato</a>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>

        <div class="footer-col">
          <h4>Contato</h4>
          <a>(11) 3456-7890</a>
          <a>contato@pred.com.br</a>
          <a>Av. Industrial, 1000</a>
          <a>São Paulo · SP · Brasil</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 PRED ENGENHARIA · CNPJ 00.000.000/0001-00</div>
        <div :style="{ display: 'flex', gap: '24px' }">
          <a>Política de Privacidade</a>
          <a>Termos de Uso</a>
          <a>LGPD</a>
        </div>
      </div>
    </div>
  </footer>
</template>
