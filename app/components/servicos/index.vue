<template>
    <div style="min-height: 500px; max-width: 1920px;" class="px-md-16 py-16 mx-auto">
        <div class="w-md-66 mx-auto">
            <h2 class="font-weight-bold text-body-1 text-error text-center">Nossos Serviços</h2>
            <h1 class="text-center font-weight-bold text-h4 my-6" style="font-family: sans-serif;">Soluções Completas para sua Indústria</h1>
            <p class="text-center text-h6" style="color: #4B5563;">Oferecemos um portfólio completo de serviços especializados para atender às necessidades do setor industrial</p>
        </div>
        <div class="my-16">
            <v-row  >
                <v-col cols="4">
                    <v-card flat class="rounded border d-flex flex-column"  height="750">
                        <v-img src="/servico/services1.webp" alt="Servico 01" height="200px" cover></v-img>
                        <v-card-item class="flex-grow-1">

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-account-hard-hat</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">Inspeção Especializada e Gestão de PCM</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                               Garanta a disponibilidade física dos seus ativos através da nossa metodologia exclusiva MCI® (Manutenção Condicionada à Inspeção). Oferecemos desde técnicas avançadas de vibração, termografia e ultrassom até a estruturação completa do seu Planejamento, Aprovisionamento e Programação.
                            </p>  
                            <p class="text-body-2" style="color: #4B5563;">Identificação precisa de anomalias ocultas e redução drástica de paradas imprevistas</p>
                            <v-list>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Análise de vibração avançada</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Diagnóstico preditivo</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Planos de manutenção customizados</span>
                                </v-list-item>
                            </v-list>
                        </v-card-item>
                       
                        <v-card-actions>
                             <v-spacer></v-spacer>
                            <v-btn color="indigo-darken-4"  class="text-body-1" variant="text">Saiba Mais...</v-btn>    
                        </v-card-actions>
                    </v-card>
                    
                </v-col>

                <v-col cols="4">
                    <v-card flat class="rounded border d-flex flex-column"  height="750">
                        <v-img src="/servico/services2.webp" alt="Servico 02" height="150px" cover></v-img>
                        <v-card-item class="flex-grow-1">

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-chart-areaspline</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">Engenharia de Confiabilidade e Lubrificação</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                               Especialistas em engenharia de lubrificação, responsável por 70% das falhas. Aplicamos o Método SPA para capacitação de equipes e diagnósticos estratégicos.
                            </p>  
                            <v-list>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Lubrificação de precisão</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Treinamento Método SPA</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Diagnósticos estratégicos</span>
                                </v-list-item>
                            </v-list>
                        </v-card-item>
                        <v-card-actions>
                             <v-spacer></v-spacer>
                            <v-btn color="indigo-darken-4"  class="text-body-1" variant="text">Saiba Mais...</v-btn>    
                        </v-card-actions>
                    </v-card>
                    
                </v-col>


                <v-col cols="4">
                    <v-card flat class="rounded border d-flex flex-column"  height="750">
                        <v-img src="/servico/services3.webp" alt="Servico 03" height="200px" cover></v-img>
                        <v-card-item class="flex-grow-1">

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-cloud-upload-outline</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">Inovação Digital: S2i® e Perigômetro®</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                              Otimize sua manutenção com soluções em nuvem de alta tecnologia. O S2i® padroniza suas inspeções de campo, enquanto o Perigômetro® utiliza algoritmos inspirados na Matriz GUT (e em breve IA) para priorizar intervenções críticas de forma sistêmica, integrando-se ao seu ERP (SAP, TOTVS, IBM Maximo).
                            </p>  
                            <v-list>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Integração completa com ERP</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">IA para análise preditiva</span>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-checkbox-multiple-marked-circle">
                                    <span class="text-body-2" style="color: #4B5563;">Dashboard em tempo real</span>
                                </v-list-item>
                            </v-list>
                        </v-card-item>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                             <v-spacer></v-spacer>
                            <v-btn color="indigo-darken-4"  class="text-body-1" variant="text">Saiba Mais...</v-btn>    
                        </v-card-actions>
                    </v-card>
                    
                </v-col>


                <v-col cols="4">
                    <v-card flat class="rounded border"  height="300">
                        <v-card-item>

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-magnify-scan</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">S3i® - Sistema Inteligente de Intervenção Industrial</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                              Convidamos você a explorar uma nova era na gestão industrial. Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada etapa da sua manutenção.</p>  
                        </v-card-item>

                        <v-card-actions>
                             <v-spacer></v-spacer>
                            <v-btn color="indigo-darken-4"  class="text-body-1" variant="text">Saiba Mais...</v-btn>    
                        </v-card-actions>
                    </v-card>
                    
                </v-col>


                <v-col cols="4">
                    <v-card flat class="rounded border"  min-height="300">
                        <v-card-item>

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-account-cog</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">Consultoria Técnica</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                               Análise e otimização de processos industriais com foco em produtividade e redução de custos.             
                            </p>  
                        </v-card-item>
                    </v-card>
                    
                </v-col>

                <v-col cols="4">
                    <v-card flat class="rounded border"  min-height="300">
                        <v-card-item>

                            <v-icon class="pa-6 rounded" style="background-color: #CED5DE;" color="#0A2B5C">mdi-school</v-icon>
                            <h3 class="font-weight-semibold text-h6 my-4">Treinamento Técnico</h3>
                            <p class="text-body-2" style="color: #4B5563;">
                              Capacitação de equipes técnicas para operação e manutenção de sistemas automatizados.
                            </p>  
                        </v-card-item>
                    </v-card>
                    
                </v-col>
            </v-row>
            
        </div>
        </div>
</template>