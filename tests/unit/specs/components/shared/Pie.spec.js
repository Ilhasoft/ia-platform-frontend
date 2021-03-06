import { shallowMount, createLocalVue } from '@vue/test-utils';
import applyFilters from '@/utils/filters';
import Pie from '@/components/shared/Pie';
import Buefy from 'buefy';

const localVue = createLocalVue();
localVue.use(Buefy);
applyFilters(localVue);

describe('Pie.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Pie, {
      localVue,
      mocks: {
        $t: () => 'some specific text',
      },
      propsData: {
        percent: 10,
      },
    });
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
