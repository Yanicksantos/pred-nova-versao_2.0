<template>
    <v-sheet
      color="#124495" 
      min-height="750"
      class="position-relative overflow-hidden"
    >
      <div class="mx-auto" style="max-width: 1920px;">
        <div class="position-absolute fill-height w-100 opacity-20 d-flex align-center" style="top: 0; left: 0; background-image: url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.2%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); background-repeat: repeat; pointer-events: none;"/>
        <div class="position-relative text-white d-flex align-center" style="z-index: 2;">
            <v-main class="pt-16 mt-6 px-4 d-flex align-center">
               <v-container
                fluid
                class="px-md-16  mx-auto"
                style="max-width: 1280px; z-index: 10;"
                >
                    <div class="px-md-16">
                        <v-row align="center">
                        <v-col cols="12" md="10">
                        
                        <!-- Badge -->
                        <div
                            class="d-inline-block mb-6 px-4 py-2 rounded-pill"
                            style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(6px);"
                        >
                            <span class="text-white text-caption font-weight-medium">
                            Soluções Industriais Inteligentes
                            </span>
                        </div>

                        <!-- Título -->
                        <h1
                            class="text-white font-weight-bold mb-6"
                            style="line-height: 1.2;"
                        >
                            
                            <p style="font-size: 3.90rem;">Há 30 anos <br>Transformando a Indústria com Tecnologia e Inovação</p>
                        </h1>

                        <!-- Descrição -->
                        <p
                            class="mb-6 text-h6"
                            style="line-height: 1.7; color: #DBEAFE;"
                        >
                            Por três décadas, temos sido a escolha confiável para empresas em busca de soluções industriais. Oferecemos inspeções, consultoria e treinamentos especializados. Além disso, fornecemos a plataforma inteligente S3i® para inspeções industriais e soluções de automação, incluindo monitoramento térmico por termografia infravermelha. 
                            <span>Nosso compromisso é garantir segurança, confiabilidade e produtividade para nossos clientes.</span> 
                        </p>

                        <!-- Ações -->
                        <div class="d-flex align-center ga-4">
                            <v-btn
                            color="error"
                            variant="flat"
                            append-icon="mdi-arrow-right"
                            class="text-body-1"
                             size="x-large"
                            >
                            Fale Conosco
                            </v-btn>

                            <v-btn
                             size="x-large"
                            variant="outlined"
                            href="#servicos"
                            class="text-white font-weight-semibold text-body-1"
                            style="border-color: rgba(255,255,255,0.3); background-color: rgba(255,255,255,0.1); backdrop-filter: blur(6px);"
                            >
                            Leia mais sobre nós
                            </v-btn>
                        </div>

                        </v-col>
                    </v-row>
                    </div>
                 
                </v-container>

            </v-main>
            
        </div>
        <div  class="position-absolute w-100" style="bottom: -1px; left: 0; line-height: 0; z-index: 1;">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style="width: 100%; height: 100px;"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
      </div>
    </v-sheet>
</template>

<style>
.opacity-20 {
  opacity: 0;
}
</style>