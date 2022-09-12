 <qh-table :options="tableOptions" :data="tableData">
    <el-table-column label="操作" min-width="100">
        <template #default="scope">
          <el-button
            size="default"
            type="primary"
            text
            >查看</el-button
          >
        </template>
      </el-table-column>
</qh-table>

<script setup lang="ts">
import { reactive, ref } from "vue";
  const tableOptions = reactive([
    {
      prop: "name",
      label: "姓名",
      width: 200,
    },
    {
      prop: "age",
      label: "年龄"
    },
  ]);

    const tableData = reactive<any>([
    {
      name: "lx",
      age: 18 ,
    },
    {
      name: "lsx",
      age: 180,
    },
  ]);

</script>
