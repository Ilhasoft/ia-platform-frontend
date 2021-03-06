import { shallowMount, createLocalVue } from '@vue/test-utils';
import GraphicsResult from '@/components/repository/repository-evaluate/results/GraphicsResult';
import Vuex from 'vuex';
import Buefy from 'buefy';

const localVue = createLocalVue();
localVue.use(Buefy);

localVue.use(Vuex);

describe('GraphicsResult.vue', () => {
  let wrapper;
  let state;
  let store;

  beforeEach(() => {
    state = {
      version: 3,
    };

    store = new Vuex.Store({
      modules: {
        Repository: {
          state,
        },
      },
    });

    wrapper = shallowMount(GraphicsResult, {
      localVue,
      store,
      mocks: {
        $t: () => 'some specific text',
        $tc: () => 'some specific text',
      },
      propsData: {
        chartData: {
          id: 2,
          confidence_chart: 'https://s3.amazonaws.com/bothub-sample/hist.png',
          matrix_chart: 'https://s3.amazonaws.com/bothub-sample/confmat.png',
          created_at: '2019-05-06T13:04:15.850503Z',
          entities_list: [
            {
              entity: 'cuisine',
              score: {
                accuracy: null,
                f1_score: '0.95',
                precision: '1.00',
                recall: '0.90',
                support: 10,
              },
            },
          ],
          intents_list: [
            {
              intent: 'greet',
              score: {
                accuracy: null,
                f1_score: '1.00',
                precision: '1.00',
                recall: '1.00',
                support: 11,
              },
            },
          ],
          entity_results: {
            accuracy: '0.98',
            f1_score: '0.98',
            precision: '0.98',
          },
          intent_results: {
            accuracy: '0.98',
            f1_score: '0.98',
            precision: '0.98',
          },
          log: [
            {
              intent: 'greet',
              intent_prediction: {
                confidence: 0.9263743763408538,
                name: 'greet',
              },
              status: 'success',
              text: 'hey',
            },
          ],
        },
      },
    });
  });

  describe('renders', () => {
    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('re-renders after charts data changes', () => {
      wrapper.setProps({
        chartData: {
          entities_list: [
            {
              entity: 'cuisine',
              score: {
                accuracy: null,
                f1_score: '0.95',
                precision: '1.00',
                recall: '0.90',
                support: 10,
              },
            },
          ],
          intents_list: [
            {
              intent: 'greet',
              score: {
                accuracy: null,
                f1_score: '1.00',
                precision: '1.00',
                recall: '1.00',
                support: 11,
              },
            },
          ],
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mocks methods', () => {
    it('re-renders intents charts when the chartData prop changes', () => {
      wrapper.setProps({
        chartData: {
          intents_list: [
            {
              intent: 'greet',
              score: {
                accuracy: null,
                f1_score: '1.00',
                precision: '1.00',
                recall: '1.00',
                support: 11,
              },
            },
          ],
          entities_list: [
            {
              entity: 'cuisine',
              score: {
                accuracy: null,
                f1_score: '0.95',
                precision: '1.00',
                recall: '0.90',
                support: 10,
              },
            },
          ],
        },
      });
    });

    it('re-renders entities chart when the chartData prop changes', () => {
      wrapper.setProps({
        chartData: {
          intents_list: [
            {
              intent: 'greet',
              score: {
                accuracy: null,
                f1_score: '1.00',
                precision: '1.00',
                recall: '1.00',
                support: 11,
              },
            },
          ],
          entities_list: [
            {
              entity: 'cuisine',
              score: {
                accuracy: null,
                f1_score: '0.95',
                precision: '1.00',
                recall: '0.90',
                support: 10,
              },
            },
          ],
        },
      });
    });
  });
});
