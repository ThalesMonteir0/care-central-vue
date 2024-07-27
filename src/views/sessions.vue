<script setup>
import SpanTitle from "../components/span-title.vue";
import CardQuantity from "../components/card-quantity.vue";
import CardAdd from "../components/card-add.vue";
import ApplyFilterBtn from "../components/apply-filter-btn.vue";
import ClearFilterBtn from "../components/clear-filter-btn.vue";
import {reactive, ref} from "vue";
import ThreeDots from "../components/three-dots.vue";

const itemsPerPage = ref(10)
const page = ref(1)
const state = reactive({
  sessions: [
    {id: 1, patient: "Thales Monteiro", dt_session: '10/08/2024 às 15:00H', paid: false, value: "R$ 150,00"},
    {id: 2, patient: "Thales Teste", dt_session: '10/08/2024 às 15:00H', paid: true, value: "R$ 150,00"},
    {id: 3, patient: "Thales Mock", dt_session: '10/08/2024 às 15:00H', paid: false, value: "R$ 150,00"},
    {id: 4, patient: "Thales Moreira", dt_session: '10/08/2024 às 15:00H', paid: true, value: "R$ 150,00"},
  ],
  headers: [
    {key: 'id', title:'ID', sortable: false},
    {key: 'patient', title:'Paciente', sortable: false},
    {key: 'dt_session', title:'Data da Sessão', sortable: false},
    {key: 'paid', title:'pago', sortable: false},
    {key: 'value', title:'valor', sortable: false},
    {key: 'three_dots', title:'', sortable: false},
  ]
})
</script>

<template>
  <span-title title="Sessões"/>
  <v-row class="mt-1">
    <v-col cols="12" md="4">
      <card-quantity quantity="10" description="Quantidade de Sessões"/>
    </v-col>
    <v-col cols="12" md="4">
      <card-add description="Adicionar Sessão"/>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" md="3">
      <v-select label="Dt da sessão"
                :items="[]"
                variant="outlined"
                density="comfortable"
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-select label="Paciente"
                :items="[]"
                variant="outlined"
                density="comfortable"
      />
    </v-col>
    <v-col cols="12" md="2">
      <v-select label="Pago"
                :items="[]"
                variant="outlined"
                density="comfortable"
      />
    </v-col>
    <v-col cols="12" md="4">
      <apply-filter-btn/>
      <clear-filter-btn/>
    </v-col>
  </v-row>

  <v-data-table theme="dark"
                :headers="state.headers"
                :items="state.sessions"
                :items-per-page="itemsPerPage"
                v-model:page="page"
  >
    <template #item.three_dots="{ item }">
      <three-dots>
        <v-list-item prepend-icon="mdi-pencil-outline" style="cursor: pointer">
          <v-list-item-title>Editar</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-delete-outline" style="cursor: pointer">
          <v-list-item-title>Excluir</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-check-outline" style="cursor: pointer">
          <v-list-item-title>Pedir Confirmação</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-cash" style="cursor: pointer">
          <v-list-item-title>Gerar Pagamento</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-archive-outline" style="cursor: pointer">
          <v-list-item-title>Relatorios</v-list-item-title>
        </v-list-item>
      </three-dots>
    </template>
  </v-data-table>

</template>

<style scoped>

</style>