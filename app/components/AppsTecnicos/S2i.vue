<template>
    <div style="background-color: #F5F5F5; min-height: 700px;" class="pa-16">
        <div style="max-width: 1920px;" class="mx-auto">
             <div
                class="mb-6 px-4 py-2 rounded-pill d-flex align-center justify-center ga-2 mx-auto"
                style="background-color: #DEE3E8; backdrop-filter: blur(6px); max-width: 200px;"
            >
                <v-icon style="color: #1A4272;">mdi-account-search</v-icon>
                <span class="text-caption font-weight-bold" style="color: #1A4272;">
                Inspeção Industrial
                </span>
            </div>


            <div class="w-66 mx-auto mb-16">
                <h1 class="text-center mb-6 font-weight-bold text-6" style="color: #0A2647;">S2i® - Sistema Simplificado de Inspeção</h1>
                <p class="text-body-1" color="#4B5563">Solução simplificada do S3i® desenvolvida especificamente para inspeção industrial, focada em inspeções preditivas e sensitivas com formação completa de inspetores.</p>
            </div>

           <v-row>
                <v-col cols="6">
                    <div class="w-100 h-100">
                        <img
                        src="/servico/appsTecnicos/s2i.webp"
                        alt="Imagem do S2i"
                        class="rounded-lg elevation-10 h-100 w-100 mx-auto"
                        style="object-fit: cover;"
                        />
                    </div>
                </v-col>

                <v-col cols="6" class="px-10 d-flex flex-column ga-6">
                    <v-card class="rounded-lg elevation-10">
                        <v-card-title class="d-flex ga-4 align-center">
                            <v-icon class="pa-5 text-body-1 text-error font-weight-bold rounded" style="background-color: #FBE9E9;" >mdi-chart-line</v-icon>
                            <p class="text-body-1 font-weight-bold" style="font-family: sans-serif;">Inspeções Preditivas</p>
                        </v-card-title>

                        <v-card-item>
                            <p class="text-body-2 text-disabled">Antecipe falhas e problemas através de análises avançadas e monitoramento contínuo dos equipamentos industriais.</p>
                        </v-card-item>
                    </v-card>

                    <v-card class="rounded-lg elevation-10">
                        <v-card-title class="d-flex ga-4 align-center">
                            <v-icon class="pa-5 text-body-1 text-error font-weight-bold rounded" style="background-color: #FBE9E9;" >mdi-eye</v-icon>
                            <p class="text-body-1 font-weight-bold" style="font-family: sans-serif;">Inspeções Sensitivas</p>
                        </v-card-title>

                        <v-card-item>
                            <p class="text-body-2 text-disabled">Detecção precisa de anomalias através de sensores inteligentes e análise de dados em tempo real.</p>
                        </v-card-item>
                    </v-card>

                    <v-card class="rounded-lg elevation-10">
                        <v-card-title class="d-flex ga-4 align-center">
                            <v-icon class="pa-5 text-body-1 text-error font-weight-bold rounded" style="background-color: #FBE9E9;" >mdi-school</v-icon>
                            <p class="text-body-1 font-weight-bold" style="font-family: sans-serif;">Formação de Inspetores</p>
                        </v-card-title>

                        <v-card-item>
                            <p class="text-body-2 text-disabled">Programa completo de capacitação e certificação de inspetores com metodologias reconhecidas internacionalmente.</p>
                        </v-card-item>
                    </v-card>

                    <v-card class="rounded-lg elevation-10">
                        <v-card-title class="d-flex ga-4 align-center">
                            <v-icon class="pa-5 text-body-1 text-error font-weight-bold rounded" style="background-color: #FBE9E9;" >mdi-cellphone-text</v-icon>
                            <p class="text-body-1 font-weight-bold" style="font-family: sans-serif;">Interface Simplificada</p>
                        </v-card-title>

                        <v-card-item>
                            <p class="text-body-2 text-disabled">Acesso mobile e desktop com interface intuitiva, facilitando o trabalho em campo e no escritório.</p>
                        </v-card-item>
                    </v-card>



                </v-col>
           </v-row>
        </div>
    </div>
</template>