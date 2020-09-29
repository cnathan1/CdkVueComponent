import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import Addition from '@/components/Addition.vue'

const localVue = createLocalVue();

describe('Counter and Addition Component Tests', () => {
  it('Render Counter Component', () => {
    const wrapper = shallowMount(Counter, { localVue })
    expect(wrapper.find('#count').attributes().placeholder).toMatch('edit me')
  })
  it('Render Addition Component', () => {
    const wrapper = shallowMount(Addition, { localVue })
    expect(wrapper.find('#addition').attributes().placeholder).toMatch('edit me')
  })
})
