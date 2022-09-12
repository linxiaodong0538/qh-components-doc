<qh-form :options="formOptions" :form="formData" @callback="search">
</qh-form>

<script setup lang="ts">
import { reactive, ref } from "vue";
const formOptions = reactive([
    {
      prop: "alarmType",
      label: "报警类型",
      type: "datetime",
      remote: true,
    },
]);

const formData = reactive({
    alarmType: undefined,
    });

const search = ()=>{}  
</script>