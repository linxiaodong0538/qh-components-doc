<qh-form :options="formOptions" :form="formData" @callback="search">
</qh-form>
<qh-table :options="tableOptions" :data="tableData">
<el-table-column label="操作" min-width="100">
<template #default="scope">
<el-button
size="default"
type="primary"
text
@click="dialogVisible = true" >操作</el-button
          >
</template>
</el-table-column>
</qh-table>
<qh-dialog
:rules="rules"
ref="dialog"
:title="title"
:form="dialogForm"
:options="dialogOptions"
v-model:visible="dialogVisible"
@change="dialogChange"
@focus="dialogFocus"
@callback="submitForm"
@upload-success="uploadSuccess" ></qh-dialog>

  <script setup lang="ts">
  import { reactive, ref } from "vue";
  import { Search } from "@element-plus/icons-vue";
  
  const title = ref<string>("新增");
  let dialogVisible = ref(false);
  const dialogForm = reactive<any>({});
  const dialogOptions = reactive([
    {
      prop: "name",
      label: "停车场名称",
      type: "upload",
      hide: false,
      span: 12,
      remote: true,
      attrs: {
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      },
      options: [
        { label: "姓名", value: "lx", children: [{ label: "1", value: "2" }] },
      ],
    },
    {
      prop: "alarmType",
      label: "报警类型",
      type: "datetime",
      remote: true,
    },
    {
      prop: "regionId",
      label: "管理区域",
      type: "cascader",
      clearable: true,
      options: [],
      props: {
        expandTrigger: "hover",
        value: "id",
        label: "title",
        emitPath: false,
      },
    },
    {
      prop: "address",
      label: "地址",
      type: "text",
    },
    {
      prop: "parkingSpaceCount",
      label: "总车位数",
      type: "number",
    },
    {
      prop: "remainingCount",
      label: "剩余车位数",
      type: "number",
      controls: true,
    },
    {
      prop: "remark",
      label: "备注",
      type: "textarea",
      span: 12,
    },
    {
      prop: "ruleId",
      label: "临时停车收费规则",
      span: 13,
      type: "select",
      options: [],
    },
    {
      prop: "chargeRemark",
      label: "收费规则备注",
      disabled: true,
      span: 13,
      type: "textarea",
    },
    {
      prop: "isMonthlyCardUsed",
      type: "radio",
      label: "是否启用月卡",
      span: 13,
      options: [
        { label: "是", value: true },
        { label: "否", value: false },
      ],
    },
    {
      prop: "monthlyCardList",
      label: "选择月卡",
      multiple: true,
      hide: false,
      span: 12,
      type: "select",
      options: [],
    },
  ]);
  const rules = {
    alarmType: [
      {
        required: true,
        message: "不能为空",
        trigger: ["change", "blur"],
      },
    ],
    address: [
      {
        required: true,
        message: "不能为空",
        trigger: ["change", "blur"],
      },
    ],
    remark: [
      {
        required: true,
        message: "不能为空",
        trigger: ["change", "blur"],
      },
    ],
  };
  
  const cancel = () => {
    dialogVisible.value = false;
  };
  const dialogChange = () => {};
  const dialogFocus = () => {};
  const submitForm = () => {
    console.log("dialogForm", dialogForm);
  };
  
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
  
  const tableOptions = reactive([
    {
      prop: "name",
      label: "姓名",
      width: 200,
    },
    {
      prop: "age",
      label: "年龄",
      formatter: (row, column) => {},
    },
  ]);

  
  const tableData = reactive<any>([
    {
      name: "lx",
      age: 18,
    },
    {
      name: "lsx",
      age: 180,
    },
  ]);
  const uploadSuccess = (e) => {
    console.log("e", e);
  };
  const search = () => {
    console.log("formData", formData);
  };
  </script>
  <style scoped>
    body{
        background:red
    }
  </style>
