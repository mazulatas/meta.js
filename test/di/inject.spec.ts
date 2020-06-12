import { Bean } from '../../src/decorators'
import { Inject, Injector } from '../../src/di'

describe('Inject', () => {
  it('should inject instance in class', () => {
    class InjectClass {}

    Injector.set({ provide: InjectClass })

    @Bean()
    class TestClass {
      @Inject(TestClass) public testField?: InjectClass
    }

    const testInstance = new TestClass()
    // expect(testInstance.testField).toBeInstanceOf(InjectClass)
  })
})
