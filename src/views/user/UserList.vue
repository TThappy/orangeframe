<template>
  <div>
    <div style="padding: 20px 0">
      <a-button type="primary" icon="plus" @click="visible=true">
        新增用户
      </a-button>
    </div>
    <a-modal :afterClose="form.resetFields" cancelText="取消" okText="确认" v-model="visible" title="新增用户" @ok="handleOk">
      <a-form :form="form">
        <a-form-item v-bind="formItemLayout" label="账号">
          <a-input
              v-decorator="[
          'username',
          {
            rules: [
              {
                required: true,
                message: '请输入账号',
              },
            ],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码">
          <a-input type="password"
              v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="类型">
          <a-radio-group  v-decorator="[
          'type',
          {
            rules: [
              {
                required: true,
                message: '请选择用户类型',
              },
            ],
            initialValue: '0'
          },
        ]" >
            <a-radio-button value="0">
              普通用户
            </a-radio-button>
            <a-radio-button value="1">
              vip用户
            </a-radio-button>
          </a-radio-group>
        </a-form-item>



      </a-form>
    </a-modal>
    <a-table rowKey="id" :pagination="false" :columns="columns" :data-source="data">
      <span slot="action" slot-scope="id">
        <a>详情</a>
        <a-divider type="vertical"/>
        <a @click="del(id)">删除</a>
      </span>
      <span slot="type" slot-scope="type">
        {{ type | fmtUserType }}
      </span>
    </a-table>
    <CenterContainer>
      <a-pagination v-model="current" :total="count" show-less-items/>
    </CenterContainer>


  </div>
</template>
<script>
const columns = [
  {
    title: '编号',
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
    scopedSlots: {customRender: 'type'},
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    key: 'createtime',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
];
const formItemLayout = {
  labelCol: { span:4 },
  wrapperCol: { span:18 }

}
import { getList, del, add } from "@/api/user";

export default {
  data() {
    return {
      formItemLayout,
      data: [],
      columns,
      visible: false,
      count: 50,
      current: 1
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'addUser' });
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      let res = await getList()
      this.data = res.data
    },
     handleOk(){
      this.form.validateFieldsAndScroll(async (err, values) => {
        if (!err) {
          values.password = this.$encrypt(values.password)
          let res = await add(values)
          if (res.success){
            this.$ms("创建成功")
            this.getList()
            this.visible = false
          }else{
            this.$me(res.msg)
          }

        }
      });

    },
    del(id) {
      this.$mc("删除后无法恢复,确定删除吗?", async () => {
        let {success} = await del(id)
        if (success) {
          this.$ms("删除成功")
          this.getList()
        } else {
          this.$me("删除失败")
        }
      })

    }
  }
};
</script>
