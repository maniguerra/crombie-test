<template>
  <div class="search">
    <span class="help-text-search">Nombre de personaje</span>
    <input
      @keyup.enter="search"
      class="input-search"
      label="Nombre del personaje"
      type="text"
      v-model="query"
    />
    <button class="button-search" @click="search" :disabled="disabled">
      Buscar
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const query = ref("");
    const router = useRouter();

    const search = () => {
      router.push(`/results?name=${query.value}`);
    };

    // Verificar que se escriban al menos tres letras en la query
    const disabled = computed(() => (query.value.length < 3 ? true : false));

    return {
      query,
      search,
      disabled,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  max-width: 400px;
  padding-top: 10px;
}
.help-text-search {
  font-size: 12px;
  margin-right: 8px;
}
.input-search {
  font-size: 12px;
  margin-right: 8px;
}
.button-search {
  font-size: 12px;
}
@media screen and (max-width: 640px) {
  .search {
    width: 100vw;
    max-width: 100vw;
    padding-top: 4px;
    min-height: 60px;
  }
}
</style>
