<script setup>
import SpanTitle from "../components/span-title.vue";
import CardQuantity from "../components/card-quantity.vue";
import CardAdd from "../components/card-add.vue";
import {reactive, ref} from "vue";
import ThreeDots from "../components/three-dots.vue";
import ApplyFilterBtn from "../components/apply-filter-btn.vue";
import ClearFilterBtn from "../components/clear-filter-btn.vue";

const state = reactive({
  patients: [
      {id: 1, name: "Thales Monteiro Moreira", cpf_responsible: "06617627342", age: 20},
    {id: 2, name: "Thales Monteiro ", cpf_responsible: "06617627342", age: 21},
    {id: 3, name: "Thales Teste", cpf_responsible: "06617627342", age: 22},
    {id: 4, name: "Thales Moreira", cpf_responsible: "06617627342", age: 23},
  ],
  headers: [
    {key:'id', title: 'ID', sortable:false},
    {key:'name', title: 'Nome', sortable:false},
    {key:'cpf_responsible', title: 'CPF do Responsável', sortable:false},
    {key:'age', title: 'Idade', sortable:false},
    {key:'three_dots', title: '', sortable:false},
  ]
})
const itemsPerPage = ref(10)
const page = ref(1)
</script>

<template>
  <span-title title="Pacientes"/>
  <v-row class="mt-1">
    <v-col cols="12" md="4">
      <card-quantity quantity="42" description="Total de Pacientes"/>
    </v-col>
    <v-col cols="12" md="4">
      <card-add description="Cadastrar Paciente"/>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" md="3">
      <v-select label="Pacientes"
                :items="[]"
                variant="outlined"
                density="comfortable"
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-select label="Idade"
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
                :items="state.patients"
                :items-per-page="itemsPerPage"
                v-model:page="page"
  >
    <template #item.three_dots="{item}">
      <three-dots>
        <v-list-item prepend-icon="mdi-pencil-outline" style="cursor: pointer">
          <v-list-item-title>Editar</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-delete-outline" style="cursor: pointer">
          <v-list-item-title>Excluir</v-list-item-title>
        </v-list-item>
        <v-list-item to="''" prepend-icon="mdi-account-heart-outline">
          <v-list-item-title>Sessões</v-list-item-title>
        </v-list-item>
      </three-dots>
    </template>
  </v-data-table>

</template>

<style scoped>

</style>