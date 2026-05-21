<template>
    <div class="d-none d-md-flex">
      <v-list class="d-flex" role="list">
        <v-list-item role="listitem">
          <v-btn
            variant="plain"
            width="100%"
            to="/sobre"
            class="text-caption"
            aria-label="Sobre nós"
            role="button"
          >
            Institucional
          </v-btn>
        </v-list-item>
        <v-menu>
          <template #activator="{ props: menu }">
            <v-list-item role="listitem">
              <v-btn
                variant="plain"
                width="100%"
                v-bind="menu"
                append-icon="mdi-chevron-down"
                class="text-caption"
                aria-label="Nossos serviços"
                aria-expanded="false"
                role="button"
              >
                Nossos serviços
              </v-btn>
            </v-list-item>
          </template>
          <v-list density="compact" role="list">
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/engenharia-manutencao-e-confiabilidade"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Serviços de Engenharia, Manutenção e Confiabilidade"
                role="button"
              >
                Serviços de Engenharia de Manutenção  
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/inspecoes"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Serviços de Inspeções Técnicas"
                role="button"
              >
                Serviços Técnicos de Manutenção
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/s3i"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Sistema S3i"
                role="button"
              >
                Software
              </v-btn>
            </v-list-item>
            <v-list-item role="listitem">
              <v-btn
                to="/servicos/sft"
                class="w-100 text-caption"
                variant="plain"
                size="small"
                aria-label="Sistema SFT"
                role="button"
              >
                Sistema SFT
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item role="listitem">
          <v-btn
            variant="plain"
            width="100%"
            href="https://suporte.s3i.com.br/blog/"
            class="text-caption"
            aria-label="Blog"
            role="button"
          >
            Blog
          </v-btn>
        </v-list-item>
        <v-list-item role="listitem">
          <NavContato />
        </v-list-item>
      </v-list>
    </div>
  </template>
  