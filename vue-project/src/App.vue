<script>
export default {
  data() {
    return {
      text: '',
      count: 0,
      count2: 0,
      firstArray: ['Maria', 'João', 'Richard', 'Eduardo']
    }
  },
  methods: {
    addStudent() {
      if(this.firstArray.length >= 10){
        return
      }
      this.firstArray.push(this.text)
      this.text = ''
    },
    removeLastStudent() {
      this.firstArray.pop()
    },
    removeStudent(index) {
      this.firstArray.splice(index, 1)
    }
  },
  created () {
    this.firstArray.push('Manoela', 'a', 'b', 'c', 'd')
  },
  computed: {
    sumCount() {
      return this.count + this.count2
    }
  }


}
</script>

<template>
  
  <RouterView />
</template>

<style scoped>
.greenn {
  color: #009488
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
