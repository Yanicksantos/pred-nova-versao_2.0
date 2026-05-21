<template>
    <v-sheet
      color="#124495" 
      min-height="600"
      class="position-relative overflow-hidden"
    >
        <div class="w-100 h-100 mx-auto"  style="max-width: 1920px;">

        
        <div class="position-absolute fill-height w-100 opacity-20 d-flex align-center" style="top: 0; left: 0; background-image: url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.2%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); background-repeat: repeat; pointer-events: none;"/>
        <div class="position-relative text-white d-flex align-center pa-16" style="z-index: 2;">
            <v-row class="py-10">
                <v-col cols="6">
                    <h2 class="text-body-1 text-uppercase" style="font-family: sans-serif;">Entre em Contato</h2>
                    <h1 class="text-h3 font-weight-bold my-10" style="font-family: sans-serif;">Vamos Conversar sobre seu Projeto</h1>
                    <p class="text-h6">Nossa equipe está pronta para atender suas necessidades. Preencha o formulário e entraremos em contato em até 24 horas.</p>
                    <div>
                        <div class="d-flex ga-4 my-10 align-center" >
                            <v-icon  style="background-color: #205EA8;" class="pa-6">mdi-phone-dial</v-icon>
                            <div>
                                <P class="text-h6 font-weight-bold">Telefone</P>
                                <p class="text-body-1">+55 (27) 3337-5977</p>
                            </div>
                        </div>
                        <div class="d-flex ga-4 my-10 align-center" >
                            <v-icon  style="background-color: #205EA8;" class="pa-6">mdi-email-outline</v-icon>
                            <div>
                                <P class="text-h6 font-weight-bold">E-mail</P>
                                <p class="text-body-1">contato@pred.com.br</p>
                            </div>
                        </div>
                        <div class="d-flex ga-4 my-10 align-center" >
                            <v-icon  style="background-color: #205EA8;" class="pa-6">mdi-map-marker-multiple-outline</v-icon>
                            <div>
                                <P class="text-h6 font-weight-bold">Endereço</P>
                                <p class="text-body-1">R. Italina Pereira Mota, 440 - Jardim Camburi, Vitória - ES, 29090-370</p>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="px-10">
                    <v-card width="100%" class="pa-6">
                        <v-card-item>
                            <p class="font-weight-bold mb-4">Nome Completo *</p>
                            <v-text-field variant="outlined" placeholder="Seu Nome"></v-text-field>
                            <p class="font-weight-bold mb-4">E-mail *</p>
                            <v-text-field variant="outlined" placeholder="Seu@mail.com"></v-text-field>
                            <p class="font-weight-bold mb-4">Telefone *</p>
                            <v-text-field variant="outlined" placeholder="(00) 00000-0000"></v-text-field>
                            <p class="font-weight-bold mb-4">Empresa</p>
                            <v-text-field variant="outlined" placeholder="Nome da Empresa"></v-text-field>
                            <p class="font-weight-bold mb-4">Mensagem</p>
                            <v-textarea variant="outlined" counter="500" maxlength="500"  placeholder="Digite sua mensagem aqui..."></v-textarea>
                            <v-btn color="#0052A5" class="mt-6" block size="x-large"  >Enviar Mensagem</v-btn>
                        </v-card-item>

                    </v-card>
                </v-col>
            </v-row>
        </div>
        </div>
    </v-sheet>  
</template>