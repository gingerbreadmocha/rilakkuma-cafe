<template>
    <div class="menuPage">
        <h1>Boss Kuma's Menu</h1>
        <div class="menu-item" v-for="menuItem in this.$store.getters.menu" :key="menuItem.name">
            <div> {{ menuItem.name }} </div>
            <div> Description: {{ menuItem.description}}</div>
            <div> Ingredients:
                <div v-for="ingredient in menuItem.ingredients" :key="ingredient">
                    {{ ingredient }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  created () {
    console.log('wbat ', JSON.parse(JSON.stringify(this.$store.getters.menu)))
  }
}
</script>

<style scoped>
    .menuPage {
        margin-bottom: 20px;
    }
    .menu-item {
        margin-bottom: 30px;
    }
</style>
