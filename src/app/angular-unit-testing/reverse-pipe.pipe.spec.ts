import { TestBed } from '@angular/core/testing';
import { ReversePipePipe } from './reverse-pipe.pipe';


describe('ReversePipePipe', () => {

  let pipe: ReversePipePipe;


// TestBed-  Using testbid we can inject components, services etc
// Before each call every test case.
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[
        ReversePipePipe
      ]
    })

    pipe = TestBed.inject(ReversePipePipe);
    
  });

// A - arrange
// A - act -  create instance
// A - Assert - call expect method

  it('create an instance', () => {
    expect(pipe).toBeTruthy();

    // toBeTruthy = particular instance is initialized
  });

  it('should reverse the string',() =>{

    // arrange
      const data = "hello";
     // act
     const result = pipe.transform(data);
     // assert 
     expect(result).toBe('olleh');

  });

  it('it should handle null, blank and undefined cases',() =>{
    const data = null || undefined || '';

    const result = pipe.transform(data);

    expect(result).toBe('');

  });
});
