import { shallowMount, createLocalVue } from '@vue/test-utils';
import SafariAlert from '@/views/SafariAlert';
import router from '@/router';


const localVue = createLocalVue();

describe('SafariAlert.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SafariAlert, { localVue, router });
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
