<template>
    <div>
        <h1>Add Item to Menu <font-awesome-icon icon="coffee"/> </h1>
        
        <div>
           <form @submit.prevent="onSubmit">
               <p>
                   <label for="name">Name:</label>
                   <input id="name" v-model="name" placeholder="name" lazy>
                </p>
                <p>
                   <label for="description">Description:</label>
                   <input id="description" v-model="description" placeholder="description" lazy>
                </p>
                <div>
                  <p>
                    <label for="newIng">New Ingredient:</label>
                    <input id="newIng" v-model="newIngredient" placeholder="new ingredient" lazy>
                    <font-awesome-icon icon="plus-square" v-on:click="addIngredient"/>
                  </p>
                  Current Ingredients: 
                  <span v-for="ingr in ingredients" :key="ingr">
                    <p>{{ ingr }} <font-awesome-icon icon="minus-square" v-on:click="deleteIngredient(ingr)"/></p>
                  </span>
                </div>
                <p>
                    <input type="submit" value="Submit">
                </p>
           </form>
        </div>
    </div>
</template>

<script>
export default{
  name: 'AddItem',
  data () {
    return {
      name: '',
      description: '',
      newIngredient: '',
      ingredients: ['apple'],
    }
  },
  methods: {
    onSubmit () {
      let newItem = {
        name: this.name,
        description: this.description,
        ingredients: this.ingredients
      }
      console.log('new item ', newItem)
    },
    addIngredient (event) {
      console.log('trying to add new ingredient ', this.newIngredient)
      this.ingredients.push(this.newIngredient)
      this.newIngredient = ''
    },
    deleteIngredient (ingr) {
      console.log('trying to delete ', ingr)
      const ind = this.ingredients.indexOf(ingr)
      this.ingredients.splice(ind,1)
    }
  }
}
</script>

<style scoped>

</style>
