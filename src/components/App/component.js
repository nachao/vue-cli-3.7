import { Component, Vue } from 'vue-property-decorator'

import { getList } from '@/service/topics/request'

import template from './component.html'
import './component.scss'

@Component({
    template
})
export default class AppComponent extends Vue {
    list = []
    load = false

    mounted () {
        this.load = true
        getList().then((res) => {
            this.list = res.data.data
        }).finally(() => {
            this.load = false
        })
    }
}