import Vue from 'vue'
Vue.mixin({
    methods: {

        $ms(content, onClose, duration = 2) {
            return this.$message.success(content,duration,onClose)
        },
        $me(content, onClose, duration = 2) {
            return this.$message.error(content,duration,onClose)
        },
        $mw(content, onClose, duration = 2) {
            return this.$message.warning(content,duration,onClose)
        }
    }
})
