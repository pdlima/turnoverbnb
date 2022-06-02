<template>
  <div class="relative">
    <validation-provider v-slot="{ errors }" :rules="rules" ref="provider">
      <input
        type="file"
        class="absolute inset-0 z-10 opacity-0"
        @change="handleChange($event)"
        accept="image/*"
      />
      <div
        class="relative z-0 h-[180px] overflow-hidden aspect-video"
        v-if="preview"
      >
        <img class="object-cover min-w-full min-h-full" :src="preview" alt="" />
      </div>
      <div
        class="relative z-0 flex items-center justify-center w-full p-8 text-blue-400 uppercase border border-blue-400 border-dashed cursor-pointer"
        v-else
      >
        <div class="flex flex-col items-center">
          <IconUpload />
          <p class="mt-4">{{ label }}</p>
        </div>
      </div>
      <span class="mt-2 text-red-400" v-if="errors.length > 0">
        {{ errors[0] }}
      </span>
    </validation-provider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationProvider } from "vee-validate";

export default Vue.extend({
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
  },
  data() {
    return {
      preview: null as any,
    };
  },
  methods: {
    async handleChange(event: any) {
      const input = event.target;
      const { valid } = await (this.$refs.provider as any).validate(event);

      if (input.files && input.files[0] && valid) {
        const reader = new FileReader();
        const file = input.files[0];

        console.log(file);

        reader.onload = (e) => {
          this.preview = e.target?.result;
        };

        reader.readAsDataURL(file);

        this.model = file;
      }
    },
  },
  computed: {
    model: {
      get(): any {
        return this.value;
      },
      set(value: any) {
        this.$emit("input", value);
      },
    },
  },
});
</script>

<style scoped></style>
