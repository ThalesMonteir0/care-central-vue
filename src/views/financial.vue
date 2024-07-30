<script setup>
import SpanTitle from "../components/span-title.vue";
import CardQuantity from "../components/card-quantity.vue";
import CardAdd from "../components/card-add.vue";
import ApplyFilterBtn from "../components/apply-filter-btn.vue";
import ClearFilterBtn from "../components/clear-filter-btn.vue";
import {reactive, ref} from "vue";

const state = reactive({
  headers: [
    {key:'value', title: 'Valor', sortable:false},
    {key:'type', title: 'Tipo', sortable:false},
    {key:'date', title: 'Dt da movimentação', sortable:false},
    {key:'desc', title: 'Descrição', sortable:false},
  ],
  extracts: [
    {value: 'R$ 1,00', type:'Entrada', date:'02/07/2024', desc:'pix do thalisinho'},
    {value: 'R$ 1,00', type:'Saída', date:'02/07/2024', desc:'pagamento para o thalisinho'}
  ]
})
const itemsPerPage = ref(10)
const page = ref(1)
</script>

<template>
  <span-title title="Financeiro"/>

  <v-row class="mt-1">
    <v-col cols="12" md="4">
      <card-quantity quantity="R$ 1.000" description="Entrada"/>
    </v-col>
    <v-col cols="12" md="4">
      <card-quantity quantity="R$ 1.000" description="Saída"/>
    </v-col>
    <v-col cols="12" md="4">
      <card-add description="Adicionar movimentaçãO"/>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" md="3">
      <v-select label="Tipo"
                :items="[]"
                variant="outlined"
                density="comfortable"
      />
    </v-col>
    <v-col cols="12" md="4">
      <v-select label="Data"
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

<!--ver se é possivel colorir de vermelho ou verde a tabela linha a linha-->
  <v-data-table theme="dark"
                :headers="state.headers"
                :items="state.extracts"
                :items-per-page="itemsPerPage"
                v-model:page="page">

  </v-data-table>


</template>

<style scoped>

</style>