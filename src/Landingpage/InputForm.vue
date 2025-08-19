<template>
  <div class="text-center mb-16 max-w-5xl mx-auto border rounded-2xl p-4 border-brand/30">
    <n-gradient-text
      type="primary"
      size="16"
      class="inline-flex items-center px-4 py-2 rounded-full
             bg-gray-100/80 dark:bg-gray-800/80
             border border-brand/30 text-sm font-medium backdrop-blur-sm"
    >
      {{ tm('landingPage.letsCraft.talk.title') }}
    </n-gradient-text>

    <p
      class="mt-6 mb-4
             text-gray-900 dark:text-white leading-tight"
    >
      {{ tm('landingPage.letsCraft.talk.subtitle') }}
</p>

    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="medium"
      class="max-w-3xl mx-auto grid gap-6"
    >
      <div class="grid md:grid-cols-2 gap-4">
        <n-form-item :label="tm('landingPage.letsCraft.talk.name.label')" path="user.name">
          <n-input
            v-model:value="formValue.user.name"
            :placeholder="tm('landingPage.letsCraft.talk.name.placeholder')"
            clearable
          />
        </n-form-item>

        <n-form-item :label="tm('landingPage.letsCraft.talk.email.label')" path="user.email">
          <n-input
            v-model:value="formValue.user.email"
            :placeholder="tm('landingPage.letsCraft.talk.email.placeholder')"
            clearable
          />
        </n-form-item>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <n-form-item :label="tm('landingPage.letsCraft.talk.phone.label')" path="phone">
          <n-input
            v-model:value="formValue.phone"
            :placeholder="tm('landingPage.letsCraft.talk.phone.placeholder')"
            clearable
          />
        </n-form-item>

        <n-form-item :label="tm('landingPage.letsCraft.talk.company.label')" path="company">
          <n-input
            v-model:value="formValue.company"
            :placeholder="tm('landingPage.letsCraft.talk.company.placeholder')"
            clearable
          />
        </n-form-item>
      </div>

      <div>
        <label class="block mb-2 font-medium text-gray-800 dark:text-gray-200">
          {{ tm('landingPage.letsCraft.talk.services.label') }}
        </label>
        <n-space wrap>
          <n-tag
            v-for="item in tm('landingPage.letsCraft.talk.services.items')"
            :key="item"
            checkable
            :checked="formValue.services.includes(item)"
            @update:checked="toggleService(item)"
          >
            {{ item }}
          </n-tag>
        </n-space>
      </div>

      <n-form-item :label="tm('landingPage.letsCraft.talk.budget.label')" path="budget">
        <n-select
          v-model:value="formValue.budget"
          :placeholder="tm('landingPage.letsCraft.talk.budget.placeholder')"
          :options="budgetRange"
          clearable
        />
      </n-form-item>

      <n-form-item :label="tm('landingPage.letsCraft.talk.project.label')" path="project">
        <n-input
          type="textarea"
          v-model:value="formValue.project"
          :placeholder="tm('landingPage.letsCraft.talk.project.placeholder')"
          clearable
          autosize
        />
      </n-form-item>

      <n-form-item>
        <n-button
          type="primary"
          size="large"
          block
          @click="handleValidateClick"
          class="border border-brand/30 !bg-brand/70 hover:!bg-brand/80"
        >
          {{ tm('landingPage.letsCraft.talk.buttons.send') }}
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useMessage } from "naive-ui"
import { useI18n } from "vue-i18n"

const { tm } = useI18n()
const formRef = ref(null)
const message = useMessage()

const formValue = ref({
  user: {
    name: "",
    email: ""
  },
  phone: "",
  company: "",
  services: [],
  budget: null,
  project: ""
})

const rules = {
  user: {
    name: {
      required: true,
      message: "Please enter your name",
      trigger: "blur"
    },
    email: {
      required: true,
      message: "Please enter your email",
      trigger: ["input", "blur"],
      validator: (_, value) => /\S+@\S+\.\S+/.test(value)
    }
  },
  phone: {
    required: true,
    message: "Please enter your phone number",
    trigger: ["input", "blur"],
    validator: (_, value) => /^[0-9\-\+\s]+$/.test(value)
  },
  company: {
    required: false
  },
  budget: {
    required: true,
    message: "Please select a budget range",
    trigger: "change"
  },
  project: {
    required: true,
    message: "Please describe your project",
    trigger: "blur"
  }
}

const budgetRange = [
  { label: "Less than $1,000", value: "budget1" },
  { label: "$1,000 - $5,000", value: "budget2" },
  { label: "$5,000 - $10,000", value: "budget3" },
  { label: "$10,000 - $50,000", value: "budget4" },
  { label: "Over $50,000", value: "budget5" }
]

const toggleService = (item) => {
  const services = formValue.value.services
  if (services.includes(item)) {
    formValue.value.services = services.filter(s => s !== item)
  } else {
    formValue.value.services.push(item)
  }
}

const handleValidateClick = (e) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Form submitted successfully ✅")
      console.log("Form Data:", formValue.value)
    } else {
      message.error("Please correct the errors ❌")
    }
  })
}
</script>
