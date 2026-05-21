<template>
    <div>
    <Contato />
    
    <div style="min-height: 400px; background-color: #000;" class="pa-16">
        <div class="h-100 w-100 mx-auto" style="max-width: 1920px;">

        
      <v-row>
        <v-col cols="3">
          <img src="/logoBranco.png" preload  alt="Logo Pred Engenharia" height="50" width="200" />
          <p class="pt-10 text-grey-lighten-1" >Transformando a indústria através de soluções tecnológicas inovadoras e eficientes.</p>
        </v-col>

         <v-col cols="3">
          <h2 class="text-h6 font-weight-bold text-white">Serviços</h2>
          <v-list class="text-grey-lighten-1 bg-black text-body-1 pa-0" variant="plain">
            <v-list-item to="#" class="bg-black">Engenharia de Manutenção</v-list-item>
            <v-list-item to="#" class="bg-black">Técnicos de Manutenção</v-list-item>
            <v-list-item to="#" class="bg-black">S3I - sistema Inteligente de Intervenção Industrial</v-list-item>
            <v-list-item to="#" class="bg-black">Software</v-list-item>
          </v-list>
        </v-col>

        <v-col cols="3">
          <h2 class="text-h6 font-weight-bold text-white">Empresa</h2>
          <v-list class="text-grey-lighten-1 bg-black text-body-1 pa-0" variant="plain">
            <v-list-item to="#" class="bg-black">Sobre Nós</v-list-item>
            <v-list-item to="#" class="bg-black">Contato</v-list-item>
          </v-list>
        </v-col>

        <v-col cols="3">
          <h2 class="text-h6 font-weight-bold text-white">Redes Sociais</h2>
          <div class="d-flex text-grey-lighten-1 ga-4 pt-4">
            <v-icon class="text-white pa-6 rounded" style="background-color: rgba(255, 255, 255, 0.2);">mdi-linkedin</v-icon>
            <v-icon class="text-white pa-6 rounded" style="background-color: rgba(255, 255, 255, 0.2);">mdi-facebook</v-icon>
            <v-icon class="text-white pa-6 rounded" style="background-color: rgba(255, 255, 255, 0.2);">mdi-instagram</v-icon>
          </div>
        </v-col>


      </v-row>
      <hr class="my-8" style="border-color: #333;" />

      <div class="d-flex justify-space-between">
        <p class="text-grey-lighten-1"> © {{ new Date().getFullYear() }} Pred Engenharia. Todos os direitos reservados.</p>
        <div class="d-flex align-center text-grey-lighten-1 ga-4">
          <nuxt-link to="#" style="text-decoration: none;" class="text-grey-lighten-1"><p>Política de Privacidade</p></nuxt-link>
          <nuxt-link to="#" style="text-decoration: none;" class="text-grey-lighten-1"><p> privacidade@pred.com.br</p></nuxt-link>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>