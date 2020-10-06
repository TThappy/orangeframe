<template>
  <div>
    <a-table :pagination="false" :columns="columns" :data-source="data">
      <span slot="action">
        <a>详情</a>
        <a-divider type="vertical"/>
        <a>删除</a>
      </span>
    </a-table>
    <div class="flex j-c" style="padding: 20px 0 ;">
      <a-pagination v-model="current" :total="50" show-less-items/>
    </div>

  </div>
</template>
<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
];

const data = [
  {
    id: '1',
    username: 'John Brown',
    type: '0',
  },
  {
    id: '2',
    username: 'Jim Green',
    type: '0',
  },
  {
    id: '3',
    username: 'Joe Black',
    type: '0',
  },
];

export default {
  data() {
    return {
      data,
      columns,
      current: 2
    };
  },
};
</script>
