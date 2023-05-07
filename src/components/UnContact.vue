<template>
  <div class="row">
    <div class="col m12">
      <div class="card blue lighten-3">
        <div class="card-title">
          <span class="card-title"><strong>{{contact.nom }} {{ contact.prenom}}</strong></span>
        </div>
        <div class="card-content">
          <p>Adresse: {{contact.adresse}}</p>
          <p>Numéro de téléphone: {{contact.telephone}}</p>
          <p>
            <label>
              <input type="checkbox"  v-model="contact.favoris" @click="makeFavorite(contact)"/>
              <span><i class="material-icons">favorite</i> </span>
            </label>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";

const {contact,listeFavoris}=defineProps(['contact','listeFavoris'])

const makeFavorite=(contact)=>{

  contact.favoris=!contact.favoris
  if(contact.favoris===true)
  {
    addFavorite(contact)
  }
  else if (contact.favoris===false){
    removeFavorite(contact)
  }
}
const addFavorite=(contact)=>{
  contact.favoris=true
  listeFavoris.push(contact)
}

const removeFavorite=(contact)=>{
  contact.favoris=false
  const index=listeFavoris.indexOf(contact)
  listeFavoris.splice(index,1)
}


</script>

<style scoped>

</style>